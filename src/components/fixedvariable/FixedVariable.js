import React, { Component } from 'react'
import styles from './fixedvariable.module.css'
import "./fixedvariable.css"
// import calIMage from './../../../assets/calimage.png'
import {Form, FormControl, FormGroup, ControlLabel, HelpBlock, Checkbox, Radio, Button, Col, Image} from 'react-bootstrap';



class FixedVariable extends Component {
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


    render() {
        return (
            <div>
                <div className="flex-container">
                    <div className="flex-child">
                     

                    <Form>
                        <Form.Row>
                            <Form.Group as={Col}>
                                <h1> FixedVariable </h1> 
                                <Form.Label>Asking Price ($)</Form.Label>
                                    <Form.Control type="text" />
                                
                                    <Form.Label>Purchase Price</Form.Label>
                                    <Form.Control type="text" />

                                    <Form.Label>Financing Rehab</Form.Label>
                                    <Form.Control type="text" />

                                    <h1> New Renovation Tab </h1>
                                <Form.Label>Rehab Budget ($)</Form.Label>
                                <Form.Control type="text" />
                    
                                <Form.Label> Closing Costs ($) </Form.Label>
                                <Form.Control type="text" />

                                <Form.Label>Insurence ($)</Form.Label>
                                <Form.Control type="text" />
                            </Form.Group>

                            <Form.Group as={Col}>
                                <h1> Finance </h1> 
                                <Form.Label>Downpayment (%)</Form.Label>
                                <Form.Control type="text" />

                                <Form.Label>Downpayment (%)</Form.Label>
                                <Form.Control type="text" placeholder="0 0 0 0" />

                                <Form.Label>Loan Payment Rehab</Form.Label>
                                <Form.Control type="text" />

                                <Form.Label>Annual Interest Rate</Form.Label>
                                <Form.Control type="text" />

                                <Form.Label>Term Years</Form.Label>
                                <Form.Control type="text" placeholder="0 0 0 0" />

                                <Form.Label>Emergency Funds ($)</Form.Label>
                                <Form.Control type="text" />
                            </Form.Group>
                       
                    </Form.Row>

                    {/* <Form.Row>
                        <Form.Group as={Col} controlId="formGridState">
                            <h1> New Renovation Tab </h1>
                            <Form.Label>Rehab Budget ($)</Form.Label>
                            <Form.Control type="text" />
                
                            <Form.Label> Closing Costs ($) </Form.Label>
                            <Form.Control type="text" />

                            <Form.Label>Insurence ($)</Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>
                    </Form.Row> */}
                </Form>
            </div>  
        </div>
    </div>
    )
}
}

export default FixedVariable;
