import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Root/Main';
import Header from './components/Header';
import Home from './components/Home';

function App() {
  const router = createBrowserRouter([
    {
      path : '/', 
      element : <Main></Main>,
      children : [
        {path : '/', element : <Home></Home>},
      ]
    }
  ])
  return (
    <div className="App">
     <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
