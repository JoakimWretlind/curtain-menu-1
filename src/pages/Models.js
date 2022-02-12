import React from "react";
import gsap from "gsap";
import { useCurtains } from "react-curtains";
import Slideshow from "../components/Slideshow";
import { ModelsSection, ModelsContainer, H3 } from "./models.style";


const Models = () => {
    useCurtains((curtains) => {
        // use gsap ticker to render our curtains scene
        gsap.ticker.add(curtains.render.bind(curtains));
    });

    return (
        <ModelsSection>
            <ModelsContainer>
                <Slideshow />
            </ModelsContainer>
        </ModelsSection>
    );
};

export default Models