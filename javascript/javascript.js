
  function initMap() {
    var myPos = {lat: 40.286189, lng: -111.7231454};
    var img = new google.maps.MarkerImage('https://www.autosphere.ca/collisionmanagement/files/2014/02/google-maps-marker-web.png', null, null, null, new google.maps.Size(50,42));
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 12,
      center: myPos
    });
    var marker = new google.maps.Marker({
      position: myPos,
      map: map,
      icon: img
    });
  }
