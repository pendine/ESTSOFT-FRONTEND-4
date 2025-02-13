// OCP
// 확장에는 열려있고 변경에는 닫혀있어야함.

// 아래의 컴포넌트는 OCP 를 준수했다고 하기에 애매함
// react의 CBD 개발방식이 붙일때 유리
// (컴포넌트만 잘붙이면 하나의 화면 완성)
//  - 컴포넌트 자체가 재사용성,
//    확장성을 고려하지 않으면 안됨

// 아래의 코드에서 아쉬운점
// 컴포넌트의 취급 객체 자체가 한정되어 있음
//  -> post 컴포넌트만 취급하여 card를 업데이트하기때문에
//     다른 비슷한 카드 구성화면에서는 활요할 수 없다는 아쉬움이 있음
// const PostCardList = ({ posts }) => {
//   return (
//     <Wrapper>
//       {posts.map((post) => (
//         <PostCard key={post.id} />
//       ))}
//     </Wrapper>
//   );
// };

// 다양한 종류의 카드를 활용할 수 잇도록 card자체를 컴포넌트로 만든후
// 해당 내용을 받아와 해당 화면에 맞도록 처리할 수 있음.(공통 작업 컴포넌트화)
// const CardList = ({ datas, Card }) => {
//   return (
//     <Wrapper>
//       {datas.map((data) => (
//         <Card key={data.id} {...data} />
//       ))}
//     </Wrapper>
//   );
// };