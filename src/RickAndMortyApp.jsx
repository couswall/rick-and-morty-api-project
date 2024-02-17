import logo from '/assets/rick-and-morty-logo.png'

import { useFetch } from './hooks/useFetch';
import { ListCharacters } from './components/ListCharacters/ListCharacters';
import { useForm } from './hooks/useForm';
import { useContext, useEffect, useState } from 'react';
import { UrlContext } from './context/UrlContext';
import { SearchInput } from './components/SearchInput/SearchInput';
import { Filters } from './components/Filters/Filters';

export const RickAndMortyApp = () => {
    
    const { url } = useContext( UrlContext );
    const { isLoading, data  } = useFetch( url );
    const { search , onInputChange } = useForm({ search: '' });


    return (
    <>
        <section className='search-section first-section'>
            <div className="container flex">
                
                <div className="img-container">
                    <img src={ logo } alt="Rick and Morty Logo" />
                </div>

                <SearchInput search={ search } onInputChange={ onInputChange }/>
                <Filters search={ search }/>                

            </div>
        </section>

        <ListCharacters 
            isLoading = { isLoading } 
            data = { data } 
            searchInput = { search }
        />

        
        
    </>
  )
}
