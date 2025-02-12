// 퀴즈
// 아래의 화면을 확인하여
// 이 코드를 완성

// 요구사항
// 1. 폼 상태 관리
// 2. 입력값 변경 처리
// 3. 폼 제출 처리.

// 폼 처리와 유효성 검사
// - 폼에서 처리해주는 내용 : 사용자가 입력한 값
// - 사용자들은 항상 올바른 데이터를 입력하지 않음
//   : 입력값 유효성 검사 필요 (정규표현식 사용 가능)

import { useState } from "react";
import "./BasicForm.css";

function BasicForm() {
  // 폼 상태 관리
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const [errors, setErrors] = useState();

  // 입력값 변경 처리
  // prevState : 이전 상태에 대한 정보
  //  - react의 객체는 불변 법칙을 준수
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    validateField(name, value);
  };

  // 유효성 검사
  // name : state, value : action
  const validateField = (name, value) => {
    let error = "";
    switch(name){
      case 'name':
        if(value.length < 4){
          error = '이름은 4글자 이상 필요'
        }
        break;
      case 'email':
        if(!value.include('@')){
          error = '유효한 이메일 주소 입력 필요'
        }
        break;
      case 'password':
        if(value.length < 6){
          error = '비번은 6글자 이상 필요'
        }
        break;
      default:
        break;
    }

    setErrors(prevState => ({
      ...prevState,
      [name]: error,
    }));
  };

  // 폼 제출 처리
  const handleSubmit = (e) => {
    e.preventDefault();

    // 모든 필드의 유효성 검사
    // every, some
    // every : 배열의 모든 요소가 조건을 충족하는가?
    // some : 배열의 요소 중 1개라도 조건을 충족하는가?
    const hasErrors = Object.values(errors).some(error => error !== '');
    const hasEmptyFields = Object.values(formData).some(value => value === '');

    // 실패시
    if ( hasErrors || hasEmptyFields){
      alert('모든 내용들을 다시 확인해주세요.');
      return;
    }

    // 성공시
    // 서버가 있다면 서버로 전송
    console.log(formData);
    alert('회원 가입 완료');

    // 폼 초기화

    console.log("제출된 데이터:", formData);

    return (
      <form onSubmit={handleSubmit} className="basic-form">
        <div className="form-group">
          <label htmlFor="name">이름:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={errors.name ? 'error' : ''}
          />
          {errors.name && <span className="error-message">{errors.name}</span>}
        </div>
  
        <div className="form-group">
          <label htmlFor="email">이메일:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={errors.email ? 'error' : ''}
          />
          {errors.email && <span className="error-message">{errors.email}</span>}
        </div>
  
        <div className="form-group">
          <label htmlFor="password">비밀번호:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className={errors.password ? 'error' : ''}
          />
          {errors.password && <span className="error-message">{errors.password}</span>}
        </div>
  
        <button type="submit">가입하기</button>
      </form>
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">이름:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="email">이메일:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <button type="submit">제출</button>
    </form>
  );
}

export default BasicForm;
