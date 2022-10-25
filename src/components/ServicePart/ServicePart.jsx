import "./ServicePart.scss"

export default function ServicePart() {
   return (
      <>
         <div className="ServicePartContainer">
            <div className="ServicePartContainer2">
               <h1 className="SPC_Title">Our Service</h1>

               <div className="SPC_ServiceList">
                  <div className="SPCSL_innerContainer">
                     <div className="SPCS_Service">
                        <h2 className="SPCSS_icon"><i className="fa-solid fa-tv"></i></h2>
                        <h3 className="SPCSS_Title">Website Development & Design</h3>
                        <p className="SPCSS_Text">
                           Design: ClickSpace will design your website front end(the visuals) and provide
                           you the templates to plug your own back end into. ClickSpace will develop the
                           back-end(database, system support) and provide you guidance on how to implement
                           it into your front-end.
                        </p>
                        {/*<ul className="SPCSS_details">*/}
                        {/*   <li><p></p></li>*/}
                        {/*</ul>*/}
                     </div>

                     <div className="SPCS_Service">
                        <h2 className="SPCSS_icon"><i className="fa-solid fa-mobile"></i></h2>
                        <h3 className="SPCSS_Title">Mobile Development & Design</h3>
                        <p className="SPCSS_Text">
                           Design: ClickSpace will design your website front end(the visuals) and provide
                           you the templates to plug your own back end into. ClickSpace will develop the
                           back-end(database, system support) and provide you guidance on how to implement
                           it into your front-end.
                        </p>
                        {/*<ul className="SPCSS_details">*/}
                        {/*   <li><p></p></li>*/}
                        {/*</ul>*/}
                     </div>

                     <div className="SPCS_Service">
                        <h2 className="SPCSS_icon"><i className="fa-solid fa-gears"></i></h2>
                        <h3 className="SPCSS_Title">Technical Support</h3>
                        <p className="SPCSS_Text">
                           Design: ClickSpace will design your website front end(the visuals) and provide
                           you the templates to plug your own back end into. ClickSpace will develop the
                           back-end(database, system support) and provide you guidance on how to implement
                           it into your front-end.
                        </p>
                        {/*<ul className="SPCSS_details">*/}
                        {/*   <li><p></p></li>*/}
                        {/*</ul>*/}
                     </div>

                     <div className="SPCS_Service">
                        <h2 className="SPCSS_icon"><i className="fa-solid fa-comments"></i></h2>
                        <h3 className="SPCSS_Title">Conculsation</h3>
                        <p className="SPCSS_Text">
                           Design: ClickSpace will design your website front end(the visuals) and provide
                           you the templates to plug your own back end into. ClickSpace will develop the
                           back-end(database, system support) and provide you guidance on how to implement
                           it into your front-end.
                        </p>
                        {/*<ul className="SPCSS_details">*/}
                        {/*   <li><p></p></li>*/}
                        {/*</ul>*/}
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
}