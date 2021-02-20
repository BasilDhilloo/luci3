import React from 'react';
import styles from './fixedexpenses.module.css'
import Header from 'components/header2/Header'
import Footer from 'components/footer/Footer'
import { createUseStyles, useTheme } from 'react-jss';
import { SidebarComponent, SidebarContext } from 'components/sidebar';
import {Form, Col, FormGroup} from 'react-bootstrap';
import { Grid } from "@material-ui/core"


const useStyles = createUseStyles({
    input: {
        backgroundColor:"rgba(128, 0, 128, 0.1)",
        borderRadius: "15px",
        width: "70%",
        height:"57px",
        marginBottom:"15px"
    },

    inputtwo:{
        backgroundColor:"rgba(128, 0, 128, 0.1)",
        borderRadius: "15px",
        width: "86%",
        height:"57px",
        marginBottom:"15px"
    },
    margins:{
        marginTop:"10px",
        marginLeft: "15px"
    }
});



function FixedExpenses (){
    const otherWay = {height:"90vh"}
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
                            <SidebarComponent style={otherWay} />
                        </Grid>

                        <Grid item xl={9} lg={9} md={9} sm={12} xs={12} style={{height:'100vh'}} >
                            <Form className={classes.margins}>
                                <Form.Row>
                                    <Form.Group as={Col}>
                                        <h1 className={styles.heading}> Fixed Expenses (USD)</h1>
                                    </Form.Group> <Form.Group as={Col}></Form.Group>
                                </Form.Row>
                                <Form.Row>
                                    <Form.Group as={Col}>
                                        <Form.Label>Electric</Form.Label>
                                        <Form.Control className={classes.input} type="text" />

                                        <Form.Label>Water and Sewer</Form.Label>
                                        <Form.Control className={classes.input} type="text" />

                                        <Form.Label>HOA</Form.Label>
                                        <Form.Control className={classes.input} type="text" />
                                                        
                                        <Form.Label> Insurance</Form.Label>
                                        <Form.Control className={classes.input} type="text" />

                                    </Form.Group>

                                    <Form.Group as={Col}>
                                        <Form.Label>PMI</Form.Label>
                                        <Form.Control className={classes.input} type="text" />
                                                                
                                        <Form.Label>Garbage</Form.Label>
                                        <Form.Control className={classes.input} type="text" />

                                        <Form.Label> Monthly Taxes </Form.Label>
                                        <Form.Control className={classes.input} type="text" />

                                        <Form.Label>Others</Form.Label>
                                        <Form.Control className={classes.input} type="text" />
                                    </Form.Group>
                                </Form.Row>

                                <Form.Row>
                                    <FormGroup as={Col}>
                                        <Form.Label>Total</Form.Label>
                                        <Form.Control className={classes.inputtwo} type="text" placeholder=" 0 0 0 0 0"  />
                                    </FormGroup>
                                </Form.Row>
                            </Form>
                        </Grid>
                    </SidebarContext>
                    </Grid>
                </Grid>

                <Grid item xl={12}>
                    <Footer />
                </Grid>
            </Grid>
        )
    
}

export default FixedExpenses;





