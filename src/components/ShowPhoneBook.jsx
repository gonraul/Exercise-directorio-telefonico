import React from 'react'

const ShowPhoneBook = ({namePhones}) => {

    const showNames = () => {
        return namePhones.map((namePhone) => (
          <div key={namePhone.id}>{namePhone.name}</div>
        ));
      };


    return (
        <div>
            {showNames()}
        </div>
    )
}

export default ShowPhoneBook
