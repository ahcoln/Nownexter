function initiate_geolocation() {  
	
    if (navigator.geolocation)  
    {  
		//if client browser support html5 w3c geolocation
		alert("w3c geolocation fired");
        navigator.geolocation.getCurrentPosition(handle_geolocation_query, handle_errors, {enableHighAccuracy:true});  
    }  
	else
	{
		//otherwise use google jsapi for location
		alert("google geolocation fired");
		if(google.loader.ClientLocation)
		{
			visitor_lat = google.loader.ClientLocation.latitude;
			visitor_lon = google.loader.ClientLocation.longitude;
			visitor_city = google.loader.ClientLocation.address.city;
			visitor_region = google.loader.ClientLocation.address.region;
			visitor_country = google.loader.ClientLocation.address.country;
			visitor_countrycode = google.loader.ClientLocation.address.country_code;
			jQuery("#lat").html(visitor_lat);
			jQuery("#lon").html(visitor_lon);
//			var input_lat = document.getElementById('lat');
//			input_lat.value = visitor_lat;
//			var input_lon = document.getElementById('lon');
//			input_lon.value = visitor_lon;
		}
		else
		{
			alert("Your browser sucked!!!");
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
//	var input_lat = document.getElementById('lat');
//	input_lat.value = position.coords.latitude;
//	var input_lon = document.getElementById('lon');
//	input_lat.value = position.coords.latitude;
//	input_lon.value = position.coords.longitude;
}  
