import React from "react";
import Icon from "@mdi/react";
import { mdiEarth, mdiGithub } from "@mdi/js";

function Footer() {
    return (
        <footer>
            <div className="links">
                <Icon path={mdiGithub} size="34px" color="#fff" />
            </div>
        </footer>
    );
}

export default Footer;
