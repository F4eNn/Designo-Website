import React from 'react'
import { MapContainer, TileLayer, Marker } from 'react-leaflet'
import L from 'leaflet'
import iconMarker from 'leaflet/dist/images/marker-icon.png'
import iconRetina from 'leaflet/dist/images/marker-icon-2x.png'
import iconShadow from 'leaflet/dist/images/marker-shadow.png'
import 'leaflet/dist/leaflet.css'
type MapProps = {
	coordinates: number[]
	isData: boolean
}

const DynamicMap = ({ coordinates, isData }: MapProps) => {
	const icon = L.icon({
		iconRetinaUrl: iconRetina.src,
		iconUrl: iconMarker.src,
		shadowUrl: iconShadow.src,
	})
	return (
		<>
			{isData && (
				<MapContainer
					center={[coordinates[0], coordinates[1]]}
					zoom={15}
					scrollWheelZoom={true}
					style={{ width: '100%', height: '100%', zIndex: '0' }}>
					<TileLayer
						attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
						url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
					/>
					<Marker
						position={[coordinates[0], coordinates[1]]}
						icon={icon}></Marker>
				</MapContainer>
			)}
		</>
	)
}

export default DynamicMap
