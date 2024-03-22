import { RouterProvider, createBrowserRouter } from "react-router-dom"

import Home from "./features/home/Home"
import RootLayOut from "./ui/RootLayOut"
import About from "./features/home/About"
import Contact from "./features/home/Contact"

const App = () => {


  const router = createBrowserRouter([{
   path: '/', 
   element: <RootLayOut />,
   children: [
    {index: true, element: <Home /> },
    {path: 'about', element: <About />},
    {path: 'contact', element: <Contact />},
    {path: 'about/us/page', element: <About />},
    {path: 'contact/us/page', element: <Contact />},
    {path: 'Home/page', element: <Home />},
    
   ]
  }])
  return <RouterProvider router={router} />
}
export default App