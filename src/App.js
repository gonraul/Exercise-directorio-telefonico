import React, { useState, useEffect } from "react";
import "./App.css";
import ShowPhoneBook from "./components/ShowPhoneBook";
import servicesAxios from './services/crudAxios.js'

const App = () => {
  const [search, setSearch] = useState("");
  const [namePhones, setnamePhones] = useState([]);
  const [newUser, setNewUser] = useState('')
  

  useEffect(() => {
    servicesAxios.getAll().then((initialName) => {
      setnamePhones(initialName);
    });
  }, []);

  const searchName = (e) => {
    setSearch(e.target.value);
  };

  const filterName = namePhones.filter((namePhone) =>
    namePhone.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
  );


  const showNameNumber = () => {
    if (filterName.length > 5) {
      return "Keep writing";
    }
    if (filterName.length <= 5 && filterName.length > 1) {
      return filterName.map((namePhone) =>(
        <div key={namePhone.id}>{namePhone.name}: {namePhone.phone}</div>
      ));
    }
    if (filterName.length === 1) {
      return filterName.map((namePhone) =>(
        <div key={namePhone.id}>{namePhone.name}: {namePhone.phone}</div>
      ));
    }
  };
  
  const showNames = () => {
    return namePhones.map((namePhone) => (
      <div key={namePhone.id}>{namePhone.name}</div>
    ));
  };
  const handleUserInsert = (e) => {
    setNewUser(e.target.value)
  }
  
  const addUser = (e) => {
    e.preventDefault()
    const userObject = {
      name: newUser,
    }
    servicesAxios.create(userObject)
      .then(returedUser =>{
        setnamePhones([...namePhones, userObject])
      })
    setNewUser('')
  }
  console.log(namePhones)
  

  return (
    <>
      <h3>PHONEBOOK</h3>
      <div>Searcher User</div>

      <form htmlFor={"my input"}>
        <input
          type="text"
          value={search}
          placeholder={"Search phone for name"}
          onChange={searchName}
        />
      </form>
      <br />
      <div>Add User</div>
      <form onSubmit={addUser}>
        <input 
          type="text" 
          value={newUser}
          placeholder={'Insert New User'}
          onChange={handleUserInsert}
        />

      </form>
       
      <h5>{showNameNumber()}</h5>
      <br />
      <ShowPhoneBook namePhones={namePhones}/>
      
      <div> {showNames()} </div>
    </>
  );
};

export default App;
