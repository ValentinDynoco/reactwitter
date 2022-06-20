import './App.scss';
import Sidebar from "./component/sidebar/Sidebar";
import Tweets from "./component/tweets/Tweets";
import Tendances from "./component/tendances/Tendances";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Tweets />
      <Tendances />
    </div>
  );
}

export default App;
