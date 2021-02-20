import React, { Component } from 'react'
import styles from './propertycontent.module.css'
import "./propertycontent.css"
import Header from 'components/header2/Header'
import Footer from 'components/footer/Footer'
import { createUseStyles, useTheme } from 'react-jss';
import { SidebarTwoComponent, SidebarContext } from 'components/sidebar2';
import {Form, Col} from 'react-bootstrap';
import { Grid } from "@material-ui/core"


// const useStyles = createUseStyles({

// });



class PropertyContentTwo extends React.Component{
    // const theme = useTheme();
    // const styles = useStyles({ theme });
    constructor(props){
        super(props);
        this.state = {
            image: null
        };

        this.onImageChange = this.onImageChange.bind(this);
    }

    onImageChange = event => {
        if (event.target.files && event.target.files[0]) {
          let img = event.target.files[0];
          this.setState({
            image: URL.createObjectURL(img)
          });
        }
      };
        render(){
            const otherWay = {height:"95%"}
        return (
            <Grid container xl={12} lg={12} md={12} sm={12} xs={12}   direction="column"  justify="space-around" alignItems="stretch" style={{backgroundColor:"#e5e5e5"}}>
                <Grid item>
                    <Header />
                </Grid>

                <Grid container xl={12} lg={12} md={12} sm={12} xs={12} spacing={3} direction="column"  justify="space-around" alignItems="center" style={{backgroundColor:"#e5e5e5"}}>
        
                <Grid item container xl={11} lg={11} md={10} sm={12} xs={12}  direction="row" justify="flex-start" style={{backgroundColor:"#ffffff"}}>
                <SidebarContext>
                    <Grid item xl={3} lg={3} md={3} sm={0} xs={0} >
                        <SidebarTwoComponent style={otherWay} />
                    </Grid>

                    <Grid item xl={9} lg={9} md={9} sm={12} xs={12}>
                        <Form className={styles.margins}>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridPropertyAddress">
                                <Form.Label>Property Address</Form.Label>
                                <Form.Control className={styles.innput} type="text"  />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridCity">
                                <Form.Label>City</Form.Label>
                                <Form.Control className={styles.innput} type="text" />
                                </Form.Group>
                            </Form.Row>

                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridState">
                                    <Form.Label>State</Form.Label>
                                    <Form.Control className={styles.innput} type="text" />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridZipCode">
                                <Form.Label>Zip Code</Form.Label>
                                <Form.Control className={styles.innput} type="text" />
                                </Form.Group>
                            </Form.Row>

                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridBeds">
                                    <Form.Label>Beds</Form.Label>
                                    <Form.Control className={styles.innput} type="text" />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridBaths">
                                <Form.Label>Baths</Form.Label>
                                <Form.Control className={styles.innput} type="text" />
                                </Form.Group>
                            </Form.Row>

                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridLotSize">
                                    <Form.Label>Lot -size</Form.Label>
                                    <Form.Control className={styles.innput} type="text" />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridPropertySqFt">
                                <Form.Label>Property Sq. ft</Form.Label>
                                <Form.Control className={styles.innput} type="text" />
                                </Form.Group>
                            </Form.Row>


                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridPYT">
                                    <Form.Label>Prior Year Taxes USD</Form.Label>
                                    <Form.Control className={styles.innput} type="text" />
                                </Form.Group>

                                <Form.Group as={Col}>

                                </Form.Group>
                            </Form.Row>
                        </Form>

                        <Grid item container direction="column" xl={11} lg={11} md={11} sm={12} xs={12} className={styles.imageDivMain}>
                            <Grid item>
                                {/* <button className={styles.bn}> Upload Image(s)</button> */}
                                    <input 
                                    style={{display:"none"}}
                                    type="file"
                                    name="myImage" 
                                    onChange={this.onImageChange} 
                                    ref={fileInput => this.fileInput = fileInput}/>  
                                    <button onClick={() => this.fileInput.click()} className={styles.bn}> 
                                        {/* <input type="file" />  */}
                                        Upload Image(s) </button>

                            </Grid>

                            <Grid item className={styles.imageDiv}>
                                <img src={this.state.image} />
                            </Grid>

                         </Grid>
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
}

export default PropertyContentTwo;
