import "./AboutUsPage.scss"


export default function AboutUs() {
   return (
      <>
         <div className="AboutUsPageContainer">
            <div className="AbUsPTittle">
               <h1> ABOUT US </h1>
               <hr/>
               <br/>
               <div className="AbUsPTImg">
                  <img src={require("../../media/images/AbUs1.jpg")} alt="AbUs1.jpg"/>
               </div>

               <div className="AbUsP_TextContainer">
                  <p className="AbUsP_Text">
                     ClickSpace is a Georgian Web and Mobile Development Start-up. We specialize in developing modular and scalable
                     applications that are easy to use and accomodate future growth and change of our customers businesses
                  </p>
               </div>
            </div>
            <div className="AbUsPBoxContatiner">
               <div className="AbUsPBox">
                  <div className="AbUsPBItem text-center">
                     <i className="fa-solid fa-book"></i>
                     <h3>History</h3><hr/><br/>

                     <p>
                        ClickSpace as its first project entered the USAID georgian ICT development project,
                        creating Web Applications for small to medium business, where it developed e-commerce
                        applications over 2 months.
                     </p>
                  </div>
               </div>
               <div className="AbUsPBox">
                  <div className="AbUsPBItem text-center">
                     <i className="fa-solid fa-earth-americas"></i>
                     <h3>Mission</h3><hr/><br/>

                     <p>
                        Our mission is to provide our customers the tools they will need to ensure success
                        in the modern, digital marketplace.
                     </p>
                  </div>
               </div>
               <div className="AbUsPBox">
                  <div className="AbUsPBItem text-center">
                     <i className="fa-solid fa-rocket"></i>
                     <h3>Passion</h3><hr/><br/>

                     <p>
                        We strive to keep up with the modern marketplace and always offer solutions that go
                        above and beyond the standards of the marketplace.
                     </p>
                  </div>
               </div>
            </div>
            <section className="ABUSTeam">
               <h1>Our Team</h1>

               <div className="ABUSTContainer">
                  <div className='ABUSTeamThree'>
                     <div className="ABUSTCCard">
                        <div className="ABUSTCCContent">
                           <div className="ABUSTCCCImageBox">
                              <img src={require("../../media/images/AbUsTeam2.jpg")} alt="AbUsTeam2.jpg"/>
                           </div>

                           <div className="ABUSTCCCBox">
                              <h4 className="ABUSTCCC_UserName">Alexander Sainishvili</h4>
                              <h5 className="ABUSTCCC_UserProf">Founder</h5>
                           </div>

                           <div className="ABUSTCCCBSocial">
                              <i className="fa-brands fa-facebook-f"></i>
                              <i className="fa-brands fa-twitter"></i>
                              <i className="fa-brands fa-instagram"></i>
                           </div>
                        </div>
                     </div>

                     <div className="ABUSTCCard">
                     <div className="ABUSTCCContent">
                        <div className="ABUSTCCCImageBox">
                           <img src={require("../../media/images/AbUsTeam1.jpg")} alt="AbUsTeam1.jpg"/>
                        </div>
                        <div className="ABUSTCCCBox">
                           <h4 className="ABUSTCCC_UserName">Ioane Devdariani</h4>
                           <h5 className="ABUSTCCC_UserProf">Founder</h5>
                        </div>

                        <div className="ABUSTCCCBSocial">
                           <i className="fa-brands fa-facebook-f"></i>
                           <i className="fa-brands fa-twitter"></i>
                          <i className="fa-brands fa-instagram"></i>
                        </div>
                     </div>
                  </div>

                     <div className="ABUSTCCard">
                     <div className="ABUSTCCContent">
                        <div className="ABUSTCCCImageBox">
                           <img src={require("../../media/images/AbUsTeam4.jpg")} alt="AbUsTeam4.jpg"/>
                        </div>

                        <div className="ABUSTCCCBox">
                           <h4 className="ABUSTCCC_UserName">Luka Karoiani</h4>
                           <h5 className="ABUSTCCC_UserProf">Founder</h5>
                        </div>

                        <div className="ABUSTCCCBSocial">
                           <i className="fa-brands fa-facebook-f"></i>
                           <i className="fa-brands fa-twitter"></i>
                          <i className="fa-brands fa-instagram"></i>
                        </div>
                     </div>
                  </div>
                  </div>

                  <div className='ABUSTeamTwo'>
                     <div className="ABUSTCCard">
                        <div className="ABUSTCCContent">
                           <div className="ABUSTCCCImageBox">
                              <img src={require("../../media/images/AbUsTeam3.jpg")} alt="AbUsTeam3.jpg"/>
                           </div>
                           <div className="ABUSTCCCBox">
                              <h4 className="ABUSTCCC_UserName">Dachi Skhiladze</h4>
                              <h5 className="ABUSTCCC_UserProf">Founder</h5>
                           </div>

                           <div className="ABUSTCCCBSocial">
                              <i className="fa-brands fa-facebook-f"></i>
                              <i className="fa-brands fa-twitter"></i>
                              <i className="fa-brands fa-instagram"></i>
                           </div>
                        </div>
                     </div>

                     <div className="ABUSTCCard">
                        <div className="ABUSTCCContent">
                           <div className="ABUSTCCCImageBox">
                              <img src={require("../../media/images/AbUsTeam5.jpg")} alt="AbUsTeam5.jpg"/>
                           </div>
                           <div className="ABUSTCCCBox">
                              <h4 className="ABUSTCCC_UserName">Irakli Okropiridze</h4>
                              <h5 className="ABUSTCCC_UserProf">Founder</h5>
                           </div>

                           <div className="ABUSTCCCBSocial">
                              <i className="fa-brands fa-facebook-f"></i>
                              <i className="fa-brands fa-twitter"></i>
                              <i className="fa-brands fa-instagram"></i>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </section>
         </div>
      </>
   )
}