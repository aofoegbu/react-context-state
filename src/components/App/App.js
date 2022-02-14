import "./App.css";
import Navigation from "../Navigation/Navigation";
import SaladMaker from "../SaladMaker/SaladMaker";
import UserContext from "./../User/User";

const user = {
  name: "Augustine",
  favourites: ["avocado", "carrot"],
};

function App() {
  return (
    <UserContext.Provider value={user}>
      <div className="App">
        <Navigation />
        <SaladMaker />
      </div>
    </UserContext.Provider>
  );
}

export default App;
