import React from 'react';

import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';

import { WidgetProps } from 'react-jsonschema-form';

class SelectWidget extends React.Component<WidgetProps> {
  static defaultProps = {
    autofocus: false,
  };

  state = {
    labelWidth: 0,
  };

  InputLabelRef: any;

  componentDidMount() {
    this.setState({
      //labelWidth: ReactDOM.findDOMNode(this.InputLabelRef).offsetWidth,
    });
  }

  render() {
    const {
      schema,
      id,
      options,
      label,
      required,
      disabled,
      readonly,
      value,
      //multiple,
      autofocus,
    } = this.props;
    const { enumOptions, enumDisabled } = options;
    //const emptyValue = multiple ? [] : "";
    return (
      <FormControl
        fullWidth={true}
        //error={!!rawErrors}
        required={required}
        //className={`rjsf-select ` + classNames}
      >
        <InputLabel
          shrink
          htmlFor={id}
          ref={ref => {
            this.InputLabelRef = ref;
          }}
        >
          {label || schema.title}
        </InputLabel>
        <Select
          value={value}
          //multiple={typeof multiple === "undefined" ? false : multiple}
          //className={classes.selectEmpty}
          //value={typeof value === "undefined" ? emptyValue : value}
          required={required}
          disabled={disabled || readonly}
          autoFocus={autofocus}
        >
          {(enumOptions as any).map(({ value, label }: any, i: number) => {
            const disabled: any =
              enumDisabled && (enumDisabled as any).indexOf(value) != -1;
            return (
              <MenuItem key={i} value={value} disabled={disabled}>
                {label}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    );
  }
}

export default SelectWidget;
