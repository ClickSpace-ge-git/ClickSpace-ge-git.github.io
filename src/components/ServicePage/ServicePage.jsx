import "./ServicePage.scss"
// import Webcreation from "../../media/images/Service main page/Website creation.png"
// import Webopt from "../../media/images/Service main page/web opt.png"
// import Appdev from "../../media/images/Service main page/app dev.png"
// import Techsup from "../../media/images/Service main page/tech sup.png"



export default function ServicePage() {

 
 
    return (
       <>
       <div className="ServicePageContainer">

            <div className="SPGC-services">
                {/* <div className="SPGC-srvc-card">
                    <img className="SPGC-srvc-card-image" src={Webcreation}></img>
                    <h3 className="SPGC-srvc-card-Name">
                        Website Creation
                    </h3>
                    <p className="SPGC-srvc-card-Description">
                        We get you an outstanding, responsive website that follows a fast go-to-market strategy and is ready to be tested by your users.
                    </p>
                    <input className="SPC-Card-button" type="checkbox">
                    Know More
                    </input>
                </div> */}

            </div>
            <div className="SPGC-contact">

                <div className="SPGC-Cont-inputs">
                    <h3 className="SPGC-Cont-inp-title">Give us what you are looking for and we will do our best to find the best solution for you</h3>

                    <div className="SPGC-Cont-inp-field">
                        <h4 className="SPGC-Cont-inplabel">Full Name</h4>
                        <input className="SPGC-Cont-inp" type="text" placeholder="Name Surname"></input>
                    </div>

                    <div className="SPGC-Cont-inp-field">
                        <h4 className="SPGC-Cont-inplabel">Company</h4>
                        <input className="SPGC-Cont-inp" type="text" placeholder="Company"></input>
                    </div>

                    <div className="SPGC-Cont-inp-field">
                        <h4 className="SPGC-Cont-inplabel">E-Mail</h4>
                        <input className="SPGC-Cont-inp" type="text" placeholder="NameSurname@E-Mail.com"></input>
                    </div>

                    <div className="SPGC-Cont-inp-field">
                        <h4 className="SPGC-Cont-inplabel">Your Message</h4>
                        <input className="SPGC-Cont-inp" type="text" placeholder="Your Message"></input>
                    </div>


                    <div className="SPGC-Cont-inp-field">
                        <h4 className="SPGC-Cont-inplabel">Reqruested Service</h4>
                        <select  className="SPGC-Cont-inp-selector" type="select">
                            <option value="WebCreation">Website Creation</option>
                            <option value="WebOpt">Website Optimization</option>
                            <option value="AppDev">App Development</option>
                            <option value="TechSup">Technical Support & Consulting</option>
                        </select>
                    </div>

                    <button className="SPGC-Cont-inp-bttn">Submit</button>
                </div>

            </div>

       </div>

       </>
    );
}