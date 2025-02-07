import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Blogs from './pages/Blogs.js';
import Layout from './pages/Layout';
import Nopage from './pages/Nopage';
import Contact from './pages/Contacts';
import Home from './pages/home';


// BrowserRouter를 이용해서 하나로 묶고
// Routes로 그룹을 생성
// 페이지 이동시 새로고침 없이 부드럽게 전환됨
// URL변경또한 제대로 이루어짐
// 페이지 뒤로가기 앞으로가기 또한 정확히 동작함
export default function RoutingApp(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<Nopage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

// 자주 사용되는 라우팅 훅 예시 정리
// 1. useNavigate
//   -핵심은 페이지 이동을 제어할때 사용
/*
function LoginButton() {
  const navigate = useNavigate();

  const handleLogin = async () => {
    const success = await login();
    if (success) {
      navigate('/dashboard', { 
        replace: true,
        state: { from: 'login' }
      });
    }
  };

  return <button onClick={handleLogin}>로그인</button>;
}
*/

// 2. useLocation
//   - 현재 URL의 정보로 접근, 
//     pathname 속성을 통해 쿼리 파라미터의 정보를 처리할 수 있음.
/*
function PageTracker() {
  const location = useLocation();

  useEffect(() => {
    // 페이지 조회 분석
    analytics.trackPageView(location.pathname);
  }, [location]);

  return null;
}
*/

// 3. useParams
//    - URL에 제시된 파라미터를 추출하여 결과를 view 할 때 사용
//    - 동적 라우팅에서는 필수적으로 사용하는 훅
/*

*/

// 4. useSearchParam
//    - useSate와 유사함 ? 이후 오는 쿼리 파라미터를 다루는 특성이 있음
//    - 동적으로 URL 쿼리 파라미터 수정이 가능함
/* 1. 검색기능 예시
function SearchResults() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");
  return <div>검색 결과: {query}</div>;
}
*/

/* 2. 필터링 및 정렬 예시
function ProductList() {
  const [searchParams, setSearchParams] = useSearchParams();
  const category = searchParams.get("category");
  
  const handleCategoryChange = (event) => {
    setSearchParams({ category: event.target.value });
  };
}
*/