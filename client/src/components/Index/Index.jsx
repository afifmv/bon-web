import React from "react";
import "./Index.css";

function Index() {
  return (
    <div className="index-banner">
      <div className="button-div gfs-didot-regular">
        <a href="https://ubcifc.com/">UBC Fraternities</a>
        <a href="https://www.beta.org/">BETA International</a>
      </div>
      <img
        src="https://i.postimg.cc/hjqF4BtP/temp-Image-DXxz6y.avif"
        alt="Rush"
      />

      <div className="photo-div">
        <img
          src="https://i.postimg.cc/nVj4KTN4/31113803-10157301756346124-6862086652026683392-o.jpg"
          alt=""
          srcset=""
        />
        <img
          src="https://i.postimg.cc/yY3Ld7Vz/455969402-975925380888277-1952970490411345517-n.jpg"
          alt=""
          srcset=""
        />
        <img
          src="https://i.postimg.cc/65dtZJ0D/21558976-1706293446069982-2771339755398843141-n.jpg"
          alt=""
          srcset=""
        />
        <img
          src="https://i.postimg.cc/mgmDcWZT/our-mission.jpg"
          alt=""
          srcset=""
        />
      </div>
    </div>
  );
}

export default Index;
