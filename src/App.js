import React,{useState} from "react";
import "./App.css";


const App = () => {

  const [search, setSearch] = useState('')
    const searchName = (e) => {
        setSearch(e.target.value)
    }
    
  return (
    <>
      <h3>PHONEBOOK</h3>
      <form htmlFor={'my input'}>
                <input 
                    type="text"
                    value={search}
                    placeholder={'Name'}
                    onChange={searchName}                
                />
            </form>
            
    </>
  );
};

export default App;
