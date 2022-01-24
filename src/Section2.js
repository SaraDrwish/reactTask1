
import React from "react" ;
import "./Section2.css";
import Section2Icons from "./Section2Icons"

    function Section2(){

        return(
            
            <div className="Section2">
               
               <h1>At Your Service</h1>
               <span> </span>

                <div className="iconsContainer">


                        <Section2Icons title="Sturdy Themes" 
                         parag="Our themes are updated regularly to keep them bug free!" 
                          icon="far fa-heart" />



                        <Section2Icons title="Up to Date" 
                         parag="All dependencies are kept current to keep things fresh." 
                          icon="fas fa-laptop" /> 

                          <Section2Icons title="Ready to Publish" 
                         parag="You can use this design as is, or you can make changes!" 
                          icon="far fa-gem" />

                          <Section2Icons title="Made with Love" 
                         parag="Is it really open source if it's not made with love?" 
                          icon="far fa-heart" /> 



                        {/* <i class="fas fa-laptop"></i> */}

                        {/* <i class="fas fa-globe"></i> */}

                        {/* <i className="far fa-gem"> */}

                        {/* <i class="far fa-heart"></i> */}
                     

                        {/* <Section2Icons/>
                        <Section2Icons/>
                        <Section2Icons/>
                        <Section2Icons/> */}


                </div>


            </div>

        );
        
    }

export default Section2 ;