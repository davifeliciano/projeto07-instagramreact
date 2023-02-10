import Comment from "./Comment";

function parseTags(str) {
  /* Deve procurar matches de /(?:^|\s)([#@]\w*)/g em str,
     e retornar um array com as substrings de str sem ocorrências
     e com componentes <a className="hashtag" href="/#">{capturedGroup}</a>
     para os grupos de captura de cada match, em suas respectivas posições */
  return str;
}

export default function PostComments(props) {
  return (
    <div className="post-comments">
      <p>
        <a className="username" href="/#">
          {props.author}
        </a>{" "}
        {parseTags(props.description)}
      </p>
      {props.commentAmount !== 0 ? (
        <a href="/#">
          Ver todos os {props.commentAmount.toLocaleString()} comentários
        </a>
      ) : (
        <></>
      )}
      {props.comments.map((comment, index) => (
        <Comment
          key={index}
          author={comment.author}
          content={parseTags(comment.content)}
        />
      ))}
    </div>
  );
}
