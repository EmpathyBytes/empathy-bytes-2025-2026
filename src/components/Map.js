import React, { useState, useRef, useEffect } from 'react'
import { MapContainer, TileLayer, useMap, Marker, Popup, useMapEvents } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';

import L from 'leaflet';
import icon from '../images/emotions_page_ui/map_pin.png';

// all image imports from emotions_page_ui
import buzzingThoughts from '../images/emotions_page_ui/buzzing_thoughts_logo_gold.png';
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
        <div style={{
            position: 'absolute',
            top: '20%',
            right: '1%',
            zIndex: 2000,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '10px'
        }}>

            <img
                src={zoomInIcon}
                onClick={() => map.zoomIn()}
                style={{ width: 40, cursor: 'pointer' }}
            />

            <div style={{
                position: 'relative',
                width: '8px',
                height: 'auto'
            }}>

                <img
                    src={sliderBar}
                    style={{
                        width: '100%',
                        height: '100%',
                        display: 'block'
                    }}
                />

                <img
                    src={sliderButton}
                    style={{
                        position: 'absolute',
                        left: '50%',
                        transform: `translate(-50%, -50%)`,
                        top: `${(1 - percent) * 100}%`,
                        cursor: 'pointer',
                        width: '20px'
                        
                    }}
                />

                <div
                    onClick={(e) => {
                        const rect = e.currentTarget.getBoundingClientRect()
                        const y = e.clientY - rect.top
                        const newPercent = 1 - (y / rect.height)
                        const newZoom =
                            minZoom + newPercent * (maxZoom - minZoom)
                        setZoom(newZoom)
                        map.setZoom(newZoom)
                    }}
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        cursor: 'pointer'
                    }}
                />
            </div>

            <img
                src={zoomOutIcon}
                onClick={() => map.zoomOut()}
                style={{ width: 40, cursor: 'pointer' }}
            />
        </div>
    )
}

// icons
let DefaultIcon = L.icon({
    iconUrl: icon,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
});

L.Marker.prototype.options.icon = DefaultIcon;

// click handler
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
    const markerRefs = useRef({})
    const center = [33.7735, -84.3963] // gatech coordinates

    // starting pin with Sneha's story
    const fixedMarkers = [
        {
            id: 'starter-pin',
            lat: 33.7747,
            lng: -84.3963,
            text: "failed my first midterm here - Sneha" // :(
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

    return (
        <div style={{ position: 'relative', height: '800px', width: '100%' }}>

            {showOverlay && (
                <div
                    onClick={() => setShowOverlay(false)}
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'rgba(0, 75, 135, 0.8)', // #004B87 in rgba
                        backdropFilter: 'blur(2px)',
                        zIndex: 1000,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        cursor: 'pointer'
                    }}
                >
                    <img
                        src={buzzingThoughts}
                        style={{
                            position: 'absolute',
                            top: '40%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            width: '600px',
                            pointerEvents: 'none'
                        }}
                    />

                    <img
                        src={addStory}
                        style={{
                            position: 'absolute',
                            top: '47%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            width: '350px',
                            pointerEvents: 'none'
                        }}
                    />
                </div>
            )}

            {!showOverlay && (
                <img
                    src={buzzingThoughtsBlue}
                    style={{
                        position: 'absolute',
                        top: '10%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: '600px',
                        zIndex: 900,
                        pointerEvents: 'none'
                    }}
                />
            )}

            {/* map */}
            <MapContainer
                center={center}
                zoom={16}
                zoomControl={false}
                style={{ height: '100%', width: '100%' }}
            >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                <CustomZoomControls showOverlay={showOverlay} />

                <ClickHandler
                    setMarkers={setMarkers}
                    setActiveMarkerId={setActiveMarkerId}
                />

                {/* Sneha's pin (and future placeholder pins)*/}
                {fixedMarkers.map((position) => (
                    <Marker
                        key={position.id}
                        position={[position.lat, position.lng]}
                    >
                        <Popup offset={[0, -40]}>
                            <p style={{ margin: 0, color: '#000' }}>
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
                            <div style={{ width: '220px' }}>

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
                                        style={{
                                            width: '100%',
                                            height: '80px',
                                            border: 'none',
                                            outline: 'none',
                                            resize: 'none',
                                            color: '#000',
                                            background: 'white'
                                        }}
                                    />
                                ) : (
                                    <p style={{ margin: 0, color: '#000' }}>
                                        {position.text}
                                    </p>
                                )}

                                {/* buttons */}
                                <div style={{ display: 'flex', gap: '6px', marginTop: '8px' }}>

                                    {position.isEditing && position.hasChanged && (
                                        <button
                                            onClick={() => saveMarker(position.id)}
                                            style={{
                                                flex: 1,
                                                background: '#004B87',
                                                color: 'white',
                                                border: 'none',
                                                borderRadius: '6px',
                                                padding: '6px'
                                            }}
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
                                        style={{
                                            flex: 1,
                                            background: '#d9534f',
                                            color: 'white',
                                            borderRadius: '6px',
                                            padding: '6px'
                                        }}
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