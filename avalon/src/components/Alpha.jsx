import React from "react";
import SidebarThree from "./SidebarThree";
import Nav from "../Nav";
import Card from "./Card";


function Alpha(){

    // let length = 25;
    // let cards = [];
    // for (let index = 0; index < length; index++) {
    //     cards.push(<Card key={index} />);
    // }

    return(
        <>
        <Nav/>
        <div className="flex w-64 ">
            <div className="">
                <SidebarThree/>
            </div>
            <div className=" ">

             <div className="flex justify-center h-[250px] m-10 mx-5 w-[50]">
             <Card />
             <Card />
             <Card />
             <Card />
             <Card />
             <Card/>
            
             </div>
             
            

             

             

            
            </div> 
            

            
            </div>
           


        
        
        </>
    )

}
export default Alpha