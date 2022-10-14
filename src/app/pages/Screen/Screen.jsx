import "./screen.scss";
export default function Screen() {
  //   <div class="box" style={{width: '194px',margin: '21% 25%'}}>
  return (
    <div
      id="pda-screen"
      class="border border-primary row-2 d-flex justify-content-center"
    >
      <div class="inner-row-left"></div>
      <div class="inner-row-center">
        <marquee behavior="" direction="left">
          hellow v2 world
        </marquee>
      </div>
      <div class="inner-row-right"></div>
    </div>
  );
}
