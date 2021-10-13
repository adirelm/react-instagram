import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faHeart,
  faComment,
  faPaperPlane,
  faBookmark,
  faSmile,
  faEllipsisH,
} from "@fortawesome/free-solid-svg-icons";
import johndoe from "../image/Johndoe.jpg";

const Post = ({
  urls: { regular },
  likes,
  user: {
    username,
    bio,
    profile_image: { medium },
  },
  alt_description,
  description,
}) => {
  return (
    <article id="post">
      <div className="post-upper">
        <div>
          <img src={medium} alt="" />
          <h4>{username}</h4>
        </div>

        <FontAwesomeIcon icon={faEllipsisH} />
      </div>

      <div
        style={{
          background: `url('${regular}') center center/cover`,
        }}
        className="post-img"
      ></div>

      <div className="post-icons">
        <div>
          <button>
            <FontAwesomeIcon icon={faHeart} className="fa-2x" />
          </button>
          <button>
            <FontAwesomeIcon icon={faComment} className="fa-2x" />
          </button>
          <button>
            <FontAwesomeIcon icon={faPaperPlane} className="fa-2x" />
          </button>
        </div>
        <button>
          <FontAwesomeIcon icon={faBookmark} className="fa-2x" />
        </button>
      </div>
      <div className="post-bottom">
        <span>{likes} likes</span>

        <div className="post-comments">
          <div className="post-users-comments">
            <div>
              <p>
                <span className="username">{username}</span>
                {alt_description}
              </p>
            </div>
            <span className="post-all-comments">
              View all {Math.ceil(Math.random() * 999)} comments
            </span>

            <div>
              <p>
                <span className="username">bill_gates</span>
                {description || "Wow, it's awesome"}
              </p>
            </div>

            <div className="post-last-comment">
              <p>
                <span className="username">elon_musk</span>
                {bio ||
                  "Well, it is the most amazing picture i have ever seen!"}
              </p>
            </div>

            <span className="post-time">
              {Math.ceil(Math.random() * 23)} HOURS AGO
            </span>
          </div>

          <div className="post-add">
            <FontAwesomeIcon icon={faSmile} className="fa-2x" />
            <input type="text" placeholder="Add a comment..." />
            <button>Post</button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Post;
