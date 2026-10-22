import React from 'react';

const About = () => {
    return (
        <div className="aboutUs">
            <div className="container-fluid row justify-content-center aboutUsContent">
                <div className="col-12 col-md-6 col-sm-12 col-lg-6 d-flex flex-column align-items-center justify-content-start ">
                    
                </div>
                <div className="col-12 col-md-6 col-sm-12 col-lg-6 d-flex flex-column align-items-center justify-content-start">
                    <h1 className="m-5 p-2 text-white">About Us</h1>
                    <p className="m-5 p-2 text-white">Since our founding in 2015, our mission has always been to bring quality and convenience to our customers. We believe in transparency, sustainability, and delivering value in every product we offer.
                        Over the years, we've grown from a small local shop to a trusted e-commerce brand serving thousands of satisfied customers. Every product is carefully selected and tested to ensure it meets our high standards.
                        Our team is passionate about innovation and constantly works on improving the shopping experience, offering new products, and listening to our community's feedback.
                        We are committed to giving back to the community and supporting local initiatives, because we believe a business should make a positive impact beyond its sales.</p>
                        <button className="btn btn-primary m-5 p-2">Contact Us</button>
                </div>
            </div>
        </div>
    );
}
const Team = () => {
    return (
        <div className="team m-5 border-top border-bottom border-dark border-3">
            <h2 className=" p-2 text-center ">Meet Our Team</h2>
            <div className="container-fluid row justify-content-center my-5">
                <div className="col-12 col-md-6 col-sm-12 col-lg-3 d-flex flex-column align-items-center justify-content-start my-3" >
                    <img src="/team1.png" className="teamImage" />
                    <h3 >Emily Johnson</h3>
                       <p>Chief Executive Officer (CEO)</p> 
                    <p >Emily leads our team with vision and a passion for innovation. With over 10 years of experience in the e-commerce industry, her mission is to ensure every customer has the best possible experience.</p>
                    <button className="btn text-white align-bottom">Contact</button>
                </div>
                <div className="col-12 col-md-6 col-sm-12 col-lg-3 d-flex flex-column align-items-center justify-content-start my-3">
                    <img src="/team2.png" className="teamImage" />
                    <h3 >Sarah Smith</h3>
                    <p>Head of Product Development</p>
                    <p >Sarah oversees product development and selection. Her expertise in market trends and product quality ensures that our offerings meet the highest standards.</p>
                    <button className="btn text-white align-bottom">Contact</button>
                </div>
                <div className="col-12 col-md-6 col-sm-12 col-lg-3 d-flex flex-column align-items-center justify-content-start my-3">
                    <img src="/team3.png" className="teamImage" />
                    <h3 >Michael Smith</h3>
                    <p>Marketing & Community Manager</p>
                    <p >Michael manages all marketing campaigns and community engagement. He ensures that every customer receives clear information and feels connected to our brand.</p>
                    <button className="btn text-white align-bottom">Contact</button>
                </div>
            </div>
        </div>
    );
}

const AboutUs = () => {
    return (
        <div>
            <About />
            <Team />
        </div>
    );
}

export default AboutUs;