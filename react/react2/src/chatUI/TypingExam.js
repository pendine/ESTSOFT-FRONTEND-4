import Typing from "react-typing-animation";

function Test() {
  return (
    // <Typing speed={1}>
    //   asdfasdf
    //   표출속도제어
    //   <Typing.Speed ms={100} />
    //   <h1>asdlfkajsldkf</h1>

    //   <p>alskdjalksjdlkasjd</p>
    //    표시 글자 지우기
    //   <Typing.Backspace count={5} ms={100} />
    //   <p>alskdjalksjdlkasjd</p>
    // </Typing>

    // 타이핑이 끝나고 메서드 실행
    // <Typing onFinishedTyping={ () => console.log("end")} >
    //       asd
    // </Typing>

    <Typing speed={50}>
      <h1>Welcome to my website</h1>
      <Typing.Delay ms={1000} />
      <p>I am a developer</p>
      <Typing.Delay ms={500} />
      <Typing.Backspace count={9} />
      <span>designer</span>
      <Typing.Delay ms={500} />
      <Typing.Backspace count={8} />
      <span>creator</span>
    </Typing>
  );
}

export default Test;
