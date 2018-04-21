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
    fetch('http://localhost:5000/profilecreate', {
        method: 'POST',
        body: JSON.stringify({
          name: fullName.name,
          surname: fullName.surname,
          city: fullName.city, }),
        headers: new Headers({
          'Content-Type': 'application/json',
        }),
      });
  };

  return (
    <form onSubmit={ handleSubmit(this.myfunc)}>
  <div className = "profilecreate">
    <Header />
    <Field name="name" component={TextField} hintText="name"/>
    <Field name="surname" component={TextField} hintText="surname"/>
    <Field name="city" component={TextField} hintText="city"/>
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
    const { name, surname, city } = selector(state, 'name', 'surname', 'city');
    return {
      fullName: { name, surname, city },
    };
  }
)(Profilecreate);

export default Profilecreate;
