import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
    media:{
        height: 220,
    },
    border:{
        border: 'solid',
    },
    fullHeightCard:{
        height: '100%',
    },
    card:{
        display: 'flex',
        flexDirection:'column',
        justifyContent:'space-between',
        borderBottom:'7px solid white',
    },
    activeCard:{
        boxShadow:'0px 0px 30px white',
        transform:'scale(1.01)',
    },
    grid:{
        display: 'flex',    
    },
    details:{
        display:'flex',
        justifyContent: 'space-between',
        margin: '12px',
    },
    title:{
        padding:'0 10px',
    },
    cardActions:{
        padding:'0 10px 3px 10px',
        display:'flex',
        justifyContent:'space-between',
    },
    
    

});














