import { createContext, Suspense, useContext, useEffect, useState } from 'react'
import {
  createBrowserRouter,
  Form,
  Link,
  Navigate,
  NavLink,
  Outlet,
  redirect,
  RouterProvider,
  useActionData,
  useLoaderData,
  useLocation,
  useNavigate,
  useRouteError,
  useSearchParams
} from 'react-router-dom'
import styled from 'styled-components'

const AuthContext = createContext(null)
const CartContext = createContext(null)

function useCart() {
  return useContext(CartContext)
}

function useAuth() {
  return useContext(AuthContext)
}

// 로그인한 유저들만 볼 수 있도록
// 기본 설정들을 정하는 컴포넌트
function RequireAuth({ children }) {
  const { user } = useAuth()
  const location = useLocation()

  if (!user) {
    // 로그인 페이지로 리다이렉트하면서 원래 가려던 위치 저장
    return (
      <Navigate
        to="/login"
        state={{ from: location }}
        replace
      />
    )
  }

  return children
}

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`

const Heading = styled.h1`
  color: #2c3e50;
  font-size: 2.5rem;
  margin-bottom: 30px;
  text-align: center;
`

const StyledNav = styled.nav`
  background: #3498db;
  padding: 20px;
  display: flex;
  gap: 20px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

  a {
    color: white;
    text-decoration: none;
    padding: 10px;
    border-radius: 4px;
    transition: all 0.3s;

    &:hover {
      background: #2980b9;
    }

    &.active {
      background: #2c3e50;
    }
  }

  button {
    background: none;
    border: none;
    color: white;
    cursor: pointer;
    padding: 10px;
  }
`

const MainContent = styled.main`
  min-height: 70vh;
  padding: 30px 0;
`

const Footer = styled.footer`
  background: #34495e;
  color: white;
  padding: 20px;
  text-align: center;
  margin-top: 50px;
`

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 30px;
  padding: 20px;
`

const ProductCard = styled.div`
  background: white;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-5px);
  }

  h3 {
    color: #2c3e50;
    margin-bottom: 10px;
  }

  p {
    color: #3498db;
    font-weight: bold;
  }
`

const ProductDetailContainer = styled.div`
  background: white;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  max-width: 800px;
  margin: 0 auto;

  img {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
    margin-bottom: 20px;
  }
`

const PriceTag = styled.div`
  font-size: 1.5rem;
  color: #27ae60;
  font-weight: bold;
  margin: 20px 0;
`
// 4. 폼 스타일
// 폼에 스타일컴포넌트 적용시
// 기존 React-router의 Form 컴포넌트 기능을 쓸수 없음
// 이때 컴포넌트를 인자값으로 받아서
// 커스텀 스타일 적용가능
const StyledForm = styled(Form)`
  max-width: 500px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 15px;

  input,
  textarea {
    padding: 12px;
    border: 1px solid #bdc3c7;
    border-radius: 4px;
    font-size: 1rem;

    &:focus {
      outline: none;
      border-color: #3498db;
      box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.1);
    }
  }

  button {
    background: #3498db;
    color: white;
    padding: 15px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background 0.3s;

    &:hover {
      background: #2980b9;
    }
  }
`

const SuccessMessage = styled.div`
  background: #2ecc71;
  color: white;
  padding: 15px;
  border-radius: 4px;
  margin-top: 20px;
`

// 5. 에러 페이지 스타일
const ErrorContainer = styled.div`
  text-align: center;
  padding: 50px 20px;
  background: #e74c3c;
  color: white;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    font-size: 3rem;
    margin-bottom: 20px;
  }
`

