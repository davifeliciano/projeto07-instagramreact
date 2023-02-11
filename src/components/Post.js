import PostHeader from "./PostHeader";
import PostMedia from "./PostMedia";
import PostActions from "./PostActions";
import PostInfo from "./PostInfo";
import PostComments from "./PostComments";
import { useState } from "react";

export default function Post(props) {
  const { post } = props;
  const [like, setLike] = useState(false);
  const [likeAmount, setLikeAmount] = useState(post.likeAmount);

  return (
    <article className="post">
      <PostHeader author={post.author} />
      <PostMedia
        type={post.type}
        src={post.src}
        description={post.description}
        like={like}
        likeSetter={setLike}
        likeAmount={likeAmount}
        likeAmountSetter={setLikeAmount}
      />
      <PostActions
        like={like}
        likeSetter={setLike}
        likeAmount={likeAmount}
        likeAmountSetter={setLikeAmount}
      />
      <PostInfo likedBy={post.likedBy} likeAmount={likeAmount} />
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
