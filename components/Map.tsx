// components/Map.tsx
import React, { useEffect, useRef } from 'react';

const Map = ({ centerCoordinates, defaultQueries, searchRadius }) => {
    const mapRef = useRef(null);
    const searchBoxRef = useRef(null);
    const locationInfoRef = useRef(null);

    useEffect(() => {
        function loadGoogleMapsScript() {
            const script = document.createElement('script');
            script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&libraries=places&callback=initMap`;
            script.async = true;
            document.head.appendChild(script);
        }

        window.initMap = () => {
            const map = new window.google.maps.Map(mapRef.current, {
                center: centerCoordinates,
                zoom: 13,
            });

            const searchBox = new window.google.maps.places.SearchBox(searchBoxRef.current);

            map.addListener('bounds_changed', () => {
                searchBox.setBounds(map.getBounds());
            });

            searchBox.addListener('places_changed', () => {
                performSearch(map, searchBox.getPlaces(), searchRadius);
            });

            performSearch(map, defaultQueries, searchRadius);
        };

        if (window.google && window.google.maps) {
            window.initMap();
        } else {
            loadGoogleMapsScript();
        }

        return () => {
            delete window.initMap;
        };
    }, [centerCoordinates, defaultQueries, searchRadius]);

    function performSearch(map, queries, searchRadius) {
        queries.forEach(function(query) {
            var request = typeof query === 'object' && query.hasOwnProperty('place_id') ? {
                placeId: query.place_id
            } : {
                location: map.getCenter(),
                radius: searchRadius || '5000',
                query: query
            };
    
            var service = new google.maps.places.PlacesService(map);
            service.textSearch(request, function(results, status) {
                if (status === google.maps.places.PlacesServiceStatus.OK) {
                    results.forEach(function(place) {
                        createMarker(place, map);
                    });
                }
            });
        });
    }
    
    function createMarker(place, map) {
        var marker = new google.maps.Marker({
            map: map,
            position: place.geometry.location,
            title: place.name
        });
    
        // Store additional place data in the marker object
        marker.placeData = {
            title: place.name,
            address: place.formatted_address,
            rating: place.rating || 'N/A',
            reviews: place.reviews || [],
            user_ratings_total: place.user_ratings_total || 'N/A',
            opening_hours: place.opening_hours || 'No information available'
        };
    
        google.maps.event.addListener(marker, 'click', function() {
            onMarkerClick(marker.placeData);
        });
    }
    
    function onMarkerClick(markerData) {
        const locationInfoDiv = locationInfoRef.current;
        const reviewsContent = markerData.reviews.map(review =>
            `<p>"${review.text}" - ${review.author_name}</p>`
        ).join('');

        const contentString = `
            <div>
                <h3>${markerData.title}</h3>
                <p>${markerData.address}</p>
                <p>Rating: ${markerData.rating} (${markerData.user_ratings_total} reviews)</p>
                <div>${reviewsContent}</div>
                <p>Opening Hours: ${formatOpeningHours(markerData.opening_hours)}</p>
            </div>
        `;

        if (locationInfoDiv) {
            locationInfoDiv.innerHTML = contentString;
        }
    }

    function formatOpeningHours(openingHours) {
        if (!openingHours.weekday_text || !openingHours.weekday_text.length) {
            return 'No opening hours available';
        }
        return openingHours.weekday_text.join('<br>');
    }

    return (
        <div className="relative">
        <div className="absolute top-0 left-0 z-10 bg-white p-4 shadow-lg">
            <div className="search-box mb-4">
                <input
                    ref={searchBoxRef}
                    type="text"
                    placeholder="Enter a place (e.g., pharmacy)"
                    className="border-2 border-gray-300 p-2"
                />
                <button className="bg-brown-500 text-white p-2 ml-2">Search</button>
            </div>
            <div ref={locationInfoRef} className="location-info">
                {/* Location information will be displayed here */}
            </div>
        </div>
        <div ref={mapRef} className="map" style={{ height: '400px', width: '100%' }}></div>
    </div>
);
};


export default Map;
