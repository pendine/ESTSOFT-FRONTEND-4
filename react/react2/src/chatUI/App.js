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
    const handleEndTyping = () =>{

    };


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

const MessageList = ({messages}) =>{
    return(
        <div className='messages-list'>
            {messages.map((message) =>(
                <div className={message.isUser ? "user-message" : "ai-message"}>
                  <Typing speed={100} onFinishedTyping={() => onEndTyping()}>
                    <p>
                        <b>{message.isUser ? "User" : "AI"}</b> : {message.text}
                    </p>
                  </Typing>
                </div>
            ))}
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