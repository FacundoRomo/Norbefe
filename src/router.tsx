import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import { Cuadro } from "./pages/Cuadro";
import { getCuadro } from "./pages/Cuadro"


export function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />
    },
    {
      path: "/cuadro/:id",
      element: <Cuadro />,
      loader: getCuadro
    }
  ])

  return(
    <>
    <RouterProvider router={router} /> 
    </>
  )
}
