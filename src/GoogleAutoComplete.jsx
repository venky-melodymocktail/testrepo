// import { Place } from '@mui/icons-material';
import React, { useEffect, useRef } from 'react'

const apikey = process.env.GOOGLE_SECRETKEY

const loadScript = (url, callback) => {
    let script = document.createElement('script');
    script.type = 'text/javascript';
  
    if(script.readyState) {
      script.onreadystatechange = () => {
        if(script.readyState === 'loaded' || script.readyState === 'complete') {
          script.onreadystatechange = null;
          callback();
        }
      };
    } else {
      script.onload = () => {
        callback();
      };
    }
  
    script.src = url;
    document.getElementsByTagName('head')[0].appendChild(script);
}

function GoogleAutoComplete(props) {
    const inputRef = useRef();

    const options = {
        componentRestrictions: { country: ["us"] },
        fields: ["name", "address_components", 'formatted_address'],
        types: [ "postal_code", 'political', 'administrative_area_level_1']
        //  types: ["airport", "postal_code", "locality"]
       };
     
       const handleScript = async(inputRef, options) => {
         const autocomplete = new window.google.maps.places.Autocomplete(inputRef.current, options);
         autocomplete.addListener('place_changed', async() => {
           const place = await autocomplete.getPlace();
           props.onSelect(place.name);
            console.log(place)
           
         });
       }

    useEffect(() => {
   

        loadScript(
          `https://maps.googleapis.com/maps/api/js?key=${apikey}&libraries=places&callback=initMap`,
          // "https://maps.googleapis.com/maps/api/js?key=AIzaSyBqFWZxu9wybSjfjVD4MZzO5lt0bvtC9qo&libraries=places&callback=initMap",
          () => handleScript(inputRef, options)
        )
    }, []);


  return (
    <div>
    <input onChange={(e)=>{props.onChange(e.target.value)}} style={{
                                            height: props.height,
                                            width: props.width,
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            justifyContent: 'flex-start',
                                            display: 'flex',
                                            position: 'relative',
                                            overflow: 'visible',
                                            borderWidth: 0,
                                            marginLeft: 5,
                                            marginRight: 0,
                                            cursor: 'pointer',
                                            fontFamily: 'Inter',
                                            fontSize: props.fontSize,
                                            color: 'rgba(113,113,113,1)',
                                            fontWeight: 400,
                                            textAlign: 'left',
                                        }} ref={inputRef} />
   </div>
  )
}

export default GoogleAutoComplete