import React, {useState } from 'react'
import styles from './assumptions.module.css'
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
        width: "60%",
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
    }
});



function Income(){
    const otherWay = {height:"75vh"}
    const styleOther = {position: "fixed"}
    const theme = useTheme();
    const classes = useStyles({ theme });

    const [assumProp, setassumProp] = useState({
        afterRepairValue: "",
        sellingCost: "",
        annualPropGrowth: "",
        annualRentalGrowth: "",
        annualExpenseGrowth: "",
        renovationDuration: "",
        initialVacancy: ""
    })

        return (
            <Grid container xl={12} lg={12} md={12} sm={12} xs={12}   direction="column"  justify="space-around"  style={{backgroundColor:"#e5e5e5"}}>
                <Grid item>
                    <Header />
                </Grid>

                <Grid container xl={12} lg={12} md={12} sm={12} xs={12} spacing={3} direction="column"  justify="space-around" alignItems="center" style={{backgroundColor:"#e5e5e5"}}>
        
                <Grid item container xl={11} lg={11} md={10} sm={12} xs={12}  direction="row" justify="flex-start" alignItems="stretch" style={{backgroundColor:"#ffffff"}}>
                <SidebarContext>
                    <Grid item xl={3} lg={3} md={3} sm={0} xs={0} style={{height:'100%'}}>
                        <SidebarComponent style={otherWay} />
                    </Grid>

                    <Grid item xl={9} lg={9} md={9} sm={12} xs={12} style={{height:'80vh'}} >
                    <Form className={classes.margins}>
                        <Form.Row>
                            <Form.Group as={Col}>
                                {/* <h1> Assumptions </h1>  */}
                                <Form.Label>After Repair Value</Form.Label>
                                <Form.Control className={classes.input} type="text" />
                            
                                <Form.Label>Selling Costs</Form.Label>
                                <Form.Control className={classes.input} type="number" />
                            </Form.Group>

                            <Form.Group as={Col}>
                                <Form.Label>Renovation Duration</Form.Label>
                                <Form.Control className={classes.input} type="text" placeholder=" 3 Weeks" />

                                <Form.Label>Renovation Duration</Form.Label>
                                <Form.Control className={classes.input} type="text" placeholder=" 3 Weeks" />
                            </Form.Group>
                        </Form.Row>
                    </Form>
                    </Grid>
                    </SidebarContext>
                </Grid>
            </Grid>
            

                <Grid item xl={12}>
                    <Footer style={styleOther} />
                </Grid>
            </Grid>
            
 

        )
    
}

export default Income;
