import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import Inicio from "../Paginas/Inicio";
import NovoExame from "../Paginas/NovoExame";

const router = createBrowserRouter([
    // Rota principal
    {
      path: "/inicio",
      element: <Inicio />
    },
    // Rota novo exame
    { 
      path: "/novo-exame",
      element: <NovoExame />,
    }
  ]);

export default router