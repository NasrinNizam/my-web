
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import { PortfolioPage } from './Pages/PortfolioPage'
import { WorksPage } from './Pages/WorksPage'
import { ReviewPage } from './Pages/ReviewPage'
import { ContactPage } from './Pages/ContactPage'
import { LayoutOne } from './Layouts/LayoutOne'
import { HomePage } from './Pages/HomePage'
import { ToastContainer } from 'react-toastify'
function App() {
  const route = createBrowserRouter(
    createRoutesFromElements(
      
       <Route>
          <Route path='/' element={<LayoutOne/>}>
             <Route index element={<HomePage/>}/>
             <Route path='/portfolio' element={<PortfolioPage/>}/>
             <Route path='/works' element={<WorksPage/>}/>
             <Route path='/reviews' element={<ReviewPage/>}/>
             <Route path='/contacts' element={<ContactPage/>}/>
          </Route>
        </Route>
    )
  )

  return (
    <>
      <RouterProvider router={route}/>
      <ToastContainer />
      
    </>
  )
}

export default App
