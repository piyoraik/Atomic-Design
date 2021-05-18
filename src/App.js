import { UserProvider } from "./components/providers/UserProvider";
import { Router } from "./components/router/Router";
import "./styles.css";

export default function App() {
  return (
    <UserProvider>
      <Router />
    </UserProvider>
  );
}
