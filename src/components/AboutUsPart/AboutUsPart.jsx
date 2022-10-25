import "./AboutUsPart.scss"
import {useNavigate} from "react-router-dom";

export default function AboutUsPart() {
   return (
      <>
         <div className="AboutUsPartContainer">
            <div className="AboutUsPartContainer2">
               <div className="AUPC2_LeftPart">
                  <div className="AUPC2_LeftPart_InnerContainer">
                     <img src={require("../../media/images/HomePage/aboutUsPartImage.png")} alt="Test"/>
                  </div>
               </div>

               <div className="AUPC2_RightPart">
                  <div className="AUPC2_RightPart_InnerContainer">
                     <h3>about us</h3>

                     <h1>what is clickspace?</h1>

                     <p className="AUPC2_RP_Text">
                        ClickSpace is a Web and Mobile development start-up founded in Q1 2022 by 5 students at Kutaisi
                        International University. The idea came about as they were developing web applications for their
                        scripting languages course, realizing that most traditional developers in Georgia use outdated
                        methods or create static applications that require great effort to modernize the group decided
                        to create their own company. Focusing on creating flexible and dynamic products that can be
                        used and changed even by those with little to no experience in website design or technical
                        knowhow.Thus allowing our client to keep up with the rapidly changing needs of a digital
                        business.
                     </p>

                     <button className="AUPC2_RPBtn"><a href="/aboutus"><p>Learn more</p></a></button>
                  </div>
               </div>

               <div className="AUPC2_RightPart hide">
                  <h3>ჩვენს შესახებ</h3>
                  <h1>რა არის ClickSpace?</h1>
                  <p className="AUPC2_RP_Text">
                     ClickSpace არის ვებ და მობილური განვითარების დამწყები, რომელიც დაარსდა 2022 წელს ქუთაისის
                     საერთაშორისო უნივერსიტეტში 5 პირველი კურსელი სტუდენტის მიერ. იდეა გაჩნდა, როდესაც ისინი შეიმუშავებდნენ ვებ -
                     პროგრამებს თავიანთი სკრიპტირების ენების კურსისთვის, გააცნობიერეს, რომ საქართველოში ტრადიციული
                     დეველოპერები იყენებენ მოძველებულ მეთოდებს ან ქმნიან სტატიკურ პროგრამებს, რომლებიც დიდ ძალისხმევას
                     მოითხოვს ჯგუფის მოდერნიზაციისთვის, გადაწყვიტეს შექმნან საკუთარი კომპანია. ფოკუსირება მოქნილი და
                     დინამიური პროდუქტების შექმნაზე, რომელიც შეიძლება გამოყენებულ იქნას და შეიცვალოს იმ ადამიანების მიერ,
                     რომელთაც არ აქვთ გამოცდილება ვებ - გვერდის დიზაინში ან ტექნიკურ ცოდნასთან დაკავშირებით. ეს საშუალებას
                     აძლევს ჩვენს კლიენტს შეინარჩუნოს ციფრული ბიზნესის სწრაფად ცვალებადი საჭიროებები.
                  </p>
                  <button className="AUPC2_RPBtn"><a href="/aboutus"><p>გაიგე მეტი</p></a></button>
               </div>

            </div>
         </div>
      </>
   );
}