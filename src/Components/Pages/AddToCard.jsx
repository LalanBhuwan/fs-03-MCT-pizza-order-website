import "./AddToCard.css";
import { useNavigate } from "react-router-dom";

const AddToCard = () => {
  const navigate = useNavigate();
  const navtoquick = useNavigate();
  const backToQuick = () => {
    navtoquick("/quick");
  };
  const onlineNow = () => {
    navigate("/ordersccess");
  };
  return (
    <div className="addtocard_main_container">
      <div className="addtocard_container">
        <div className="form_container">
          <div className="">
            <div className="text_addtocard">
              <h3>WELCOME TO ITALIAN PIZZA</h3>
              <p>We deliver pizza in 40 minutes max. If not - Pizza's on us!</p>
            </div>

            <form className="pding" id="order-form">
              <div>
                <label>Email</label>
                <br />
                <input type="email" className="br5px" />
              </div>

              <div>
                <label>Phone</label>
                <br />
                <input type="number" className="ph br5px" placeholder="Area" />
                &nbsp;&nbsp;
                <input type="number" className="ph br5px" placeholder="Local" />
                &nbsp;&nbsp;
                <input type="number" className="ph br5px" placeholder="Local" />
                &nbsp;&nbsp;
              </div>
              <div>
                <label>Number of slices</label>
                <br />
                <input type="number" className="br5px" />
              </div>
              <div>
                <label>Pizza Size</label>
                <br />
                <input type="radio" id="8inch" name="psize" />
                <label htmlFor="8inch">8-inch</label>&nbsp;&nbsp;
                <input type="radio" id="10inch" name="psize" />
                <label htmlFor="10inch">10-inch</label>&nbsp;&nbsp;
                <input type="radio" id="12inch" name="psize" />
                <label htmlFor="12inch">12-inch</label>&nbsp;&nbsp;
                <input type="radio" id="14inch" name="psize" />
                <label htmlFor="14inch">14-inch</label>
              </div>
              <div>
                <label>Toppings</label>
                <br />
                <input type="checkbox" />
                <label>Pepperoni</label>&nbsp;&nbsp;
                <input type="checkbox" />
                <label>Onions</label>&nbsp;&nbsp;
                <input type="checkbox" />
                <label>Mushrooms</label>&nbsp;&nbsp;
                <input type="checkbox" />
                <label>Sausage</label>
              </div>
              <div>
                <span style={{color: "red", marginRight: "2px"}}>*</span>
                <input type="checkbox" />
                <label>I agree to the TERMS AND CONDITIONS</label>
              </div>
            </form>
          </div>
        </div>
        <div className="order_now_btn">
          <button type="submit" form="order-form" onClick={onlineNow}>
            Order Now
          </button>
        </div>
        <div className="backtoquick_div">
          <button onClick={backToQuick}>Back</button>
        </div>
      </div>
    </div>
  );
};
export default AddToCard;
