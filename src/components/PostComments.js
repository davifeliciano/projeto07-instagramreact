import reactStringReplace from "react-string-replace";
import Comment from "./Comment";

function parseTags(str) {
  return reactStringReplace(str, /(?<=^|\s)([#@]\w+)/g, (match, index) => {
    return (
      <a className="hashtag" href="/#" key={index}>
        {match}
      </a>
    );
  });
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
