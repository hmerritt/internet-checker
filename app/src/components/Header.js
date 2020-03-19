import React from "react";
import Icon from "@mdi/react";
import { mdiEarth, mdiGithub } from "@mdi/js";
import GitHubButton from "react-github-btn";

function Header() {
    return (
        <header>
            <div className="title">
                <Icon path={mdiEarth} size="50px" color="#fff" />
                <h1>Internet Checker</h1>
            </div>
            <div className="links">
                <GitHubButton
                    href="https://github.com/hmerritt/internet-checker"
                    data-size="large"
                    data-show-count="true"
                    aria-label="Star hmerritt/internet-checker on GitHub"
                >
                    Star
                </GitHubButton>
                <Icon path={mdiGithub} size="34px" color="#fff" />
            </div>
        </header>
    );
}

export default Header;
