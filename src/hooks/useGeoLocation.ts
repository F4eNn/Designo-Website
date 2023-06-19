import { useEffect, useState } from 'react'

export const useGeoLocation = (city: string, street: string, country: string) => {
	const [coordinates, setCoordinates] = useState<number[]>([51.505, -0.09])
	const [isData, setIsData] = useState(false)
	const [isLoading, setIsLoading] = useState(false)
	useEffect(() => {
		const getCoordinates = async () => {
			setIsLoading(true)
			try {
				const response = await fetch(
					` https://nominatim.openstreetmap.org/search?city=${city}&street=${street}&country=${country}&format=json`
				)
				if (!response.ok) {
					throw Error('Something went wrong, try again later')
				}
				setIsLoading(false)
				const data = await response.json()
				const lat = +data[0].lat
				const lon = +data[0].lon
				setCoordinates([lat, lon])
				setIsData(true)
			} catch (error) {
				console.warn(error)
			}
		}
		getCoordinates()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return {
		isLoading,
		isData,
		coordinates,
	}
}
