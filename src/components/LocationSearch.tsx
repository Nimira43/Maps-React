import type { Place } from '../api/Place'
import { useState } from 'react'

interface LocationSearchProps {
  onPlaceClick: (place: Place) => void
}

export default function LocationSearch({ onPlaceClick }: LocationSearchProps ) {
  const [term, setTerm] = useState('')
  const [places, setPlaces] = useState<Place[]>([])
  
  return (
    <div>
      <form>
        <label className='font-semi-bold text-[#eee]' htmlFor='term'>
          Search
        </label>
        <input 
          type="text" 
          className='border border-[#eee] bg-[#111] text-[#ff4500] rounded-sm focus:border-[#ff4500] px-4 py-2 w-full'
          id='term'
          value={term}
          onChange={e => setTerm(e.target.value)}  
        />
      </form>
    </div>
  )
}
