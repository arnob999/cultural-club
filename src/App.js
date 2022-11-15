import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import TopicDetails from './Components/TopicDetails/TopicDetails';
import Topics from './Components/Topics/Topics';
import Main from './Layout/Main';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Topics></Topics>
        }, {
          path: 'quiz/:kosu',
          loader: ({ params }) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.kosu}`),
          element: <TopicDetails></TopicDetails>
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
