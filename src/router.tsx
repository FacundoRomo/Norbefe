import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import { Cuadro } from "./pages/Cuadro";
import { getCuadro } from "./pages/Cuadro"
import { Home } from "./component/main/Home";


export function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children:[{
        path:"/",
        element:<Home />
      },{
        path:"/cuadro/:id",
        element:<Cuadro />,
        loader: getCuadro
      }
      ]
    },
    // {
    //   path: "/cuadro/:id",
    //   element: <Cuadro />,
    //   loader: getCuadro
    // }
  ])

  return(
    <>
    <RouterProvider router={router} /> 
    </>
  )
}
