import React, { useState } from 'react';
import { GoogleMap, LoadScript, DirectionsService, DirectionsRenderer } from '@react-google-maps/api';

const Directions = () => {
    const [response, setResponse] = useState(null);
    const directionsCallback = res =>{
        if(res != null){
            setResponse(res);
        }
    }
    
    // LatLong
    const Location = {
        lat: 23.810331,
        lng: 90.412521
    };
    
    return (
        <div>
            <LoadScript
            googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAP_API_KEY}
            >
                <GoogleMap
                // required
                    id='direction-example'
                    // required
                    mapContainerStyle={{
                    height: '100vh',
                    width: '100%'
                    }}
                    // required
                    zoom={14}
                    // required
                    center={Location}
                    
                >
                   
                        <DirectionsService
                        // required
                        options={{ 
                            destination: 'Gulshan 1 Circle , Dhaka',
                            origin: 'Mirpur 10 Circle, Dhaka',
                            travelMode: 'DRIVING'
                        }}
                        // required
                        callback={directionsCallback}
                        
                        />
                    

                    {
                    response !== null && (
                        <DirectionsRenderer
                        // required
                        options={{ 
                            directions: response
                        }}
                        />
                    )
                    }
                </GoogleMap>
            </LoadScript>
        </div>
    );
};

export default Directions;