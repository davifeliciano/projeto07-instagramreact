import { posts } from "./data";
import Post from "./Post";

export default function Posts() {
  return posts.map((post) => <Post key={post.id} post={post} />);
}
