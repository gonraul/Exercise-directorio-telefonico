import React, { useState, useEffect } from "react";
import "./App.css";
import { getAllNotes } from "./services/getAllNotes";

const App = () => {
  const [search, setSearch] = useState("");
  const [namePhones, setnamePhones] = useState([]);

  useEffect(() => {
    getAllNotes().then((initialName) => {
      setnamePhones(initialName);
    });
  }, []);

  const searchName = (e) => {
    setSearch(e.target.value);
  };

  const filterName = namePhones.filter((namePhone) =>
    namePhone.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
  );
  const showNameNumber = (filterName) => {
    if (filterName.length > 5) {
      return "Keep writing";
    }
    if (filterName.length <= 5 && filterName > 1) {
      return filterName;
    }
  };

  const showNames = () => {
    return namePhones.map((namePhone) => (
      <div key={namePhone.id}>{namePhone.name}</div>
    ));
  };

  return (
    <>
      <h3>PHONEBOOK</h3>

      <form htmlFor={"my input"}>
        <input
          type="text"
          value={search}
          placeholder={"Name"}
          onChange={searchName}
        />
      </form>
      <br />
      <br />
      <div> {showNames()} </div>
    </>
  );
};

export default App;
