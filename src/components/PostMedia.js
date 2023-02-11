import { useState } from "react";

export default function PostMedia(props) {
  const { like, likeSetter, likeAmount, likeAmountSetter } = props;
  const [animationVisibility, setAnimationVisibility] = useState(false);
  const visibilityDuration = 1000;

  function likePost() {
    if (like) return;
    likeSetter(true);
    likeAmountSetter(likeAmount + 1);
    setAnimationVisibility(true);
    setTimeout(() => setAnimationVisibility(false), visibilityDuration);
  }

  function getVideoType(src) {
    const [_, extension] = src.match(/\.(.*?)$/);
    return `video/${extension}`;
  }

  if (props.type === "image") {
    return (
      <div className="post-media">
        <img
          className={`like-icon ${animationVisibility ? "" : "hidden"}`}
          src="assets/heart.svg"
          alt="Like Icon"
          onClick={() => setAnimationVisibility(false)}
        />
        <img
          src={props.src}
          alt={props.description}
          width="1500"
          height="1500"
          data-test="post-image"
          onDoubleClick={likePost}
        />
      </div>
    );
  }

  return (
    <div className="post-media">
      <img
        className={`like-icon ${animationVisibility ? "" : "hidden"}`}
        src="assets/heart.svg"
        alt="Like Icon"
      />
      <video
        loop
        autoPlay
        muted
        width="1080"
        height="1080"
        data-test="post-image"
        onDoubleClick={likePost}
      >
        {props.src.map((src, index) => {
          return <source key={index} src={src} type={getVideoType(src)} />;
        })}
        Seu navegador não suporta vídeos
      </video>
    </div>
  );
}
