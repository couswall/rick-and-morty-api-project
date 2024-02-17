
import { useContext, useEffect } from 'react';
import './Filters.css';
import { UrlContext } from '../../context';

export const Filters = ({ search }) => {

    const { setUrl, setCounter, selectValues, setSelectValues } = useContext( UrlContext );

    // Selector filters function
    const onChangeSelect = ({ target }) => {
        const { name, value } = target;

        setSelectValues( prevValues => ({
            ...prevValues,
            [name]: value
        })); 
    }

    // Clear filters
    const onClearFilters = () => {
        setSelectValues({
            status: '',
            gender: ''
        });
    }

    useEffect( () => {

        if ( selectValues.status === '' || selectValues.gender === '' ) {
            setCounter(1);
        }
        
        setUrl(`https://rickandmortyapi.com/api/character/?name=${ search }&status=${ selectValues.status }&gender=${ selectValues.gender }`);

    }, [ selectValues ]);

  return (
    <div className='filters flex'>
        <select className='status-select select'
            name='status'
            onChange={ onChangeSelect }
            value={ selectValues.status }
        >
            <option value={""} hidden>Status</option>
            <option value="">All</option>
            <option value="alive">Alive</option>
            <option value="dead">Dead</option>
            <option value="unknown">Unknown</option>
        </select>

        <select className='gender-select select'
            name='gender'
            onChange={ onChangeSelect }
            value={ selectValues.gender }
        >
            <option value={""} hidden>Gender</option>
            <option value="">All</option>
            <option value="female">Female</option>
            <option value="male">Male</option>
            <option value="genderless">Genderless</option>
            <option value="unknown">Unknown</option>
        </select>

        <button className='btn' onClick={ onClearFilters }>Clear</button>
    </div>
  )
}
