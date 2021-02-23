import React, { useState, useEffect } from 'react'
import styles from './newrenovationtab.module.css'
import Header from 'components/header2/Header'
import Footer from 'components/footer/Footer'
import { createUseStyles, useTheme } from 'react-jss';
import { SidebarComponent, SidebarContext } from 'components/sidebar';
import { makeStyles } from "@material-ui/core/styles";
import {Form, Col} from 'react-bootstrap';
import FormControl from "@material-ui/core/FormControl";
import { Grid } from "@material-ui/core"
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';



const useStylesOne = makeStyles((theme) => ({
    quantityRoot: {
      color: "#ffffff",
      backgroundColor: "rgba(128, 0, 128, 0.1)",
      paddingTop: "4px",
    //   opacity: 0.6,
      borderRadius: "2px rgba(128, 0, 128, 0.1)",
      marginLeft : "15px",
      "&:hover": {
        paddingTop: "4px",
        backgroundColor: "#e5e5e5",
        borderRadius: "2px",
        opacity: 1
      },
      "&:focus-within": {
        paddingTop: "4px",
        backgroundColor: "#ffffff",
        borderRadius: "5px",
        opacity: 1
      },
      "& .MuiOutlinedInput-notchedOutline": {
        paddingTop: "4px",
        border: "1px solid #484850"
      },
      "&:hover .MuiOutlinedInput-notchedOutline": {
        border: "1px solid #484850"
      },
      "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
        paddingTop: "4px",
        border: "1px solid #484850",
        borderRadius: "5px",
        outline: "none"
      },
      "& .Mui-disabled": {
        color: "#FFFFFF",
        opacity: 0.6
      },
      "& .Mui-disabled .MuiOutlinedInput-notchedOutline": {
        border: "1px solid #484850"
      }
    },
    selectRoot: {
      color: "#4B176A",
      backgroundColor: "#ffffff"
    },
    icon : {
      color: "#4B176A"
    },
    selectPaper: {
      backgroundColor: "#1E1E24",
      border: "1px solid #484850",
      borderRadius: "5px",
      paddingTop: "4px",
      color: "#FFFFFF",
      "& li:hover": {
        backgroundColor: "#4B176A"
      }
    }
}));

const useStyles = createUseStyles({
    input: {
        backgroundColor:"rgba(128, 0, 128, 0.1)",
        borderRadius: "15px",
        width: "80%",
        height:"57px",
        marginBottom:"15px"
    },

    inputtotal : {
        backgroundColor:"#e5e5e5",
        borderRadius: "15px",
        width: "80%",
        height:"57px",
        marginBottom:"15px"
    },

    inputtwo:{
        backgroundColor:"rgba(128, 0, 128, 0.1)",
        borderRadius: "15px",
        width: "60%",
        height:"57px",
        marginBottom:"15px"
    },
    margins:{
        marginTop:"10px",
        marginLeft: "15px"
    },
    inputone: {
        height: "45px",
        width: "55px",
        borderRadius: 4,
        position: 'relative',
        backgroundColor: "rgba(128, 0, 128, 0.1)",
        border: '1px solid #ced4da',
        fontSize: 16,
        marginLeft:"35%",
        // padding: '10px 26px 10px 10px',
        // transition: theme.transitions.create(['border-color', 'box-shadow']),
        // Use the system font instead of the default Roboto font.
        fontFamily: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
        ].join(','),
        '&:focus': {
          borderRadius: 4,
          borderColor: '#80bdff',
        //   // boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
        },
      },

      "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
        border: "2px solid #484850",
        borderRadius: "5px 5px 5px 5px"
      },
});



