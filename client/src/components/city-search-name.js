import React from 'react';
import { connect } from 'react-redux';
import '../App.css';
import { Place, Spa,Comment} from '@material-ui/icons';
import Chip from 'material-ui/Chip';
import Avatar from 'material-ui/Avatar';
 // import Forum from 'material-ui/svg-icons/action/comment';

const styles = {
  chip: {
    margin: 30,
    backgroundColor:'#edf0f7'

  },
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent:'center',
  },
};
const Searchname = (props) => {
  return (
    <div style={styles.wrapper}>

      {props.studios.length > 0  ? <div style={styles.wrapper}>
        <Chip  style={styles.chip}>
          <Avatar backgroundColor="black" color="red" icon={<Place />} />
            City :  {props.studios[0].location.city}
        </Chip>
        <Chip style={styles.chip}>
          <Avatar backgroundColor="black" color="green" icon={<Spa />} />
             Total studios : {props.studios.length}
        </Chip>
        <Chip style={styles.chip}>
          <Avatar  backgroundColor="black" color="#FDD835" icon={<Comment />} />
             Total User Reviews : {props.studios.reduce((acc,el) =>
               {return acc + el.review_count;}, props.studios[0].review_count)}
        </Chip>
      </div> : ''}
    </div>

    );
};


const mapStateToProps = (state) => ({
    studios: state.studios,
    // Map your state to props
  });

export default connect(mapStateToProps, null)(Searchname);
