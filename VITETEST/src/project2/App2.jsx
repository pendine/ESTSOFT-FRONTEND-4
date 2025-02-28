import {
  createBrowserRouter,
  Form,
  Link,
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

// 라우터 코드 만들기전에
// 조원 전체가 공유할수있도록 주소에 대한 규칙을 미리 선정하고
// 그대로 처리할수 있도록 진행하는것을 권장.
// 주소명 미리 정해놓고 필요하면 1명이 필요한 주소 추가하고 관리.

// 퀴즈
// 1. 상품의 상세정보를 확인할수 있는 컴포넌트 ProductDetail을 만들어주세요
//  -> 주소 : /products/id값(products/:id)
//  -> detail 페이지에서는 title. description, price의 정보를 확인.
//  -> useLoaderData, useParams훅을 통해 구현.

// 힌트 : 한번에 구현하려 하지말고 우선 productDetail로의 접근 방법만 정의해두세요.
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true, // 기본경로에 랜더링될 컴포넌트 설정.
        element: <Home />
      },
      {
        path: 'products',
        element: <Products />,
        loader: async () => {
          const res = await fetch('https://dummyjson.com/products')
          return res.json()
        }
      },
      {
        path: 'products/:id',
        element: <ProductDetail />,
        loader: async ({ params }) => {
          console.log(params)
          const res = await fetch(`https://dummyjson.com/products/${params.id}`)
          return res.json()
        }
      },
      {
        path: 'contact',
        element: <Contact />,
        action: async ({ request }) => {
          const formData = await request.formData()

          // 데이터를 전송만함
          // return { success: true, data: Object.fromEntries(formData) }
          // submit 버튼 클릭시 이동함
          return redirect('/')
        }
      }
    ]
  }
])

function Home() {
  return <h1>일단 잘 오셨소잉</h1>
}

function Contact() {
  const actionData = useActionData()

  return (
    <div className="contact-form">
      <h2>Contact Us</h2>
      <Form method="post">
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
      </Form>

      {actionData?.success && (
        <div className="success-message">Message sent successfully!</div>
      )}
    </div>
  )
}

function ProductDetail() {
  const product = useLoaderData()
  // useParams
  return (
    <div className="product-detail">
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <div className="price">${product.price}</div>
    </div>
  )
}

function Products() {
  const { products } = useLoaderData()

  return (
    <div>
      <h2>Products</h2>
      <div className="product-grid">
        {products.map(product => (
          <Link
            key={product.id}
            to={`/products/${product.id}`}>
            <div className="product-card">
              <h3>{product.title}</h3>
              <p>${product.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

function ErrorPage() {
  const error = useRouteError()

  return (
    <div className="error-page">
      <h1>에러 싫다 ㅠㅠ</h1>
      <p>
        {error.status} - {error.statusText || error.message}
      </p>
    </div>
  )
}

function Layout() {
  const navigate = useNavigate()
  const location = useLocation()
  const [searchParams] = useSearchParams()

  return (
    <div className="app">
      {/* 3. 네비게이션 바 */}
      <nav>
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

        <button onClick={() => navigate('/about')}>About (Programmatic)</button>

        {/* 4. 검색 기능 */}
        <input
          placeholder="Search..."
          onChange={e => navigate(`?query=${e.target.value}`)}
          value={searchParams.get('query') || ''}
        />
      </nav>

      <main>
        {/*   5. 하위 라우트 표시 위치 */}
        <Outlet />
      </main>

      {/* 6. 현재 위치 표시 */}
      <footer>Current path: {location.pathname}</footer>
    </div>
  )
}

export default function App() {
  return <RouterProvider router={router} />
}
