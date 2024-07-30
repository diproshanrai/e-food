import { useRouteError } from "react-router-dom";

const About = ()=>{
    const err =  useRouteError();
    console.log(err);
    return(
        <div className="about">
            <h1>THIs is About u and me </h1>
        </div>
    )
}

export default About;