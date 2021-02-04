import React, { Component } from 'react'
import styles from './assumptions.module.css'
import "./assumptions.css"
// import calIMage from './../../../assets/calimage.png'
import {Form, FormControl, FormGroup, ControlLabel, HelpBlock, Checkbox, Radio, Button, Col, Image} from 'react-bootstrap';



class Assumptions extends Component {
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
                                {/* <h1> Assumptions </h1>  */}
                                    <Form.Label>Annual Income Growth (%)</Form.Label>
                                    <Form.Control type="text" />
                                
                                    <Form.Label>Annual Property Appreciation (%)</Form.Label>
                                    <Form.Control type="text" />

                                    <Form.Label>Renovation Duration</Form.Label>
                                    <Form.Control type="text" />

                                    <Form.Label>After Repair Value (ARV) </Form.Label>
                                    <Form.Control type="text" />
                            </Form.Group>

                            <Form.Group as={Col}>
                                {/* <h1> Assumptions </h1>  */}
                                    <Form.Label>Annual Fixed Expense Growth (%)</Form.Label>
                                    <Form.Control type="text" />
                                
                                    <Form.Label>Selling Cost (%)</Form.Label>
                                    <Form.Control type="text" />

                                    <Form.Label>Initial Vacancy</Form.Label>
                                    <Form.Control type="text" />

                                    {/* <Form.Label style={{display:'None'}}>After Repair Value (ARV) </Form.Label>
                                    <Form.Control type="text" /> */}
                            </Form.Group>
                       
                    </Form.Row>
                </Form>
            </div>  
        </div>
    </div>
    )
}
}

export default Assumptions;
