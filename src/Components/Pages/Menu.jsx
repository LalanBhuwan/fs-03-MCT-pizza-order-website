import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AiOutlineHeart } from "react-icons/ai";
import { BiSolidPaperPlane } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import { BsPhone } from "react-icons/bs";
import { GiScooter } from "react-icons/gi";
import { LiaSearchSolid } from "react-icons/lia";
import "./Menu.css";
import "../Container/Item.css";

const Menu = () => {
  const [item, setItem] = useState([]);

  const options = {
    method: "GET",
    url: "https://pizzaallapala.p.rapidapi.com/productos-promo",

    headers: {
      "X-RapidAPI-Key": "6cea1082dcmsh3cb126976d787bbp1f283ejsnf57e7d827fe5",
      "X-RapidAPI-Host": "pizzaallapala.p.rapidapi.com",
    },
  };

  useEffect(() => {
    fetch("https://pizzaallapala.p.rapidapi.com/productos", options)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.productos);
        setItem(data.productos);
      });
  });

  return (
    <div>
      <nav className="flx nav_bar">
        <div className="nav_bar1 flx">
          <Link className="deco_none clr">
            <BsPhone />
            &nbsp;CALL US: +381 65 666 666
          </Link>
          <Link className="deco_none clr">
            <CiLocationOn />
            &nbsp;CORSD ITALI AA NAPLES, AZ 85022
          </Link>
        </div>
        <div className="nav_bar2 flx">
          <Link className="deco_none clr">
            <AiOutlineHeart />
            &nbsp;LOYALTY CARD
          </Link>
          <Link className="deco_none clr">
            <CiLocationOn />
            &nbsp;LOCATIONS
          </Link>
          <Link className="deco_none clr">
            <BiSolidPaperPlane />
            &nbsp;CAREERS
          </Link>
        </div>
      </nav>
      <header className="flx header_container">
        <div className="flx lt_side_container">
          <div className="logo">
            <img
              src="https://donpeppe.qodeinteractive.com/wp-content/uploads/2019/11/h5-logo-divided-header-dark.png"
              width={100}
              height={50}
              alt="logo"
            />
          </div>

          <div className="flx home_menus ">
            <Link to="/" className="deco_none fs">
              HOME
            </Link>
            <Link to="/pages" className="deco_none fs">
              PAGES
            </Link>
            <Link to="/menu" className="deco_none fs">
              MENU
            </Link>
            <Link to="/events" className="deco_none fs">
              EVENTS
            </Link>
            <Link to="/blog" className="deco_none fs">
              BLOG
            </Link>
            <Link to="/landing" className="deco_none fs">
              LANDING
            </Link>
          </div>
        </div>
        <div className="rt_side_container flx">
          <div className="addcount">0</div>
          <Link className="deco_none fs">
            <GiScooter style={{ fontSize: "19px", marginTop: "2px" }} />
            &nbsp; CART
          </Link>

          <Link className="deco_none fs">
            <LiaSearchSolid style={{ fontSize: "15px", marginTop: "2px" }} />
            &nbsp; SEARCH
          </Link>
          <button>ORDER ONLINE</button>
        </div>
      </header>
      <section>
        <div className="flx menu_light">
          <div className="near">
            <p>CHOOSE YOUR FAVORITE</p>
            <h1>MENU LIGHT</h1>
          </div>
        </div>
        <div className="item_container">
          {item.map((ele, idx) => {
            return (
              <div className="card" key={idx}>
                <img src={ele.linkImagen} alt="pizza-img"/>
                <h4>{ele.descripcion}</h4>

                <h5>${ele.precio}</h5>
                <div className="item_btn">
                  <button className="add_cart_btn">ADD TO CART</button>
                  &nbsp;&nbsp;
                  <button className="view_btn">QUICK VIEW</button>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
export default Menu;
