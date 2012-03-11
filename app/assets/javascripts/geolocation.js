//= require yqlgeo.js

function initiate_geolocation() {  
    if (navigator.geolocation)  
    {  
		//adding code to start the progressbar
		alert("progressbar start");
        navigator.geolocation.getCurrentPosition(handle_geolocation_query, handle_errors, {enableHighAccuracy:true});  
    }  
    else  
    {  
        yqlgeo.get('visitor', normalize_yql_response);  
    }  
}  

function handle_errors(error){  
    switch(error.code)  
    {  
        case error.PERMISSION_DENIED: alert("user did not share geolocation data");  
        break;  

        case error.POSITION_UNAVAILABLE: alert("could not detect current position");  
        break;  

        case error.TIMEOUT: alert("retrieving position timedout");  
        break;  

        default: alert("unknown error");  
        break;  
    }  
}  

function normalize_yql_response(response){  
    if (response.error)  
    {  
        var error = { code : 0 };  
        handle_errors(error);  
        return;  
    }  

    var position = {  
        coords :  
        {  
            latitude: response.place.centroid.latitude,  
            longitude: response.place.centroid.longitude  
        },  
        address :  
        {  
            city: response.place.locality2.content,  
            region: response.place.admin1.content,  
            country: response.place.country.content  
        }  
    };  

    handle_geolocation_query(position);  
}   

function handle_geolocation_query(position){  
	jQuery("#lat").html(position.coords.latitude);
	jQuery("#lon").html(position.coords.longitude);
	alert("progressbar done");
}  

