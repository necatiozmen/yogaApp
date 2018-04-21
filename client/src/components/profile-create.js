import React from 'react';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import { connect } from 'react-redux';
import '../App.css';
import Header from '../views/header';
import {
  Checkbox,
  RadioButtonGroup,
  SelectField,
  TextField,
  Toggle,
  DatePicker
} from 'redux-form-material-ui';

import RaisedButton from 'material-ui/RaisedButton';
let Profilecreate = props => {

  const { handleSubmit, pristine, fullName, reset, submitting, rate } = props;

  this.handleSubmit = (e) => {
    e.preventDefault();
  };

  this.myfunc = () => {
      console.log(fullName.name);

  }

  return (
    <form onSubmit={ handleSubmit(this.myfunc)}>
  <div className = "profilecreate">
    <Header />
    <Field name="name" component={TextField} hintText="name"/>
    <Field name="surname" component={TextField} hintText="surname"/>
    <Field name="age" component={TextField} hintText="Age"/>
    <RaisedButton type="submit" label="Secondary" secondary={true}
      className = "profilecreatebutton" disabled={submitting}  />
  </div>
</form>
  );
};

Profilecreate = reduxForm({
  form: 'profile',
})(Profilecreate);

const selector = formValueSelector('profile');
Profilecreate = connect(
  state => {
    const { name, surname } = selector(state, 'name', 'surname');
    return {
      fullName: { name, surname },
    };
  }
)(Profilecreate);


export default Profilecreate;
