import "./screen.scss";

export default function HomeScreen() {
  return (
    // <div id="pda-home-screen">
    //   <div className=" row-2 d-flex justify-content-center">
    //     <div className="inner-row-left"></div>
    //     <div className="inner-row-center">
    //       <marquee behavior="" direction="left">
    //         hellow v2 world --Home
    //       </marquee>
    //       xcvxvxvc
    //     </div>
    //     <div className="inner-row-right"></div>
    //   </div>
    // </div>

    <div id="pda-home-screen">
    <div className=" row-2 d-flex justify-content-center">
      <div className="inner-row-left"></div>
      <div className="inner-row-center">

        <div className = "top-bar"></div>
        <div className = "top-phone-bat"></div>
        <div className = "top-time-date"></div>

        <div className= "the-image-home"></div>
        
      </div>
      <div className="inner-row-right"></div>
    </div>
  </div>
  );
}
