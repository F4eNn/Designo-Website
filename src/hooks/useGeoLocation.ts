import { useEffect, useState } from 'react'

export const useGeoLocation = (city: string, street: string, country: string) => {
	const [coordinates, setCoordinates] = useState<number[]>([51.505, -0.09])
	const [isData, setIsData] = useState(false)
	useEffect(() => {
		const getCoordinates = async () => {
			const response = await fetch(
				` https://nominatim.openstreetmap.org/search?city=${city}&street=${street}&country=${country}&format=json`
			)
			const data = await response.json()
			const lat = +data[0].lat
			const lon = +data[0].lon
			setCoordinates([lat, lon])
			setIsData(true)
		}
		getCoordinates()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return {
		isData,
		coordinates,
	}
}
