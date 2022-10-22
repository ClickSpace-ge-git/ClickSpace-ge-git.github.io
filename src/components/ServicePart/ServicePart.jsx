import "./ServicePart.scss"
import Temp from "../../media/images/temporary.png"
import Webcreation from "../../media/images/Service main page/Website creation.png"
import Webopt from "../../media/images/Service main page/web opt.png"
import Appdev from "../../media/images/Service main page/app dev.png"
import Techsup from "../../media/images/Service main page/tech sup.png"

export default function ServicePart() {

   // const App = () => {
   //    const handleclickSPCCard = (event, param)
   // }VIEW MORE BUTTON ON THE BOTTOM!!!!!!! TEQSTIS GAAGIAVE!!! USE ONE COLOR FOR IMAGE



   return (
      <>
         <div className="ServicePartContainer">
            <h1 className="SPC-Title">Our Services</h1>
            <div className="SPC-Cards">
               <div className="SPC-Card">
                  <img className="SPC-Card-image" src={Webcreation}></img>
                  <h3 className="SPC-Card-Name">
                     Website Creation
                  </h3>
                  <p className="SPC-Card-Description">
                     We get you an outstanding, responsive website that follows a fast go-to-market strategy and is ready to be tested by your users.
                  </p>
                  <button className="SPC-Card-button">
                  Know More
                  </button>
               </div>
               
               <div className="SPC-Card">
                  <img className="SPC-Card-image" src={Webopt}></img>
                  <h3 className="SPC-Card-Name">
                     Website Optimization
                  </h3>
                  <p className="SPC-Card-Description">
                     We make your website better, improve it and optimize it and give them the cutting edge they need for your line of work.
                  </p>
                  <button className="SPC-Card-button">
                  Know More
                  </button>
               </div>

               <div className="SPC-Card">
                  <img className="SPC-Card-image" src={Appdev}></img>
                  <h3 className="SPC-Card-Name">
                     App Development
                  </h3>
                  <p className="SPC-Card-Description">
                     Become a click-away through a mobile app. We use cutting-edge technology and exceptional design to enhance your mobile app workflows.
                  </p>
                  <button className="SPC-Card-button">
                  Know More
                  </button>
               </div>

               <div className="SPC-Card">
                  <img className="SPC-Card-image" src={Techsup}></img>
                  <h3 className="SPC-Card-Name">
                     Technical Support & Consulting
                  </h3>
                  <p className="SPC-Card-Description">
                     We share our experience and knowledge with you and give you the advice you need on how to improve yourself as well as provide technical support if needed.
                  </p>
                  <button className="SPC-Card-button">
                     Know More
                  </button>
               </div>
            </div>
         </div>
      </>
   );
}