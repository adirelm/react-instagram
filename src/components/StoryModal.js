import React from "react";
import { useGlobalContext } from "../context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const StoryModal = () => {
  const { storyModal, setShowModal } = useGlobalContext();
  return (
    <main className="story-modal">
      <div className="overlay" onClick={() => setShowModal(false)}></div>
      <article
        className="story-picture"
        style={{ background: `url('${storyModal}') center center/cover` }}
      ></article>
      <FontAwesomeIcon
        icon={faTimes}
        id="cross"
        className="fa-2x"
        onClick={() => setShowModal(false)}
      />
    </main>
  );
};

export default StoryModal;
