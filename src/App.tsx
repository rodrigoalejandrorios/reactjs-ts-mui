import { BrowserRouter } from "react-router-dom";
import { NotificationProvider } from "./context/notification.context";
import { AppRouter } from "./Router";

function App() {
  return (
    <NotificationProvider>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </NotificationProvider>
  );
}

export default App;
