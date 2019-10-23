import React from 'react';

import { AddButtonProps } from 'react-jsonschema-form';

import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

// TODO: Add label property on type definition
const AddButton: React.FC<AddButtonProps & { label?: string }> = props => (
  <Button {...props} color="secondary">
    <AddIcon /> {props.label || 'Add Item'}
  </Button>
);

export default AddButton;
