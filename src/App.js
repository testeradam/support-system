import logo from './logo.svg';
import './App.css';
import LoginComponent from './components/loginComponent';
import SignIn from './components/SignIn';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Landing from './components/landing';
import MyApplication from './components/myApplication';
const router = createBrowserRouter([
  { path: '/', element: <SignIn /> },
  { path: '/home', element: <Landing /> },
  { path: '/my-application', element: <MyApplication /> }
])

function App() {
  return <RouterProvider  router={router}/>;
}

export default App;
