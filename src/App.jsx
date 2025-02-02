import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomeScreen from './Screens/Home/HomeScreen'
import AddNewScreen from './Screens/NewIdea/AddNewScreen'
import { ThemeContext } from './context/ThemeContext'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const router=createBrowserRouter([
  {
    path:'/',
    element:<HomeScreen/>
  },
  {
    path:'/new',
    element: <AddNewScreen/>
  }
])

function App() {
  const [count, setCount] = useState(0)
  const [theme,setTheme]=useState('winter')
  return (
    <ThemeContext.Provider value={{theme,setTheme}}>
      <div className='flex flex-col justify-center items-center p-4 md:p-10' data-theme={theme}>
        <div className='max-w-2xl w-full items-center'>
        <RouterProvider router={router}/>
        </div>
      </div>
    </ThemeContext.Provider>
  )
}

export default App
