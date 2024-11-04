import type { Place } from '../api/Place'
import { Fragment, useState } from 'react'
import { search } from '../api/search'

interface LocationSearchProps {
  onPlaceClick: (place: Place) => void
}

export default function LocationSearch({ onPlaceClick }: LocationSearchProps ) {
  const [term, setTerm] = useState('')
  const [places, setPlaces] = useState<Place[]>([])
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const results = await search(term)
    setPlaces(results)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label className='font-semi-bold text-[#ff4500]' htmlFor='term'>
          Search
        </label>
        <input 
          type="text" 
          className='border border-[#eee] bg-[#111] text-[#eee] rounded-sm focus:border-[#ff4500] px-4 py-2 w-full my-4'
          id='term'
          value={term}
          onChange={e => setTerm(e.target.value)}  
        />
      </form>
      <h1 className='font-semi-bold text-[#ff4500]'>Locations Found</h1>
      <div className='grid grid-cols-[1fr_40px] gap-2 mt-2 items-center'>
        {
          places.map(place => {
            return (
              <Fragment key={place.id}>
                <p className='text-sm'>{place.name}</p>
                <button 
                  className='bg-[#ff4500] text-xs text-[#eee] font-semi-bold p-1 rounded'
                  onClick={() => onPlaceClick(place)}
                >
                  Go
                </button>
                <div className='border-b w-full col-span-2 border-[#ff4500]'/>
              </Fragment>
            )
          })
        }
      </div>
    </div>
  )
}
