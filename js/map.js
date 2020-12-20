


navigator.geolocation.getCurrentPosition(initMap)
let map;
function initMap(position) {
    let current;
    if(window.localStorage.getItem("position")){
        current = window.localStorage.getItem("position");
        current = JSON.parse(current);
    }else{


        current = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
        }
        window.localStorage.setItem("position",JSON.stringify(current));
    }
    map = new google.maps.Map(document.getElementById("map"), {
        center: current,
        zoom: 16,
    });
    const marker = new google.maps.Marker({
        position: current,
        map: map,
    })
}
