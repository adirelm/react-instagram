import { React, useState } from "react";

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
import { useGlobalContext } from "../context";

const Story = ({ photos }) => {
  const [firstStory, setFirstStory] = useState(0);
  const [lastStory, setLastStory] = useState(6);

  const forwardStory = () => {
    setFirstStory(5);
    setLastStory(11);
  };

  const backwardStory = () => {
    setFirstStory(0);
    setLastStory(6);
  };
  const { setPage } = useGlobalContext();

  return (
    <div className="story">
      <ul>
        <button id="chevron-left" onClick={() => backwardStory()}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>

        {photos.slice(firstStory, lastStory).map((image) => {
          return (
            <li>
              <div className="outer-layer">
                <div
                  style={{
                    background: `url('${image.user.profile_image.medium} center center/cover'`,
                  }}
                  className="story-img"
                ></div>
              </div>
              <span>{image.user.username.slice(0, 6)}</span>
            </li>
          );
        })}

        <button id="chevron-right" onClick={() => forwardStory()}>
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </ul>
    </div>
  );
};

export default Story;
