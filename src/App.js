import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Coffees from './components/Coffees';

export default function App() {
  const [coffees, setCoffees] = useState([]);
  const [formInputs, updateFormInputs] = useState({
    name: '',
    origin: '',
    variety: '',
    notes: ''
  });
  const getCoffees = async ()=>{
    try{
      const response = await fetch('http://brewmaster117.herokuapp.com/coffees');
      const data = await response.json();
      setCoffees(data)
    }catch(error){
      console.error(error)
    }
  }
  useEffect(
    ()=>{
      (
        async function (){
           await getCoffees();
        }
      )()
    }, [])
  const handleChange = (event) => {
    const updatedFormInputs = Object.assign({}, formInputs, { [event.target.id]: event.target.value})
    updateFormInputs(updatedFormInputs);
  };

  
  const handleSubmit = async (event) => {
    event.preventDefault();
    try{
      const response = await axios.post('http://brewmaster117.herokuapp.com/coffees', formInputs);
      const data = response.data;
      updateFormInputs({
        name: '',
        origin: '',
        variety: '',
        notes: ''
          })
          setCoffees([data, ...coffees])
      } catch(error){
      console.error(error)
    }}
  return (
    <div className="App">
        <div className="container">
            <nav>
              <h4 class="submitHeader">☕️ Create Coffee</h4>
              <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  onChange={handleChange}
                  value={formInputs.name}
                  />
                <label htmlFor="origin">Origin</label>
                <input
                  type="text"
                  id="origin"
                  onChange={handleChange}
                  value={formInputs.origin}
                  />
                <label htmlFor="variety">Variety</label>
                <input
                  type="text"
                  id="variety"
                  onChange={handleChange}
                  value={formInputs.variety}
                  />
                  <label htmlFor="notes"> Coffee Notes</label>
                <input
                  type="text"
                  id="notes"
                  onChange={handleChange}
                  value={formInputs.notes}
                  />
                <input type="submit" className="submit" value="Create ☕️"/>
              </form>
            </nav>
            <main>
              <Coffees coffees={coffees}/>
            </main>
            {/* <aside>
            </aside> */}
        </div>
        <footer />
    </div>
  );
}