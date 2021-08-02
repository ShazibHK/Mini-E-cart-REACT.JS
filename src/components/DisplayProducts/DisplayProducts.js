import React, { useState } from 'react';
import { Grid, CircularProgress,Typography,Button ,Card,Paper,CardMedia,CardContent } from '@material-ui/core';
import useStyles from './styles';
import useStyles2 from './styles2';
import products from "../../vegetables.json";
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useHistory } from 'react-router-dom';

const DisplayProducts = ({setCurrentId}) => {
 
  const classes = useStyles();
  const classes2 = useStyles2();
  
  const history = useHistory();

  const[items,setItems]=useState(products);

  const filterItem=(category)=>{
    const updatedItems = products.filter((curElement) =>{
        return curElement.category === category
    });
    setItems(updatedItems);
  } 

  const[itemsPurchased,setItemsPurchased]=useState('');
  
  const[userInput,setUserInput]=useState('');
  
  const[dialog,setDialog]=useState('');

  const handleChange = (e) =>{
    setUserInput(e.currentTarget.value)
  }

  const [open, setOpen] = React.useState(false);
  
  const handleClickOpen = () => {
  setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  
  return (
    <div>
      <Grid container className={classes.align} >
        
        <Grid xs={5} sm={3}  md={2} lg={1}> 
          <Button className={classes.space}  variant="outlined" color="primary"  onClick={()=> {setItems(products)}}>
            All  
          </Button>
        </Grid>
        
        <Grid xs={5} sm={3}  md={2} lg={1}> 
          <Button className={classes.space} variant="outlined" color="primary" onClick={()=> filterItem('Fruits')}>
            Fruits
          </Button>
        </Grid>

        <Grid xs={5} sm={3} md={2} lg={1}> 
          <Button className={classes.space}  variant="outlined" color="primary" onClick={()=> filterItem('Vegetables')}>
            Vegetables
          </Button>
        </Grid>

        <Grid xs={5} sm={3} md={2} lg={1}> 
          <Button className={classes.space}  variant="outlined" color="secondary" onClick={()=> history.push('/purchase')}>
            Cart
          </Button>
        </Grid>
      
      </Grid>

      { !items.length ? <CircularProgress /> : (
        
        <Grid className={classes.mainContainer} container alignItems="stretch" spacing={2}>
          {items.map((product) => (
             <>
                <Grid key={items._id} item xs={12} sm={6} md={4} lg={3}> 
                    
                    <Card className={classes2.card}>
                      <Paper className={classes2.paper} elevation={3} square variant="outlined"> 
                        <CardMedia className={classes2.media} image={product.image} title={product.name}></CardMedia>
                      </Paper>
                      <CardContent>

                        <Grid container spacing={1}>
                          <Grid item  sm={11}>
                            <Typography variant="body1" align="left"> <b>{product.name}</b></Typography>
                          </Grid>
                          <Grid item  sm={1}>
                            <img className={classes2.img} src="data:image/png;base64,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" />
                          </Grid>
                          <Grid item sm={12}>
                            <Typography fontSize="2" variant="caption" style={{float:'left',color:'#9e9e9e',fontFamily: 'Raleway',}}>{product.vendor}</Typography>
                          </Grid>
                          <Grid item sm={12}>
                            <Typography variant="body2" align="left">₹{product.price } <del style={{color:'red'}}><i > ₹{product.price}</i></del></Typography>
                          </Grid>
                        </Grid>
                        <Grid container spacing={1}>
                          <Grid item sm={1}>
                            <img  className={classes2.img} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmwttvqHUWojNYd_S_TcCzCbodjHBgeyU8lw&usqp=CAU"/>
                          </Grid>
                          <Grid item sm={11}>
                            <Typography fontSize="2" variant="caption" align="left"> Delivery : Today 9:00AM-11:00AM</Typography>
                          </Grid>
                          {
                            product.available > 0 ?
                            
                            <Grid item sm={12}>
                            <Typography fontSize="2" variant="caption" align="left">Available: {product.available} pcs</Typography>
                            <input id="input" hint="Qty" onChange={handleChange} style={{margin:"10px",height:"25px",width:"50px",textAlign:"center",outline:"none"}} placeholder="Qty"></input>
                             
                            <Button style={{backgroundColor:"#ffc400",color:"#616161"}} color="green" className={classes2.space}  variant="outlined" size="small" color="primary"  
                              onClick={
                                ()=>{
                                  let copy=[...itemsPurchased];
                                  copy=[...copy,{ 
                                  "name":product.name, 
                                  "id":itemsPurchased.length+1, 
                                  "price":product.price * userInput , 
                                  "quantity":userInput, 
                                  "vendor":product.vendor, 
                                  "category":product.category 
                                },];

                                setItemsPurchased(copy);
                                
                                localStorage.setItem('customerPurchase',JSON.stringify(copy))
                                console.log(JSON.parse(localStorage.getItem('customerPurchase')))
                                
                                setDialog(copy[copy.length-1]);
                                
                                handleClickOpen();
                                }
                              }
                            > 
                              Add <ShoppingBasketIcon style={{paddingLeft:'2px',width:"20px",height:"15px",}}/>
                            </Button>
                            </Grid>
                            
                            


                          : 
                            <Grid item sm={12}>
                            <Typography fontSize="2" variant="caption" align="left"><p style={{color:'red'}}>Currently out of stock</p></Typography>
                            
                            </Grid>
                          }
                          <Grid item xl="12" sm={2} md={2}>
                            </Grid>
                          <Grid item xs="6" sm={2}  md={5}>
                          
                            
                            <Dialog
                              open={open}
                              keepMounted
                              onClose={handleClose}
                              aria-labelledby="alert-dialog-slide-title"
                              aria-describedby="alert-dialog-slide-description"
                            >
                              <DialogTitle id="alert-dialog-slide-title">
                                
                              </DialogTitle>
                              <DialogContent>
                              <img   style={{width:'100%',height:'80'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtigzLF7mnZc0EV-e6Nc-jR6KJoy6Zslb6tg&usqp=CAU"/>
                                 
                              <DialogContentText id="alert-dialog-slide-description">
                                </DialogContentText>
                                <DialogContentText id="alert-dialog-slide-description" style={{color:'##424242',fontFamily: 'serif',}}>
                                 <b>Product:{dialog.name}</b> 
                                
                                </DialogContentText> 
                                <DialogContentText id="alert-dialog-slide-description" style={{color:'#9e9e9e',fontFamily: 'Raleway',}}>
                                  Vendor:{dialog.vendor} 
                                </DialogContentText>
                                <DialogContentText id="alert-dialog-slide-description" style={{color:'#9e9e9e',fontFamily: 'Raleway',}}>
                                  Quantity:{userInput}
                                </DialogContentText>
                                <DialogContentText id="alert-dialog-slide-description" style={{color:'#9e9e9e',fontFamily: 'Raleway'}}>
                                  Price:{dialog.price} 
                                </DialogContentText>
                                <DialogContentText id="alert-dialog-slide-description" style={{color:'#9e9e9e',fontFamily: 'Raleway'}}>
                                  < >Shipping Address:Green Land Apartment,Bardez-Goa,India </>
                                </DialogContentText>
                                <DialogContentText id="alert-dialog-slide-description" style={{color:'#9e9e9e',fontFamily: 'Raleway'}}>
                                 Expected Deleivery: Wedenesday 2.00pm,4 July 2021
                                </DialogContentText>
                              </DialogContent>
                              <DialogActions>
                                <Button onClick={handleClose} color="primary">
                                  Close
                                </Button>
                              </DialogActions>
                            </Dialog>
                          </Grid>
                        </Grid>
                      </CardContent> 
                    </Card>
                  </Grid>
                </>     
              ))}
          </Grid>
        )}
    </div>
  );
};

export default DisplayProducts;
