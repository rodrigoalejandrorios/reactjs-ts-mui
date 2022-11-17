import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { NotificationProvider } from './context/notification.context';
import { AppRouter } from './Router';

function App() {
  return (
    <NotificationProvider>
      <BrowserRouter>
        <Suspense fallback={'Cargando...'} >
          <AppRouter />
        </Suspense>
      </BrowserRouter>
    </NotificationProvider>
  );
}

export default App;
