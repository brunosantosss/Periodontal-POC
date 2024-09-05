import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import Exame from "../Components/Exame";
import Inicio from "../Paginas/Inicio";

const router = createBrowserRouter([
    // Rota principal
    {
      path: "/inicio",
      element: <Inicio />
    },
    // Rota novo exame
    { 
      path: "/novo-exame",
      element: <Exame />,
    }
  ]);

export default router