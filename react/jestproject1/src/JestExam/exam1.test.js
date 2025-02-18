
describe( 'using jets' , () => {

  const a=10, b=20;

  test('파라미터 받아와서 계산' , () => {
    // expect : 테스트시 받아야할 결과 설정
    // toEqual : 인자의 값과 같은지 확인
    // toHaveBeenCalledTimes : 인자의 값(초) 내로 함수가 동작하는지
    // jest는 테스트 도구기 때문에 맞고 틀리고가 중요하지 않음
    expect(a+b).toEqual(30);

  })
})