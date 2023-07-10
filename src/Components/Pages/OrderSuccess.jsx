import { useNavigate } from "react-router-dom";

const OrderSuccess = () => {
  const navgateToHome = useNavigate();
  const backToHomeFromSuccess = () => {
    navgateToHome("/homes");
  };
  return (
    
      <div style={{ textAlign: "center" }}>
        <h4 style={{color:"#16FF00"}}>Your Ordered Successfull!</h4>
        <img
          src="https://img.freepik.com/free-photo/pizza-delivery-man-shouting-by-megaphone_1368-8262.jpg?size=626&ext=jpg&ga=GA1.2.1192807999.1679122721&semt=ais"
          alt="success-img"
        />
        <div
        className="backtohomefromsuccess_div"
        style={{ float: "right", margin: "0 20px ", cursor: "pointer"}}
        onClick={backToHomeFromSuccess}
      >
        ❌
      </div>
      </div>
      
    
  );
};
export default OrderSuccess;
