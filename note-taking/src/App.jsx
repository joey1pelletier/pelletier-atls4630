import { useState } from 'react'
import './App.css'

export default function App() {

  const [val, setVal] = useState("");
  const [curr_vals, set_curr_vals] = useState([]);
  const click = () => {
    alert(val);
  }
  const change = event => {
   // alert(event.target.value);
   setVal(event.target.value); // change value to whatever is being typed
  }

  const saveVal = () => {
    set_curr_vals([...curr_vals, val]);
    console.log(curr_vals);
  }

  const displayNotes = () => {
    if(curr_vals.length == 0) {
      return (
        <>
        <h2>Fear Tree</h2>
        <p>No fears to display</p>
        </>
      )
    }
    else {
      return (
        <>
        <table>
          {/*<thead>
            <tr>
              <th>Fear</th>
            </tr>
      </thead>*/}
          <tbody>
            <h2>Fear Tree</h2>
            {
              
              curr_vals.map((n, index) => (
                <div className="fear-box">
                <tr key={index}>
                  <td>{n}</td>
                </tr>
                </div>
              ))
            }
          </tbody>
        </table>
        </>
      )
    }
    
  }

  return (
    <>
      <div className="App">
        <h1>Limit Break</h1>
        <p>Enter your fear below</p>
        <textarea
          onChange={change} 
          value={val} 
          
        />
        <button onClick={saveVal}>click me</button>
        <div className="notes-list">
        {
          displayNotes()
        }
        
        </div>
      </div>
      
    </>
  )
}


