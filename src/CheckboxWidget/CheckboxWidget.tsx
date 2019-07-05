import React from "react";

import Checkbox from "@material-ui/core/Checkbox";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";

import { WidgetProps } from 'react-jsonschema-form';

const CheckboxWidget = (props: WidgetProps) => {
  const {
    id,
    value,
    required,
    disabled,
    readonly,
    label,
    autofocus,
    onChange,
  } = props;

  return (
    <FormControl>
      <FormControlLabel
        control={
          <Checkbox
            id={id}
            checked={typeof value === "undefined" ? false : value}
            required={required}
            disabled={disabled || readonly}
            autoFocus={autofocus}
            onChange={event => onChange(event.target.checked)}
          />
        }
        label={label}
      />
    </FormControl>
  );
}

export default CheckboxWidget;