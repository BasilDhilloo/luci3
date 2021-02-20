import React, { Component } from 'react'
import styles from './renovation.module.css'
import Header from 'components/header2/Header'
import Footer from 'components/footer/Footer'
import { createUseStyles, useTheme } from 'react-jss';
import { SidebarTwoComponent, SidebarContext } from 'components/sidebar2';
import {Form, Col} from 'react-bootstrap';
import { Grid } from "@material-ui/core"


const useStyles = createUseStyles({
    container: {
        height: '100%',
        minHeight: 850
    },
    mainBlock: {
        marginLeft: 255,
        // padding: 30,
        '@media (max-width: 900px)': {
            marginLeft: 0
        }
    },
    contentBlock: {
        marginTop: 54
    },

    input: {
        backgroundColor:"rgba(128, 0, 128, 0.1)",
        borderRadius: "15px",
        width: "80%",
        height:"47px",
        marginBottom:"15px"
    },

    inputtwo:{
        backgroundColor:"rgba(128, 0, 128, 0.1)",
        borderRadius: "15px",
        width: "100%",
        height:"47px",
        marginBottom:"15px"
    },

    margins:{
        marginTop:"10px",
        marginLeft: "15px"
    }
});



function Renovation (){
    const otherWay = {height:"125vh"}
    // const styleOther = {position: "fixed"}
    const theme = useTheme();
    const classes = useStyles({ theme });

        return (
            <Grid container xl={12} lg={12} md={12} sm={12} xs={12}   direction="column"  justify="space-around"  style={{backgroundColor:"#e5e5e5"}}>
                <Grid item>
                    <Header />
                </Grid>

                <Grid container xl={12} lg={12} md={12} sm={12} xs={12} spacing={3} direction="column"  justify="space-around" alignItems="center" style={{backgroundColor:"#e5e5e5"}}>
        
                <Grid item container xl={11} lg={11} md={10} sm={12} xs={12}  direction="row" justify="flex-start" alignItems="stretch" style={{backgroundColor:"#ffffff"}}>
                <SidebarContext>
                    <Grid item xl={3} lg={3} md={3} sm={0} xs={0}  style={{height:'100%'}}>
                        <SidebarTwoComponent style={otherWay} />
                    </Grid>

                    <Grid item xl={9} lg={9} md={9} sm={12} xs={12} style={{height:'130vh'}} >
                        <Form className={classes.margins}>
                        <Form.Row>
                                <Form.Group as={Col}>
                                    <h1 className={styles.heading}> Itemize The Renre Budget : </h1>
                                </Form.Group>

                                <Form.Group as={Col}>
                                    
                                </Form.Group>
                            </Form.Row>
                        <Form.Row>
                                                    <Form.Group as={Col}>
                                                            <Form.Label>Beds</Form.Label>
                                                            <Form.Control className={classes.input}  type="text" />
                                                        
                                                            <Form.Label>Permits</Form.Label>
                                                            <Form.Control className={classes.input}  type="text" />

                                                            <Form.Label>Foundation</Form.Label>
                                                            <Form.Control className={classes.input}  type="text" />

                                                            <Form.Label>Structure</Form.Label>
                                                            <Form.Control className={classes.input}  type="text" />
                                                        
                                                            <Form.Label>Flooring</Form.Label>
                                                            <Form.Control className={classes.input}  type="text"/>

                                                            <Form.Label>Heating/AC</Form.Label>
                                                            <Form.Control className={classes.input}  type="text"/>
      
                                                            <Form.Label>Windows</Form.Label>
                                                            <Form.Control className={classes.input} type="text" />
                                                        
                                                            <Form.Label>Landscaping</Form.Label>
                                                            <Form.Control className={classes.input}  type="text" />

                                                            <Form.Label>Kitchens</Form.Label>
                                                            <Form.Control className={classes.input}  type="text" />

                                                    </Form.Group>

                                                    <Form.Group as={Col}>
                                                        <Form.Label>Baths</Form.Label>
                                                        <Form.Control className={classes.input}  type="text" />

                                                        <Form.Label>Property Sq. ft</Form.Label>
                                                        <Form.Control className={classes.input}  type="text" />    

                                                        <Form.Label>Roof</Form.Label>
                                                        <Form.Control className={classes.input}  type="text" />

                                                        <Form.Label>Drywall</Form.Label>
                                                        <Form.Control  className={classes.input}  type="text" />
                                                        
                                                        <Form.Label>Electric</Form.Label>
                                                        <Form.Control  className={classes.input}  type="text" />

                                                        <Form.Label>Lighting</Form.Label>
                                                        <Form.Control className={classes.input}  type="text"  placeholder=" 0 0 0 0 0"  />
      
                                                        <Form.Label>Patry/porch</Form.Label>
                                                        <Form.Control className={classes.input}  type="text" />    

                                                        <Form.Label>Appliances</Form.Label>
                                                        <Form.Control className={classes.input}  type="text"  />

                                                        <Form.Label>Baths</Form.Label>
                                                        <Form.Control className={classes.input}  type="text" />
                                                        
                                                    </Form.Group>
                                            </Form.Row>

                                            <Form.Row>
                                                <Form.Group as={Col}>
                                                    <Form.Label>Total</Form.Label>
                                                    <Form.Control className={classes.input} style={{width:"90%"}} placeholder=" 0 0 0 0 0"   type="text" />
                                                </Form.Group>
                                            </Form.Row>

                        </Form>
                    </Grid>

                    </SidebarContext>
                </Grid>
            </Grid>
            

                <Grid item xl={12}>
                    <Footer  />
                </Grid>
            </Grid>
            
 

        )
    
}

export default Renovation;





