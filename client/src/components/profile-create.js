import React from 'react';
import { Field, reduxForm, formValueSelector, change } from 'redux-form';
import { connect } from 'react-redux';
import '../App.css';
import Header from '../views/header';
import { RadioButton } from 'material-ui/RadioButton';
import {
  Checkbox,
  RadioButtonGroup,
  SelectField,
  TextField,
  Toggle,
  DatePicker
} from 'redux-form-material-ui';
import axios from 'axios';

import RaisedButton from 'material-ui/RaisedButton';
import MenuItem from 'material-ui/MenuItem';

class Profilecreate extends React.Component {

  handleSubmit = (e) => {
    e.preventDefault();
  };

  myfunc = () => {
    const { fullName } = this.props;
    const id = Math.random();
    fetch('http://localhost:5000/profilecreate', {
        method: 'POST',
        body: JSON.stringify({
          name: fullName.name,
          surname: fullName.surname,
          city: fullName.city,
          id: id,
          language: fullName.language,
          certification: fullName.certification,
          gender: fullName.gender,
          specialities: fullName.specialities,
          phone: fullName.phone,
          datapicker: fullName.datepicker,
          experience: fullName.experience,
          rate: fullName.rate,
        }),
        headers: new Headers({
          'Content-Type': 'application/json',
        }),
      }).then(() => {
        const data = new FormData();
        data.append('file', fullName.image);
        axios.post(`http://localhost:5000/test?id=${id}`, data).then((response) => {
          console.log(response); // do something with the response
        });
      });
  };

  render() {
    const { handleSubmit, pristine, reset, submitting, rate, dispatch } = this.props;
    return (
<form onSubmit={ handleSubmit(this.myfunc)}>
  <Header />
    <div className = "profilecreate">
      <Field name="name" component={TextField} hintText="name" />
      <Field name="surname" component={TextField} hintText="surname" />
      <Field name="city" component={TextField} hintText="city"/>
      <Field name="certification" component={TextField} hintText="certification"/>
      <Field name="language" component={TextField} hintText="language"/>
      <Field name="phone" component={TextField} hintText="phone"/>
      <Field name="experience" component={RadioButtonGroup} >
         <RadioButton value="0-2 years experience on yoga" label="0-2 year"/>
         <RadioButton value="2-5 years experince on yoga" label="2-5 year"/>
         <RadioButton value="5+ years experince on yoga" label="5+"/>
       </Field>
      <Field name="rate" component={TextField} hintText="rate"/>
      <Field name="gender" component={TextField} hintText="gender"/>
      <Field name="datepicker" component={DatePicker}  format={null} hintText="avaliable dates"/>
      <Field name="specialities" component={SelectField} multiple={true} hintText="Specialities">
      <MenuItem value="acro" primaryText="Acro"/>
          <MenuItem value="hatha" primaryText="Hatha"/>
          <MenuItem value="vinyasa" primaryText="Vinyasa"/>
          <MenuItem value="kriya" primaryText="Kriya"/>
          <MenuItem value="hot" primaryText="Hot"/>
          <MenuItem value="yin" primaryText="Yin"/>
        </Field>
      <RaisedButton type="submit" label="Secondary" secondary={true}
        className = "profilecreatebutton" disabled={submitting}  />
        <RaisedButton
       containerElement='label'
       label='My Label'>
       <input type="file" onChange={(e) => {
        const image = e.target.files[0];
        dispatch(change('profile', 'image', image));
      }} />

    </RaisedButton>
    </div>
  </form>
    );
  }

}

Profilecreate = reduxForm({
  form: 'profile',
})(Profilecreate);

const selector = formValueSelector('profile');
Profilecreate = connect(
  state => {
    const { name, surname, city, image, specialities, certification, language, experience, rate, datepicker, gender,phone}
     = selector(state, 'name', 'surname', 'city', 'image','specialities', 'certification', 'language', 'experience', 'rate', 'datepicker', 'gender','phone');
    return {
      fullName: { name, surname, city, image, specialities, certification, language, experience, rate, datepicker, gender,phone},
    };
  }
)(Profilecreate);

export default Profilecreate;
