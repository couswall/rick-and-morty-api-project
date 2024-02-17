import { useEffect, useState } from "react";

export const useFetch = ( url = '' ) => {
    
    const [fetchState, setFetchState] = useState({ 
        isLoading: true, 
        data: null, 
        hasError: null
    });

    const getFetch = async () => {

        setFetchState({
            ...fetchState,
            isLoading: true,
        });
        
        try {
            const resp = await fetch( url );
            const data = await resp.json();
            // console.log( data );

            setFetchState({
                isLoading: false, 
                data,
                hasError: null
            });

        } catch (error) {
            
            setFetchState({
                ...fetchState,
                hasError: error
            });
        }

    }

    useEffect(() => {
      
        getFetch();

    }, [ url ]);


    return {
        isLoading: fetchState.isLoading,
        data:      fetchState.data,
        hasError:  fetchState.hasError,
    }
}
