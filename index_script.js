
//지도 만드는 부분
var gage_loc = [{lat:35.14179406784828, lng:129.1093778542578},{lat:35.14222540070751, lng:129.10905986268358}];


let infowindow_contents = ['<div>이것은 시험용입니다</div>', '<div>시험용이라고요</div>'];
let info_cnt = 0;
/*function makeInfoWindow(place){
  infowindow_contents[info_cnt] = place.name;
}*/

function myMap(){
  var ggumteo = {lat: 35.14247873924202, lng: 129.1087427604829};
  var mapOptions = {
    center:{lat:35.1411406069967, lng: 129.11008989467717},
    zoom:17
  };

  var map = new google.maps.Map(document.getElementById("map"), mapOptions );
  var marker_ggumteo = new google.maps.Marker({position: ggumteo, map: map});
  const infowindow = new google.maps.InfoWindow();
  function create_marker_info(i){
    var marker = new google.maps.Marker({position: gage_loc[i], map: map});//위치별 마커찍기
    marker.addListener("click", () => {
    infowindow.setContent(infowindow_contents[i]);
    infowindow.open({
      anchor: marker,
      map,
      shouldFocus: true,
    });
  });//click 리스너와 연결짓기
  }
  for (let i=0; i<gage_loc.length;i++){
    create_marker_info(i);
  }
}
//infowindow 만들기



//window 객체생성
window.initMap = myMap;
