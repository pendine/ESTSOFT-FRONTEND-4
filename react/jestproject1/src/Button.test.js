import React from 'react';
import {render, fireEvent, screen} from '@testing-library/react';
import Button from './Button';

// button component 라는 이름의 테스트 그룹 생성
describe('button component', ()=>{

  // render button라는 이름의 테스트 생성
  test('render button', ()=>{
    render(<Button>Click me</Button>);
    // 렌더링된 부분의 안에서 동일한 텍스트 확인
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  test('calls onClick when clicked', ()=>{

    const handleClick = jest.fn();
    const {getByText} = render(
      <Button onClick={handleClick}>Click me</Button>
    );

    fireEvent.click(screen.getByText('Click me'));
    // 렌더링된 부분의 안에서 동일한 텍스트 확인
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

})

