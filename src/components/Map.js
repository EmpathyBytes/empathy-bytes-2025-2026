import React, { useState, useRef, useEffect } from 'react'
import { MapContainer, TileLayer, useMap, Marker, Popup, useMapEvents } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';

import L from 'leaflet';
import goldPin from '../images/emotions_page_ui/map_pin_gold.png';
import bluePin from '../images/emotions_page_ui/map_pin_blue.png';

// all image imports from emotions_page_ui
import buzzingThoughtsGold from '../images/emotions_page_ui/buzzing_thoughts_logo_gold.png';
import buzzingThoughtsBlue from '../images/emotions_page_ui/buzzing_thoughts_logo_blue.png';
import addStory from '../images/emotions_page_ui/add_your_story.png';

import zoomInIcon from '../images/emotions_page_ui/zoom_in.png';
import zoomOutIcon from '../images/emotions_page_ui/zoom_out.png';
import sliderBar from '../images/emotions_page_ui/zoom_slider_bar.png'
import sliderButton from '../images/emotions_page_ui/zoom_slider_button.png'

// zoom controls and UI
const CustomZoomControls = ({ showOverlay }) => {
    const map = useMap()
    const [zoom, setZoom] = useState(map.getZoom())

    useEffect(() => {
        const update = () => setZoom(map.getZoom())
        map.on('zoomend', update)
        return () => map.off('zoomend', update)
    }, [map])

    if (showOverlay) return null
    
    const minZoom = map.getMinZoom()
    const maxZoom = map.getMaxZoom()
    const percent = (zoom - minZoom) / (maxZoom - minZoom)

    return (
        <div className="zoomUI">

            <img
                src={zoomInIcon}
                onClick={() => map.zoomIn()}
                className="zoomIcon"
            />

            <div className="zoomSlider">

                <img
                    src={sliderBar}
                    className="sliderBar"
                />

                <img
                    src={sliderButton}
                    className="sliderButton"
                    style={{
                        top: `${(1 - percent) * 100}%`
                    }}
                />

                <div
                    className="sliderClickArea"
                    onClick={(e) => {
                        const rect = e.currentTarget.getBoundingClientRect()
                        const y = e.clientY - rect.top
                        const newPercent = 1 - (y / rect.height)
                        const newZoom =
                            minZoom + newPercent * (maxZoom - minZoom)
                        setZoom(newZoom)
                        map.setZoom(newZoom)
                    }}
                />
            </div>

            <img
                src={zoomOutIcon}
                onClick={() => map.zoomOut()}
                className="zoomIcon"
            />
        </div>
    )
}

// icons - defaults to gold icon
let DefaultIcon = L.icon({
    iconUrl: goldPin,
    iconSize: [30, 35],
    iconAnchor: [15, 30],
});

L.Marker.prototype.options.icon = DefaultIcon;

// click handler that sets the icons
const ClickHandler = ({ setMarkers, setActiveMarkerId }) => {
    useMapEvents({
        click(e) {
            const { lat, lng } = e.latlng
            const id = Date.now()

            setMarkers((prev) => [
                ...prev,
                {
                    id,
                    lat,
                    lng,
                    text: '',
                    draftText: '',
                    isEditing: true,
                    hasChanged: true
                }
            ])
            setActiveMarkerId(id)
        },
    })
    return null
}

