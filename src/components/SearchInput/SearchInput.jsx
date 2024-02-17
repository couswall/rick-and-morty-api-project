import { IoSearchSharp } from "react-icons/io5";
import './SearchInput.css';
import { useContext } from "react";
import { UrlContext } from "../../context";

export const SearchInput = ({ search, onInputChange }) => {


  const { setIsSearching, setUrl, counter } = useContext( UrlContext );

     // Submit Function
    const onSubmit = ( e ) => {
        e.preventDefault();
        if ( search.length <= 1 ) return; 
        
        setUrl(`https://rickandmortyapi.com/api/character/?page=${ counter }&name=${ search }`);
        setIsSearching( true );
    }

  return (
    <form className='search-form flex' onSubmit={ onSubmit }>
      <input 
          type="text" 
          placeholder='Search a character'
          name='search'
          value={ search }
          onChange={ onInputChange }
      />
      <button className="btn flex" type='submit'>
          <IoSearchSharp />
      </button>
  </form>
  )
}
