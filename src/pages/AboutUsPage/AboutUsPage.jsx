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
            
      <p>ClickSpace is a Georgian Web and Mobile Development Start-up. We specialize in developing modular and scalable applications that are easy to use and accomodate future growth and change of our customers businesses</p>
  </div>
          <div class="AbUsPBoxContatiner">
              <div class="AbUsPBox">
                 <div class="AbUsPBItem text-center">
                 <i class="fa fa-book"></i>
                  <h3>History</h3>
                  <hr/>
                  <br/>
                  <p> ClickSpace as its first project entered the USAID georgian ICT development project, creating Web Applications for small to medium business, where it developed e-commerce applications over 2 months.
 </p>
                  </div>
              </div>
              <div class="AbUsPBox">
                 <div class="AbUsPBItem text-center">
                 <i class="fa fa-globe"></i>
                    <h3>Mission</h3>
                  <hr/>
                  <br/>

                  <p>Our mission is to provide our customers the tools they will need to ensure success in the modern, digital marketplace.</p>
                  </div>
              </div>
              <div class="AbUsPBox">
                 <div class="AbUsPBItem text-center">
                  <i class="fa fa-rocket"></i>
                  <h3>Passion</h3>
                  <hr/>
                  <br/>

                  <p>We strive to keep up with the modern marketplace and always offer solutions that go above and beyond the standards of the marketplace.</p>
                  </div>
               </div>
           </div>
           <section class="ABUSTeam">
           <h1>Our Team</h1>
        <div class="ABUSTContainer">
            <div className='ABUSTeamThree'>
            <div class="ABUSTCCard">
                <div class="ABUSTCCContent">
                    <div class="ABUSTCCCImageBox">
                        <img src="../images/person_icon.png" alt=""/>
                    </div>
                    <div class="ABUSTCCCBox">
                        <h4>Alexander Sainishvili</h4>
                        <h5>Founder</h5>
                    </div>
                    <div class="ABUSTCCCBSocial">
                        <i class="fa fa-facebook-f"></i>
                        <i class="fa fa-twitter"></i>
                        <i class="fa fa-instagram"></i>
                    </div>
                </div>
            </div>

            <div class="ABUSTCCard">
                <div class="ABUSTCCContent">
                    <div class="ABUSTCCCImageBox">
                        <img src="../images/person_icon.png" alt=""/>
                    </div>
                    <div class="ABUSTCCCBox">
                        <h4>Ioane Devdariani</h4>
                        <h5>Founder</h5>
                    </div>
                    <div class="ABUSTCCCBSocial">
                        <i class="fa fa-facebook-f"></i>
                        <i class="fa fa-twitter"></i>
                        <i class="fa fa-instagram"></i>
                    </div>
                </div>
            </div>

            <div class="ABUSTCCard">
                <div class="ABUSTCCContent">
                    <div class="ABUSTCCCImageBox">
                        <img src="../images/person_icon.png" alt=""/>
                    </div>
                    <div class="ABUSTCCCBox">
                        <h4>Luka Karoiani</h4>
                        <h5>Founder</h5>
                    </div>
                    <div class="ABUSTCCCBSocial">
                        <i class="fa fa-facebook-f"></i>
                        <i class="fa fa-twitter"></i>
                        <i class="fa fa-instagram"></i>
                    </div>
                </div>
            </div>

        </div>    
        <div className='ABUSTeamTwo'>
            <div class="ABUSTCCard">
                
                <div class="ABUSTCCContent">
                    <div class="ABUSTCCCImageBox">
                        <img src="../images/person_icon.png" alt=""/>
                    </div>
                    <div class="ABUSTCCCBox">
                        <h4>Dachi Skhiladze</h4>
                        <h5>Founder</h5>
                    </div>
                    <div class="ABUSTCCCBSocial">
                        <i class="fa fa-facebook-f"></i>
                        <i class="fa fa-twitter"></i>
                        <i class="fa fa-instagram"></i>
                    </div>
                </div>
            </div>

            <div class="ABUSTCCard">
                <div class="ABUSTCCContent">
                    <div class="ABUSTCCCImageBox">
                        <img src="../images/person_icon.png" alt=""/>
                    </div>
                    <div class="ABUSTCCCBox">
                        <h4>Irakli Okropiridze</h4>
                        <h5>Founder</h5>
                    </div>
                    <div class="ABUSTCCCBSocial">
                        <i class="fa fa-facebook-f"></i>
                        <i class="fa fa-twitter"></i>
                        <i class="fa fa-instagram"></i>
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