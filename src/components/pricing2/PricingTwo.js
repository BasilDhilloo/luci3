import React from 'react';
import './pricing.scss'
import Header from './../header2/Header'
import Footer from './../footer/Footer';
// import styles from './pricing.module.css'
import vectorImg from './../../assets/Group 322.png'
import starImage from './../../assets/Group 321.png'
import crownImage from './../../assets/Group 320.png'



function CardHeader({ image, title, description }) {	
    // let source = {image};
	return (
		<div className="card-header" style={{background: "#4B176A"}}>
            <img style={{display:"inline"}} src={image} alt="This is image" />
			<h2>{ title }</h2>
			{/* <p>{ description }</p> */}
		</div>
	);
};

// function CardDescription({ image, title, description }) {	
//     // let source = {image};
// 	return (
// 		<div className="card-description">
//             <h2> <img src={image} alt="This is image" /></h2>
// 			<h2>{ title }</h2>
// 			{/* <p>{ description }</p> */}
// 		</div>
// 	);
// };

function CardBilling({ price, recurrency }) {
	return (
		<div className="card-billing">
	        <p className="price">{ price }.00$ / Month </p>
			<p>
				<span className="price">
					{ recurrency }.00$ / Year
				</span>
			</p>
		</div>
	);
};

function CardFeatures({ data }) {	
	return (
		<div className="card-features">
			<ul>
				{ 
					data.map((item, index) => {
						return (
							<li key={index}>{item}</li>
						)
					})
				}
			</ul>
		</div>
	);
};

function CardAction({ clickMe }) {
	return (
		<div className="card-action">
			<button onClick={clickMe}>SUBSCRIBE</button>
		</div>
	);
};

function PricingCard(props) {	
	const { 
    type,
    title,
    description,
    price,
    recurrency,
    mostPopular,
    image,
    data,
    clickMe
  } = props;
	
	return (
		<div className={`card pricing-card ${type}`}>
      { (mostPopular) ? <span className="most-popular">Most Popular</span> : null }
			{/* <CardDescription  image={image} title={title} description={description} /> */}
            <CardHeader  image={image} title={title} description={description} />
			<CardBilling price={price} recurrency={recurrency} />
			<CardFeatures data={data} />
			<CardAction clickMe={clickMe} />
		</div>
	);
};

function PricingTwo() {
  function handleClick() {
    console.log('Button clicked!');
  };
  
	return (
    <div style={{backgroundColor:"white"}}>
      <Header />
        <div className="container">
            <div className="rowOne">
                <h2> Pricing</h2>
                <p> LUCI is a no commitment monthly service
                that has multiple different packaged</p>
                <p>
                Paying for
                a year in advance offers a 10% discount on
                all products.</p>
            </div>
        </div>
    <div className="container">
		<div className="app-wrapper">
            
            {
              cardsData.map(props => {                              
                return (
                                      <PricingCard
                                          {...props}
                                          key={props.id}
                                          clickMe={handleClick} 
                                          />   
                )
              })
            }
            </div>
    </div>

        <Footer />
    </div>

	);
};

const cardsData = [
  {
    id: 1,
    type: 'Premium',
    title: ' Basic',
    description: 'Lorem ipsum',
    price:  5.00,
    recurrency: 54.00,
    mostPopular: false,
    image: vectorImg,
    data: ['Ability to analyze a prop based on a given strategy', 
         'Print out deal overview reports to give to lenders', 'Use your own Logo']
  },
  {
    id: 2,
    type: 'Premium',
    title: 'Standard',
    description: 'Lorem ipsum',
    price: 20.00,
    recurrency: 216.00,
    mostPopular: false,
    image: starImage,
    data: ['Track overall portfolio performances','link bank accounts andtrack cash reserves for each property','Compere projected to actual results']
  },
  {
    id: 3,
    type: 'Premium',
    title: ' Premium',
    description: 'Lorem ipsum',
    price: 5.00,
    recurrency: 54.00,
    mostPopular: false,
    image: crownImage,
    data: ['Renters portal','Create in depth partnership returns','Track who hes not paid rent','Allow renters to submit tweeks']
  }
];



export default PricingTwo;