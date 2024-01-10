import "./App.css";

function App() {
  /*
  let age = 20;
  const isGreen = true;
  return (
    <div className="App">
      {age > 18 ? <h1>Đủ tuổi</h1> : <h1>Chưa đủ tuổi</h1>}
      <h1 style={{ color: isGreen ? "red" : "orange" }}>Color</h1>
      {isGreen && <button> Button</button>}
    </div>
  );
  */

  // Ex2
  /*
  let names= ["Hiệu", "Hưng","Hiếu"];
  return (
    <div>
      {names.map((name,key)=>{
        return <h1 key={key}>{name}</h1>
      })}
    </div>
  );
  */
      const planets= [
        {name : "Mars", isGasplanet : false},
        {name : "Earth", isGasplanet : false},
        {name : "Jupiter", isGasplanet : true},
        {name : "Venus", isGasplanet : false},
        {name : "Neptune", isGasplanet : true},
        {name : "Uranus", isGasplanet : true},
  
      ]
      return (
        <div>
          {planets.map((Planet, key)=>{
            if (!Planet.isGasplanet){
              return <h1>{Planet.name}</h1>
            }
          })}
        </div>
      )
}

export default App;
