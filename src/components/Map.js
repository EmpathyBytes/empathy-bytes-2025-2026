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

// zoom controls and UI
const CustomZoomControls = ({ showOverlay }) => {
    const map = useMap()
    const controlRef = useRef(null)
    const [zoom, setZoom] = useState(map.getZoom())

    useEffect(() => {
        const update = () => setZoom(map.getZoom())
        map.on('zoomend', update)
        return () => map.off('zoomend', update)
    }, [map])

    useEffect(() => {
        if (controlRef.current) {
            L.DomEvent.disableClickPropagation(controlRef.current)
            L.DomEvent.disableScrollPropagation(controlRef.current)
        }
    }, [showOverlay])
            
    if (showOverlay) return null
    
    const minZoom = map.getMinZoom()
    const maxZoom = map.getMaxZoom()

    const buttonStyle = {
        background : 'transparent',
        border : 'none',
        padding : 0,
        cursor: 'pointer'
    }

    return (
        <div className="zoomUI" ref={controlRef}>

            <button
                type="button"
                aria-label="Zoom in"
                onClick={() => map.zoomIn()}
                disabled={zoom >= maxZoom}
                style={buttonStyle}

            >
                <img src={zoomInIcon} className="zoomIcon" alt="" />
            </button>

            <input
                type="range"
                aria-label="Map zoom"
                min={minZoom}
                max={maxZoom}
                step={1}
                value={zoom}
                onChange={(e) => {
                    const nextZoom = Number(e.target.value)
                    setZoom(nextZoom)
                    map.setZoom(nextZoom, { animate: false })
                }}
                onKeyDown={(e) => e.stopPropagation()}
                style={{
                    writingMode: 'vertical-lr',
                    direction: 'rtl',
                    width: '24px',
                    height: '200px',
                    margin: 0,
                    accentColor: '#004B87',
                    cursor: 'pointer'
                }}
            />

            <button
                type="button"
                aria-label="Zoom out"
                onClick={() => map.zoomOut()}
                disabled={zoom <= minZoom}
                style={buttonStyle}
            >
                <img src={zoomOutIcon} className="zoomIcon" alt="" />
            </button>
        </div>
    )
}

// icons - defaults to gold icon
let DefaultIcon = L.icon({
    iconUrl: goldPin,
    iconSize: [30, 35],
    iconAnchor: [15, 30],
});

const BlueIcon = L.icon({
    iconUrl: bluePin,
    iconSize: [30, 35],
    iconAnchor: [15, 30],
});

L.Marker.prototype.options.icon = DefaultIcon;

// click handler that sets the icons
const ClickHandler = ({ setMarkers, setActiveMarkerId, setCanAddPins }) => {
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
                    color: 'blue',
                    draftText: '',
                    isEditing: true,
                    hasChanged: true
                }
            ])
            setActiveMarkerId(id)
            setCanAddPins(false)
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

    

    return (
         <div className="mapWrapper">

<div className="addPinControl">
        {canAddPins ? (
            <div className="addPinInstructions">
                <button
                    type="button"
                    className="cancelAddPin"
                    aria-label="Cancel adding a pin"
                    onClick={() => setCanAddPins(false)}
                >
                    ×
                </button>
                <p>Click anywhere on the map to add your story.</p>
            </div>
        ) : (
            <button
                type="button"
                className="addPinButton"
                aria-label="Add your story"
                onClick={() => setCanAddPins(true)}
            >
                +
            </button>
        )}
    </div>

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
                minZoom={14}
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

                {/* Add one pin after clicking the + button */}
                {canAddPins && (
                    <ClickHandler
                        setMarkers={setMarkers}
                        setActiveMarkerId={setActiveMarkerId}
                        setCanAddPins={setCanAddPins}
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
                        icon={position.color == 'blue' ? BlueIcon : DefaultIcon}
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
                        <Popup className="storyPopup" offset={[0, -40]} autoPan={true}>
                            <div className="popupBox">
                            {position.isEditing && (
                                <h3 className="storyPopupTitle">
                                    Pick a color &amp; write your story!
                                </h3>
                            )}

                                {position.isEditing && (
                                    <div className="pinColorChoices">
                                    {['blue', 'gold'].map((color) => (
                                        <button
                                            key={color}
                                            type="button"
                                            aria-label={`Choose ${color} pin`}
                                            aria-pressed={position.color === color}
                                            onClick={() =>
                                                setMarkers((prev) =>
                                                    prev.map((m) =>
                                                        m.id === position.id
                                                            ? { ...m, color }
                                                            : m
                                                    )
                                                )
                                            }
                                        >
                                            <img
                                                src={color === 'blue' ? bluePin : goldPin}
                                                alt=""
                                                width={30}
                                                height={35}
                                            />
                                        </button>
                                    ))}
                                </div>
                            )}

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
                                            type="button"
                                            onClick={() => saveMarker(position.id)}
                                            className="saveButton"
                                            aria-label="Save your story"
                                            disabled={!position.draftText.trim()}
                                        >
                                            ✓
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