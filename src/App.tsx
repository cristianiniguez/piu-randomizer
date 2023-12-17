import { ChakraProvider } from '@chakra-ui/react';
import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom';
import FormPage from './pages/FormPage';
import SongPage from './pages/SongPage';

const router = createBrowserRouter([
  { path: '/form', element: <FormPage /> },
  { path: '/song', element: <SongPage /> },
  { path: '*', element: <Navigate to='/form' /> },
]);

function App() {
  return (
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  );
}

export default App;
