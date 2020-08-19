import { makeStyles } from '@material-ui/core/styles';
import transitions from '@material-ui/core/styles/transitions';

export default makeStyles({
    container:{
        padding: '0 5%',
        width: '100%',
        margin: 0,

    },
    container2:{
        padding: '0 5%',
        display:'flex',
        width: '100%',
        justifyContent:'space-around',
    },
    currentDay:{
        fontSize:'2rem',
        color:'#fff',
        margin:0,
        textShadow:'5px 5px 10px black',
        display:'flex',
        justifyContent:'center',
        padding:'5px',
        paddingDown:'20px',
    },
    card:{
        color:'white',
        backgroundColor:'rgb(9, 9, 49)',
        borderRadius:'10px',
        boxShadow:'2px 2px 20px blue',
        height:'20rem',
        width:'100%',
        padding:'10%',
        display:'flex',
        justifyContent:'space-between',
        flexDirection:'column'
    },
    card2:{
        color:'white',
        backgroundColor:'rgb(9, 9, 49)',
        borderRadius:'10px',
        boxShadow:'2px 2px 20px rgb(4, 191, 248)',
        height:'3rem',
        width:'100%',
        paddingRight:'2rem',
        paddingBottom:'2rem',
    },
    title:{
        top:0,
        display:'flex',
        justifyContent:'center',
        fontFamily:'Alata',
        textShadow:'2px 2px 20px blue',
    },
    title2:{
        display:'flex',
        fontFamily:'Alata',
        fontSize:'1rem',
        padding:'10px',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
    },
    info:{
        fontSize:'1rem',
        display:'flex',
        justifyContent:'center',
        textAlign:'center',
        textShadow:'2px 2px 10px black',
    },
    text:{
        fontSize:'1rem',
        justifyContent:'center',
        textAlign:'center',
        textShadow:'2px 2px 10px black',
    }
   
        
    
});