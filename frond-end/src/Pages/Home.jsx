// import React from 'react'
// import main1 from "../assets/main1.jpg"
// import main2 from "../assets/main2.jpg"
// import main3 from "../assets/main3.jpg"
// import main4 from "../assets/main4.jpg"
// import main5 from "../assets/main5.jpg"
// import main6 from "../assets/main6.jpg"
// import "./Home.css"

// const Home =()=>{
//     return (
//         <div className='home'>
//             <div className='image-container'>
//             <img src={main1} alt="head1" />
//              <img src={main2} alt="head2" />
//               <img src={main3} alt="head3" />
//                <img src={main4} alt="head4" />
//                  <img src={main5} alt="head5" />
//                  <img src={main6} alt="head6" />
//                  </div>

//             <h1></h1>
//         </div>
//     )
// }
// export default Home;

import React from "react";
import main1 from "../assets/main1.jpg";
import main2 from "../assets/main2.jpg";
import main3 from "../assets/main3.jpg";
import main4 from "../assets/main4.jpg";
import main5 from "../assets/main5.jpg";
import main6 from "../assets/main6.jpg";
import offers from "../assets/offers.jpg";
import sale from "../assets/sale.jpg"
import arrival from "../assets/arrival.jpg"
import "./Home.css";



const Home = () => {
  return (
        <div className="page-wrapper">
    <div className="home">

      {/* IMAGE SLIDER — unchanged */}
      <div className="slider">
        <div className="slide-track">
          {[main1, main2, main3, main4, main5, main6,
            main1, main2, main3, main4, main5, main6
          ].map((img, i) => (
            <img key={i} src={img} alt={`slide-${i}`} />
          ))}
        </div>
      </div>

      {/* ARRIVAL + SALE — SAME ROW */}
      <div className="cards-row">

        <div className="arrival-card">
          <img src={arrival} alt="" />
          <div className="arrival-overlay">
            <h2>New Arrival</h2>
            <button>Shop Now</button>
          </div>
        </div>

        <div className="sale-banner">
          <img src={sale} alt="" />
          <h2>🔥 Flat 30% OFF — Limited Time Only!</h2>
        </div>

      </div>

    </div>
    </div>
  );
};

export default Home;
