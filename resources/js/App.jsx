import { useEffect } from 'react';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import moment from 'moment';
import { QueryClient, QueryClientProvider } from 'react-query';
import AppProvider from './contexts/AppContext';
import UserAuthProvider from './contexts/UserAuthContext';
import AdminAuthProvider from './contexts/AdminAuthContext';
import AppFrame from './layouts/AppFrame';

const queryClient = new QueryClient();

export default function App() {
  const theme = extendTheme({
    styles: {
      global: {
        body: {
          bg: 'gray.50'
        }
      }
    },
    fonts: {
      body: "'Inter', sans-serif",
      logoFont: "'Sofia', cursive;"
    }
  });

  useEffect(() => {
    moment.locale('vi');
  }, []);

  return (
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <AppProvider>
          <AdminAuthProvider>
            <UserAuthProvider>
              <AppFrame />
            </UserAuthProvider>
          </AdminAuthProvider>
        </AppProvider>
      </QueryClientProvider>
    </ChakraProvider>
  );
}
