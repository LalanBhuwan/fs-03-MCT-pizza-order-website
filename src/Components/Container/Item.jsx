import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

import "./Item.css";

const Item = () => {
  const [item, setItem] = useState([]);

  const navgate = useNavigate();
  const navigateForAddCard = useNavigate();

  const goAddToCard = ()=>{
    navigateForAddCard("/addcard")
  }

  const goToQuickView = () => {
    navgate("/quickview");
  };

  const options = {
    method: "GET",

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
    <div className="item_container">
      {item.map((item, idx) => {
        return (
          <div className="card " key={idx}>
            <img src={item.linkImagen} alt="pizza" />
            <h4>{item.descripcion}</h4>
            {/* <h6>*****</h6> */}
            <h5>${item.precio}</h5>
            <div className="item_btn">
              <button className="add_cart_btn" onClick={goAddToCard }>ADD TO CART</button>&nbsp;&nbsp;
              <Link to={`/quickview/&{item.id}`}>
                <button onClick={goToQuickView} className="view_btn">
                  QUICK VIEW
                </button>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Item;