function Financing (){

    const [status, setStatus] = useState('yes');
    
    const [renoTotal, setrenoTotal] = useState()
    const [renoProp, setRenoProp] = useState({
        noOfBeds: "",
        noOfBaths: "",
        sqFt: "",
        planningCost: "",
        ConsultingCost: "",
        exteriorCost: "",
        roofCost: "",
        waterCost: "",
        sewerCost: "",
        septicCost: "",
        electricCost: "",
        plumbingCost: "",
        interiorCost: "",   
        windowsCost: "",
        kitchenCost: "",
        bathsCost: "",
        lightingCost: "",
        miscelaneousCost: ""});

    const otherWay = {height:"100vh"}
    // const styleOther = {position: "fixed"}
    const theme = useTheme();
    const classes = useStyles({ theme });
    const classesOne = useStylesOne();

    const handleChange = (event) => {
      setStatus(event.target.value);
    };

    useEffect(() => {
        function sum( obj ) {
            var sum = 0 ;
            for(var el in obj) {
            //   if(obj.hasOwnProperty(el)) {
              // console.log(obj[el])
                sum += obj[el]==""?0:parseFloat(obj[el]);
            //   }
            }
            return sum;
          }

          var summed = sum(renoProp);
          setrenoTotal(summed)


        //   console.log( "sum: "+summed );
          
        // let arr=Object.keys(renoProp);
        // console.log(renoProp.ConsultingCost)
        // let sum="0";
        // arr.map(element=>{
        //     sum=renoProp.element+sum;  
        //     console.log("Elwmwnt",element)
        
        // })
        // console.log("Sum",sum)
        
        // setrenoTotal(noOfBaths + sqFt)
        
      }, [renoProp]);

    //   useEffect(()=> {
    //     console.log(renoTotal);
    //   },[renoTotal])


        return (
            <Grid container xl={12} lg={12} md={12} sm={12} xs={12}   direction="column"  justify="space-around"  style={{backgroundColor:"#e5e5e5"}}>
                <Grid item>
                    <Header />
                </Grid>

                <Grid container xl={12} lg={12} md={12} sm={12} xs={12} spacing={3} direction="column"  justify="space-around" alignItems="center" style={{backgroundColor:"#e5e5e5"}}>
                    <Grid item container xl={11} lg={11} md={10} sm={12} xs={12}  direction="row" justify="flex-start" alignItems="stretch" style={{backgroundColor:"#ffffff"}}>
                        <SidebarContext>
                            <Grid item xl={3} lg={3} md={3} sm={0} xs={0} className={classes.sidenav} >
                                <SidebarComponent style={otherWay} />
                            </Grid>
                            <Grid item xl={9} lg={9} md={11} sm={12} xs={12} style={{height:'100%'}} >
                                <Form className={classes.margins}>
                                    <Form.Row>
                                        <h1 className={styles.heading}> Renovation </h1>  
                                    </Form.Row>

                                    <Form.Row>
                                        <Form.Group as={Col} style={{display:"inline-flex"}} > 
                                                 
                                            {/* <Form.Label >Itemize</Form.Label>
                                                <Select
                                                value={status}
                                                onChange={handleChange}
                                                // className={classes.inputone}
                                                className = {classesOne.selectRoot}
                                                classesOne={{
                                                    root: classesOne.selectRoot,
                                                    icon: classesOne.icon
                                                  }}
                                                >
                                                <MenuItem  value={true}>Yes</MenuItem>
                                                <MenuItem value={false}>No</MenuItem>
                                                </Select> */}
                                                <Form.Label >Itemize</Form.Label>
                                                <FormControl
                                                        variant="outlined"
                                                        className={classesOne.quantityRoot}
                                                    >
                                                        <Select
                                                            onChange={handleChange}
                                                            className={classesOne.selectRoot, classesOne.icon}
                                                        MenuProps={{ classesOne: { paper: classesOne.selectPaper } }}>
                                                            <MenuItem  value={true}>Yes</MenuItem>
                                                            <MenuItem value={false}>No</MenuItem>
                                                        </Select>
                                                    </FormControl>
                                        </Form.Group> <Form.Group as={Col}></Form.Group>
                                    </Form.Row>


                                    
                                    {status ? <Form.Row>
                                        <Form.Group as={Col}>
                                            <Form.Label>Number of Beds</Form.Label>
                                            <Form.Control className={classes.input}
                                            type="number"
                                            value={renoProp.noOfBeds} 
                                            onChange={e => setRenoProp({ ...renoProp, noOfBeds: e.target.value})} />

                                            <Form.Label> Sq. Ft.</Form.Label>
                                            <Form.Control className={classes.input}                                             
                                            type="number"
                                            value={renoProp.sqFt} 
                                            onChange={e => setRenoProp({ ...renoProp, sqFt: e.target.value})} />

                                            <Form.Label>Consulting ($)</Form.Label>
                                            <Form.Control className={classes.input}                                             
                                            type="number"
                                            value={renoProp.ConsultingCost} 
                                            onChange={e => setRenoProp({ ...renoProp, ConsultingCost: e.target.value})} />

                                            <Form.Label>Roof ($)</Form.Label>
                                            <Form.Control className={classes.input}                                             
                                            type="number"
                                            value={renoProp.roofCost} 
                                            onChange={e => setRenoProp({ ...renoProp, roofCost: e.target.value})} />

                                            <Form.Label>Sewer ($)</Form.Label>
                                            <Form.Control className={classes.input}                                             
                                            type="number"
                                            value={renoProp.sewerCost} 
                                            onChange={e => setRenoProp({ ...renoProp, sewerCost: e.target.value})} />

                                            <Form.Label>Electric ($)</Form.Label>
                                            <Form.Control className={classes.input}                                             
                                            type="number"
                                            value={renoProp.electricCost} 
                                            onChange={e => setRenoProp({ ...renoProp, electricCost: e.target.value})} />

                                            <Form.Label> Interior ($)</Form.Label>
                                            <Form.Control className={classes.input}                                             
                                            type="number"
                                            value={renoProp.interiorCost} 
                                            onChange={e => setRenoProp({ ...renoProp, interiorCost: e.target.value})} />

                                            <Form.Label>Kitchen ($)</Form.Label>
                                            <Form.Control className={classes.input}                                             
                                            type="number"
                                            value={renoProp.kitchenCost} 
                                            onChange={e => setRenoProp({ ...renoProp, kitchenCost: e.target.value})} />

                                            <Form.Label>Lighting ($)</Form.Label>
                                            <Form.Control className={classes.input}                                             
                                            type="number"
                                            value={renoProp.lightingCost} 
                                            onChange={e => setRenoProp({ ...renoProp, lightingCost: e.target.value})} />
                                        </Form.Group>

                                        <Form.Group as={Col}>
                                            <Form.Label> Number of Baths</Form.Label>
                                            <Form.Control className={classes.input}                                             
                                            type="number"
                                            value={renoProp.noOfBaths} 
                                            onChange={e => setRenoProp({ ...renoProp, noOfBaths: e.target.value})} />

                                            <Form.Label>Planning ($)</Form.Label>
                                            <Form.Control className={classes.input}                                             
                                            type="number"
                                            value={renoProp.planningCost} 
                                            onChange={e => setRenoProp({ ...renoProp, planningCost: e.target.value})} />

                                            <Form.Label> Exterior ($)</Form.Label>
                                            <Form.Control className={classes.input}                                            
                                            type="number"
                                            value={renoProp.exteriorCost} 
                                            onChange={e => setRenoProp({ ...renoProp, exteriorCost: e.target.value})}/>

                                            <Form.Label>Water ($)</Form.Label>
                                            <Form.Control className={classes.input}                                         
                                            type="number"
                                            value={renoProp.waterCost} 
                                            onChange={e => setRenoProp({ ...renoProp, waterCost: e.target.value})} />

                                            <Form.Label>Septic ($)</Form.Label>
                                            <Form.Control className={classes.input}                                             
                                            type="number"
                                            value={renoProp.septicCost} 
                                            onChange={e => setRenoProp({ ...renoProp, septicCost: e.target.value})} />

                                            <Form.Label>Plumbing ($)</Form.Label>
                                            <Form.Control className={classes.input}                                             
                                            type="number"
                                            value={renoProp.plumbingCost} 
                                            onChange={e => setRenoProp({ ...renoProp, plumbingCost: e.target.value})} />

                                            <Form.Label>Windows ($)</Form.Label>
                                            <Form.Control className={classes.input}                                             
                                            type="number"
                                            value={renoProp.windowsCost} 
                                            onChange={e => setRenoProp({ ...renoProp, windowsCost: e.target.value})} />

                                            <Form.Label>Baths ($)</Form.Label>
                                            <Form.Control className={classes.input}                                             
                                            type="number"
                                            value={renoProp.bathsCost} 
                                            onChange={e => setRenoProp({ ...renoProp, bathsCost: e.target.value})} />

                                            <Form.Label>Miscelaneous ($)</Form.Label>
                                            <Form.Control className={classes.input}                                             
                                            type="number"
                                            value={renoProp.miscelaneousCost} 
                                            onChange={e => setRenoProp({ ...renoProp, miscelaneousCost: e.target.value})} />

                                            <Form.Label>Total ($)</Form.Label>
                                            <Form.Control className={classes.inputtotal}                                              
                                            type="number"
                                            value= {renoTotal} 
                                            // onChange={e => setrenoTotal({ ...renoProp, renoTotal: e.target.value})} 
                                            />
                                        </Form.Group>
                                    </Form.Row>
                                                                       :
                                    <Form.Row>
                                        <Form.Group as={Col}>
                                            <Form.Label>Number of Beds</Form.Label>
                                            <Form.Control className={classes.input}                                             
                                            type="number"
                                            value={renoProp.noOfBeds} 
                                            onChange={e => setRenoProp({ ...renoProp, noOfBeds: e.target.value})} />

                                            <Form.Label> Sq. Ft.</Form.Label>
                                            <Form.Control className={classes.input}                                             
                                            type="number"
                                            value={renoProp.sqFt} 
                                            onChange={e => setRenoProp({ ...renoProp, sqFt: e.target.value})} />

                                        </Form.Group>
                                        <Form.Group as={Col}>
                                            <Form.Label>Number of Beds</Form.Label>
                                            <Form.Control className={classes.input}                                             
                                            type="number"
                                            value={renoProp.noOfBaths} 
                                            onChange={e => setRenoProp({ ...renoProp, noOfBaths: e.target.value})} />

                                            <Form.Label> Total Rehab</Form.Label>
                                            <Form.Control className={classes.inputtotal}                                            
                                            type="number"
                                            value={renoTotal} 
                                            // onChange={e => setRenoProp({ ...renoProp, renoTotal: e.target.value})} 
                                            />
                                        </Form.Group>
                                    </Form.Row>}
                                </Form>
                            </Grid>
                        </SidebarContext>
                    </Grid>
                </Grid>

                <Grid item xl={12}>
                    {/* <Footer style={styleOther} /> */}
                    <Footer />
                </Grid>
            </Grid>
  )    
}

export default Financing;
