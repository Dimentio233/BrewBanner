import React from "react"
import { useNavigate } from 'react-router-dom';

export default function LandingTwo() {

    const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);
    
    function resizeWindow() {
        setWindowWidth(window.innerWidth);
    };

    React.useEffect(() => {
        window.addEventListener("resize", resizeWindow);
        return () => window.removeEventListener("resize", resizeWindow);
    }, []);

    console.log(windowWidth);

    const navigateTo = useNavigate();

    function handleOnclick() {
        navigateTo("/soon");
    }

    return (
    <section className="landing-container">
        <div className="landing-img-container">
            <button className="button1" onClick={handleOnclick}>Advertise With Us</button>
            {windowWidth > 769 ? 
                <>
                <img className="landing-img-1" src="../assets/images/old-cup.png"/>
                <img className="new-cup" src="../assets/images/new-cup.png"/>
                </> : 
                <div className="cup-container">
                <img className="landing-img-1" src="../assets/images/old-cup.png"/>
                <img className="new-cup" src="../assets/images/new-cup.png"/>
                </div>}
            <button className="button2" onClick={handleOnclick}>Distribute With Us</button>
        </div>
    </section>
    )
}