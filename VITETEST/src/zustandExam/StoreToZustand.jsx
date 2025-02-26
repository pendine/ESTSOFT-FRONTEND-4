const useAuthStore = create(set => ({
  isLoggedIn: false,
  login: async () => {
    const user = await fetchUsers()
    set({ isLoggedIn: true, user })
  },
  logout: () => {
    set({
      isLoggedIn: false,
      user: null
    })
  },
  handleLogin: () => {}
}))

export const LoginButton = () => {
  const { isLoggedIn, login, login, handleLogin } = useAuthStore()

  return (
    <button onClick={isLoggedIn ? logout : handleLogin}>
      {isLoggedIn ? 'Logout' : 'Login'}
    </button>
  )
}
