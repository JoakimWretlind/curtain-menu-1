import React from "react";
import gsap from "gsap";
import { useCurtains } from "react-curtains";
import Slideshow from "../components/Slideshow";
import { HomeSection, HomeContainer, H3 } from "./home.styling";

const Home = () => {
    useCurtains((curtains) => {
        // use gsap ticker to render our curtains scene
        gsap.ticker.add(curtains.render.bind(curtains));
    });
    return (
        <HomeSection>
            <HomeContainer>
                <Slideshow />
            </HomeContainer>
        </HomeSection>
    );
};

export default Home;
