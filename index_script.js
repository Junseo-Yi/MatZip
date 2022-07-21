const e = React.createElement;

class cat_switch extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    //const tmp = e('input', {type:'password'}, null)
    const div_input = e('input', {classname:"form-check-input", type:"checkbox", role:"switch", id:"flexSwitchCheckDefault"}, null);
    const div_label = e('label', {classname:"form-check-label", for:"flexSwitchCheckDefault"}, this.props.name);
    return(e('div', {classname: 'form-check form-switch'}, [div_input,div_label]));
    //return(e('input', {classname="form-check-input", type="checkbox", role= "switch", id = "flexSwitchCheckDefault"}, null));
  }

}
var cat_array = [{name:`식당`},{name:`간식`},{name:`카페`}];
for (let i=0; i<cat_array.length; i++){
  ReactDOM.render(
      e(cat_switch, {name:cat_array[i].name}, null),
      document.getElementById(cat_array[i].name)
  );
}
//지도 만드는 부분
var gagelist = [{lat:35.14179406784828, lng:129.1093778542578},{lat:35.14222540070751, lng:129.10905986268358}];


function myMap(){
  var ggumteo = {lat: 35.14247873924202, lng: 129.1087427604829};
  var mapOptions = {
    center:{lat:35.1411406069967, lng: 129.11008989467717},
    zoom:17
  };

  var map = new google.maps.Map(document.getElementById("map"), mapOptions );
  var marker_ggumteo = new google.maps.Marker({position: ggumteo, map: map}); //마커 하나 만들기
  for (var i=0; i<gagelist.length; i++){
    var markers = new google.maps.Marker({
      position: gagelist[i],
      map: map
    });
}

}

//마커 여러 개 만들기
/*function drawMarkers(gagelist){
  for (var i = 0; i < gagelist.length; i++) {
		var marker = new google.maps.Marker({
			map: map,
			position: new google.maps.LatLng(totalItems[i].la_crd, totalItems[i].lo_crd)
		});
}
//new google.maps.LatLng(gagelist[i].lat, gagelist[i].lng)*/
