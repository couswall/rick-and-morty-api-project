
import './CardCharacter.css';

export const CardCharacter = ({ name, status, image, species, origin, gender  }) => {
  return (
    <article className='card-character'>
        <div className="img-container">
            <img src={ image } alt= { name } loading='lazy'/>
            <div className="overlay">
              <h4 className='text-center'>{ name }</h4>
            </div>
        </div>
        
        <div className="info-character">
            <p className='status-text'> 
              { status } 
              <span className='status-circle' 
                style={{ 
                  backgroundColor: 
                    ( status === 'Alive') 
                      ?  'green' 
                      : ( status === 'Dead') ? 'red' : 'gray' }}>
              </span>
            </p>
            <p>Gender: { gender }</p>
            <p>Specie: { species }</p>
            <p>Origin: { origin.name }</p>
        </div>
    </article>
  )
}
