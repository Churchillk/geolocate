function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        document.getElementById("info").innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    alert("Latitude: " + position.coords.latitude + 
    " Longitude: " + position.coords.longitude)
}
