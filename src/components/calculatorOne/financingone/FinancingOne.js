import React, { Component } from 'react'
import styles from './financing.module.css'
import Header from 'components/header2/Header'
import Footer from 'components/footer/Footer'
import { createUseStyles, useTheme } from 'react-jss';
import { SidebarComponent, SidebarContext } from 'components/sidebar';
import {Form, Col} from 'react-bootstrap';
import { Grid } from "@material-ui/core"


const useStyles = createUseStyles({
    input: {
        backgroundColor:"rgba(128, 0, 128, 0.1)",
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
    }
});



function NewRenovationTab (){
    const otherWay = {height:"100vh"}
    const styleOther = {position: "fixed"}
    const theme = useTheme();
    const classes = useStyles({ theme });

        return (
            <Grid container xl={12} lg={12} md={12} sm={12} xs={12}   direction="column"  justify="space-around"  style={{backgroundColor:"#e5e5e5"}}>
                <Grid item>
                    <Header />
                </Grid>

                <Grid container xl={12} lg={12} md={12} sm={12} xs={12} spacing={3} direction="column"  justify="space-around" alignItems="center" style={{backgroundColor:"#e5e5e5"}}>
        
                <Grid item container xl={11} lg={11} md={10} sm={3} xs={12}  direction="row" justify="flex-start" alignItems="stretch" style={{backgroundColor:"#ffffff"}}>
                <SidebarContext>
                    <Grid item xl={3} lg={3} md={3} sm={0} xs={0} className={classes.sidenav} style={{height:'100%'}}>
                        <SidebarComponent style={otherWay} />
                    </Grid>

                    <Grid item xl={9} lg={9} md={9} sm={12} xs={12} style={{height:'120vh'}} >
                        <Form className={classes.margins}>
                        <Form.Row>
                                <Form.Group as={Col}>
                                    <h1 className={styles.heading}> Finance</h1>
                                </Form.Group>

                                <Form.Group as={Col}>
                                    
                                </Form.Group>
                            </Form.Row>
                        <Form.Row>
                                                    <Form.Group as={Col}>
                                                            <Form.Label>Funding Renovation</Form.Label>
                                                            <Form.Control className={classes.input} type="text" placeholder=" Yes"/>
                                                        
                                                            <Form.Label>Downpayment (%)</Form.Label>
                                                            <Form.Control className={classes.input} type="number" placeholder=" 0 0 0 0 0"/>

                                                            <Form.Label>Donwpayment ($)</Form.Label>
                                                            <Form.Control className={classes.input} type="number" />

                                                            <Form.Label>Loan Amount ($)</Form.Label>
                                                            <Form.Control className={classes.input} type="number" placeholder=" 0 0 0 0 0"/>

                                                            <Form.Label>Interest Rate (%)</Form.Label>
                                                            <Form.Control className={classes.input} type="number" />
                                                    </Form.Group>

                                                    <Form.Group as={Col}>
                                                        <Form.Label>Term (yrs & months)</Form.Label>
                                                        <Form.Control className={classes.input} type="number"  placeholder=" 0 0 0 0 0"/>

                                                        <Form.Label>Loan Fees ($)</Form.Label>
                                                        <Form.Control className={classes.input} type="number" />

                                                        <Form.Label>Loan Points (pts)</Form.Label>
                                                        <Form.Control className={classes.input} type="text"/>
                                                    
                                                        <Form.Label>Interest Only Payments</Form.Label>
                                                        <Form.Control className={classes.input} type="number" />

                                                        <Form.Label>Grace Period (months)</Form.Label>
                                                        <Form.Control className={classes.input} type="number" placeholder=" 0 0 0 0 0"/>

                                                        <Form.Label>How many months?</Form.Label>
                                                        <Form.Control className={classes.input} type="number" />
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

export default NewRenovationTab;












// import React, { Component } from 'react'
// import styles from './purchase.module.css'
// import "./purchase.css"
// import Header from 'components/header2/Header'
// import Footer from 'components/footer/Footer'
// import { createUseStyles, useTheme } from 'react-jss';
// import { Column, Row } from 'simple-flexbox';
// import { SidebarTwoComponent, SidebarContext } from 'components/sidebar2';
// import imagetest from './../../assets/calimage.png'
// // import calIMage from './../../../assets/calimage.png'
// import {Form, FormControl, FormGroup, ControlLabel, HelpBlock, Checkbox, Radio, Button, Col, Image, Card} from 'react-bootstrap';
// // import ImageUpload from './ImageUpload';
// // import calIMage from './../../../assets/calimage.png'


// const useStyles = createUseStyles({
//     container: {
//         height: '60%',
//         minHeight: 700
//     },
//     mainBlock: {
//         marginLeft: 255,
//         padding: 30,
//         '@media (max-width: 900px)': {
//             marginLeft: 0
//         }
//     },
//     contentBlock: {
//         marginTop: 54
//     }

    
// });


// function PurchaseTwo (){
//     const theme = useTheme();
//     const classes = useStyles({ theme });

//     // constructor(props){
//     //     super(props);
//     //     this.state = {
//     //         image: null
//     //     };

//     //     this.onImageChange = this.onImageChange.bind(this);
//     // }

//     // onImageChange = event => {
//     //     if (event.target.files && event.target.files[0]) {
//     //       let img = event.target.files[0];
//     //       this.setState({
//     //         image: URL.createObjectURL(img)
//     //       });
//     //     }
//     //   };


//     // render() {
//         return (
        

//             <div className="App">
//             <Header />
//             <div className={styles.propertyLayoutMain}>
//                 <div className={styles.propertyLayoutSecond}>
//                     <div className={styles.propertyLayoutSider}>
//                     {/* <h1> This is property compenent</h1> */}
//                     <SidebarContext>
//                         <Row className={classes.container}>
//                         <SidebarTwoComponent />
//                             <Column flexGrow={1} className={classes.mainBlock}>
//                                 {/* <Header />? */}
//                                 <div className={classes.contentBlock}>
//                                     {/* <PrivateRoutes /> */}
//                                         <div>
//                                             <div className="flex-container">
//                                                 <div className="flex-child">
                                                

//                                                 <Form>
//                                                     <Form.Row>
//                                                         <Form.Group>
//                                                             <h1> Purchase </h1> 
//                                                         </Form.Group>
//                                                     </Form.Row>

//                                                     <Form.Row> 
//                                                         <Form.Group as={Col}>
                                                            
//                                                             <Form.Label>Asking Price ($)</Form.Label>
//                                                             <Form.Control type="text" />

//                                                             <Form.Label>Closing Costs ($)</Form.Label>
//                                                             <Form.Control type="text" />
//                                                         </Form.Group>

//                                                         <Form.Group as={Col}> 
//                                                             <FormGroup>
//                                                                 <Form.Label>Purchase Price ($)</Form.Label>
//                                                                 <Form.Control type="text" />
//                                                             </FormGroup>
//                                                         </Form.Group>
//                                                     </Form.Row>
//                                                 </Form>
//                                             </div>  
//                                         </div>
//                                     </div>
//                                 </div>
//                             </Column>
//                         </Row>
//                     </SidebarContext>
//                     </div>
//                 </div>
//             </div>
//             <Footer />
//         </div>


//     )

// }

// export default PurchaseTwo;


// import React, { Component } from 'react'
// import styles from './renovation.module.css'
// import "./income.css"
// // import calIMage from './../../../assets/calimage.png'
// import { createUseStyles, useTheme } from 'react-jss';
// import { SidebarTwoComponent, SidebarContext } from 'components/sidebar2';
// import Header from 'components/header2/Header'
// import Footer from 'components/footer/Footer'

// import { Column, Row } from 'simple-flexbox';

// import {Form, FormControl, FormGroup, ControlLabel, HelpBlock, Checkbox, Radio, Button, Col, Image} from 'react-bootstrap';
// import { func } from 'prop-types';


// const useStyles = createUseStyles({
//     container: {
//         height: '100%',
//         minHeight: 680
//     },
//     mainBlock: {
//         marginLeft: 255,
//         padding: 30,
//         '@media (max-width: 900px)': {
//             marginLeft: 0
//         }
//     },
//     contentBlock: {
//         marginTop: 54
//     }
// });

// // const style = {
// //     height: "65vh",
// //     backgroundColor: 
// // }


// function Renovation (){
//     const theme = useTheme();
//     const classes = useStyles({ theme });
//         return (

//             <div className="App">
//             <Header />
//             <div className={styles.propertyLayoutMain}>
//                 <div className={styles.propertyLayoutSecond}>
//                     <div className={styles.propertyLayoutSider}>
//                     {/* <h1> This is property compenent</h1> */}
//                     <SidebarContext>
//                         <Row className={classes.container}>
//                         <SidebarTwoComponent />
//                             <Column flexGrow={1} className={classes.mainBlock}>
//                                 {/* <Header />? */}
//                                 <div className={classes.contentBlock}>
                                            
//                                     <div>
//                                         <div className="flex-container">
//                                             <div className="flex-child">
                                            

//                                             <Form>
//                                                 <Form.Row>
//                                                     <Form.Group as={Col}>
//                                                         {/* <Form.Group as={Col}> */}
//                                                             <h1> Itemize The Renre Budget : Yes /No </h1>
//                                                             <h1> Fixed : </h1>
//                                                         {/* </Form.Group> */}
//                                                     </Form.Group>
//                                                 </Form.Row>

                                            //     <Form.Row>
                                            //         <Form.Group as={Col}>
                                            //                 <Form.Label>Beds</Form.Label>
                                            //                 <Form.Control type="text" />
                                                        
                                            //                 <Form.Label>Permits</Form.Label>
                                            //                 <Form.Control type="text" />

                                            //                 <Form.Label>Foundation</Form.Label>
                                            //                 <Form.Control type="text" />

                                            //                 <Form.Label>Structure</Form.Label>
                                            //                 <Form.Control type="text" />
                                                        
                                            //                 <Form.Label>Flooring</Form.Label>
                                            //                 <Form.Control type="text"/>

                                            //                 <Form.Label>Heating/AC</Form.Label>
                                            //                 <Form.Control type="text"/>
      
                                            //                 <Form.Label>Windows</Form.Label>
                                            //                 <Form.Control type="text" />
                                                        
                                            //                 <Form.Label>Landscaping</Form.Label>
                                            //                 <Form.Control type="text" />

                                            //                 <Form.Label>Kitchens</Form.Label>
                                            //                 <Form.Control type="text" />

                                            //         </Form.Group>

                                            //         <Form.Group as={Col}>
                                            //             <Form.Label>Baths</Form.Label>
                                            //             <Form.Control type="text" />

                                            //             <Form.Label>Property Sq. ft</Form.Label>
                                            //             <Form.Control type="text" />    

                                            //             <Form.Label>Roof</Form.Label>
                                            //             <Form.Control type="text" />

                                            //             <Form.Label>Drywall</Form.Label>
                                            //             <Form.Control type="text" />
                                                        
                                            //             <Form.Label>Electric</Form.Label>
                                            //             <Form.Control type="text" />

                                            //             <Form.Label>Lighting</Form.Label>
                                            //             <Form.Control type="text"  placeholder=" 0 0 0 0 0"  />
      
                                            //             <Form.Label>Patry/porch</Form.Label>
                                            //             <Form.Control type="text" />    

                                            //             <Form.Label>Appliances</Form.Label>
                                            //             <Form.Control type="text"  />

                                            //             <Form.Label>Baths</Form.Label>
                                            //             <Form.Control type="text" />
                                                        
                                            //         </Form.Group>
                                            // </Form.Row>

//                                             <Form.Row>
//                                                     <FormGroup>
//                                                         <Form.Label>Total</Form.Label>
//                                                         <Form.Control type="text" placeholder=" 0 0 0 0 0"  />
//                                                     </FormGroup>
                                                
//                                             </Form.Row>
//                                                 </Form>
//                                             </div>  
//                                         </div>
//                                     </div>
//                                 </div>
//                             </Column>
//                         </Row>
//                     </SidebarContext>
//                     </div>
//                 </div>
//             </div>
//             <Footer />
//         </div>


//     )

// }

// export default Renovation;



// import React, { Component } from 'react'
// import styles from './financing.module.css'
// import "./income.css"
// // import calIMage from './../../../assets/calimage.png'
// import { createUseStyles, useTheme } from 'react-jss';
// import { SidebarTwoComponent, SidebarContext } from 'components/sidebar2';
// import Header from 'components/header2/Header'
// import Footer from 'components/footer/Footer'

// import { Column, Row } from 'simple-flexbox';

// import {Form, FormControl, FormGroup, ControlLabel, HelpBlock, Checkbox, Radio, Button, Col, Image} from 'react-bootstrap';
// import { func } from 'prop-types';


// const useStyles = createUseStyles({
//     container: {
//         height: '100%',
//         minHeight: 680
//     },
//     mainBlock: {
//         marginLeft: 255,
//         padding: 30,
//         '@media (max-width: 900px)': {
//             marginLeft: 0
//         }
//     },
//     contentBlock: {
//         marginTop: 54
//     }
// });

// // const style = {
// //     height: "65vh",
// //     backgroundColor: 
// // }


// function Financing (){
//     const theme = useTheme();
//     const classes = useStyles({ theme });
//         return (

//             <div className="App">
//             <Header />
//             <div className={styles.propertyLayoutMain}>
//                 <div className={styles.propertyLayoutSecond}>
//                     <div className={styles.propertyLayoutSider}>
//                     {/* <h1> This is property compenent</h1> */}
//                     <SidebarContext>
//                         <Row className={classes.container}>
//                         <SidebarTwoComponent />
//                             <Column flexGrow={1} className={classes.mainBlock}>
//                                 {/* <Header />? */}
//                                 <div className={classes.contentBlock}>
                                            
//                                     <div>
//                                         <div className="flex-container">
//                                             <div className="flex-child">
                                            

//                                             <Form>
                                            //     <Form.Row>
                                            //         <Form.Group as={Col}>
                                            //                 <Form.Label>Financing The Renovation</Form.Label>
                                            //                 <Form.Control type="text" />
                                                        
                                            //                 <Form.Label>Interest Rate</Form.Label>
                                            //                 <Form.Control type="number" />

                                            //                 <Form.Label>Interest Only</Form.Label>
                                            //                 <Form.Control type="number" />

                                            //                 <Form.Label>Grace Period</Form.Label>
                                            //                 <Form.Control type="text" />
                                            //         </Form.Group>

                                            //         <Form.Group as={Col}>
                                            //             <Form.Label>Down Paymenyt (%)</Form.Label>
                                            //             <Form.Control type="number" />

                                            //             <Form.Label>Term</Form.Label>
                                            //             <Form.Row> <Form.Control type="text" placeholder="Years" /> <Form.Control type="text" placeholder="Months" /></Form.Row>
            
                                                        

                                            //             <Form.Label>How Many Months</Form.Label>
                                            //             <Form.Control type="number" />

                                            //             <Form.Label>Financing Rehab</Form.Label>
                                            //             <Form.Control type="text" placeholder="Yes" />

                                            //         </Form.Group>
                                            
                                            // </Form.Row>
//                                                 </Form>
//                                             </div>  
//                                         </div>
//                                     </div>
//                                 </div>
//                             </Column>
//                         </Row>
//                     </SidebarContext>
//                     </div>
//                 </div>
//             </div>
//             <Footer />
//         </div>


//     )

// }

// export default Financing;
