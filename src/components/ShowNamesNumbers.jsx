import React from 'react'

const ShowNamesNumbers = ({filterName}) => {
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


    return (
        <div>
            {showNameNumber()}
        </div>
    )
}

export default ShowNamesNumbers
