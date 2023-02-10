import PostHeader from "./PostHeader";
import PostMedia from "./PostMedia";
import PostActions from "./PostActions";
import PostInfo from "./PostInfo";
import PostComments from "./PostComments";

export default function Post(props) {
  const { post } = props;

  return (
    <article className="post">
      <PostHeader author={post.author} />
      <PostMedia
        type={post.type}
        src={post.src}
        description={post.description}
      />
      <PostActions />
      <PostInfo likedBy={post.likedBy} likeAmount={post.likeAmount} />
      <PostComments
        author={post.author}
        description={post.description}
        commentAmount={post.commentAmount}
        comments={post.comments}
      />
      <form className="post-new-comment" action="/#" method="post">
        <input type="text" placeholder="Escreva um comentário" />
        <button type="submit">Enviar</button>
      </form>
    </article>
  );
}
