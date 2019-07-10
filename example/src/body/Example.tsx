import React from 'react';

import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { createStyles, withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import styles from './example-styles';
import Source from './Source';

import Form from '../../../src';

const formStyles = theme =>
  createStyles({
    field: {
      paddingLeft: theme.spacing.unit * 4,
    },
    formButtons: {
      order: 2,
    },
    root: {
      display: 'flex',
      padding: theme.spacing.unit,
    },
  });

class Example extends React.Component<any, any> {
  state = {
    ...this.props.data,
  };

  componentWillReceiveProps = ({ data }) => {
    this.setState({
      ...data,
    });
  };

  onChange = type => value => {
    this.setState({
      [type]: value,
    });
  };

  onFormChanged = ({ formData }) => {
    this.setState({ formData });
  };

  onSubmit = value => {
    console.log('onSubmit:', value); // eslint-disable-line no-console
  };

  onCancel = () => {
    const { data } = this.props;
    this.setState({
      ...data,
    });
  };

  render() {
    const { data, classes } = this.props;
    const { title } = data;
    const { schema, uiSchema, formData } = this.state;
    return (
      <Paper className={classes.root}>
        <Typography component="h4" variant="h4">
          {title}
        </Typography>
        <br />
        <div className={classes.ctr}>
          <div className={classes.sourceCtr}>
            <div>
              <Source
                title={'JSONSchema'}
                source={schema}
                onChange={this.onChange('schema')}
              />
            </div>
            <div>
              <Source
                title={'uiSchema'}
                source={uiSchema}
                onChange={this.onChange('uiSchema')}
              />
              <Source
                title={'formData'}
                source={formData}
                onChange={this.onChange('formData')}
              />
            </div>
          </div>
          <div className={classes.display}>
            <Paper elevation={2}>
              <Box p={2}>
                <Form
                  schema={schema}
                  uiSchema={uiSchema}
                  formData={formData}
                  onSubmit={this.onSubmit}
                  onChange={this.onFormChanged}
                  //showErrorList={showErrorList}
                  //showHelperError={showHelperError}
                >
                  <Box mt={2}>
                    <Button
                      variant="contained"
                      color="default"
                      onClick={this.onCancel}
                    >
                      Cancel
                    </Button>
                    <Button variant="contained" color="primary" type="submit">
                      Submit
                    </Button>
                  </Box>
                </Form>
              </Box>
            </Paper>
          </div>
        </div>
      </Paper>
    );
  }
}

export default withStyles(styles)(Example);
