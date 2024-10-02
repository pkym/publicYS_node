import "./styles/reset.css";
import "./styles/main.css";
import MainPage from "./components/MainPage";

function App() {
  const today = new Date().toString().padStart(2, "0");
  console.log(today);

  return <MainPage />;
}

export default App;
