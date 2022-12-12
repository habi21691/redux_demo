import { useState } from 'react'
import './App.css'
import CakeContainer from './component/CakeContainer'
import HookCakeContainer from './component/HookCakeContainer'
import IceCreameContainer from './component/iceCreameContainer'
import ItemContainer from './component/itemContainer'
import NewCakeContainer from './component/NewCakeContainer'
import UserContainer from './component/userContainer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <UserContainer/>
      {/* <ItemContainer cake/>
      <ItemContainer/>
      <NewCakeContainer/>
      <IceCreameContainer/>
      <HookCakeContainer/>
      <CakeContainer/> */}
    </div>
  )
}

export default App
