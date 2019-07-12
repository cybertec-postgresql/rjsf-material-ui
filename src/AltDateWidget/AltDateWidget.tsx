import React, { Component } from 'react';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import {
  parseDateString,
  toDateString,
  pad,
} from 'react-jsonschema-form/lib/utils';

function rangeOptions(start: any, stop: any) {
  let options = [];
  for (let i = start; i <= stop; i++) {
    options.push({ value: i, label: pad(i, 2) });
  }
  return options;
}

function readyForChange(state: any) {
  return Object.keys(state).every(key => state[key] !== -1);
}

function DateElement({
  type,
  range,
  value,
  select,
  rootId,
  disabled,
  readonly,
  autofocus,
  registry,
  onBlur,
}: any) {
  const id = rootId + '_' + type;
  const { SelectWidget } = registry.widgets;

  return (
    <SelectWidget
      schema={{ type: 'integer' }}
      id={id}
      className="form-control"
      label={type}
      options={{ enumOptions: rangeOptions(range[0], range[1]) }}
      placeholder={type}
      value={value}
      disabled={disabled}
      readonly={readonly}
      autofocus={autofocus}
      onChange={(value: any) => select(type, value)}
      onBlur={onBlur}
    />
  );
}

class AltDateWidget extends Component<any, any> {
  static defaultProps = {
    time: false,
    disabled: false,
    readonly: false,
    autofocus: false,
    options: {
      yearsRange: [1900, new Date().getFullYear() + 2],
    },
  };

  constructor(props: any) {
    super(props);

    this.state = parseDateString(props.value, props.time);
  }

  componentWillReceiveProps(nextProps: any) {
    this.setState(parseDateString(nextProps.value, nextProps.time));
  }

  onChange = (property: any, value: any) => {
    this.setState(
      { [property]: typeof value === 'undefined' ? -1 : value },
      () => {
        // Only propagate to parent state if we have a complete date{time}
        if (readyForChange(this.state)) {
          this.props.onChange(toDateString(this.state, this.props.time));
        }
      }
    );
  };

  setNow = (event: any) => {
    event.preventDefault();
    const { time, disabled, readonly, onChange } = this.props;
    if (disabled || readonly) {
      return;
    }
    const nowDateObj = parseDateString(new Date().toJSON(), time);
    this.setState(nowDateObj, () => onChange(toDateString(this.state, time)));
  };

  clear = (event: any) => {
    event.preventDefault();
    const { time, disabled, readonly, onChange } = this.props;
    if (disabled || readonly) {
      return;
    }
    this.setState(parseDateString('', time), () => onChange(undefined));
  };

  get dateElementProps() {
    const { time, options } = this.props;
    const { year, month, day, hour, minute, second } = this.state;
    const data = [
      {
        type: 'year',
        range: options.yearsRange,
        value: year,
      },
      { type: 'month', range: [1, 12], value: month },
      { type: 'day', range: [1, 31], value: day },
    ];
    if (time) {
      data.push(
        { type: 'hour', range: [0, 23], value: hour },
        { type: 'minute', range: [0, 59], value: minute },
        { type: 'second', range: [0, 59], value: second }
      );
    }
    return data;
  }

  render() {
    const {
      id,
      disabled,
      readonly,
      autofocus,
      registry,
      onBlur,
      options,
    } = this.props;
    return (
      <Grid container alignItems="center" spacing={8}>
        {this.dateElementProps.map((elemProps, i) => (
          <Grid item key={i}>
            <DateElement
              rootId={id}
              select={this.onChange}
              {...elemProps}
              disabled={disabled}
              readonly={readonly}
              registry={registry}
              onBlur={onBlur}
              autofocus={autofocus && i === 0}
            />
          </Grid>
        ))}
        {(options.hideNowButton !== 'undefined'
          ? !options.hideNowButton
          : true) && (
          <Grid item>
            <Button onClick={this.setNow} variant="outlined" size="small">
              Now
            </Button>
          </Grid>
        )}
        {(options.hideClearButton !== 'undefined'
          ? !options.hideClearButton
          : true) && (
          <Grid item>
            <Button onClick={this.clear} variant="outlined" size="small">
              Clear
            </Button>
          </Grid>
        )}
      </Grid>
    );
  }
}

export default AltDateWidget;
