import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./Router";

function App() {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
