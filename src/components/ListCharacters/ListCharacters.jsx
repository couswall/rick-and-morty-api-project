
import { useContext, useState } from 'react';
import { CardCharacter } from '../CardCharacter';
import './ListCharacters.css';
import { UrlContext } from '../../context/UrlContext';

export const ListCharacters = ({ isLoading, data, searchInput }) => {

    const { counter, setCounter, setUrl } = useContext( UrlContext );

    const { results = [], info = {} } = !!data && data; 


    // onNextPage function
    const onNextPage = () => {

      if( counter === info.pages ) return; 

      setCounter( counter + 1 ); 
      setUrl( info.next );

    }

    // Previous page function
    const onPreviousPage = () => {

      if( counter === 1 ) return; 

      setCounter( counter - 1 ); 
      setUrl( info.prev );

    }

    const showError = ( searchInput.length > 0 ) && ( results.length === 0 );


  return (
    <section className='characters-collection section'>
            <div className="container flex">

            <div className="pagination flex" style={{ display: ( showError ) ? 'none' : ''}}>
                    <button 
                        className={`btn ${ counter === 1 ? 'desactive' : ''}`}
                        onClick={() => onPreviousPage() }
                        disabled= { counter === 1 }
                    >
                        Prev
                    </button>

                    <button 
                        className={`btn ${ counter === info.pages ? 'desactive' : ''}`}
                        onClick={() => onNextPage() }
                        disabled= { counter === info.pages }
                    >
                        Next
                    </button>
                </div>

                  {
                    showError && <p>No items found with <b>{ searchInput } </b> </p>
                  }

                <div className="characters-wrapper grid">
                  {
                      isLoading && <h6>Loading characters...</h6>
                  }


                  { 
                    data &&  
                       results.map( character => ( <CardCharacter key={ character.id } {...character}/> ) )
                  }
                </div>
                
            </div>

    </section>
  )
}
