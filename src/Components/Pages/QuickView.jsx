

import { useNavigate } from "react-router-dom";
import "./QuickView.css";
const QuickView = ()=>{
   
    const navgate = useNavigate()
    const goToAddToCard = ()=>{
        navgate("/addtocard") 
    }

    

   

    return(
        <div className="main_container">

        
        <div className="quick_container">
            <div className="quick_img">
                <img src="https://www.nicepng.com/png/full/304-3042458_mexican-green-wave-pizza-hot-n-spicy-chicken.png" alt="pizza"/>
            </div>
            <div className="quick_text">
                <h3>BISMARCK</h3>
                <h6>**** <span>customer review</span></h6>
                <h4 style={{color:'red'}}>$7.00</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate architecto maiores quod, quas soluta doloribus tenetur debitis aspernatur qui rem.</p>
                <div className="nutritional_value">
                    <h6>NUTRITIONAL VALUE PER 100 G:</h6>
                    <p>Calories.................<span>800 kcal</span></p>
                    <p>Calories.................<span>800 kcal</span></p>
                    <p>Calories.................<span>800 kcal</span></p>

                </div>
                <div className="colaNdmealRate">
                    <p>COLA
                        <span>0</span>
                        <span>$7.00</span></p>

                    <p>MEAL<span>0</span>
                    <span>$50.00</span></p>
                </div>
                
                <button onClick={goToAddToCard} className="quick_comp_btn">ADD TO CART</button>
            </div>
        </div>
        </div>
    )
}
export default QuickView;