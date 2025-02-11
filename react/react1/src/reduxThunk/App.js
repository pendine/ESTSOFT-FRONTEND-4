import { Provider } from "react-redux";
import { store }from './Store.js'
import List from "./List.js";

function App(){
  return(
    <Provider store={store}>
      <List />
    </Provider>
  )
}

export default App;