import {makeStyles} from '@material-ui/core/styles';

export default makeStyles(()=> ({
    appBar: {
        //borderRadius: 15,
        margin: 'none',
        display: 'flex',
        flexDirection: 'row',
        //justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
        width:'1515'
      },
      heading: {
        textDecoration:'none',
        fontSize: 'large',
        color: 'rgba(0,183,255, 1)',
        
      },
      
      image: {
        marginLeft: '15px',
      },
}));