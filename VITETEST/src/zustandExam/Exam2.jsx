import { useEffect } from 'react'
import { create } from 'zustand'

// zustand store
// 이 스토어 안에서 모든걸 처리
/* useRecipeStore 사용방법
const { recipes, selectedRecipe } = useRecipeStore()
*/
const useRecipeStore = create((set, get) => ({
  // atom===============
  // state부분임
  // get().state변수명 메서드, set(인자값)메서드로
  // state의 내용을 변경할 수 있음
  recipes: [],
  selectedId: null,
  // atom===============

  // selector==========
  // 특정 레시피의 id를 선택하는 함수
  selectRecipe: id => set({ selectedId: id }),

  // 여기에서 get은 왜쓴거지?
  // get은 뭐고 왜 const나 let처럼
  // 변수 선언처럼 쓰는건지 무슨내용인지 모르겠음.
  // 이게 함수를 선언한는건지 일차함수를 쓰는건지

  // 선택된 레시피의 정보를 리턴하는 함수
  get selectedRecipe() {
    return get().recipes.find(r => r.id === get().selectedId)
  },

  // selector==========

  // 비동기 처리
  // 액션 관련 내용을 처리하기위해
  // reducer형태와 유사하게 진행
  fetchRecipes: async () => {
    const res = await fetch('https://dummyjson.com/recipes?limit=5')
    const data = await res.json()

    if (data.recipe) {
      set({ recipes: data.recipes })
    } else {
      set({ recipes: [] })
    }
  }
}))

// RecipeDetail 컴포넌트 (두 구현체 공통 사용)
function RecipeDetail({ recipe }) {
  return (
    <div>
      <h3>{recipe.name}</h3>
      <p>👨‍🍳 조리 시간: {recipe.cookTimeMinutes}분</p>
      <p>⭐ 평점: {recipe.rating}</p>
      <ul>
        {recipe.ingredients.map((ing, i) => (
          <li key={i}>{ing}</li>
        ))}
      </ul>
    </div>
  )
}

// 3. 컴포넌트 사용 예시
export default function RecipeApp() {
  // const [recipes, setRecipes] = useRecoilState(recipesState)
  // const selectedRecipe = useRecoilValue(selectedRecipeState)
  // 위의 recoil 방식을
  // 아래의 zustand방식으로 바꾸어 사용할때
  const { recipes, fetchRecipes, selectedRecipe } = useRecipeStore()
  // 사용하는 방법 알려준다고하고 이렇게만 적었음.
  // 어떤 내용을(어떻게 선언된내용을) 어떻게 적을(사용) 수 있는지 모르겠는데

  useEffect(() => {
    fetchRecipes()
  }, [])

  return (
    <>
      {recipes.map(recipe => {
        ;<div key={recipe.id}>
          <h2>Recoil 레시피 앱</h2>
          {/* <RecipeList recipes={recipes} /> */}
          {/* <RecipeList />*/}
          {/* {selectedRecipe && <RecipeDetail recipe={selectedRecipe} />}*/}
          {selectedRecipe && <RecipeDetail recipe={recipe} />}
        </div>
      })}
    </>
  )
}
