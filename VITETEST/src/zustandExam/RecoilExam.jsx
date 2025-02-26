// 1. Recoil Atoms & Selectors
import { atom, selector } from 'recoil'

export const recipesState = atom({
  key: 'recipes',
  default: []
})

export const selectedRecipeIdState = atom({
  key: 'selectedRecipeId',
  default: null
})

export const selectedRecipeState = selector({
  key: 'selectedRecipe',
  get: ({ get }) => {
    const id = get(selectedRecipeIdState)
    const recipes = get(recipesState)
    return recipes.find(recipe => recipe.id === id)
  }
})

// 2. 데이터 패칭 함수
export const fetchRecipes = async () => {
  const res = await fetch('https://dummyjson.com/recipes?limit=5')
  const data = await res.json()
  return data.recipes
}

// 3. 컴포넌트 사용 예시
export default function RecipeApp() {
  const [recipes, setRecipes] = useRecoilState(recipesState)
  const selectedRecipe = useRecoilValue(selectedRecipeState)

  useEffect(() => {
    fetchRecipes().then(setRecipes)
  }, [])

  return (
    <div>
      <h2>Recoil 레시피 앱</h2>
      <RecipeList recipes={recipes} />
      {selectedRecipe && <RecipeDetail recipe={selectedRecipe} />}
    </div>
  )
}

function RecipeList({ recipes }) {
  const setSelectedId = useSetRecoilState(selectedRecipeIdState)

  return (
    <ul>
      {recipes.map(recipe => (
        <li
          key={recipe.id}
          onClick={() => setSelectedId(recipe.id)}>
          {recipe.name}
        </li>
      ))}
    </ul>
  )
}
