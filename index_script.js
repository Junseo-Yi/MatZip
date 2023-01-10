//지도 만드는 부분
var gage_loc = [{lat:35.14173096762493, lng:129.1093789683257},{lat:35.14222540070751, lng:129.10905986268358},
  {lat:35.14181117574246, lng:129.10943040691498},{lat:35.14326495414675, lng:129.10990951220438},
{lat:35.14091957341429, lng:129.1073284580918},
{lat:35.14347181356536, lng:129.11032077917386},{lat:35.1421124644349, lng:129.1089472401955},
{lat:35.142493390140075,lng:129.10932459360615},{lat:35.14043609776437,lng:129.11019836101036},
{lat:35.142353280936064,lng:129.11077186957914},{lat:35.14075155957547,lng:129.10882710080037},
{lat:35.140370104444756,lng:129.11080841572212},{lat:35.14206399825762, lng:129.10927237060764},
{lat:35.14291448114974,lng:129.1099827455599}];
var gage_name = ['타코들며 쎄쎄쎄', '신전떡볶이', '마이웨이 린린','조방 낙지','덴푸라 마켓','수영쌈밥','피자스쿨','카페051'
,'신창국밥','시엘로','팥','초량원조불백','봉구스','유가네'];
var gage_score = [5,3,4,3,4,5,4,5,3,4,5,3,2,3];
var gage_rep_menu = ['2인 세트', '치즈 떡볶이','덮밥과 맛탕','낙곱','고구마튀김','닭갈비정식','고구마피자','아이스티','섞어국밥'
,'모카쉬폰','팥빙수','불백','제육','치즈퐁듀무언가'];
var gage_more = ['https://m.place.naver.com/restaurant/1145800717/home?entry=plt',
"https://m.place.naver.com/restaurant/75382121/home?entry=plt",
"https://m.place.naver.com/restaurant/1522729624/home?entry=plt",
"https://m.place.naver.com/restaurant/13013814/home?entry=plt",
"https://m.place.naver.com/restaurant/1880780289/home?entry=plt",
"https://m.place.naver.com/restaurant/1942275816/home?entry=plt",
"https://m.place.naver.com/restaurant/21099570/home?entry=plt",
"https://m.place.naver.com/restaurant/1181353946/home?entry=plt",
"https://m.place.naver.com/restaurant/16688669/home?entry=plt",
"https://m.place.naver.com/restaurant/37867981/home?entry=plt",
"https://m.place.naver.com/restaurant/1070131950/home?entry=plt",
"https://m.place.naver.com/restaurant/36627043/home?entry=plt",
"https://m.place.naver.com/restaurant/34721362/home?entry=plt",
"https://m.place.naver.com/restaurant/1423731348/home?entry=plt",]
var gage_line_rate = ['나쵸가 정말 맛있다.', '밀떡이 좋다면 좋을 듯.', '최고의 맛탕.',
 '수정과가 정말 맛있다.','튀김이 맛있지만 일찍 가야한다.','고등어조림이 밑반찬', '적당한 가성비, 맛있는 피자',
'학원가의 터줏대감 카페, 가성비 좋고 깔끔한 음료들',
'솔직히 유명국밥집 정도 맛은 아님, 근데 국밥은 그 자체로 존중받아야 함',
'속이 편하고 적당히 달아 먹기 좋다.','설빙과는 결이 다른 맛있는 빙수, 고양이랑 토끼들이 귀엽다',
'초량의 원조에는 조금 못미친다. 하지만 푸짐한 양은 그걸 보완할 정도, 대식가 매우 추천',
'다른 건 다 괜찮다. 그런데 너무 짜다. 많이 짜다.','맛은 괜찮은데 밥의 식감이 아쉽다.'
]

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
