import { useState } from "react";
import { UrlContext } from "./UrlContext"



export const UrlProvider = ({ children }) => {

    const [counter, setCounter] = useState(1);
    const [ url, setUrl ] = useState(`https://rickandmortyapi.com/api/character/?page=${counter}`);
    const [isSearching, setIsSearching ] = useState(false);
    const [selectValues, setSelectValues ]  = useState({
      status: '',
      gender: ''
  });
  
  return (
    <UrlContext.Provider value={{ 
        url, 
        setUrl, 
        counter, 
        setCounter, 
        isSearching, 
        setIsSearching, 
        selectValues,
        setSelectValues 
      }}>
        
        { children }
    </UrlContext.Provider>    
  )
}
