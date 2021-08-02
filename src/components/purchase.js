import React, {useState} from 'react';
import {Typography,Grid,Button } from '@material-ui/core';
import useStyles from './DisplayProducts/styles.js';
import { useHistory } from 'react-router-dom';
const Purchase=()=>{
    const classes = useStyles();
    
  const history = useHistory();
    return(
        <>
            <Grid xs={5} sm={3} md={2} lg={1}> 
          <Button className={classes.space}  variant="outlined" color="secondary" onClick={()=> history.push('/')}>
            Home
            
          </Button>
        </Grid>
            {
                JSON.parse(localStorage.getItem('customerPurchase')).map(
                    (p,index)=>(
                        <div style={{backgroundColor:'#fce4ec',width:'50%',margin:'0 auto',paddding:'20'}}>
                            <img   style={{width:'200',height:'80'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaF-lVQkSRJp7UzEGllmsfWpfQuFtdwVGQSw&usqp=CAU"/>
                         <br></br>
                        <Typography variant="body" style={{color:'#9e9e9e',fontFamily: 'Raleway',align:'left'}}>Product:{p.name}</Typography>
                        <br></br>
                        <Typography variant="body" style={{color:'#9e9e9e',fontFamily: 'Raleway',}}>Price:{p.price}</Typography>
                        <br></br>
                        <Typography variant="body" style={{color:'#9e9e9e',fontFamily: 'Raleway',}}>Quantity:{p.quantity}</Typography>
                        <br></br>
                        <Typography variant="body" style={{color:'#9e9e9e',fontFamily: 'Raleway',}}>Expected Deleivery: Wedenesday 2.00pm,4 July 2021</Typography>
                        <br></br>
                     </div>  
                          
                    )
                )

                
            }<br></br>
        </>
    );
}
export default Purchase;