const NotFoundContainer = styled(ErrorContainer)`
  background: #34495e;
`

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        // index: true, //기본경로에 렌더링할 컴포넌트 설정
        element: <Home />
      },
      {
        path: 'products',
        element: <Products />,
        loader: async () => {
          const res = await fetch('https://dummyjson.com/products')
          return res.json()
        }
        // children: [  // 안됨
        //   {
        //     path: ':id',
        //     element: <ProductDetail />,
        //     // loader: async () => {
        //     loader: async ({ params }) => {
        //       console.log('params.id : ' + params.id)
        //       const res = await fetch(
        //         `https://dummyjson.com/products/${params.id}`
        //       )
        //       return res.json()
        //     }
        //   }
        // ]
      },
      {
        //됨
        path: 'products/:id',
        element: <ProductDetail />,
        loader: async ({ params }) => {
          const res = await fetch(`https://dummyjson.com/products/${params.id}`)
          return res.json()
        }
      },
      {
        path: 'contact',
        element: <Contact />,
        action: async ({ request }) => {
          const formData = await request.formData()
          const formValues = Object.fromEntries(formData)
          sessionStorage.setItem('FromData1', JSON.stringify(formValues))
          // 데이터를 전송만함
          // return { success: true, data: Object.fromEntries(formData) }
          // submit 버튼 클릭시 이동함
          return redirect('/')
        }
      },
      {
        path: 'dashboard',
        element: (
          <RequireAuth>
            <Dashboard />
          </RequireAuth>
        )
      },
      {
        path: 'about',
        element: (
          <Suspense fallback={<div> loading...</div>}>
            {/* <LazyAbout /> */}
          </Suspense>
        )
      },
      {
        path: '*',
        element: <NotFound />
      },
      {
        // contact 만든것처럼 로그인페이지 구현
        path: 'login',
        element: <Login />,
        action: async ({ request }) => {
          const formData = await request.formData()
          const id = formData.get('id') // 요소의 name속성을 갖고옴
          const pass = formData.get('password')
          const formValues = Object.fromEntries(formData)
          console.log('id:', id, 'pass:', pass)

          if (
            (id === 'test' && pass === 'test') ||
            (id === 'asd' && pass === 'asd')
          ) {
            const userData = { id, name: id }
            localStorage.setItem('user', JSON.stringify({ userData }))

            // 커스텀 이벤트 발생
            window.dispatchEvent(
              new CustomEvent('auth-login', {
                detail: userData
              })
            )
          }

          // // const formValues = Object.fromEntries(formData)
          // // console.log(JSON.stringify(formValues))

          const redirectTo =
            new URL(request.url).searchParams.get('redirectTo') || '/'
          return redirect(redirectTo)
        }
      },
      {
        path: 'cart',
        element: (
          // <RequireAuth>
          <Cart />
          // </RequireAuth>
        )
      }
      // {
      //   path: 'home',
      //   element: <Home />
      // }
    ]
  }
  // {
  //   path:'/',
  //   element:,
  //   errorElement:<ErrorPage />,
  // },
  // {
  //   path:'/a',
  //   element:,
  //   children:[
  //     {
  //       //  path => /a/aa
  //       path:'/aa'
  //     }
  //   ]
  // }
])

// const LazyAbout = lazy(() => import('./About'))

function Dashboard() {
  return <h1>Dashboard here</h1>
}

// 12. 404 페이지
function NotFound() {
  return (
    <NotFoundContainer>
      <Heading>404 - Page Not Found</Heading>
      <p>The page you're looking for doesn't exist.</p>
    </NotFoundContainer>
  )
}

