import React from "react";

import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";

import { WidgetProps } from 'react-jsonschema-form';

function RadioWidget(props: WidgetProps) {
  const {
    id,
    schema,
    options,
    value,
    required,
    disabled,
    readonly,
    label,
    onChange,
  } = props;
  // Generating a unique field name to identify this set of radio buttons
  const name = Math.random().toString();
  const { enumOptions, enumDisabled } = options;
  const _onChange = ({}: any, value: any) =>
    onChange(schema.type == "boolean" ? value !== "false" : value);
  // checked={checked} has been moved above name={name}, As mentioned in #349;
  // this is a temporary fix for radio button rendering bug in React, facebook/react#7630.
  const row = options ? options.inline : false;
  return (
    <FormControl
      fullWidth={true}
      required={required}
      style={{ paddingLeft: "16px" }}>
      <FormLabel htmlFor={id}>{label || schema.title}</FormLabel>
      <RadioGroup
        name={name}
        className="field-radio-group"
        value={`${value}`}
        onChange={_onChange}
        row={row as boolean}>
        {(enumOptions as any).map((option: any, i: number) => {
          const itemDisabled =
            enumDisabled && (enumDisabled as any).indexOf(option.value) != -1;
          const radio = (
            <FormControlLabel
              control={<Radio color="primary" key={i} />}
              label={`${option.label}`}
              value={`${option.value}`}
              key={i}
              disabled={disabled || itemDisabled || readonly}
            />
          );
          return radio;
        })}
      </RadioGroup>
    </FormControl>
  );
}

export default RadioWidget;