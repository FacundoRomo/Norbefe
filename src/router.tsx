import { RouterProvider, createHashRouter } from "react-router-dom";
import App from "./App";
import { Cuadro } from "./pages/Cuadro";
import { getCuadro } from "./pages/Cuadro"
import { Home } from "./component/main/Home";
import { WhatsAppLink } from "./utils/WhatsApp";


export function Router() {
  const router = createHashRouter([
    {
      path: "/",
      element: <App />,
      errorElement:<h2>asdasdasdasd</h2>,
      children:[{
        path:"/",
        element:<Home />
      },{
        path:"/cuadro/:id",
        element:<Cuadro />,
        loader: getCuadro,
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
