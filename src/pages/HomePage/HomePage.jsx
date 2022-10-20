import "./HomePage.scss"
import HeaderStyle from "../../components/HeaderStyle/HeaderStyle"
import StartPart from "../../components/StartPart/StartPart"
import ServicePart from "../../components/ServicePart/ServicePart"
import AboutUsPart from "../../components/AboutUsPart/AboutUsPart"
import FooterStyle from "../../components/FooterStyle/FooterStyle"

export default function HomePage() {
   return (
      <>
         <div className="HomePageContainer">
            <HeaderStyle/>
            <StartPart/>
            <ServicePart/>
            <AboutUsPart/>
            <FooterStyle/>
         </div>
      </>
   );
}

