import styled, { ThemeProvider } from 'styled-components'
import theme from './styles/theme'
import { GlobalStyles } from './styles/GlobalStyles'
import { useState } from 'react'
import ProductCardWrapper, { ProductImage } from './component/ProjectCard'
import { SizeButton } from './component/SizeSelector'
import AddToCartButton from './component/AddToCartButton'
import { ModalContent, ModalOverlay } from './component/Modal'

const ProductGrid = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing.lg};
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  padding: ${({ theme }) => theme.spacing.lg};
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`

export default function App() {
  const [selectedSize, setSelectedSize] = useState('M')
  const [showModal, setShowModal] = useState(false)
  const [cart, setCart] = useState([])

  const ProductGrid = styled.div`
    display: grid;
    gap: ${({ theme }) => theme.spacing.lg};
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    padding: ${({ theme }) => theme.spacing.lg};
    max-width: 1200px;
    margin: 0 auto;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      grid-template-columns: 1fr;
    }
  `

  const products = [
    {
      id: 1,
      name: 'Basic T-Shirt',
      price: 29.99,
      // image: 'https://via.placeholder.com/300',
      image:
        'data:image/jpeg;base64,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',
      isNew: true,
      sizes: ['S', 'M', 'L']
    },
    {
      id: 2,
      name: 'Premium Hoodie',
      price: 59.99,
      // image: 'https://via.placeholder.com/300',
      image:
        'data:image/jpeg;base64,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',
      sizes: ['M', 'L', 'XL']
    }
  ]

  const addToCart = (product, size) => {
    setCart([...cart, { ...product, selectedSize: size }])
  }

  const showProduct = productList => {
    return (
      <div>
        {productList.map(product => (
          <div key={product.id}>
            <h1>{product.name}</h1>
            <h5>{product.price}</h5>
            <img src={product.image} />
            {product.sizes.map(ele => (
              <button
                key={ele}
                onClick={() => addToCart(product, ele)}>
                {ele}
              </button>
            ))}
          </div>
        ))}
      </div>
    )
  }

  const showCart = () => {
    return (
      <>
        <p>{cart.length > 0 ? '카트내용있음' : '카트 내용 없음'}</p>
      </>
    )
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {/* 
      내가한거
      {showProduct(products)}
      {showCart()} 
      아래는 강사님이 한거
      */}
      <ProductGrid>
        {products.map(product => (
          <ProductCardWrapper
            key={product.id}
            $isNew={product.isNew}>
            <ProductImage
              src={product.image}
              alt={product.name}
            />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <div>
              {product.sizes.map(size => (
                <SizeButton
                  key="size"
                  $selected={size === selectedSize}
                  onClick={() => setSelectedSize(size)}>
                  {size}
                </SizeButton>
              ))}
            </div>
            <AddToCartButton onClick={() => setShowModal(true)}>
              Add to Cart
            </AddToCartButton>
          </ProductCardWrapper>
        ))}
      </ProductGrid>
      {showModal && (
        <ModalOverlay onClick={() => setShowModal(false)}>
          <ModalContent onClick={e => e.stopPropagation()}>
            <h2>아이템, 카트에 담은</h2>
            <p>selected size : {selectedSize}</p>
            <AddToCartButton onClick={() => setShowModal(false)}>
              close
            </AddToCartButton>
          </ModalContent>
        </ModalOverlay>
      )}
    </ThemeProvider>
  )
}
