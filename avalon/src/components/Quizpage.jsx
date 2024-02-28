import React from "react";
import Quiz from "./Quiz";
import Nav from "../Nav";
function Quizpage(){
    return(
        <>
        <Nav/>
        <h1 className="flex justify-center text-3xl  font-bold self-center">Quiz</h1>
        <Quiz/>
        <Quiz/>
        <Quiz/>
        <Quiz/>
        <Quiz/>
        
        
        </>


    )




}
export default Quizpage