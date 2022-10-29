import "./HomePage.scss"
import HeaderStyle from "../../components/HeaderStyle/HeaderStyle"
import StartPart from "../../components/StartPart/StartPart"
import ServicePart from "../../components/ServicePart/ServicePart"
import AboutUsPart from "../../components/AboutUsPart/AboutUsPart"
import FooterStyle from "../../components/FooterStyle/FooterStyle"
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";


export default function HomePage() {
   let navigate = useNavigate()
   useEffect(() => {
      const redirect = localStorage.getItem("staticserve")
      if(redirect !== null){
         localStorage.removeItem("staticserve")
         navigate(redirect)
      }
   },)

   return (
      <>
         <div className="HomePageContainer">
            <div className="HomePageContainer2">
               <HeaderStyle/>
               <StartPart/>
               <ServicePart/>
               <AboutUsPart/>
               <FooterStyle/>
            </div>
         </div>
      </>
   );
}

