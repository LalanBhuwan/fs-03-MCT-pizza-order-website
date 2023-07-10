import "./AddToCard.css";
import { useNavigate } from 'react-router-dom'

const AddToCard = () => {
  const navigate = useNavigate();
  const onlineNow =()=>{
    navigate("/ordersccess")
  }
  return (
    <div className="addtocard_main_container">
      <div className="addtocard_container">
        <div className="form_container">
          <div>
            <div className="text_addtocard">
              <h3>WELCOME TO ITALIAN PIZZA</h3>
              <p>We deliver pizza in 40 minutes max. If not - Pizza's on us!</p>
            </div>

            <form>
                <div>
                <label>Email</label>
                <br/>
                <input/>
                </div>

                <div>
                <label>Phone</label>
                <br/>
                <input/>
                
                <input/>
               
                <input/>
                    
                </div>
                <div>
                <label>Number of slices</label><br/>
                <input/>
                    
                </div>
                <div>
                <label>Pizza Size</label><br/>
                <input type="radio"/><label>8-inch</label>
                <input type="radio"/><label>10-inch</label>
                <input type="radio"/><label>12-inch</label>
                <input type="radio"/><label>14-inch</label>
                    
                </div>
                <div>
                    <label>Toppings</label>
                    <br/>
                    <input type="checkbox"/><label>Pepperoni</label>
                    <input type="checkbox"/><label>Onions</label>
                    <input type="checkbox"/><label>Mushrooms</label>
                    <input type="checkbox"/><label>Sausage</label>
                    
                </div>
                <div>
                    <span>*</span>
                    <input type="checkbox"/><label>I agree to the TERMS AND CONDITIONS</label>
                </div>
                
            </form>
            
          </div>
          
        </div>
        <div className="order_now_btn">
                <button onClick={onlineNow}>Order Now</button>
            </div>
      </div>
    </div>
  );
};
export default AddToCard;
