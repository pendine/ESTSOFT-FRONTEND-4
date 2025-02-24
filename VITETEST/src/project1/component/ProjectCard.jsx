import styled, { css } from 'styled-components'

export const ProductImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`

// 스타일 컴포넌트에서 동적 스타일링 처리시 props의 경우
// 이를 컴포넌트에 전달하지 않도록 설정이 필요한 경우가 있음
// - react는 기본적으로 모든 props를 dom요소에 전달하려 해서
// 아래의 코드는 특정 props를 dom에 전달하지 않도록 처리하는 방법
export const ProductCardWrapper = styled.article.withConfig({
  shouldForwardProp: prop => prop !== '$isNew'
})`
  background: white;
  border-radius: 12px;
  padding: ${({ theme }) => theme.spacing.md};
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  ${({ isNew }) =>
    isNew &&
    css`
      &:hover::after {
        content: 'NEW';
        background: ${({ theme }) => theme.colors.accent};
        color: white;
        padding: 4px 8px;
        position: absolute;
        top: 8px;
        right: 8px;
        border-radius: 4px;
        font-size: 0.8rem;
      }
    `}
`

export default ProductCardWrapper
