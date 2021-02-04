import React, { Component } from 'react'
import styles from './propertycontent.module.css'
import "./propertycontent.css"
import imagetest from './../../assets/calimage.png'
// import calIMage from './../../../assets/calimage.png'
import {Form, FormControl, FormGroup, ControlLabel, HelpBlock, Checkbox, Radio, Button, Col, Image, Card} from 'react-bootstrap';
import ImageUpload from './ImageUpload';



class PropertyContent extends Component {
    

    render() {
        return (
            <div>
                <div className="flex-container">
                    <div className="flex-child">
                     

                    <Form>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridPropertyAddress">
                        <Form.Label>Property Address</Form.Label>
                        <Form.Control type="text"  />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>City</Form.Label>
                        <Form.Control type="text" />
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridState">
                            <Form.Label>State</Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridZipCode">
                        <Form.Label>Zip Code</Form.Label>
                        <Form.Control type="text" />
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridPYT">
                            <Form.Label>Prior Year Taxes USD</Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridZipLIUSD">
                        <Form.Label>Landload Insurance USD</Form.Label>
                        <Form.Control type="text" />
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridBeds">
                            <Form.Label>Beds</Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridBaths">
                        <Form.Label>Baths</Form.Label>
                        <Form.Control type="text" />
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                    <Form.Group as={Col} controlId="formGridLotSize">
                            <Form.Label>Lot -size</Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPropertySqFt">
                        <Form.Label>Property Sq. ft</Form.Label>
                        <Form.Control type="text" />
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        {/* <input style={{display:"none"}}
                        type="file"
                        name="myImage" 
                         onChange={this.onImageChange} 
                         ref={fileInput => this.fileInput = fileInput} />  
                      
                        <button  onClick={() => this.fileInput.click()} type="submit">
                            Upload Image(s)
                        </button> */}

                        {/* <div className="imgDiv">
                                <img src={this.state.image} />
                        </div> */}
                        {/* <div>
                            
                                    <img src={imagetest} />
                        </div> */}

                        {/* <ImageUpload /> */}

                    </Form.Row>
                  
                    </Form>



                           {/* <div class={styles.row}> */}

                        {/* <div className="row">
                            <label>Property Address</label>
                            <input  type="text" />
                        </div>  */}
                        {/* <div className="row">
                            <label for="State">State</label>
                            <input  list="States" name="state" id="state" placeholder="AK" id={styles.inputIcon} />
                            <datalist id="States">
                                <option value="Giorgia" />
                                <option value="New York" />
                                <option value="Washington" />
                                <option value="Utah" />
                                <option value="Ohio" />
                            </datalist>
                        </div> 

                        <div className="row">
                            <label>Prior Year Taxes USD</label>
                            <input id={styles.dollarIcon} type="text"/>
                        </div> 

                        <div className="row">
                            <label>Beds</label>
                            <input  type="text" />
                        </div> 

                        <div className="row">
                            <label>Lot -size</label>
                            <input  type="text" />
                        </div> 
                    </div>

                    <div class="flex-child">
                    <div className="row">
                            <label>City</label>
                            <input  type="text" />
                        </div> 

                        <div className="row">
                            <label>Zip Code</label>
                            <input type="number" />
                            
                        </div> 

                        <div className="row">
                            <label>Landload Insurance USD</label>
                            <input id={styles.dollarIcon} type="text"/>
                        </div> 

                        <div className="row">
                            <label>Baths</label>
                            <input  type="text" />
                        </div> 

                        <div className="row">
                            <label>Property Sq. ft</label>
                            <input  type="text" />
                        </div> 
                    </div>  
                </div>

                <div className="flex-container" >
                    
                    <div className="other-child">
                        <input 
                        style={{display:"none"}}
                        type="file"
                         name="myImage" 
                         onChange={this.onImageChange} 
                         ref={fileInput => this.fileInput = fileInput}/>  
                        <button onClick={() => this.fileInput.click()} className="flexbutton"> 
                            {/* <input type="file" />  */}
                            {/* Upload Image(s) </button>
                            <div className="imgDiv">
                                <img src={this.state.image} />
                            </div> */}
                    </div>  


                </div>
            </div>
        )
    }
}

export default PropertyContent;
