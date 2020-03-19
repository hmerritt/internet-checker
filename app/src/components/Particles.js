import React from "react";
import { default as ReactParticles } from "react-particles-js";

function Particles() {
    return (
        <div className="particles">
            <ReactParticles
                params={{
                    particles: {
                        number: {
                            value: 50,
                            density: {
                                enable: true,
                                value_area: 1500
                            }
                        },
                        color: {
                            value: "#444444"
                        },
                        line_linked: {
                            enable: true,
                            opacity: 0.5,
                            distance: 80,
                            color: "#444444"
                        },
                        move: {
                            direction: "none",
                            speed: 1
                        },
                        size: {
                            value: 2,
                            random: true
                        },
                        opacity: {
                            anim: {
                                enable: true,
                                speed: 1,
                                opacity_min: 0.05
                            }
                        }
                    },
                    interactivity: {
                        events: {
                            onclick: {
                                enable: true,
                                mode: "push"
                            }
                        },
                        modes: {
                            push: {
                                particles_nb: 1
                            }
                        }
                    },
                    retina_detect: true
                }}
            />
        </div>
    );
}

export default Particles;
