import React from 'react';

import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';

import { WidgetProps } from 'react-jsonschema-form';

type CustomWidgetProps = WidgetProps & {
  options: any
};

const PasswordWidget = ({
  id,
  required,
  readonly,
  disabled,
  value,
  label,
  onFocus,
  onBlur,
  onChange,
  options,
  autofocus
}: CustomWidgetProps) => {
  const _onChange = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) =>
    onChange(value === '' ? options.emptyValue : value);
  const _onBlur = ({ target: { value } }: React.FocusEvent<HTMLInputElement>) =>
    onBlur(id, value);
  const _onFocus = ({
    target: { value },
  }: React.FocusEvent<HTMLInputElement>) => onFocus(id, value);

  return (
    <>
      <InputLabel>{label}</InputLabel>
      <Input
        autoFocus={autofocus}
        required={required}
        disabled={disabled || readonly}
        type="password"
        value={value}
        onFocus={_onFocus}
        onBlur={_onBlur}
        onChange={_onChange}
      />
    </>
  );
};

export default PasswordWidget;
