// 라우팅을 직접 처리할예정
// const express = require('express');
// const router = express.Router();

// 직접 라우팅을 했기때문에 exports로 처리하는 방식
const fs = require('fs').promises;
const path = require('path');
const { complete } = require('./notuse_todo');

const TODO_FILE_PATH = path.join(__dirname, 'todo_list.json');
 // db를 사용하지 않고 파일을 사용하기 때문에 파일을읽음

async function readTodoFile(){
  try {
    // todo 가 저장된 파일을 비동기로 읽음
    const data = await fs.readFile(TODO_FILE_PATH, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    const initialList = { list: [] };
    await fs.writeFile(TODO_FILE_PATH, JSON.stringify(initialList)); //json파일 생성
    return initialList; //생성된 파일을 byte코드로 던져줌
  }
}


// 목록 조회
// 요청이 왔을때 응답을 처리하는 영역
// 실질적으로 요청에서 받아올건 없음
// 요청이 들어왔을때 todo_list.json파일의 내용을 전달하는게 목표
exports.list = async(req, res) =>{
  try{
    const todoList = await readTodoFile();

    res.json(todoList); // 하 참나 얼탱이가 없네 그냥 키 맵핑 그런거 필요도 없고 json 닉값하네
  }catch(error){
    res.status(500).json({error:'목록조회 실패'});
  }
}

exports.add = async(req, res) =>{
  try{
    const {contents} = req.body; //사용자가 저장한 내용을 받아옴.

    if(!contents){
      res.status(400).json({error:'내용 입력 바람'});  
    }

    const todoList = await readTodoFile(); // 기존 목록에 추가를 위해
                                           // 기존 목록 불러옴
    
    const newTodo = { // todoList 의 요소로 삽입
      id : Date.now()
      , contents
      , complete : false
      , createdAt : new Date()
    };

    todoList.list.push(newTodo); // ?? 이러면 그냥 파일에 읽어온 데이터에 새로운걸 넣는게 아닌가?
                      //어떻게 넣는건지 이해가 안돼네...
                      //contents로 body를 읽어온걸 newTodo의 contents에 넣는다고해도
                      //body의 contents에서 받아온건 배열타입일텐데
                      // 해결 : 아 하나씩 받아서 넣는구나 ㅇㅋ 이해완료
    await fs.writeFile(TODO_FILE_PATH, JSON.stringify(todoList), 'utf-8');
    
    res.status(201).json;

  }catch(error){
    res.status(500).json({error:'항목 추가 실패'});
  }
}