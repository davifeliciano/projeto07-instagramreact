export default function PostMedia(props) {
  const { like, likeSetter, likeAmount, likeAmountSetter } = props;

  function likePost() {
    if (like) return;
    likeSetter(true);
    likeAmountSetter(likeAmount + 1);
  }

  if (props.type === "image") {
    return (
      <img
        src={props.src}
        alt={props.description}
        width="1500"
        height="1500"
        onDoubleClick={likePost}
      />
    );
  }

  function getVideoType(src) {
    const [_, extension] = src.match(/\.(.*?)$/);
    return `video/${extension}`;
  }

  return (
    <video
      loop
      autoPlay
      muted
      width="1080"
      height="1080"
      onDoubleClick={likePost}
    >
      {props.src.map((src, index) => {
        return <source key={index} src={src} type={getVideoType(src)} />;
      })}
      Seu navegador não suporta vídeos
    </video>
  );
}
