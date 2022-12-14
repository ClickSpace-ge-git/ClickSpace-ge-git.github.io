import "./StartPart.scss"

export default function StartPart() {

   const goToLink = (props) => {
      window.location.replace(props)
   }

   return (
      <>
         <div className="StartPartContainer">
            <div className="StartPartContainer2">
               <div className="SPC2_MainTextContainer">
                  <div className="SPC2_MainText">
                     <h1 className="SPC2MT_Title"><span>Click</span>Space</h1>
                     <h3 className="SPC2MT_SecondTitle">
                        <span>F</span>aster, <span>B</span>etter, <span>C</span>heaper
                     </h3>
                     <button className="SPC2MT_CU" onClick={(e) => {goToLink("https://www.facebook.com/ClickSpace.ge")}}>Contact Us</button>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
}