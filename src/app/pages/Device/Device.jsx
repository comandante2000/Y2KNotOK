import "./Device.scss";
export default function Device() {
  //   <div class="box" style={{width: '194px',margin: '21% 25%'}}>
  return (
    <div id="pda-device">
      <div class="container v2 d-flex justify-content-center gx-0 gy-0">
        <div class="box">
          <div class="border border-danger row-1"></div>
          <div class="border border-primary row-2 d-flex justify-content-center">
            <div class="inner-row-left"></div>
            <div class="inner-row-center">
              <marquee behavior="" direction="left">
                hellow v2 world
              </marquee>
            </div>
            <div class="inner-row-right"></div>
          </div>
          <div class="border border-warning row-3"></div>
        </div>
      </div>
    </div>
  );
}
