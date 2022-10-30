import "./ServicePage.scss"
import Webcreation from "../../media/images/Service main page/Website creation.png"
import Webopt from "../../media/images/Service main page/web opt.png"
import Appdev from "../../media/images/Service main page/app dev.png"
import Techsup from "../../media/images/Service main page/tech sup.png"



export default function ServicePage() {

 
 
    return (
       <>
       <div className="ServicePageContainer">

            <div className="SPGC-services">
                    <div className="SPGC-card">
                        <p className="SPGC-card-reqserv">your selected service:</p>
                        <img className="SPGC-card-image" src={Webcreation}></img>
                        <h3 className="SPGC-card-Name">
                            Website Creation
                        </h3>
                        <p className="SPGC-card-Description">
                            We get you an outstanding, responsive website that follows a fast go-to-market strategy and is ready to be tested by your users.
                        </p>
                    </div>

                
                <div className="SPGC-contact">

                    <div className="SPGC-Cont-inputs">
                        <h4 className="SPGC-Cont-inp-title">Tell us what you are looking for and we will do our best to create the most optimal solution for you!</h4>

                        <div className="SPGC-Cont-inp-field">
                            <h5 className="SPGC-Cont-inplabel">Full Name</h5>
                            <input className="SPGC-Cont-inp" type="text" ></input>
                        </div>

                        <div className="SPGC-Cont-inp-field">
                            <h5 className="SPGC-Cont-inplabel">Company</h5>
                            <input className="SPGC-Cont-inp" type="text" ></input>
                        </div>

                        <div className="SPGC-Cont-inp-field">
                            <h5 className="SPGC-Cont-inplabel">E-Mail</h5>
                            <input className="SPGC-Cont-inp" type="text" ></input>
                        </div>

                        <div className="SPGC-Cont-inp-field">
                            <h5 className="SPGC-Cont-inplabel">Additiona info</h5>
                            <input className="SPGC-Cont-inp" type="text" ></input>
                        </div>


                        {/* <div className="SPGC-Cont-inp-field">
                            <h4 className="SPGC-Cont-inplabel">Reqruested Service</h4>
                            <select  className="SPGC-Cont-inp-selector" type="select">
                                <option value="WebCreation">Website Creation</option>
                                <option value="WebOpt">Website Optimization</option>
                                <option value="AppDev">App Development</option>
                                <option value="TechSup">Technical Support & Consulting</option>
                            </select>
                        </div> */}

                        <button className="SPGC-Cont-inp-bttn">Submit</button>
                    </div>

                </div>
            </div>

       </div>

       </>
    );
}