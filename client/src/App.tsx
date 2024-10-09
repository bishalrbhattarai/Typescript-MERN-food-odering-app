import Login from './auth/Login'
import {createBrowserRouter, RouterProvider} from "react-router-dom" 
import MainLayout from './MainLayout';
import Signup from './auth/Signup';
import Forgotpassword from './auth/Forgotpassword';
import Resetpassword from './auth/Resetpassword';
import Verifyemail from './auth/Verifyemail';
import Navbar from "./components/Navbar"

const appRouter = createBrowserRouter([
{
  path:"/",
  element:<Navbar />,
  // children: [
  // {
  //   path:"/forgotpassword",
  //   element:<Forgotpassword/>
  //  }
  // ]
},
{
  path:"/login",
  element:<Login />,
},
{
  path:"/signup",
  element:<Signup />,
},
{
  path:"/forgotpassword",
  element:<Forgotpassword/>
 },
 {
  path:"/resetpassword",
  element:<Resetpassword />
 },
 {
  path:"/verifyemail",
  element:<Verifyemail />
 },
 {
  path:"/navbar",
  element:<Navbar />
 }

]);


function App() {

  return (
    <>

    <RouterProvider router={appRouter}>




    </RouterProvider>
 {/* <Login /> */}

    </>
  )
}

export default App
