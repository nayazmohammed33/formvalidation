import "./asset/scss/main.css";
import { AppContextProvider } from "./context/App";
import { Home } from "./page";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
    return (
        <AppContextProvider>
            <Home />
        </AppContextProvider>
    );
}