const Map = () => {
    const [markers, setMarkers] = useState([])
    const [showOverlay, setShowOverlay] = useState(true)
    const [activeMarkerId, setActiveMarkerId] = useState(null)
    const [canAddPins, setCanAddPins] = useState(false)
    const markerRefs = useRef({})
    const center = [33.7735, -84.3963] // gatech coordinates

    // starting pin with placeholder stories
    const fixedMarkers = [
        {
            id: 'sneha-pin',
            lat: 33.7747,
            lng: -84.3963,
            text: "failed my first midterm here - Sneha" // :(
        },
        {
            id: 'placeholder-pin',
            lat: 33.7723,
            lng: -84.3928,
            text: "Bruno Mars concert was AMAZING!!! - Anon"
        },
        {
            id: 'placeholder-pin2',
            lat: 33.7695,
            lng: -84.3909,
            text: "roommate almost started a fire from microwaving burnt brownies - Anon"
        }
    ]

    // save marker
    const saveMarker = (id) => {
        setMarkers((prev) =>
            prev.map((m) => {
                if (m.id !== id) return m
                const finalText = (m.draftText || '').trim()

                // doesn't save marker if nothing is written
                if (!finalText) {
                    return {
                        ...m,
                        isEditing: true
                    }
                }

                return {
                    ...m,
                    text: finalText,
                    isEditing: false
                }
            })
        )
    }

    // auto opens the pop up when creating a pin
    useEffect(() => {
        if (activeMarkerId && markerRefs.current[activeMarkerId]) {
            markerRefs.current[activeMarkerId].openPopup()
        }
    }, [activeMarkerId])

    // passcode to activate clicker event: type 'admin' using keyboard
    useEffect(() => {
        const secret = ['a', 'd', 'm', 'i', 'n']
        let buffer = []
        const handleKey = (e) => {
            buffer.push(e.key.toLowerCase())
            if (buffer.length > secret.length) {
                buffer.shift()
            }
            if (JSON.stringify(buffer) === JSON.stringify(secret)) {
                setCanAddPins((prev) => !prev)
                buffer = []
            }
        }
        window.addEventListener('keydown', handleKey)
        return () => window.removeEventListener('keydown', handleKey)
    }, [])

    return (
         <div className="mapWrapper">

            {showOverlay && (
                <div
                    className="overlay"
                    onClick={() => setShowOverlay(false)}
                >
                    <img
                        className="buzzingThoughtsGold"
                        src={buzzingThoughtsGold}
                    />

                    <img
                        className="addStory"
                        src={addStory}
                    />
                </div>
            )}

            {!showOverlay && (
                <img
                    className="buzzingThoughtsBlue"
                    src={buzzingThoughtsBlue}
                />
            )}

            {/* map */}
            <MapContainer
                className="mapContainer"
                center={center}
                zoom={16}
                zoomControl={false}
                maxZoom={18} // change max zoom
                maxBounds={[
                    [33.76, -84.41],
                    [33.79, -84.38]
                ]}
                maxBoundsViscosity={1.0}
            >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                <CustomZoomControls showOverlay={showOverlay} />

                {/* can only add pins after typing 'admin' using keyboard */}
                {canAddPins && (
                    <ClickHandler
                        setMarkers={setMarkers}
                        setActiveMarkerId={setActiveMarkerId}
                    />
                )}

                {/* Sneha's pin (and future placeholder pins)*/}
                {fixedMarkers.map((position) => (
                    <Marker
                        key={position.id}
                        position={[position.lat, position.lng]}
                    >
                        <Popup offset={[0, -40]}>
                            <p className="pinText">
                                {position.text}
                            </p>
                        </Popup>
                    </Marker>
                ))}

                {/* user pins */}
                {markers.map((position) => (
                    <Marker
                        key={position.id}
                        position={[position.lat, position.lng]}
                        ref={(el) => {
                            if (el) markerRefs.current[position.id] = el
                        }}
                        eventHandlers={{
                            popupclose: () => {
                                setMarkers((prev) =>
                                    prev.filter((m) =>
                                        m.id === position.id
                                            ? m.text.trim() !== ''
                                            : true
                                    )
                                )
                            },
                            click: () => {
                                setMarkers((prev) =>
                                    prev.map((m) =>
                                        m.id === position.id
                                            ? {
                                                ...m,
                                                isEditing: m.text === '',
                                                draftText: m.text,
                                                hasChanged: false
                                            }
                                            : m
                                    )
                                )
                            }
                        }}
                    >
                        <Popup offset={[0, -40]} autoPan={false}>
                            <div className="popupBox">

                                {position.isEditing ? (
                                    <textarea
                                        value={position.draftText}
                                        onChange={(e) =>
                                            setMarkers((prev) =>
                                                prev.map((m) =>
                                                    m.id === position.id
                                                        ? {
                                                            ...m,
                                                            draftText: e.target.value,
                                                            hasChanged: true
                                                        }
                                                        : m
                                                )
                                            )
                                        }
                                        onKeyDown={(e) => {
                                            if (e.key === 'Enter') {
                                                e.preventDefault()
                                                e.stopPropagation()
                                                saveMarker(position.id)
                                            }
                                        }}
                                        placeholder="Write your buzzing thoughts..."
                                        className="popup"
                                    />
                                ) : (
                                    <p className="pinText">
                                        {position.text}
                                    </p>
                                )}

                                {/* save and delete buttons */}
                                    <div className="buttonRow">

                                        {position.isEditing && position.hasChanged && (
                                            <button
                                                onClick={() => saveMarker(position.id)}
                                                className="saveButton"
                                            >
                                                Save
                                            </button>
                                        )}

                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation()
                                                setMarkers((prev) =>
                                                    prev.filter((m) => m.id !== position.id)
                                                )
                                            }}
                                            className="deleteButton"
                                        >
                                            Delete
                                        </button>

                                    </div>

                            </div>
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>
        </div>
    )
}
export default Map