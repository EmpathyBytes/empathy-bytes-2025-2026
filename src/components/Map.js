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
                    color: 'blue',
                    author: '',
                    createdAt: new Date().toISOString(),
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
    const [markersLoaded, setMarkersLoaded] = useState(false)
    useEffect(() => {
        try {
            const savedMarkers = localStorage.getItem('emotionsMapPins')
    
            if (savedMarkers) {
                const parsedMarkers = JSON.parse(savedMarkers)
    
                if (Array.isArray(parsedMarkers)) {
                    setMarkers(
                        parsedMarkers.map((marker) => ({
                            ...marker,
                            isEditing: false,
                            hasChanged: false,
                            draftText: marker.text || ''
                        }))
                    )
                }
            }
        } catch (error) {
            console.error('Could not load saved pins:', error)
        } finally {
            setMarkersLoaded(true)
        }
    }, [])
    useEffect(() => {
        if (!markersLoaded) return
    
        const savedMarkers = markers
            .filter((marker) => marker.text && marker.text.trim() !== '')
            .map((marker) => ({
                id: marker.id,
                lat: marker.lat,
                lng: marker.lng,
                text: marker.text,
                color: marker.color,
                author: marker.author,
                createdAt: marker.createdAt
            }))
    
        try {
            localStorage.setItem('emotionsMapPins', JSON.stringify(savedMarkers))
        } catch (error) {
            console.error('Could not save pins:', error)
        }
    }, [markers, markersLoaded])
    const [showOverlay, setShowOverlay] = useState(true)
    const [activeMarkerId, setActiveMarkerId] = useState(null)
    const [showFAQ, setShowFAQ] = useState(false)
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
                    author: (m.author || '').trim() || 'Anon',
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
<div className="faqControl">
    <button
        type="button"
        className="faqButton"
        onClick={() => setShowFAQ(!showFAQ)}
        aria-expanded={showFAQ}
        aria-controls="emotions-faq"
    >
        FAQ
    </button>

    {showFAQ && (
        <div className="faqPanel" id="emotions-faq">
            <div className="faqHeader">
                <h2>Frequently Asked Questions</h2>
                <button
                    type="button"
                    onClick={() => setShowFAQ(false)}
                    aria-label="Close FAQ"
                >
                x
            </button>
        </div>



        <details>
            <summary>What is Buzzing Thoughts?</summary>
            <p>
                Buzzing Thoughts is an interactive emotions map
                where you can share your thoughts, feelings,
                and experiences through pins.
            </p>
        </details>

        <details>
            <summary>What can I share?</summary>
            <p>
                You're welcome to share your experiences,
                but please be respectful of others.
                Hate speech, harassment, and threatening
                content are not allowed.
            </p>
        </details>

        <details>
            <summary>How can I contact Empathy Bytes?</summary>
            <p>
                For questions or feedback, please reach out
                to the Empathy Bytes team through the
                website's contact page.
            </p>
        </details>
    </div>

        
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
                        <Popup className="storyPopup" offset={[0, -40]}>
                            <div className="popupBox">
                                <p className="pinText">
                                    {position.text}
                                </p>
                            </div>
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

                                <div className="storyFooter">
                                    <span>
                                        Posted {new Date(position.createdAt).toLocaleDateString('en-US')} by
                                    </span>

                                    {position.isEditing ? (
                                        <input
                                            type="text"
                                            aria-label="Your name (optional)"
                                            placeholder="Anon"
                                            maxLength={40}
                                            value={position.author || ''}
                                            onChange={(e) =>
                                                setMarkers((prev) =>
                                                    prev.map((m) =>
                                                        m.id === position.id
                                                            ? { ...m, author: e.target.value }
                                                            : m
                                                    )
                                                )
                                            }
                                        />
                                    ) : (
                                        <span>{position.author || 'Anon'}</span>
                                    )}
                                </div>

                                
                            

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