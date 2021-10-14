import React from "react";
import Story from "./Story";
import StoryModal from "./StoryModal";
import Post from "./Post";
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

const PageContainer = () => {
  const { photos, showModal } = useGlobalContext();
  return (
    <section id="page-container">
      <Story photos={photos}></Story>
      {showModal && <StoryModal />}
      {photos.map((image, index) => {
        return <Post id={image.id} {...image}></Post>;
      })}
    </section>
  );
};

export default PageContainer;
