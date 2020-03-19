import React from "react";
import Icon from "@mdi/react";
import { mdiGithub } from "@mdi/js";

function Footer() {
    return (
        <footer>
            <div className="links">
                <a href="https://github.com/hmerritt/internet-checker">
                    <Icon path={mdiGithub} size="34px" color="#fff" />
                </a>
            </div>
        </footer>
    );
}

export default Footer;
