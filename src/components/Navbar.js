import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookMessenger, faGit } from "@fortawesome/free-brands-svg-icons";
import {
  faHome,
  faCompass,
  faHeart,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import instagram from "../image/Instapro.png";
import adir_elmakyes from "../image/adir_elmakyes.jpg";
import idan_refaeli from "../image/idan_refaeli.png";
import ron_kipnis from "../image/ron_kipnis.png";
import react_logo from "../image/React_Native_Logo.png";

import { useGlobalContext } from "../context";

const Navbar = () => {
  const { query, handleChange } = useGlobalContext();
  return (
    <nav id="navbar" className="white-color">
      <div id="navbar-showcase">
        <div id="logo">
          <img src={instagram} alt="Instagram" id="logo" />
        </div>

        <div id="search">
          <input
            style={{ fontfamily: "FontAwesome" }}
            type="text"
            placeholder="Search..."
            value={query}
            onChange={(e) => {
              return handleChange(e);
            }}
          />
        </div>

        <div id="icons">
          <ul>
            <li className="current">
              <FontAwesomeIcon icon={faHome} className="fa-2x" />
            </li>

            <li>
              <FontAwesomeIcon icon={faFacebookMessenger} className="fa-2x" />
            </li>

            <li>
              <FontAwesomeIcon icon={faCompass} className="fa-2x" />
            </li>

            <li>
              <FontAwesomeIcon icon={faHeart} className="fa-2x" />
            </li>

            <li>
              <a href="#index">
                <img src={react_logo} id="profile-img" alt="" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <aside>
        <div className="container">
          <div className="profile">
            <div className="profile-box">
              <img src={react_logo} alt="John doe" />
              <span className="user-id">React</span>
              <span id="user-name">ReactJS</span>
            </div>
          </div>
          <div className="suggestions">
            <p>Suggestions For You</p>
            <ul>
              <li>
                <img src={adir_elmakyes} alt="" />
                <div>
                  <span className="user-id">adir_elmakyes</span>
                  <div className="icons">
                    <ul className="social">
                      <li className="linkedin">
                        <a
                          href="https://www.linkedin.com/in/adir-elmakyes/"
                          target="_blank"
                        >
                          <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                      </li>
                      <li className="github">
                        <a href="https://github.com/adir4455" target="_blank">
                          <FontAwesomeIcon icon={faGithub} />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <a
                  href="https://www.instagram.com/adirelmakyes/"
                  target="_blank"
                  className="follow"
                >
                  Follow
                </a>
              </li>
              <li>
                <img src={idan_refaeli} alt="" />
                <div>
                  <span className="user-id">idan_refaeli</span>
                  <div className="icons">
                    <ul className="social">
                      <li className="linkedin">
                        <a
                          href="https://www.linkedin.com/in/idan-refaeli-65082a175/"
                          target="_blank"
                        >
                          <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                      </li>
                      <li className="github" target="_blank">
                        <a href="https://github.com/idanref">
                          <FontAwesomeIcon icon={faGithub} />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <a
                  href="https://www.instagram.com/idan_refaeli/"
                  target="_blank"
                  className="follow"
                >
                  Follow
                </a>
              </li>
              <li>
                <img src={ron_kipnis} alt="" />
                <div>
                  <span className="user-id">roni_kipnis</span>
                  <div className="icons">
                    <ul className="social">
                      <li className="linkedin">
                        <a
                          href="https://www.linkedin.com/in/ron-kipnis/"
                          target="_blank"
                        >
                          <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                      </li>
                      <li className="github">
                        <a href="https://github.com/RoniKipnis" target="_blank">
                          <FontAwesomeIcon icon={faGithub} />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <a
                  href="https://www.instagram.com/roni.kipnis/"
                  target="_blank"
                  className="follow"
                >
                  Follow
                </a>
              </li>
            </ul>
          </div>
        </div>
      </aside>
    </nav>
  );
};

export default Navbar;