// 로그인 기능 구현
// 전역에서 로그인 상태 관리
// -> 로컬 스토리지와 동기화 되어 새로고침을 해도
//    로그인상태는 유지
function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  // 컴포넌트 마운트 시 로컬스토리지에서 사용자 정보 불러오기
  // useEffect(() => {
  //   try {
  //     const storedUser = localStorage.getItem('user')
  //     console.log('Stored user:', storedUser)
  //     if (storedUser) {
  //       const parsedUser = JSON.parse(storedUser)
  //       console.log('Parsed user:', parsedUser)
  //       setUser(parsedUser)
  //     }
  //   } catch (error) {
  //     console.error('Error loading user from localStorage:', error)
  //   } finally {
  //     setIsLoading(false)
  //   }
  // }, [])

  const login = userData => {
    // 로그인 기능은 서버에 사용자가 입력하거나 보낸 정보를 기반으로
    // 서버에서 인증 절차를 거쳐 로그인 여부를 판단
    // 이전에는 아이디와 비밀번호가 진행했으나, 최근에는 OAuth인증이 대세

    // alert('로그인 성공')
    console.log('Login called with:', userData)
    localStorage.setItem('user', JSON.stringify(userData))

    setUser('user', JSON.stringify(userData))
  }

  // 로그아웃은 현상황에서 backend가 없으므로
  // 저장된 로컬스토리지 지움
  const logout = () => {
    localStorage.removeItem('user')
    setUser(null)
  }
  const val = { user, login, logout, isLoading }
  console.log('authContext stats : ' + JSON.stringify(val))

  useEffect(() => {
    const handleLogin = event => {
      login(event.detail)
    }

    window.addEventListener('auth-login', handleLogin)
    return () => window.removeEventListener('auth-login', handleLogin)
  }, [login])

  return (
    <AuthContext.Provider value={{ user, login, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  )
}

function Layout() {
  const navigate = useNavigate()
  const location = useLocation()
  const [searchParams] = useSearchParams()
  const { user, logout } = useAuth()
  // const { cart } = useCart()

  function handleLogout() {
    logout()
    navigate('/')
  }

  return (
    <Container>
      {/* <div
        className="app"
        style={{ height: '100vh' }}> */}
      {/* 3. 네비게이션 바 */}
      <StyledNav>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? 'active' : '')}
          end>
          Home
        </NavLink>

        <NavLink
          to="/products"
          style={({ isActive }) => ({
            color: isActive ? 'red' : 'blue'
          })}>
          Products
        </NavLink>

        <Link to="/contact">Contact</Link>

        {user ? (
          <>
            <Link to="/dashboard">DashBoard</Link>
            <button onClick={handleLogout}>Logout ({user.name})</button>
          </>
        ) : (
          <Link to="/login">Login</Link>
        )}

        {/* <Link to="/products/1">productDetail1</Link> */}

        <button onClick={() => navigate('/about')}>About (Programmatic)</button>

        {/* 4. 검색 기능 */}
        <input
          placeholder="Search..."
          onChange={e => navigate(`?query=${e.target.value}`)}
          value={searchParams.get('query') || ''}
        />

        <Link
          to="cart"
          className="cart-icon">
          Cart
        </Link>
      </StyledNav>

      <MainContent>
        {/* 5. 하위 라우트 표시 위치 */}
        <Outlet />
      </MainContent>

      {/* 6. 현재 위치 표시 */}
      <Footer>Current path: {location.pathname}</Footer>
      {/* </div> */}
    </Container>
  )
}

function ErrorPage() {
  const error = useRouteError()

  return (
    <ErrorContainer>
      <Heading>Oops! Something went wrong</Heading>
      <p>
        {error.status} - {error.statusText || error.message}
      </p>
    </ErrorContainer>
  )
}

function Home() {
  return <h1>Home here</h1>
}

function Contact() {
  const actionData = useActionData()

  return (
    <Container>
      <Heading>Contact Us</Heading>
      <StyledForm method="post">
        <input
          name="name"
          placeholder="Name"
          required
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          required
        />
        <textarea
          name="message"
          placeholder="Message"
          rows="5"
        />
        <button type="submit">Send</button>
        <SuccessMessage>
          {actionData?.success && (
            <div className="success-message">Message sent successfully!</div>
          )}
        </SuccessMessage>
      </StyledForm>
    </Container>
  )
}

function ProductDetail() {
  const { title, price, description, images } = useLoaderData()
  return (
    <Container>
      <ProductDetailContainer>
        <Heading>{title}</Heading>
        <img src={images} />
        <p>{description}</p>
        <PriceTag>{price}</PriceTag>
      </ProductDetailContainer>
    </Container>
  )
}

function Products() {
  const { products } = useLoaderData()

  return (
    <Container>
      <Heading>Products</Heading>
      <ProductGrid>
        {products.map(product => (
          <Link
            key={product.id}
            to={`/products/${product.id}`}>
            <ProductCard>
              <h3>{product.title}</h3>
              <p>${product.price}</p>
            </ProductCard>
          </Link>
        ))}
      </ProductGrid>
    </Container>
  )
}

