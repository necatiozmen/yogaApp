import React from 'react';
import { Field, reduxForm, formValueSelector, change } from 'redux-form';
import { connect } from 'react-redux';
import '../App.css';
import Header from '../views/header';
import axios from 'axios';
import { RadioButton } from 'material-ui/RadioButton';
import {
  Checkbox,
  RadioButtonGroup,
  SelectField,
  TextField,
  Toggle,
  DatePicker
} from 'redux-form-material-ui';
import RaisedButton from 'material-ui/RaisedButton';
import MenuItem from 'material-ui/MenuItem';
import Snackbar from './snackbar';

class Profilecreate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      imageUrl: '',
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
  };

  handleChange = (e) => {
    const { fullName, dispatch } = this.props;
    const image = e.target.files[0];
    dispatch(change('profile', 'image', image));
    let imageUrl = '';
    const data = new FormData();
    data.append('file', fullName.image);
    data.append('upload_preset', 'vedyblru');
    axios({
      url: 'https://api.cloudinary.com/v1_1/dgj09jchq/upload',
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      data: data,
    })
    .then((res) => {
      console.log('RES FROM CLOUDINARY===>', res.data);
      imageUrl = res.data.url;
      this.setState({ imageUrl: imageUrl });
    })
    .catch((err) => {
      console.error(err);
    });
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
          imageUrl: this.state.imageUrl,
        }),
        headers: new Headers({
          'Content-Type': 'application/json',
        }),
      });
    this.setState({ open: true });
  };

  render() {
    const divstyle = {
      padding: 10,
    };
    const { handleSubmit, pristine, reset, submitting, rate, dispatch } = this.props;
    return (
<form onSubmit={ handleSubmit(this.myfunc)}>
  <Header />
    <div className = "profilecreate">
      <Field name="name" component={TextField} hintText="name" />
      <Field name="surname" component={TextField} hintText="surname" />
      <Field name="city" component={TextField} hintText="city"/>
      <Field name="certification" component={TextField} hintText="email"/>
      <Field name="language" component={TextField} hintText="language"/>
      <Field name="phone" component={TextField} hintText="phone"/>
      <Field name="rate" component={TextField} hintText="rate"/>
      <Field name="gender" component={TextField} hintText="gender"/>
      <Field name="datepicker" component={DatePicker}  format={null} hintText="avaliable dates"/>
      <Field name="specialities" component={SelectField} multiple={true} hintText="Specialities">
        <MenuItem value="Acro" primaryText="Acro"/>
        <MenuItem value="Hatha" primaryText="Hatha"/>
        <MenuItem value="Vinyasa" primaryText="Vinyasa"/>
        <MenuItem value="Kriya" primaryText="Kriya"/>
        <MenuItem value="Hot" primaryText="Hot"/>
        <MenuItem value="Yin" primaryText="Yin"/>
        <MenuItem value="Ashtanga" primaryText="Ashtanga"/>
        <MenuItem value="Kundalini" primaryText="Kundalini"/>
      </Field>
        <div style={divstyle}>
          Experience
          <Field name="experience" component={RadioButtonGroup} >
            <RadioButton value="0-2 years experience on yoga" label="0-2 year"/>
            <RadioButton value="2-5 years experince on yoga" label="2-5 year"/>
            <RadioButton value="5+ years experince on yoga" label="5+"/>
          </Field>
        </div>
      <RaisedButton type="submit" label="Sign Up" secondary={true}
        className = "profilecreatebutton" disabled={submitting}  />
        <RaisedButton labelStyle={{ height: '20px' }}
         containerElement='label'
         label='Choose Profile Picture'>
         <input type="file"
              onChange={ this.handleChange }
          />
      </RaisedButton>
      <Snackbar value={this.state.open} />
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
    const { name, surname, city, image, specialities, certification,
       language, experience, rate, imageUrl, datepicker, gender, phone, }
     = selector(state, 'name', 'surname', 'city', 'image', 'specialities', 'certification',
     'language', 'experience', 'rate', 'imageUrl', 'datepicker', 'gender', 'phone');
    return {
      fullName: { name, surname, city, image, specialities, certification,
        language, experience, rate, imageUrl, datepicker, gender, phone, },
    };
  }
)(Profilecreate);

export default Profilecreate;
