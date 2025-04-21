import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Todolist from './Todolist'
import{createBrowserRouter,RouterProvider} from 'react-router-dom'
import Addtodo from './Addtodo'
import Edit from './Edit'


const router=createBrowserRouter([
  {
    path:'/',
    element: <Todolist />
  },
  {
    path:'/addtodo',
    element:<Addtodo/>
  },
  {
    path:'/edit/:id',
    element:<Edit/>
  }
  
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