function Login() {
  const actionData = useActionData()

  // 사용자가 로그인 상태라면
  // 폼을 보여줄 필요가 없음
  // => 전역으로 로그인 상태를 기억하는 무언가가 필요
  //   (redux, zustand, recoil등으로 관리 가능)

  //context API 에 등록되있는 전역 상태값 중 user를 호출
  const { user } = useAuth()
  const navigate = useNavigate()

  // 사용자의 로그인 정보를 확인하고 로그인 하거나
  // 로그인 되있다면 이전 페이지로 보냄
  useEffect(() => {
    if (user) {
      alert(`로그인 한 상태입니다. 
        다른계정으로 접속하려면 로그아웃 후 진행해주세요`)
      const from = location.state?.from?.pathname || '/'
      navigate(from, { replace: true })
    }
  }, [user, navigate, location])

  // 이전 페이지의 정보 저장
  const from = location.state?.from?.pathname || '/'

  return (
    <Container>
      <Heading>Login</Heading>
      <StyledForm
        method="post"
        action={`/login?redirectTo=${from}`}>
        <input
          name="id"
          type="text"
          placeholder="input ID"
          required
        />
        <input
          name="password"
          type="password"
          placeholder="input password"
          required
        />
        <button type="submit">Send</button>
        {actionData?.success && (
          <SuccessMessage>
            <div className="success-message">login success</div>
          </SuccessMessage>
        )}
      </StyledForm>
    </Container>
  )
}

function CartProvider({ children }) {
  const { user } = useAuth()
  const [cart, setCart] = useState([])
  const [total, setTotal] = useState(0)

  useEffect(() => {
    if (user) {
      const userCart = localStorage.getItem(`cart_${user.id}`)
      if (userCart) {
        const plusCart = JSON.parse(userCart)
        setCart(plusCart)
        // calculateTotal(plusCart)
      }
    } else {
      setCart([])
      setTotal(0)
    }
  }, [user])

  return (
    <CartContext.Provider
      value={{ user, cart, total, updateQuantity, removeFromCart }}>
      {children}
    </CartContext.Provider>
  )
}

function Cart() {
  const { cart } = useCart()
  const navigate = useNavigate()
  const { user } = useAuth()

  return (
    <div className="cart-page">
      <h2>Your Shopping Cart</h2>

      {cart.length === 0 ? (
        <div className="empty-cart">
          <p>Your cart is empty.</p>
          <button onClick={() => navigate('/products')}>
            Continue Shopping
          </button>
        </div>
      ) : (
        <>
          <div className="cart-items">
            {cart.map(item => (
              <div
                key={item.id}
                className="cart-item">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="item-image"
                />
                <div className="item-details">
                  <h3>{item.title}</h3>
                  <p>${item.price}</p>

                  <div className="quantity-controls">
                    <button
                      onClick={() =>
                        updateQuantity(item.id, item.quantity - 1)
                      }>
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() =>
                        updateQuantity(item.id, item.quantity + 1)
                      }>
                      +
                    </button>
                  </div>

                  <p className="item-total">
                    Subtotal: ${(item.price * item.quantity).toFixed(2)}
                  </p>

                  <button
                    className="remove-button"
                    onClick={() => removeFromCart(item.id)}>
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <h3>Order Summary</h3>
            <p>
              Total Items: {cart.reduce((sum, item) => sum + item.quantity, 0)}
            </p>
            <p className="cart-total">Total: ${total.toFixed(2)}</p>

            {user ? (
              <button
                className="checkout-button"
                onClick={() => navigate('/checkout')}>
                Proceed to Checkout
              </button>
            ) : (
              <button
                className="login-to-checkout"
                onClick={() =>
                  navigate('/login', {
                    state: { from: { pathname: '/checkout' } }
                  })
                }>
                Login to Checkout
              </button>
            )}
          </div>
        </>
      )}
    </div>
  )
}

export default function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  )
}
