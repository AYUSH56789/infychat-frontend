import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import AuthMain from './component/authPage/AuthMain'
import RegistrationForm from './component/authPage/RegistrationForm.jsx';
import LoginForm from './component/authPage/LoginForm.jsx';
import ForgetForm from './component/authPage/ForgetForm.jsx';
import MainDashboard from './component/dashBoard/mainDashBoard/MainDashboard.jsx';
import store from './app/store'
import { Provider } from 'react-redux'
import ProtectRoute from './utils/ProtectRoute.jsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LandingPage from './component/landingPage/LandingPage.jsx';
import LandingPageLayout from './component/landingPage/LandingPageLayout.jsx';
import { SocketProvider } from './utils/SocketIo.jsx';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<LandingPageLayout />}>
        <Route path="" element={<LandingPage />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/sign-up" element={<RegistrationForm />} />
        <Route path="/forget-password" element={<ForgetForm />} />
      </Route>
      <Route element={<SocketProvider><ProtectRoute /></SocketProvider>} >
        <Route path="/dashboard" element={<MainDashboard />} />
      </Route>
    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <Provider store={store}>
    <RouterProvider router={router} />
    <ToastContainer

      position="top-center"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
    ></ToastContainer>
  </Provider>

  // </React.StrictMode>,
)
