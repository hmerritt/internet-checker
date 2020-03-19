import React from "react";
import Icon from "@mdi/react";
import { mdiEarth, mdiGithub } from "@mdi/js";
import IconMerritt from "../images/merritt.svg";

function Header() {
    return (
        <header>
            <div className="title">
                <Icon path={mdiEarth} size="50px" color="#fff" />
                <h1>Internet Checker</h1>
            </div>
            <div className="links">
                <a href="https://github.com/hmerritt/internet-checker">
                    <Icon path={mdiGithub} size="34px" color="#fff" />
                </a>
                <a href="https://github.com/hmerritt/">
                    <img src={IconMerritt} alt="" width="31px" />
                </a>
            </div>
        </header>
    );
}

export default Header;
