import Header from "./components/Header";
import Main from "./components/Main";
import StartScreen from "./components/StartScreen";

function App() {
  return (
    <div className="max-w-screen-xl mx-auto ">
      <Header />
      <Main>
        <StartScreen />
      </Main>
    </div>
  );
}

export default App;
