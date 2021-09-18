import React,{useState} from 'react'

const Search = () => {

    const [search, setSearch] = useState('')
    const searchName = (e) => {
        setSearch(e.target.value)
    }
    



    return (
        <>
            <form htmlFor={'my input'}>
                <input 
                    type="text"
                    value={search}
                    placeholder={'Name'}
                    onChange={searchName}                
                />
            </form>
            
        </>
    )
}

export default Search
