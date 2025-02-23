import React from "react";
import useFetch from "./useFetch"; // 커스텀 훅 가져오기

const App = () => {
  // const { data, loading, error } = useFetch("https://api.example.com/data");
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>Fetched Data</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default App;
