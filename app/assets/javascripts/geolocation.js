function initiate_geolocation() {  
	//adding code to start the progressbar
	alert("progressbar start");

    if (navigator.geolocation)  
    {  
        navigator.geolocation.getCurrentPosition(handle_geolocation_query, handle_errors, {enableHighAccuracy:true});  
    }  
    else  
    {  
		if(google.loader.ClientLocation)
		{
			visitor_lat = google.loader.ClientLocation.latitude;
			visitor_lon = google.loader.ClientLocation.longitude;
			visitor_city = google.loader.ClientLocation.address.city;
			visitor_region = google.loader.ClientLocation.address.region;
			visitor_country = google.loader.ClientLocation.address.country;
			visitor_countrycode = google.loader.ClientLocation.address.country_code;
			document.getElementById('googlelocation').innerHTML = '<p>Lat/Lon (google): ' + visitor_lat + ' / ' + visitor_lon + '</p><p>Location: ' + visitor_city + ', ' + visitor_region + ', ' + visitor_country + ' (' + visitor_countrycode + ')</p>';
		}
		else
		{
			document.getElementById('googlelocation').innerHTML = '<p>Your browser does not support geolocation!</p>';
		}		
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

function handle_geolocation_query(position){  
	jQuery("#lat").html(position.coords.latitude);
	jQuery("#lon").html(position.coords.longitude);
	alert("progressbar done");
}  

