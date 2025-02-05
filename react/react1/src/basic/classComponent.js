import React from 'react';


// class Test1 extends React.Component{
//   render(){
//     return <h1>Test1 클래스 방식의 컴포넌트 리턴</h1>
//   }
// }

// prop를 받아서 처리하는 방법

class Test1 extends React.Component{
  constructor(props){
    super(props); // 무조건 써야 React.Component 클래스로 접근 가능
    // this.state={
    //   test:"클래스 방식 컴포넌트 prop 받기" 
    //   //props값이 리터럴 상수
    // };
    this.state={
      brand: "aBrand",
      model: "aModel",
      color: "black",
      year: "2222"
    };
  }

  // render(){
  //   return <h1>Test1 클래스 방식의 컴포넌트 리턴 {this.props.result}</h1>
  // }

  // setState : 객체 상태 변경
  changeColor = () =>{
    this.setState({color:"blue"});
  }

  render(){
    return (
      <div>
        <h1>차량 브랜드 : {this.state.brand}</h1>
        <p>차량 모델 : {this.state.model}</p>
        <p>차량 색상 : {this.state.color}</p>
        <p>차량 출시일 : {this.state.year}</p>
        <button 
          type="button"
          onClick={this.changeColor}
        >
          색상 바꾸기
        </button>
      </div>
    );
  }
}
export default Test1;


/**
class Main extends React.Component{
  render(){ 
    return <h1>main class 리턴</h1>
  }
}

class Class2 extends React.Component{
  render(){ 
    return (
      <div>
        <h1>class2 리턴</h1>
        <Main />
      </div>
    );
  }
}

export default Class2;
 */