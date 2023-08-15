import { RouterProvider, createHashRouter } from "react-router-dom";
import App from "./App";
import { Cuadro } from "./pages/Cuadro/Cuadro";
import { getCuadro } from "./pages/Cuadro/Cuadro"
import { Home } from "./component/main/Home";
import { ErrorPage } from "./pages/404";
import { Login } from "./pages/Login/Login";


export function Router() {
  const router = createHashRouter([
    {
      path: "/",
      element: <App />,
      errorElement:<ErrorPage />,
      children:[{
        path:"/",
        element:<Home />
      },{
        path:"/cuadro/:id",
        element:<Cuadro />,
        loader: getCuadro,
      },{
        path:"/login",
        element:<Login />
      }
      ]
    },
  ])

return (
  <>
    <RouterProvider router={router} />
  </>
)
}
