import React from 'react';

import { FieldProps } from 'react-jsonschema-form';

import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';

const TitleField = ({ title }: FieldProps) => (
  <>
    <Typography variant="h5">
      {title}
    </Typography>
    <Divider />
  </>
);

export default TitleField;
