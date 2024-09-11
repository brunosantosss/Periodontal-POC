import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import { RouterProvider } from 'react-router-dom';

import router from './routes/main.jsx';

import Navbar from './Components/common/Navbar/index.jsx';
import Footer from './Components/common/Footer/index.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <Navbar/>
      <RouterProvider router={router}/>
      <Footer />
  </StrictMode>,
)
