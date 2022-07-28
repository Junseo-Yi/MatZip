//지도 만드는 부분
var gage_loc = [{lat:35.14173096762493, lng:129.1093789683257},{lat:35.14222540070751, lng:129.10905986268358},
  {lat:35.14181117574246, lng:129.10943040691498},{lat:35.14326495414675, lng:129.10990951220438},
{lat:35.14091957341429, lng:129.1073284580918},
{lat:35.14347181356536, lng:129.11032077917386}];
var gage_name = ['타코들며 쎄쎄쎄', '신전떡볶이', '마이웨이 린린','조방 낙지','덴푸라 마켓','수영쌈밥'];
var gage_score = [5,3,4,3,4,5];
var gage_rep_menu = ['2인 세트', '치즈 떡볶이','덮밥과 맛탕','낙곱','고구마튀김','닭갈비정식'];
var gage_more = ['https://m.place.naver.com/restaurant/1145800717/home?entry=plt',
"https://m.place.naver.com/restaurant/75382121/home?entry=plt",
"https://m.place.naver.com/restaurant/1522729624/home?entry=plt",
"https://m.place.naver.com/restaurant/13013814/home?entry=plt",
"https://m.place.naver.com/restaurant/1880780289/home?entry=plt",
"https://m.place.naver.com/restaurant/1942275816/home?entry=plt"]
var gage_line_rate = ['나쵸가 정말 맛있다.', '밀떡이 좋다면 좋을 듯.', '최고의 맛탕.',
 '수정과가 정말 맛있다.','튀김이 맛있지만 일찍 가야한다.','고등어조림이 밑반찬']

let infowindow_contents = [];

for (let i=0; i<gage_loc.length; i++){
  let stars = '';
  for (let j=0; j<gage_score[i]; j++){
    stars += "★";
  }
  infowindow_contents[i] = '<div id="content">' +
    '<h3 id="firstHeading" class="firstHeading">'+gage_name[i]
    +'<img src = "./cat1.jpg" width = "20px", height = "20px">'+"</a>"+'</h3>' +
    '<div id="bodyContent">' + '추천: ' + stars +
    '<div style="color:green;">가게 대표 메뉴: <div style="color:black;display:inline;">' + gage_rep_menu[i] +
    '<br>한 줄 평: '+ gage_line_rate[i]+
    "</div></div></div></div>";
}

function myMap(){
  var ggumteo = {lat: 35.14247873924202, lng: 129.1087427604829};
  var mapOptions = {
    center:{lat:35.1411406069967, lng: 129.11008989467717},
    zoom:17
  };

  var map = new google.maps.Map(document.getElementById("map"), mapOptions );
  //var kkumteo_icon = new google.maps.MarkerImage("./kkumteo_logo",new google.maps.Size(71, 71));
  var marker_ggumteo = new google.maps.Marker({position: ggumteo, map: map/*, icon: kkumteo_icon*/});

  var infowindow = new google.maps.InfoWindow();
//click 리스너와 연결짓기
  function create_marker_info(i){
    var marker = new google.maps.Marker({position: gage_loc[i], map: map});//위치별 마커찍기
    marker.addListener("click", () => {
    infowindow.setContent(infowindow_contents[i]);
    infowindow.open({
      anchor: marker,
      map,
      shouldFocus: true,
    });
    var more_content = document.getElementById('more_info');
    more_content.innerHTML = `<iframe src=${gage_more[i]} width = 100% height = 100%></iframe>`;
    var body_for_bgcolor = document.getElementById('bodyy');
    body_for_bgcolor.style.backgroundColor = '#c7fcff';
    var map_for_dot = document.getElementById('map');
    map_for_dot.style.border = '5px dotted #000000';
    var header_color = document.getElementById('headerr');
    header_color.style.color = '#000000';
    var info_color = document.getElementById('more_info');
    info_color.style.border = '10px solid #000000';
  });
  }

  for (let i=0; i<gage_loc.length;i++){
    create_marker_info(i);
  }
  marker_ggumteo.addListener("click", () => {
    infowindow.setContent("<strong><div id = 'bodyContent' style = 'font-size:1.5em'>남천동 최고의 수학학원</div>"+
  "<a href = 'https://okdream.modoo.at/?pc=1' target='_blank' rel='noopener noreferrer'><img src = './home_icon.jpg' width = 100px height = 100px/></a>"+
  "<a href = 'https://instagram.com/mh_kkumteo' target='_blank' rel='noopener noreferrer'><img src = './insta_icon.jpg' width = 100px height = 100px/></a></strong>");
    infowindow.open({
      anchor: marker_ggumteo,
      map,
      shouldFocus: true
    });
    function getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min)) + min; //최댓값은 제외, 최솟값은 포함
    }
    var ojumchu = getRandomInt(0,gage_name.length-1);
    var ojeochu = getRandomInt(0,gage_name.length-1);
    if(ojumchu == ojeochu){
      ojeochu--;
      if(ojeochu < 0){
        ojeochu +=2;
      }
    }
    var body_for_bgcolor = document.getElementById('bodyy');
    body_for_bgcolor.style.backgroundColor = '#1c4dd4';
    var more_content = document.getElementById('more_info');
    more_content.innerHTML = `<div height = 50% width = 100%><h1>오.점.추: ${gage_name[ojumchu]}</h1></div>`+
    `<div height = 50% width = 100%><h1>오.저.추: ${gage_name[ojeochu]}</h1></div>`;
    var map_for_dot = document.getElementById('map');
    map_for_dot.style.border = '5px dotted #FFFFFF';
    var header_color = document.getElementById('headerr');
    header_color.style.color = '#FFFFFF';
    var info_color = document.getElementById('more_info');
    info_color.style.border = '10px solid #FFFFFF';
  });
  //infowindow 모양 바꾸기

}

window.initMap = myMap;
