import React from "react";
import home_img from "../images/home-main.svg";
import Typedes from "./Typedes";
import myImg from "../images/avatar.svg";
import { Tilt } from 'react-tilt';
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiFillTwitterCircle,
  AiFillLinkedin,
} from "react-icons/ai";
const Home = () => {

 
  return (
    <div id="home">
      <section className="container-fluid Home_about_section">
        <div className="row home-content">
          <div className="col-12 col-md-6 home-content-col">
            <h1 style={{ paddingBottom: 15 }} className="heading">
              Hi There!{" "}
              <span className="wave" role="img" aria-labelledby="wave">
                👋🏻
              </span>
            </h1>

            <h1 className="heading-name">
              I'M
              <strong className="main-name"> SOUMYAJIT BEHERA</strong>
            </h1>
            <div className="typestyle" style={{ textAlign: "left" }}>
              <Typedes />
            </div>
          </div>

          <div className="col-12 col-md-6 home-content-col-img">
            <img src={home_img} alt="Profile" className="img-fluid" />
          </div>
        </div>
      </section>

      <section className="container-fluid Home_intro_section">
        <div className="row">
          <div className="col-sm-12 col-md-8 home_intro_col"  >
            <h1 className="text-center">LET ME <span className="purple"> INTRODUCE </span> MYSELF</h1>
            <br/><br/>
            <p>
              I fell in love with programming and I have at least learnt
              something, I think… 🤷‍♂️<br/><br/>
            
            I am fluent in classics like <span className="purple"> C++, Javascript and Python.</span><br/><br/>
            My field of Interest's are building new   <span className="purple">Web Technologies and Products</span> and also in  <br/> areas related to <span className="purple"> Deep Learning and Natural Launguage Processing.</span><br/><br/>
           Whenever possible, I also apply my passion for developing products with Node.js<br/>  and <span className="purple">Modern Javascript Library and Frameworks </span> like <span className="purple">React.js and Next.js </span></p>
          </div>
          <div className="col-sm-12 col-md-4 home_intro_avatar mt-3" >
          <Tilt> <img src={myImg} className="img-fluid" alt="avatar" /></Tilt> 
          </div>
        </div>
        <div className="row home_connect_row">
               <div className="col-12 home_connect">
                   <h1>FIND ME ON</h1>
                    <p >Feel free to <span className="purple"> connect </span> with me</p>
                      <ul className="home-about-social-links">
                        <li><a  className="icon-colour home-social-icons"><AiFillGithub/></a></li>
                        <li><a  className="icon-colour home-social-icons"><AiFillTwitterCircle/></a></li>
                        <li><a  className="icon-colour home-social-icons"><AiFillLinkedin/></a></li>
                        <li><a  className="icon-colour home-social-icons"><AiFillInstagram/></a></li>
                      </ul>
               </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
