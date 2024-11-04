import type { Place } from './api/Place'

interface MapProps {
  place: Place | null
}

export default function Maps( {place}: MapProps) {
  return (
    <div>Maps</div>
  )
}
