import "./HeaderStyle.scss"
import LanguageBar from "../LanguageBar/LanguageBar"
import {useNavigate} from "react-router-dom";
export default function HeaderStyle() {
   let navigate = useNavigate()

   const goToLink = (props) => {
      window.location.replace(props)
   }
   return (
      <>
         {/*<input className="hideNavBar1" type="checkbox" id="check2"/>*/}

         <div className="HeaderStyleContainer">
            <div className="HeaderStyleContainer2">

               <input className="hideNavBar" type="checkbox" id="check"/>

               <div className="HSC2_MoveDivs">
                  <div className="logoPart">
                     <img src={require("../../media/images/logo.png")} alt="logo.png"/>
                  </div>

                  <div className="textPart">
                     <ul className="TP_list">
                        <li onClick={(e) => {navigate("/")}}><p>Home</p></li>
                        <li onClick={(e) => {navigate("/services")}}><p>Services</p></li>
                        <li onClick={(e) => {navigate("/aboutus")}}><p>About Us</p></li>
                        <li onClick={(e) => {goToLink("https://www.facebook.com/ClickSpace.ge")}}><p>Contact Us</p></li>
                     </ul>

                     {/*<ul className="TP_list">*/}
                     {/*   <li><p>მთავარი</p></li>*/}
                     {/*   <li><p>სერვისები</p></li>*/}
                     {/*   <li><p>ჩვენს შესახებ</p></li>*/}
                     {/*   <li><p>დაგვიკავშირდით</p></li>*/}
                     {/*</ul>*/}
                  </div>
               </div>

               <div className="mobileMode">
                  <label htmlFor="check">
                     <i className="fa-solid fa-bars"></i>
                  </label>
               </div>

               <div className="links">
                  <LanguageBar />
               </div>
            </div>
         </div>
      </>
   );
}

