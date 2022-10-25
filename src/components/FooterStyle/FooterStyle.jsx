import "./FooterStyle.scss"

export default function FooterStyle() {
   return (
      <>
         <div className="FooterStyleContainer">
            <div className="FooterStyleContainer2">
               <div className="FSC_LogoGraph">
                  <img src={require("../../media/images/logo.png")} alt="Test" />
               </div>

               <div className="FSC_graph">
                  <ul className="FSCG_List">
                     <li className="showHover"><p>Home</p></li>
                     <li className="none"><p>About us</p></li>
                     <li className="none"><p>Our Team</p></li>
                     <li className="none"><p>Contact Us</p></li>
                     <li className="none"><p>Products</p></li>
                     <li className="none"><p>Services</p></li>
                     <li className="none"><p>Templates</p></li>
                  </ul>
               </div>
               <div className="FSC_graph">
                  <ul className="FSCG_LinkList">
                     <li><p><i className="fa-brands fa-facebook-f"></i></p></li>
                     <li><p><i className="fa-brands fa-linkedin-in"></i></p></li>
                     <li><p><i className="fa-brands fa-instagram"></i></p></li>
                     <li><p><i className="fa-brands fa-twitter"></i></p></li>
                     <li><p><i className="fa-brands fa-discord"></i></p></li>
                  </ul>
               </div>

            </div>









         </div>
      </>
   );
}