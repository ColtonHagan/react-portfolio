import { Link } from "react-router-dom";
import "./index.scss"; 
import { useEffect, useState } from "react";
import AnimatedLetters from "../AnimatedLetters";
import Loader from "react-loaders";

const Home = () => {
    const [letters, setLetters] = useState("letter-animate");
    const nameArray = ["C", "o", "l", "t", "o", "n"];
    const jobArray = ["S", "o", "f", "t", "w", "a", "r", "e", " ", "E", "n", "g", "i", "n", "e", "e", "r"];

    useEffect(() => {
        setTimeout(() => {
            setLetters('letter-animate-hover');
        }, 3000);
    }, []);

    return (
        <>
            <div className="container home-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters letterClass={letters} strArray={["H", "i", ","]} idx={10}/> 
                        <br/> 
                        <AnimatedLetters letterClass={letters} strArray={["I", "\'", "m", " "]} idx={13}/>
                        <AnimatedLetters letterClass={letters} strArray={nameArray} idx={17}/>
                        <br/> 
                        <AnimatedLetters letterClass={letters} strArray={jobArray} idx={23}/>
                    </h1>
                    <h2>Full Cycle Developer & Web Designer</h2>
                    <Link to="/contact" className="flat-button">CONTACT ME</Link>
                </div>
                <div className="image-zone">
                    
                </div>
            </div>
            <Loader type="triangle-skew-spin" />
        </>
    );
}
export default Home