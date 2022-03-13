import React from "react";
import "./App.css";
import Person from "./components/Person";

function App() {
  return (
    <div className="App">
      <Person
        lastName= {"Doe"}
        firstName={"Jane"}
        age={45}
        hair={"Black"}
      />
      
      <Person
        lastName= {"Smith"}
        firstName={"John"}
        age={88}
        hair={"Brown"}
      />

      <Person
        lastName= {"Fillmore"}
        firstName={"Millard"}
        age={50}
        hair={"Brown"}
      />

      <Person
        lastName= {"Smith"}
        firstName={"Maria"}
        age={62}
        hair={"Brown"}
      />
    </div>
  );
}

export default App;




