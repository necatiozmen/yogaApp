import React from 'react';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';
import CommunicationCall from 'material-ui/svg-icons/communication/call';
import CommunicationEmail from 'material-ui/svg-icons/communication/email';
import {indigo500} from 'material-ui/styles/colors';
import { Place  } from '@material-ui/icons';
import Chip from './profinfo.js'
function _arrayBufferToBase64(buffer) {
  var binary = '';
  var bytes = new Uint8Array(buffer);
  var len = bytes.byteLength;
  for (var i = 0; i < len; i++) {
    binary += String.fromCharCode(bytes[i]);
  }

  return window.btoa(binary);
}

const style = {
  height: 300,
  width: 600,
  margin: 50,
   borderRadius: "8px 8px 8px 70px",
   border: "2px solid #B2DFDB",
  display: 'inline-block',

};
const imgstyle = {

  float:'left',
  marginRight:10


}
const infostyle = {
float:'left',

}

const PaperExampleSimple = (props) => (

    <Paper style={style} zDepth={3} rounded={false} >
      <div  style={{
        margin:25}}>
        <Avatar style={{
          margin:20}}
         src={`data:image/png;base64,
            ${_arrayBufferToBase64(props.image.data.data)}`}
         size={200}
         style={imgstyle}
       />
      <Chip
      names = {props.names}
      surname = {props.surname}
      city = {props.city}
      image= {props.image}
      language ={props.language}
      certification={props.certification}
      specialities = {props.specialities}
      phone={props.phone}
      avaliabledate = {props.datapicker}
      experience ={props.experience}
      rate = {props.rate} />
      </div>
 </Paper>

);

export default PaperExampleSimple;
