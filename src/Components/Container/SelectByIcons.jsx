import { BiCheese } from "react-icons/bi";
import { LuVegan } from "react-icons/lu";
import {GiChiliPepper, GiFoodChain, GiFruitBowl } from "react-icons/gi"
import {PiBowlFoodThin ,PiBoneLight} from "react-icons/pi"
import {FaChild } from "react-icons/fa";

const SelectByIcons = ()=>{
   const style = {
        color: "#F8F6F4",
        fontSize: "15px",
        textAlign: "center"

        

    }
    return(
        <div style={style}>
            <BiCheese/>&nbsp;<span>CHEESE</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <FaChild/>&nbsp;<span>FOR KIDS</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <PiBowlFoodThin/>&nbsp;<span>LIGHT</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <GiChiliPepper/>&nbsp;<span>PIQUANT</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <PiBoneLight/>&nbsp;<span>SAVDRY</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <GiFoodChain/>&nbsp;<span>SEA FOOD</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <GiFruitBowl/>&nbsp;<span>SWEET</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <LuVegan/>&nbsp;<span>VEGGIE</span>

        </div>
    )
}
export default SelectByIcons;