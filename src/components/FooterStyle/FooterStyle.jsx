import "./FooterStyle.scss"
import {useNavigate} from "react-router-dom";

export default function FooterStyle() {
   let navigate = useNavigate()

   const goToLink = (props) => {
      window.location.replace(props)
   }
   return (
      <>
         <div className="FooterStyleContainer">
            <div className="FooterStyleContainer2">
               <div className="FSC_LogoGraph">
                  <img src={require("../../media/images/logo.png")} alt="Test" />
               </div>

               <div className="FSC_graph">
                  <ul className="FSCG_List">
                     <li className="showHover" onClick={(e) => {navigate("/")}}><p>Home</p></li>
                     <li className="none"onClick={(e) => {navigate("/aboutus")}}><p>About us</p></li>
                     <li className="none"onClick={(e) => {navigate("/aboutus")}}><p>Our Team</p></li>
                     <li className="none"onClick={(e) => {goToLink("https://www.facebook.com/ClickSpace.ge")}}><p>Contact Us</p></li>
                     {/*<li className="none"><p>Products</p></li>*/}
                     <li className="none"onClick={(e) => {navigate("/services")}}><p>Services</p></li>
                     {/*<li className="none"><p>Templates</p></li>*/}
                  </ul>
               </div>
               <div className="FSC_graph">
                  <ul className="FSCG_LinkList">
                     <li><p><i className="fa-brands fa-facebook-f" onClick={(e) => {goToLink("https://www.facebook.com/ClickSpace.ge")}}></i></p></li>
                     <li><p><i className="fa-brands fa-linkedin-in" onClick={(e) => {goToLink("https://www.linkedin.com/company/79050191")}}></i></p></li>
                     <li><p><i className="fa-brands fa-instagram" ></i></p></li>
                     <li><p><i className="fa-brands fa-twitter" onClick={(e) => {goToLink("https://twitter.com/ClickspaceS")}}></i></p></li>
                     <li><p><i className="fa-brands fa-discord"></i></p></li>
                  </ul>
               </div>
               <div className="FSC2_copyRightPart">
                  <div className="FSC2_CRP_ArrowContainer">
                     <div className="Arrow"></div>
                  </div>
                  <div className="FSC2_CRP_Text">
                     <div className="FSC2_CRP_imageContainer">
                        <img src={require("../../media/images/onlyLogo.png")} alt="Test" />
                     </div>
                     <p className="FSC2_CRPT_text">©2022 ClickSpace, LTD</p>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
}