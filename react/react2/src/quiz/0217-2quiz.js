/*
요구사항
댓글작성, 수정, 삭제기능
대댓글 기능
좋아요 기능
작성 시간 표시
*/

import { useState } from "react";


function Reply(){

  const [idValue , setIdValue] = useState(1);

  const [replys , setReplys] = useState([]);

  const [reply , setReply] = useState(
  {
    id:idValue,
    comment:'',
    author:'',
    like:0,
    replyArr : [],
  });

  function likeUpdate(){
    setReply(prev => ({...prev, like : prev.like +1 }));
  }
  function replyForReply( newReply ){
    setReply(prev => ({...prev, replyArr : [...prev.replyArr , newReply] }));
  }
  function delReplyReply(delId){
    setReply(prev => ({ ...prev, replyArr: prev.replyArr.filter(reply => reply.id !== delId) }))
  }

  function createNewReply( author, comment){
    setReply( prev => [...prev, 
                      setReply( {
                        reply
                      } )]);
  }

  return (
    <div>
      <div>
        <h1>댓글</h1>

        {replys && 
          <ul>
            replys.map( (reply) => {})
          </ul>
        }
      </div>
      <div>
        <h3>{reply.author}</h3>
        <p>{reply.comment}</p>
        <button onClick={likeUpdate}>좋아요 {reply.like}</button>
      </div>

      <div>
        <h4>대댓글 작성</h4>
        <form>
          <lable htmlFor='author'>작성자</lable>
          <input id='author' value={author}/>
          <lable></lable>
          <textarea col='30' row='4'></textarea>
        </form>
        <button
          onClick={() =>
            replyForReply({
              id: Date.now().toString(),
              comment: "새로운 대댓글",
              author: "대댓글 작성자",
            })
          }
        >
          대댓글 작성
        </button>
      </div>

      <div>
        <h4>대댓글</h4>
        {reply.replyArr.map((r) => (
          <div key={r.id}>
            <p>{r.author}: {r.comment}</p>
            <button onClick={() => delReplyReply(r.id)}>삭제</button>
          </div>
        ))}
      </div>

    </div>
  );
}

export default Reply;