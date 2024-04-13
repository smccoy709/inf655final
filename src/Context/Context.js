
import React, { useReducer, useContext } from "react";
import {WeatherReducer} from './Reducer';

const WeatherAPPContext = React.createContext();
const WeatherAPPProvider = ({children})=>{
    const [state, dispatch] = useReducer(WeatherReducer, {
        city:{
            "city": "Akureyri", 
            "lat": "65.68094", 
            "lng": "-18.08953",
            "iso2": "ICE", 
            "admin_name": "Iceland",
            "population": "18191"
          },
          current:'',
          daily:''
    })
    return (
        <WeatherAPPContext.Provider value={{state, dispatch}} >
            {children}
        </WeatherAPPContext.Provider>
    )
}

export default WeatherAPPProvider;
export const UseWeatherAppContext = ()=>{
    return useContext(WeatherAPPContext);
}