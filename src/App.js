import Body from "./components/Body";
// import Header from "./components/Header";
import { Provider } from "react-redux";
import appStore from "./utils/appSore";

function App() {
  return (
    <Provider store={appStore}>
      <Body/>
    </Provider>
  );
}

export default App;
