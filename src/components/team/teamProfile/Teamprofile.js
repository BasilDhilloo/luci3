import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import React from 'react';
import { Link } from 'react-router-dom';
// import {Table} from 'react-bootstrap';
import styles from './teamprofile.module.css';
import HeaderTwo from './../../header2/HeaderTwo';
import Footer from './../../footer/Footer';
import './teamprofile.css'
import { Grid } from "@material-ui/core"



// const headersOne = ["Property","Strategy", "Price", "PRole", "actRole", "action"]
const Teamprofile = () => {
    const employeeProperty = [
        {property: "Property 01", strategy: "Buy and Sold", price: 400, proRole: 15, actRole : 10, action: <Link to="/property">  <button className={styles.tableBtn}> Projected </button></Link>},
        {property: "Property 04", strategy: "Buy and Sold", price: 100, proRole: 9, actRole : 11, action: <Link to="/property">  <button className={styles.tableBtn}> Projected </button></Link>},
        {property: "Property 10", strategy: "Buy and Sold", price: 150, proRole: 11, actRole : 14, action: <Link to="/property">  <button className={styles.tableBtn}> Projected </button></Link>},
        {property: "Property 03", strategy: "Buy and Sold", price: 350, proRole: 12, actRole : 19, action: <Link to="/property">  <button className={styles.tableBtn}> Projected </button></Link>},
        {property: "Property 02", strategy: "Buy and Sold", price: 240, proRole: 10, actRole : 7, action: <Link to="/property">  <button className={styles.tableBtn}> Projected </button></Link>},
        {property: "Property 011", strategy: "Buy and Sold", price: 374, proRole: 14, actRole : 11, action: <Link to="/property">  <button className={styles.tableBtn}> Projected </button></Link>}
    ]

    const underContract = [
        {property: "Property 01", submitted: "Vender 1", accepted: "Vendor 1", proRole: 400, status: 400},
        {property: "Property 02", submitted: "Vender 1", accepted: "Vendor 1", proRole: 400, status: 400},
        {property: "Property 022", submitted: "Vender 1", accepted: "Vendor 1", proRole: 400, status: 400},
        {property: "Property 11", submitted: "Vender 1", accepted: "Vendor 1", proRole: 400, status: 400},
        {property: "Property 05", submitted: "Vender 1", accepted: "Vendor 1", proRole: 400, status: 400},
        {property: "Property 07", submitted: "Vender 1", accepted: "Vendor 1", proRole: 400, status: 400},

    ]

    const submittedOffer = [
        {property: "Property 01", submitted: "Vender 1",  proRole: 400, status: 400},
        {property: "Property 02", submitted: "Vender 1", proRole: 400, status: 400},
        {property: "Property 022", submitted: "Vender 1",  proRole: 400, status: 400},
        {property: "Property 11", submitted: "Vender 1",  proRole: 400, status: 400},
        {property: "Property 05", submitted: "Vender 1",  proRole: 400, status: 400},
        {property: "Property 07", submitted: "Vender 1",  proRole: 400, status: 400},

    ]

    const renderEmployee = (employeeProperty, index) =>{
        return(
            <Tr key={index}>
                <Td>{employeeProperty.property}</Td>
                <Td>{employeeProperty.strategy}</Td>
                <Td>{employeeProperty.price}</Td>
                <Td>{employeeProperty.proRole}</Td>
                <Td>{employeeProperty.actRole}</Td>
                <Td>{employeeProperty.action}</Td>
            </Tr>
        )
    }

    const renderUnderContract = (underContract, index) =>{
        return(
            <Tr key={index}>
                <Td>{underContract.property}</Td>
                <Td>{underContract.submitted}</Td>
                <Td>{underContract.accepted}</Td>
                <Td>{underContract.proRole}</Td>
                <Td>{underContract.status}</Td>
            </Tr>
        )
    }


    const renderSubmitOffer = (submittedOffer, index) =>{
        return(
            <Tr key={index}>
                <Td>{submittedOffer.property} </Td>
                <Td>{submittedOffer.submitted}</Td>
                <Td>{submittedOffer.proRole}  </Td>
                <Td>{submittedOffer.status}   </Td>
            </Tr>
        )
    }


    return (
        <>
        <HeaderTwo />
        <Grid style={{backgroundColor:"#E5E5E5", paddingBottom:"40px"}} xl={12} lg={12} md={12} sm={12} xs={12} spacing={3}  alignItems="center" container direction="column">
            <Grid item container xl={10} lg={11}  direction="row" spacing={2}  justify="center">
                <Grid item> 
                    <h1 className={styles.heading} > Active Portfolio </h1>
                </Grid>
                <Grid item> 
                    <h1 className={styles.heading} > New Analysis </h1>
                </Grid>

                <Grid item>
                    <Table hover style={{borderRadius:"15px"}} >
                            <Thead  className={styles.tableH1}>
                                <Tr>
                                    <Th>Property</Th>
                                    <Th>Strategy</Th>
                                    <Th>Price</Th>
                                    <Th>Pro Role</Th>
                                    <Th>Act Role</Th>
                                    <Th>Action</Th>
                                </Tr>
                            </Thead>
                            <Tbody style={{backgroundColor:"white"}}>
                                {employeeProperty.map(renderEmployee)}
                            </Tbody>
                        </Table>
                </Grid>
            </Grid>

            <Grid item> 
                <h1 className={styles.heading} style={{marginTop:"30px"}}> In The Pipeline </h1>
            </Grid>

            <Grid item container xl={10} lg={11}   direction="row" spacing={2} alignItems="space-around" justify="flex-start">
                <Grid item container xl={7} lg={7} md={12} sm={12} xs={12}>
                    <Grid item><caption className={styles.caption} style={{captionSide:"top"}}>Under Contract</caption>
                                <Table hover style={{borderRadius:"15px"}}> 
                                
                                    <Thead>
                                        <Tr className={styles.tableH1}>
                                            <Th>Property</Th>
                                            <Th>Submitted</Th>
                                            <Th>Accepted</Th>
                                            <Th>Pro Role</Th>
                                            <Th>Status</Th>
                                        </Tr>
                                    </Thead>
                                    <Tbody style={{backgroundColor:"white"}}>
                                        {underContract.map(renderUnderContract)}
                                    </Tbody>
                                </Table>    
                    </Grid>
                </Grid>

                <Grid item container xl={5} lg={5} md={12} sm={10} xs={10}>
                    <Grid item>
                    <caption className={styles.caption} style={{captionSide:"top"}}>Submitted Offers</caption>
                    <Table hover style={{borderRadius:"15px"}}>
                                <Thead>
                                        <Tr className={styles.tableH1}>
                                            <Th>Property</Th>
                                            <Th>Submitted</Th>
                                            <Th>Pro Role</Th>
                                            <Th>Status</Th>
                                        </Tr>
                                    </Thead>
                                    <Tbody style={{backgroundColor:"white"}}>
                                        {submittedOffer.map(renderSubmitOffer)}
                                    </Tbody>
                                </Table>
                    </Grid>
                </Grid>


             
            </Grid>


            
            <Grid item><h1 className={styles.heading} style={{marginTop:"30px"}}> Analyzed Properties </h1></Grid>


            <Grid item container xl={10} lg={11}  direction="row" spacing={2} alignItems="space-around" justify="flex-start" style={{backgroundColor:"#FFFFFF",borderRadius:"10px"}}>
                <Grid item contianer xl={5} lg={5}>
                    <input className={styles.checkBox} type="checkbox" />
                    <label> Generate Additional Graphs </label><br></br> 
                    <input className={styles.checkBox} type="checkbox" />
                    <label> Generate Amortization Schedule </label>
                    <br></br>
                </Grid>
                <Grid item contianer xl={5} lg={5}>
                    <input className={styles.checkBox} type="checkbox" />
                    <label> Generate Full Proforma </label><br></br> 
                    <input className={styles.checkBox} type="checkbox" />
                    <label> Attach Loaded Images </label> 
                </Grid>

                <Grid xl={10} lg={12} spacing={2} item container direction="row" justify="flez-start">
                    <Grid item  xl={5} lg={5} >
                        <button className="reportBtn"> Generate Report </button>
                    </Grid>

                    <Grid item container xl={10} lg={10}>
                        <h3 className="progressTxt"> Progress(70%) </h3>
                        <div className="progress">
                            <div className="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={{width:"70%"}}>
                            70%
                            </div>
                        </div>
                    </Grid>
                </Grid>

            </Grid>


        </Grid>
        <Footer />
        </>






        // <div>
        // <HeaderTwo />

        //     <div className="container-fluid" style={{backgroundColor:"#E5E5E5"}}>
        //         <div className="row"  className={styles.firstHeading}>
        //             <h1 className={styles.heading} > Active Portfolio </h1>
        //             <h1 className={styles.heading} > New Analysis </h1>
        //         </div>

        //         <div className="wrapper">
        //             <div className="row" style={{margin:"20px 15px"}}>

        //                 <Table hover style={{borderRadius:"15px"}} >
        //                     <Thead  className={styles.tableH1}>
        //                         <Tr>
        //                             <Th>Property</Th>
        //                             <Th>Strategy</Th>
        //                             <Th>Price</Th>
        //                             <Th>Pro Role</Th>
        //                             <Th>Act Role</Th>
        //                             <Th>Action</Th>
        //                         </Tr>
        //                     </Thead>
        //                     <Tbody style={{backgroundColor:"white"}}>
        //                         {employeeProperty.map(renderEmployee)}
        //                     </Tbody>
        //                 </Table>
        //             </div>
        //         </div>



        //         <h1 className={styles.heading}> In The Pipeline </h1>
        //         <div className="wrapper3" style={{backgroundColor:"#E5E5E5"}}>
        //             <div className="row" style={{margin:"10px 10px"}}>
        //                 <div className="wrapper2 col-sm-5 col-md-5 col-lg-6" style={{margin:"20px 0px 25px 5px"}}>
        //                         <Table hover>
        //                         <caption style={{captionSide:"top"}}>Under Contract</caption>
        //                             <Thead>
        //                                 <Tr className={styles.tableH1}>
        //                                     <Th>Property</Th>
        //                                     <Th>Submitted</Th>
        //                                     <Th>Accepted</Th>
        //                                     <Th>Pro Role</Th>
        //                                     <Th>Status</Th>
        //                                 </Tr>
        //                             </Thead>
        //                             <Tbody style={{backgroundColor:"white"}}>
        //                                 {underContract.map(renderUnderContract)}
        //                             </Tbody>
        //                         </Table>
        //                 </div>

        //                 <div className="wrapper2 col-sm-5 col-md-4 col-lg-4" id="mobiletbl">
        //                         <Table hover>
        //                         <caption style={{captionSide:"top"}}>Submitted Offers</caption>
        //                             <Thead>
        //                                 <Tr className={styles.tableH1}>
        //                                     <Th>Property</Th>
        //                                     <Th>Submitted</Th>
        //                                     <Th>Pro Role</Th>
        //                                     <Th>Status</Th>
        //                                 </Tr>
        //                             </Thead>
        //                             <Tbody style={{backgroundColor:"white"}}>
        //                                 {submittedOffer.map(renderSubmitOffer)}
        //                             </Tbody>
        //                         </Table>
        //                 </div>
        //             </div>


        //             {/* <div className="row col-5"> */}
           
        //             </div>                    
        //         {/* </div> */}

        
        //         <div className="wrapper3" style={{margin:"30px 130px", margin:"auto"}}>
        //             <div className="row" style={{backgroundColor:"#FFFFFF"}}>
        //                 <h1 className={styles.heading}> Analyzed Properties </h1>
        //                 <div className="col-6" style={{textAlign:"left",  padding:"20px 40px"}}>
        //                     {/* <input type="checkbox" onChange={this.handleCheck} defaultChecked={this.state.checked} /> */}
        //                     <input className={styles.checkBox} type="checkbox" />
        //                     <label> Generate Additional Graphs </label><br></br> 
        //                     <input className={styles.checkBox} type="checkbox" />
        //                     <label> Generate Amortization Schedule </label>
        //                     <br></br> 
        //                     <button className="reportBtn"> Generate Report </button>
        //                 </div>

        //                 <div className="col-6" style={{textAlign:"left", padding:"20px 60px"}}>
        //                     {/* <input type="checkbox" onChange={this.handleCheck} defaultChecked={this.state.checked} /> */}
        //                     <input className={styles.checkBox} type="checkbox" />
        //                     <label> Generate Full Proforma </label><br></br> 
        //                     <input className={styles.checkBox} type="checkbox" />
        //                     <label> Attach Loaded Images </label> 
        //                 </div>

        //                 <h3 className="progressTxt"> Progress(70%) </h3>
        //                 <div className="progress">
        //                     <div className="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={{width:"70%"}}>
        //                     70%
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>

        //     </div>
        // <Footer />
        // </div>
        
    )
}

export default Teamprofile
