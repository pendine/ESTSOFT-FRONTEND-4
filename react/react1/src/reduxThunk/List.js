import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "./Slice";

function List() {
  const dispatch = useDispatch();
  const { posts, status, error } = useSelector((state) => state.posts);

  useEffect(() => {
    console.log("실행되는거여?");
    dispatch(fetchPosts());
  }, [dispatch]);

  if (status === "loading") {
    console.log("test");
    return <div>로딩 중...</div>;
  }
  if (status === "failed") {
    console.log("실행했는데 데이터 못받아옴");
    return <div>{error}</div>;
  }

  return (
    <ul>
      {posts &&
        posts.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
    </ul>
  );
}

export default List;
