import React from 'react'
import {Link} from '@reach/router'
import {getDog} from './dogs'

function DogInfo({dogId}) {
  const [dog, setDog] = React.useState(null)

  React.useEffect(() => {
    getDog(dogId).then(d => setDog(d))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []) // 😱

  if (!dog) {
    return null
  }

  return (
    <div>
      <div>
        <Link to="/">Return to list</Link>
      </div>
      <h2>{dog.name}</h2>
      <img style={{height: 200}} alt={dog.name} src={dog.img} />
      <p>{dog.description}</p>
      <div>
        <label htmlFor="temperament">Temperament</label>
        <ul id="temperament">
          {dog.temperament.map(t => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default DogInfo
