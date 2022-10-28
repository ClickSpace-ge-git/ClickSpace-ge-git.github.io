import "./HeaderStyle.scss"
import LanguageBar from "../LanguageBar/LanguageBar"
export default function HeaderStyle() {

   return (
      <>
         {/*<input className="hideNavBar1" type="checkbox" id="check2"/>*/}

         <div className="HeaderStyleContainer">
            <div className="HeaderStyleContainer2">

               <input className="hideNavBar" type="checkbox" id="check"/>

               <div className="HSC2_NavBar">
                  <div className="logoPart">
                     <img src={require("../../media/images/logo.png")} alt="logo.png"/>
                  </div>

                  <div className="textPart">
                     <ul className="TP_list">
                        <li><p>Home</p></li>
                        <li><p>About Us</p></li>
                        <li><p>Services</p></li>
                        <li><p>Products</p></li>
                        <li><p>Contact Us</p></li>
                     </ul>
                  </div>
               </div>

               <div className="mobileMode">
                  <label htmlFor="check">
                     <i className="fa-solid fa-bars"></i>
                  </label>
               </div>

               {/*<div className="links">*/}
               {/*   <LanguageBar />*/}
               {/*</div>*/}
            </div>
         </div>
      </>
   );
}

