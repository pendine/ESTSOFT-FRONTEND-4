import { atom, selector } from 'recoil'

// 전체 조회
export const usersListState = atom({
  key: 'usersListState',
  default: []
})

// 상세조회
// 상세조회에 대한 아톰을 따로 둬야함
export const selectedUserIdState = atom({
  key: 'selectedUserIdState',
  default: 1
})

export const userListQuery = selector({
  key: 'usersListQuery',
  get: async () => {
    const response = await fetch('https://dummyjson.com/users')
    const data = await response.json()
    return data
  }
})

export const userQuery = selector({
  key: 'userQuery',
  get: async ({ get }) => {
    // const response = await fetch(`https://dummyjson.com/users/${get}`)
    // 파라미터 get을 바로 가져다 쓸 수 없음
    // 해당 store의 atom과 연결 필요
    // 어디에서 넘어온 state인지 모르기 때문에
    // (어떤 atom에 붙어야하는지 모르기때문에)
    const userId = get(selectedUserIdState)
    const response = await fetch(`https://dummyjson.com/users/${userId}`)
    // const data = await response.json()
    // return data
    return response.json()
  }
})
