import React, { Component } from 'react'
import styles from './income.module.css'
import "./income.css"
// import calIMage from './../../../assets/calimage.png'
import {Form, FormControl, FormGroup, ControlLabel, HelpBlock, Checkbox, Radio, Button, Col, Image} from 'react-bootstrap';



class Income extends Component {
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
                                <Form.Label>Number of Units</Form.Label>
                                    <Form.Control type="text" />
                                
                                    <Form.Label>Total Monthly Rent Income ($)</Form.Label>
                                    <Form.Control type="text" placeholder=" 0 0 0 0 0"  />

                                    <Form.Label>Total Monthly Income ($)</Form.Label>
                                    <Form.Control type="text"  placeholder=" 0 0 0 0 0"  />

                            </Form.Group>

                            <Form.Group as={Col}>
                                <FormGroup>
                                <Form.Label>Avarage Rent per Unit ($)</Form.Label>
                                <Form.Control type="text" />

                                <Form.Label>Other Monthly Income ($)</Form.Label>
                                <Form.Control type="text" />
                                </FormGroup>
                                

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

export default Income;
