// import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./QuickView.css";
const QuickView = () => {
//   const [item, setItem] = useState([]);

//   const { id } = useParams();
  const navgate = useNavigate();
  const navForCross = useNavigate();
  const goToAddToCard = () => {
    navgate("/addtocard");
  };

  const navgateToHome = () => {
    navForCross("/backToHOme");
  };

//   const options = {
//     method: "GET",

//     headers: {
//       "X-RapidAPI-Key": "6cea1082dcmsh3cb126976d787bbp1f283ejsnf57e7d827fe5",
//       "X-RapidAPI-Host": "pizzaallapala.p.rapidapi.com",
//     },
//   };

//   useEffect(() => {
//     fetch(`https://pizzaallapala.p.rapidapi.com/productos`, options)
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data.productos);
//         setItem(data.productos);
//       });
//   });

//   const clickedItem = item.find((item) => item.id === parseInt(id));

  return (
    <div className="main_container">
     

      <div className="quick_container">
      <div className="backtohome_div" onClick={navgateToHome}>
      ❌
       </div>
        <div className="quick_img">
          <img src="https://objectstorage.us-ashburn-1.oraclecloud.com/n/idkur78yryic/b/mamacocina/o/pizaa.jpg" alt="pizza" />
          
        </div>
        <div className="quick_text">
          <h3>Dos porciones de muzzarella</h3>
          
          <h4 style={{ color: "red" }}>$250.00</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            architecto maiores quod, quas soluta doloribus tenetur debitis
            aspernatur qui rem.
          </p>
          <div className="nutritional_value">
            <h6>NUTRITIONAL VALUE PER 100 G:</h6>
            <p>
              Calories.................<span>800 kcal</span>
            </p>
            <p>
              Calories.................<span>800 kcal</span>
            </p>
            <p>
              Calories.................<span>800 kcal</span>
            </p>
          </div>
          <div className="colaNdmealRate">
            <p>
              COLA
              <span>0</span>
              <span>$7.00</span>
            </p>

            <p>
              MEAL<span>0</span>
              <span>$50.00</span>
            </p>
          </div>

          <button onClick={goToAddToCard} className="quick_comp_btn">
            ADD TO CART
          </button>
        </div>
      </div>

      
    </div>
  );
};
export default QuickView;

// import { useEffect, useState } from 'react'

// import { useNavigate, useParams } from 'react-router-dom'

// const QuickView = () => {
// //   const navigate=useNavigate()
//   const {id}=useParams()
//   const [pizza,setPizza]=useState([])

//   const options = {
//              method: 'GET',

//              headers: {
//                'X-RapidAPI-Key': '6cea1082dcmsh3cb126976d787bbp1f283ejsnf57e7d827fe5',
//                'X-RapidAPI-Host': 'pizzaallapala.p.rapidapi.com'
//              }
//           };

//           useEffect(()=>{
//              fetch("https://pizzaallapala.p.rapidapi.com/productos",options)
//              .then((res)=> res.json())
//             .then((data)=>{
//                  console.log(data.productos);
//                  setPizza(data.productos);
//              })
//            })
//   const clickedItem=pizza.find((element)=>element.id===parseInt(id))
// //   const cart=()=>{
// //     navigate('/Add')
// //   }
//   return (
//     <div style={{margin:'100px 50px' ,display:'flex' ,padding:'20px' ,alignItems:'center',boxShadow:'0px 0px 30px gray',borderRadius:'20px'}} className='interface'>
//       <div className='left-panel'>
//         {clickedItem&&(
//           <div style={{borderRight:'4px solid black',padding:'20px'}} >
//             <img src={clickedItem.linkImagen} alt='img loading' width={400} height={400} style={{borderRadius:"50%"}}/>
//           </div>
//         )}
//       </div>
//       <div className='right-panel' style={{marginLeft:'40px' ,textAlign:"center"}}>
//         {clickedItem&&(
//           <div>
//             <h2>{clickedItem.nombre}</h2>
//             <p>Rs: {clickedItem.precio}</p>
//             <h3>About: {clickedItem.descripcion}</h3>
//             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, blanditiis dignissimos voluptates suscipit adipisci nam alias, dicta nemo quaerat voluptas perspiciatis ratione error illo autem, architecto cupiditate! Quidem, fugiat aperiam?</p>
//             <button className='cart ' >Add To Cart</button>
//           </div>
//         )}
//       </div>
//     </div>
//   )
// }

// export default QuickView
