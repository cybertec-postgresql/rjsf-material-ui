import React from 'react';

import Slider from '@material-ui/core/Slider';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import { rangeSpec } from 'react-jsonschema-form/lib/utils';
import { WidgetProps } from 'react-jsonschema-form';

function RangeWidget(props: WidgetProps) {
  const {
    value,
    //readonly,
    //disabled,
    //autofocus,
    //onBlur,
    //onFocus,
    options,
    schema,
    //formContext,
    //registry,
    //rawErrors,
    label,
    id,
  } = props;

  let sliderProps = { value, label, id, ...rangeSpec(schema) };

  const _onChange = ({}, value: any) => {
    return props.onChange(value === '' ? options.emptyValue : value);
  };
  return (
    <Grid container alignItems="flex-end">
      <Grid item xs>
        <Typography id="discrete-slider-custom" gutterBottom={true}>
          {label}
        </Typography>
        <Slider {...sliderProps} onChange={_onChange} />
      </Grid>
    </Grid>
  );
}

export default RangeWidget;
