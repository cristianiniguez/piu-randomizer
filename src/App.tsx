import { ChakraProvider } from '@chakra-ui/react';
import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  { path: '/', element: <Navigate to='/controls' /> },
  { path: '/controls', element: <h1>Here should be the controls</h1> },
  { path: '/song', element: <h1>Here should be the random song</h1> },
]);

function App() {
  return (
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  );
}

export default App;
