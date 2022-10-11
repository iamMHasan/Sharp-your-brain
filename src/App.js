import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Root/Main';
import Header from './components/Header';
import Home from './components/Home';
import Statistics from './components/Statistics';
import Quizplay from './components/Quizplay';
import ErrorPage from './components/ErrorPage';

function App() {
  const router = createBrowserRouter([
    {path : '*' , element : <ErrorPage></ErrorPage>},
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/home',
          loader: async () => {
            return fetch('https://openapi.programming-hero.com/api/quiz')
          },
          element: <Home></Home>
        },
        {
          path: '/',
          loader: async () => {
            return fetch('https://openapi.programming-hero.com/api/quiz')
          },
          element: <Home></Home>
        },
        {
          path : '/quiz/:id',
          loader : async({params}) => {
            return fetch(` https://openapi.programming-hero.com/api/quiz/${params.id}`)
          },
          element : <Quizplay></Quizplay>
        },
        {
          path: '/Statistics',
          element: <Statistics></Statistics>
        }
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
