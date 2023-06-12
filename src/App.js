import './App.css';
import SignIn from './components/SignIn';
import { createBrowserRouter, RouterProvider, Routes, Route } from "react-router-dom";
import MyApplication from './components/myApplication';
import Menubar from './components/menubar';
import Layout from './components/layout';
// import Root, {
//   loader as rootLoader,
//   action as rootAction,
// } from "./routes/root";
// const router = createBrowserRouter([
//   { path: '/', element: <SignIn /> },
//   { 
//     path: '/',
//     element: <Menubar/>,
//     children: [
//       {
//         path: "my-application",
//         element: <MyApplication />,
//       },
//     ],
//   },
// ])

function App() {
  return (
    <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<SignIn />} />
          <Route path="my-application" element={<MyApplication />} />
          {/* <Route
            path="/protected"
            element={
              <RequireAuth>
                <ProtectedPage />
              </RequireAuth>
            }
          /> */}
        </Route>
      </Routes>
  );
}

export default App;
