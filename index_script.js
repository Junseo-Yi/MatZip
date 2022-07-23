
//지도 만드는 부분
var gage_loc = [{lat:35.14179406784828, lng:129.1093778542578},{lat:35.14222540070751, lng:129.10905986268358}];
var gage_name = ['타코들며 쎄쎄쎄', '신전떡볶이'];
var gage_score = [5,4];
var gage_rec_menu = ['2인 세트', '치즈떡볶이'];
var gage_more = ['https://m.place.naver.com/restaurant/1145800717/home?entry=plt',
"https://m.place.naver.com/restaurant/75382121/home?entry=plt"]

let infowindow_contents = [];

for (let i=0; i<gage_loc.length; i++){
  let stars = '';
  for (let j=0; j<gage_score[i]; j++){
    stars += "★";
  }
  infowindow_contents[i] = '<div id="content">' +
    '<h3 id="firstHeading" class="firstHeading">'+gage_name[i]+'</h3>' +
    '<div id="bodyContent">' + '추천: ' + stars +
    '<div style="color:green;">가게 추천 메뉴: <div style="color:black;display:inline;">' + gage_rec_menu[i] +'</div></div>'+
    '추가정보:'+
    `<a href= ${gage_more[i]}>` +
    gage_more[i]+"</a>"+
    "</div>" +
    "</div>";
}

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

window.initMap = myMap;
