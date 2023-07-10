import { Link } from "react-router-dom";
import "./Home.css";
import { AiOutlineTwitter, AiOutlineInstagram } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { BiLogoLinkedin } from "react-icons/bi";
import { GoLocation } from "react-icons/go";
import SelectByIcons from "../Container/SelectByIcons";
import Item from "../Container/Item";




const Home = () => {
  return (
    <div className="flx home_container">
      
      <div className="home_lt_main_container ">
       
        <div className="logo">
          <img
            src="https://donpeppe.qodeinteractive.com/wp-content/uploads/2019/11/h5-logo-divided-header-dark.png"
            width={100}
            height={70}
            alt="logo"
          />
        </div>

        <div className="flx home_menu flx_dir_cl">
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            HOME
          </Link>
          <Link to="/pages" style={{ textDecoration: "none", color: "black" }}>
            PAGES
          </Link>
          <Link to="/menu" style={{ textDecoration: "none", color: "black" }}>
            MENU
          </Link>
          <Link to="/events" style={{ textDecoration: "none", color: "black" }}>
            EVENTS
          </Link>
          <Link to="/blog" style={{ textDecoration: "none", color: "black" }}>
            BLOG
          </Link>
          <Link
            to="/landing"
            style={{ textDecoration: "none", color: "black" }}
          >
            LANDING
          </Link>
        </div>
       
        
        <div className="font_icons flx ">
          <AiOutlineTwitter />
          <FaFacebookF />
          <AiOutlineInstagram />
          <BiLogoLinkedin />
        </div>
        <div className="home_menu_btn flx">
          <button>ORDER ONLINE</button>
        </div>
      </div>

      <div className="home_rt_main_container ">
        <div className="bg_green flx">
          <div className="rt_home_text">
            <div className="mg_10px">
              <h1>
                DELIVERY TO THE <br />
                DOORSTEP
              </h1>
              <br/>
              <h6>
                <span className="yes">✓</span>choose your ingredients
              </h6>

              <h6>
                <span className="yes">✓</span>Get free delivery 24/7
              </h6>
              <h6>
                <span className="yes">✓</span>Special gift coupons
              </h6>
            </div>
            <div className="mg_10px">
              <input type="email" placeholder="Email..." style={{height:"30px", marginRight:"5px", padding:"10px"}}/>
              <button style={{borderStyle: "none", backgroundColor:"red", color:"white", width:"120px", height:"30px"}}>SUBSCRIBE</button>

              <br />
              <GoLocation style={{ color:"orange", fontWeight:"bolder"}}/> &nbsp;
              <button className="check_zone_btn mg_10px">
                
                Check delivery zone
              </button>
            </div>
          </div>
          <div className="home_image">
            <div className="best_offer_div">
              <h5>BEST <br/>OFFER</h5>
            </div>
            <div>
              <img
                src="https://donpeppe.qodeinteractive.com/wp-content/uploads/2019/10/h4-rev-img-1.png"
                width={450}
                height="500"
                alt="home_img"
              />
            </div>
            
          </div>
          <div className="scroll_div">
            SCROLL
          </div>
        </div>

        <div>
            <SelectByIcons/>
        </div>
        
        <div style={{display:"flex", flexWrap:"wrap"}}>
            <Item/>
           
        </div>

      </div>

    </div>
  );
};
export default Home;
