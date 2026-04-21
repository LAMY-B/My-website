import ThemeButton from "../Context/ThemeButton";
import useFetch from "./hooks/useFetch";

function Home() {
  const { data, loading } = useFetch(
    "https://jsonplaceholder.typicode.com/posts",
  );
  console.log(data);

  if (loading) return <p>Loading</p>;

  return (
    <div>
      <h1>This is a Landing Page</h1>
      <ThemeButton />

      <ul>
        {data.slice(0, 5).map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}
export default Home;
