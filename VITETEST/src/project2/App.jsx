import {
  createBrowserRouter,
  Form,
  Link,
  NavLink,
  Outlet,
  RouterProvider,
  useActionData,
  useLoaderData,
  useLocation,
  useNavigate,
  useRouteError,
  useSearchParams
} from 'react-router-dom'

/*

*/
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
        loader: async ({ request }) => {}
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

function Layout() {
  const navigate = useNavigate()
  const location = useLocation()
  const [searchParams] = useSearchParams()

  return (
    <div
      className="app"
      style={{ height: '100vh' }}>
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

        <Link to="/products/1">productDetail1</Link>

        <button onClick={() => navigate('/about')}>About (Programmatic)</button>

        {/* 4. 검색 기능 */}
        <input
          placeholder="Search..."
          onChange={e => navigate(`?query=${e.target.value}`)}
          value={searchParams.get('query') || ''}
        />
      </nav>

      <main>
        {/* 5. 하위 라우트 표시 위치 */}
        <Outlet />
      </main>

      {/* 6. 현재 위치 표시 */}
      <footer>Current path: {location.pathname}</footer>
    </div>
  )
}

function ErrorPage() {
  const error = useRouteError()

  return (
    <div className="error-page">
      <h1>Oops! Something went wrong</h1>
      <p>
        {error.status} - {error.statusText || error.message}
      </p>
    </div>
  )
}

function Home() {
  return <h1>Home here</h1>
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
  const { title, price, description } = useLoaderData()
  return (
    <div className="product-detail">
      <h1>{title}</h1>
      <p>{description}</p>
      <pre>{price}</pre>
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

export default function App() {
  return <RouterProvider router={router} />
}
