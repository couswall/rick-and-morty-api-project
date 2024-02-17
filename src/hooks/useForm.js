import { useContext, useState } from "react";
import { UrlContext } from "../context";

export const useForm = ( initialState = {} ) => {
       
    const [formState, setFormState] = useState( initialState );
    const { setUrl, setCounter, counter, setIsSearching, selectValues, setSelectValues } = useContext( UrlContext );

    const onInputChange = ({ target }) => {
        const { name, value } = target;

        
        setFormState({
            ...formState,
            [ name ]: value
        }); 

        if ( value.length <= 0 ) {
            setCounter( 1 );
            setUrl((`https://rickandmortyapi.com/api/character/?page=${counter}`));
            setIsSearching( false );
        } else{
            setIsSearching( true );
            setCounter( 1 );
            setUrl(`https://rickandmortyapi.com/api/character/?page=${ counter }&name=${ value.toLowerCase() }&status=${ selectValues.status }&gender=${ selectValues.gender }`);
        }
        
    }


    return{
        formState,
        ...formState,
        onInputChange
    }

}
