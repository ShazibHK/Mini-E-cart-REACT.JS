import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
  mainContainer: {
    borderRadius: 15,
    margin: ' 0',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: '10px 50px',
    backgroundImage: 'url(${background})'
  },

  options : {
    padding:'100',
  },

  space: {
    alignItems: 'left',
    margin: theme.spacing(1),
    width:'110px'
  },
  
  align:{
    marginLeft:'60px',
    float:'left'
  }

  
}));
