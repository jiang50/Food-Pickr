
function initMap(){
  // Map options
  var options = {
    zoom:13,
    center:{lat:30.6280,lng:-96.3344} //College Station lat lng
  }
  // New map
  var map = new google.maps.Map(document.getElementById('map'), options);


  addMarker({lat:30.6280,lng:-96.3344});
  addMarker({lat:30.6743643,lng:-96.3699632});

  // Add Marker function
  function addMarker(coords){
    var marker = new google.maps.Marker({
        position:coords,
        map:map
    });
  }


}
