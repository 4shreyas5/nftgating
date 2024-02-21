import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import Wallet from './pages/wallet';
import Home from './pages/home';
import Members from './pages/members';
import './App.css'

function App() {

  const router = createBrowserRouter([
    {path:'/',element:<Wallet></Wallet>},
    {path:'/home',element:<Home></Home>},
    {path:'/members',element:<Members></Members>}
  ])
  
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App