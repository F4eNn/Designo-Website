'use client'
import React, { useEffect, useState } from 'react'
import Leaflet from 'leaflet'
import * as ReactLeaflet from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

const { MapContainer, TileLayer, Marker, Popup } = ReactLeaflet
const DynamicMap = () => {
	const [coordinated, setCoordinates] = useState<number[]>([51.505, -0.09])
	const [isData, setIsData] = useState(false)
	useEffect(() => {
		const getCoordinates = async () => {
			const response = await fetch(' https://nominatim.openstreetmap.org/search?street=30%plac%grunwaldzki&format=json')
			const data = await response.json()
			const lat = +data[0].lat 
			const lon = +data[0].lon 
			setCoordinates([lat,lon])
			console.log([lat, lon])
			setIsData(true)
		}
		getCoordinates()
	}, [])

	

	return (
		<div className='w-full h-[400px] '>
			{isData && (
				<MapContainer
					center={[coordinated[0], coordinated[1]]}
					zoom={13}
					scrollWheelZoom={false}
					style={{ width: '100%', height: '100%' }}>
					<TileLayer
						attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
						url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
					/>
					<Marker position={[51.505, -0.09]}></Marker>
				</MapContainer>
			)}
		</div>
	)
}
export default DynamicMap
