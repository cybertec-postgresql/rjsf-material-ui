import React from "react";

import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

import { WidgetProps } from 'react-jsonschema-form';

function selectValue(value: any, selected: any, all: any) {
  const at = all.indexOf(value);
  const updated = selected.slice(0, at).concat(value, selected.slice(at));
  // As inserting values at predefined index positions doesn't work with empty
  // arrays, we need to reorder the updated selection to match the initial order
  return updated.sort((a: any, b: any) => all.indexOf(a) > all.indexOf(b));
}

function deselectValue(value: any, selected: any) {
  return selected.filter((v: any) => v !== value);
}

function CheckboxesWidget(props: WidgetProps) {
  const {
    schema,
    label,
    id,
    disabled,
    options,
    value,
    autofocus,
    readonly,
    onChange,
    required
  } = props;
  const { enumOptions, enumDisabled, inline } = options;
  return (
    <FormControl
      fullWidth={true}
      required={required}
      >
      <FormLabel htmlFor={id}>{label || schema.title}</FormLabel>
      <FormGroup>
        {(enumOptions as any).map((option: any, index: number) => {
          const checked = value.indexOf(option.value) !== -1;
          const itemDisabled =
            enumDisabled && (enumDisabled as any).indexOf(option.value) != -1;
          const checkbox = (
            <Checkbox
              id={`${id}_${index}`}
              checked={checked}
              disabled={disabled || itemDisabled || readonly}
              autoFocus={autofocus && index === 0}
              onChange={event => {
                const all = (enumOptions as any).map(({ value }: any) => value);
                if (event.target.checked) {
                  onChange(selectValue(option.value, value, all));
                } else {
                  onChange(deselectValue(option.value, value));
                }
              }}
            />
          );
          return inline ? (
            <FormControlLabel
              control={checkbox}
              key={index}
              label={option.label}
            />
          ) : (
            <FormControlLabel
              control={checkbox}
              key={index}
              label={option.label}
            />
          );
        })}
      </FormGroup>
    </FormControl>
  );
}

export default CheckboxesWidget;