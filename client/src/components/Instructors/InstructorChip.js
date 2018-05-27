
import React, { Component } from 'react';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';
import SvgIconRoom from 'material-ui/svg-icons/action/room';
import { LocalPhone, Email } from '@material-ui/icons';
import SvgIconBluron from 'material-ui/svg-icons/action/grade';
import Money from 'material-ui/svg-icons/action/payment';
import SvgIconAcc from 'material-ui/svg-icons/action/fingerprint';
import { teal50 } from 'material-ui/styles/colors';

const styles = {
  chip: {
    margin: 10,
  },
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
  },
};

class InstructorChip extends Component {
  render() {
    return (
      <div style={styles.wrapper}>
        <Chip
          backgroundColor={teal50
  }  style={styles.chip}
        >
          <Avatar color="#444" icon={<SvgIconAcc/>} />
          {this.props.names} {this.props.surname}
        </Chip>


        <Chip
          backgroundColor={teal50
  }  style={styles.chip}
        >
          <Avatar color="#444" icon={<SvgIconRoom />} />
          {this.props.city}
        </Chip>


        <Chip
          backgroundColor={teal50}
          style={styles.chip}
        >
          <Avatar color="#444" icon={<SvgIconBluron />} />
          {this.props.experience}
        </Chip>


        <Chip
          backgroundColor={teal50
  }  style={styles.chip}
        >
          <Avatar color="#444" icon={<LocalPhone/>} />
          {this.props.phone}
        </Chip>

        <Chip
          backgroundColor={teal50
  }  style={styles.chip}
        >
          <Avatar color="#444" icon={<Email/>} />
          {this.props.certification}
        </Chip>

        <Chip
          backgroundColor={teal50
  }  style={styles.chip}
        >
          <Avatar color="#444" icon={<Money/>} />
          ${this.props.rate} / hour
        </Chip>

        <Chip backgroundColor={teal50
} style={styles.chip}>
          <Avatar size={32}>pro</Avatar>
          {this.props.specialities.map((el, key, col) => col[key + 1] ? `${el}-` : `${el}`)}
        </Chip>

      </div>
    );
  }
}

export default InstructorChip;
