import "../containers/App.css";
import Sidebar from "../components/Sidebar";
import Main from "../components/Main";
import { useSelector } from "react-redux";
import _ from "lodash";

function App() {
  const contacts = useSelector((state) => state.contacts);
  const user = useSelector((state) => state.user);
  const activeUserId = useSelector((state) => state.activeUserId);
  return (
    <div className="App">
      <Sidebar contacts={_.values(contacts)} />
      <Main user={user} activeUserId={activeUserId} />
    </div>
  );
}

export default App;
