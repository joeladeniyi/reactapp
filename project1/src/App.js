import React, {useState} from 'react';
import List from "./list";
import Data from "./data";
import './index.css'
function App() {
  const [people, setPeople]= useState(Data);
  return (
    <main>
    <section className='container'>
<h1> {people.length} visit today</h1>
  <List people={people} />
  <button className='button' onClick={() => setPeople([])}> clear all</button>
    </section>



    </main>
    
  );
}

export default App;
