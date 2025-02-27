import React from "react";
import bannerBgImg from "../../../assets/banner/bannerBg.png";
import "./CustomBanner.css";

const CustomBanner = ({ title = "Banner" }) => {
   return (
      <div className="bannerBox">
         <div className="bannerBgImgBox">
            <img src={bannerBgImg} alt="" className="bannerBgImg" />
         </div>
         <div
            className="banner_mb_parallax_container"
            id="banner_mb_parallax_two"
         >
            <div className="banner_mb_parallax_overlay">
               {" "}
               <div
                  className="bannerWrap
   "
               >
                  <div className="banenrText">{title}</div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default CustomBanner;
