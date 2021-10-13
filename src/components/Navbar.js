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
import johndoe from "../image/Johndoe.jpg";

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
                <img src={johndoe} id="profile-img" alt="" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <aside>
        <div className="container">
          <div className="profile">
            <div className="profile-box">
              <img src={johndoe} alt="John doe" />
              <span className="user-id">john_doe</span>
              <span id="user-name">JOHN DOE</span>
            </div>
          </div>
          <div className="suggestions">
            <p>Suggestions For You</p>
            <ul>
              <li>
                <img src={johndoe} alt="" />
                <div>
                  <span className="user-id">adir_elmakyes</span>
                  <div className="icons">
                    <ul className="social">
                      <li className="linkedin">
                        <a href="#">
                          <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                      </li>
                      <li className="github">
                        <a href="#">
                          <FontAwesomeIcon icon={faGithub} />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <a href="#" className="follow">
                  Follow
                </a>
              </li>
              <li>
                <img src={johndoe} alt="" />
                <div>
                  <span className="user-id">idan_refaeli</span>
                  <div className="icons">
                    <ul className="social">
                      <li className="linkedin">
                        <a href="#">
                          <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                      </li>
                      <li className="github">
                        <a href="#">
                          <FontAwesomeIcon icon={faGithub} />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <a href="#" className="follow">
                  Follow
                </a>
              </li>
              <li>
                <img src={johndoe} alt="" />
                <div>
                  <span className="user-id">roni_kipnis</span>
                  <div className="icons">
                    <ul className="social">
                      <li className="linkedin">
                        <a href="#">
                          <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                      </li>
                      <li className="github">
                        <a href="#">
                          <FontAwesomeIcon icon={faGithub} />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <a href="#" className="follow">
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
