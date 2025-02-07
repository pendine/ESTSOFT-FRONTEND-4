import React, { useEffect, useState } from "react";

// 커스텀 훅 만들기
const useFetch = (url) => {

  // 의존 관계 만들기가 중요함
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [url]);

  return [data];
};

export default useFetch;