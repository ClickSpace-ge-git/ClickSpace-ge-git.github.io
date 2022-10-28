import "./TestLanguageBar.scss"

export default function TestLanguageBar() {
   return (
      <>
         <div className="TestLanguageBarContainer">
            <input type="checkbox" className="languageBtnCheck" id="checkbox"/>

            <div className="TestLanguageBarContainer2">

               <div className="LBC_Main">
                  <label htmlFor="checkbox">
                     <img src={require("../../media/images/Flags/en_gb.png")} alt="en"/>
                  </label>
               </div>

               <div className="LBC_Border"></div>

               <div className="LBC_ListContainer">
                  <ul className="LBCLC_List">
                     <li>
                        <img src={require("../../media/images/Flags/en_gb.png")} alt="en"/>
                     </li>
                     {/*----------------------------*/}
                     <li className="ka">
                        <img src={require("../../media/images/Flags/ge.png")} alt="ka"/>
                     </li>
                  </ul>
               </div>
            </div>


         </div>
      </>
   )
}