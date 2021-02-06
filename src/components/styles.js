
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(2),
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  fileInput: {
    width: '97%',
    margin: '10px 0',
  },
  buttonSubmit: {
    padding: '1%',
    paddingLeft:'2%',
    paddingRight:'2%',
    margin:'1%',
    borderWidth:1.5,
    fontWeight:600,
    fontSize:'105%',
    },
    btn2:{
      color:'white',
    }

}));
