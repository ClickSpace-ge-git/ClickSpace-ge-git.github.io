import "./LanguageBar.scss"

export default function LanguageBar() {
   return (
      <>
         <div className="LanguageBarContainer">
            <input type="checkbox" className="languageBtnCheck" id="checkbox"/>

            <div className="LBC_Main">
                  <img src={require("../../media/images/Flags/en.png")} alt=""/>
                  <p>ENG</p>
                  <i id="icon" className="fa-solid fa-chevron-left"></i>
               <label htmlFor="checkbox"></label>
            </div>

            <div className="LBC_ListContainer">
               <ul className="LBCLC_List">
                  <li>
                     <img src={require("../../media/images/Flags/en.png")} alt="en"/>
                     <p>ENG</p>
                  </li>
                  {/*----------------------------*/}
                  <li className="ka">
                     <img src={require("../../media/images/Flags/ka.png")} alt="ka"/>
                     <p>ქარ</p>
                  </li>
               </ul>
            </div>
         </div>
      </>
   );
}