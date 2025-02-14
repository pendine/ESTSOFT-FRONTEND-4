// react-typing-animation 패키지 설치
// npm config set legacy-peer-deps true
// npm i
// npm i --save react-typing-animation
import React, {useState, useEffect} from 'react';
import "./App.css";
// react typing animation 라이브러리
// -> 타이핑효과를 쉽게 구현할수 있도록 제공되는 라이브러리.
import Typing from 'react-typing-animation';

const App = () =>{
    
    
    // useState : 클래스 컴포넌트 없이 상태와 다른 react 기능을 함수컴포넌트에서
    //            사용하기위해 등장한 Hook
    //  -> 해당 컴포넌트 까지만 살아있음.
    // 현재 상태값은 messages와 currentTypingId가 보관을 할 것.
    // 만약 두 상태값에 대한 업데이트가 감지되면
    //  ->setMessages, setCurrentTypingId메서드를 통해 상태값을 업데이트.


    //모든 채팅 메세지를 저장.
    const [messages, setMessages] = useState([]); 
    // 현재 AI가 타이핑 하는 메세지 추적
    // null이 들어오는 이유는 AI가 처음 화면 실행됐을때부터 타이핑 메세지를
    // 추적할 이유는 없기때문. -> 타이핑 메세지가 입력됐을때

    // AI가 답변할 영역을 추적하기위해 준비한 state
    //  -> currentTypingId : 다음으로 타이핑이 필요한 메세지를 찾기위해
    //      현재 타이핑중인 메세지를 확인하는 상태 변수.
    const [currentTypingId, setCurrentTypingId] = useState(null);
    
    
    // setMessages((prevMessages) => [
    //     ...prevMessages,
    //     {어떠한 값들을 추가하는 업데이트 진행}
    // ]);
    // 파라미터 message는 MessageForm으로 부터 전달 받아옴
    //  -> 일반 유저가 입력한 문자열
    const handleSendMessage = (message) => {
        // 받아온 메세지의 상태를 업데이트.(함수형 업데이트)
        //  -> 함수형 업데이트를 반드시써야하는가?
        //  1. 상태에 대한 action이 비동기적으로 처리될수 있어서
        //     (데이터 처리가 비동기로 될수 있기 때문)
        //  2. 함수가 실행되는 동안 최신화가 안될수 있어서.
        setMessages((prevMessages) =>[
            ...prevMessages, //이전 메세지 기억 -> 스프레드 연산자를 사용하여
                             // 새로운 배열을 생성한후 기존에 저장했던 메세지들을 담아둠
                             // react의 객체들이 기본적으로 불변성을 띄기때문에.
            {text: message, isUser: true}, // 유저가 입력한 내용이 출력
            {text: `당신이 입력한 메세지는 : "${message}"`, 
             isUser:false,
             isTyping:true,
             id:Date.now()}//ai내용출력
        ]);
    };

    //AI 타이핑이 종료됐을때 이 메서드를 실행.
    const handleEndTyping = (id) =>{

        // state를 활용하여 상태 업데이트를 진행.
        // 메세지 관리
        // id 값을 기준으로 (id를 파라미터로 받아와)
        //  -> messages의 상태를 업데이트.
        //  -> 상태 업데이트시에는 다음의 코드를 추가.
        //  msg : 받아온 메세지에 대해 구분할때 map함수를 이용해서 msg 라는 단위로 나눔
        // msg.id === id ? {...msg, isTyping:false} : msg


        // currentTypingId값을 초기화.

        //alert("handleEndTyping 실행");
        setMessages((prevMessages) =>
            prevMessages.map((msg) =>
              msg.id === id ? { ...msg, isTyping: false } : msg
            )
          );
        setCurrentTypingId(null);

    };

    //useEffect는 렌더링 후에 부작용을 확인하기위해 쓰는 훅
    // -> 렌더링후 사이드 이펙트를 실행하는 훅.
    // side effect : 렌더링후 비동기로 처리할 부수적인 효과들
    //  -> react 식 콜백모음.(모든작업이 끝난후 실행할수 있는 콜백모음집)
    // 화면에 렌더링해줄거 다 해주고 실질적인 데이터는 비동기로 처리.
    // 화면에 부를거 다 부르고 처리해야할거 같으면 추가해주면됨.
    // 필요한 이유 : 순차적 실행이 필요할때.
    //  -> currentTypingId가 null일수도 있잖음.
    //  -> 조건을 만족하는 메세지를 찾아서 
    //     다시 타이핑하도록 코드를 작성.
    // 여기서는 이벤트 조정을 위해 사용했지만
    // useEffect는 실행순서때문에 데이터 로딩이 안될경우 가장 많이 사용

    // 아래의 예시는 이벤트와 effect를 분리하여 처리하는 case
    useEffect(() =>{
        // ai가 입력하는것처럼 이벤트 만들거임.
        // ai가 입력하는이벤트는 모든 창에 적용인가?
        // ->user가 입력한 내용은 바로 렌더링하고
        // -> ai가 입력한 내용만 텍스트 효과를 부여

        //ai가 어떻게 입력했느냐 아니냐를 구분할까???????
        if(currentTypingId === null){ //
            const nextTypingMessage = messages.find((msg) =>
                !msg.isUser && msg.isTyping
            );
            if(nextTypingMessage){
                setCurrentTypingId(nextTypingMessage.id);
            }
        }


    }, [messages, currentTypingId]);


    return(
        <div className='app'>
            <div className='chat-box'>
                <h1>Chat App</h1>
                {/*컴포넌트 영역 MessageList, MessageForm
                MessageList에서는 메세지의 목록을 조회
                MessageForm에서는 데이터 입력과 메세지 관리.
                */ }
                <MessageList
                    messages={messages}
                    onEndTyping={handleEndTyping}
                    currentTypingId={currentTypingId}
                />

                {/*onSendMessage 새로운 메세지가 전송될때 호출되는 props */}
                <MessageForm onSendMessage={handleSendMessage} />

                
            </div>

        </div>
    )



};
                  /*타이핑 애니메이션의 적용은 ai에만 적용되야함.
                  구분을 하는 가장 편한방법 : 데이터비교 */
const MessageList = ({messages, onEndTyping, currentTypingId}) =>{
    return( 
        <div className='messages-list'>
            {messages.map((message, index) =>
               message.isTyping && message.id === currentTypingId ? (

                  <Typing key={`typing-${message.id || index}`} speed={100} 
                  onFinishedTyping={() => onEndTyping(message.id)}>
                    
                    <div className={message.isUser ? "user-message" : "ai-message"}>
                        {message.text}
                    </div>
                  </Typing>
               ) : (
                  <div key={`message-${message.id || index}`} 
                  className={message.isUser ? "user-message" : "ai-message"}>
                    {message.text}
                  </div>
                    )
            )}
        </div>
    );
};


const MessageForm = ({ onSendMessage }) =>{

    // MessageForm에서는 어차피 넘겨야할 데이터는 문자열
    //  -> 문자열 : 사용자가 입력한 값 자체를 의미.
    const [message, setMessage] = useState("");

    const handleSubmit = (event) =>{
        event.preventDefault();
        onSendMessage(message);
        setMessage('');
    }


    return(
        <form className='message-form' onSubmit={handleSubmit}>
            <input 
                type="text"
                className="message-input"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            />
            <button className="send-button" type="submit">
                Send
            </button>
        </form>
      
    );

}


export default App;