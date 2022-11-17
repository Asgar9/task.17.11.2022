import './App.css';
import React from 'react';
function App() {
  
  const[data,setData]=React.useState(null);
  const[show,showData]=React.useState(false);
  function getData(val)
  {
   setData(val.target.value)
   showData(false)
  }
  return (
    <div className="App">
      {
        show?
        <h1>{data}</h1>
        :null
      }
     <input type="text" onChange={getData}/>
     <button onClick={()=>showData(true)}>show data</button>     
    </div>
  );
}

export default App;
