import React, { useEffect, useState } from 'react'
import { useLocation } from '../context/LocationContext';
import locations  from '../data/Locations.json';
function Dropdown() {
    const {location,setLocation} = useLocation();
    const handleChange = (event) => {
        let selectedItem = locations[event.currentTarget.selectedIndex];
        let newLocation = {latitude: selectedItem.lat, longitude: selectedItem.lon}
        setLocation({...newLocation})
    }
    return (
        <div className="selectContainer">
            <select className="select" value={location.longitude} onChange={handleChange}>
                {
                  locations.map((item,index) => <option key={index} value={item.lon}>{item.il_adi}</option>)
                }
            </select>
        </div>
    )
}

export default Dropdown
