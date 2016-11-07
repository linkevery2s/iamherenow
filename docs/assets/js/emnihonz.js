var map;var p;var zoom;var url;var number;

    function ini() {
	map = L.map('map_canvas');
	if (navigator.geolocation) {
	   //geolocationの利用
       navigator.geolocation.getCurrentPosition(gps_get,gps_error);
     } else {
     	alert("GPSの取得に失敗したため、日本地図全図を表示します。")
     }
     	L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
  		attribution: '&copy; <a href="http://osm.org/copyright" target="_blank">OpenStreetMap</a> contributors'
  		}).addTo(map);
		map.setView([37.7768703, 137.5870323], 6);
	}

function gps_get(position) {

    //成功したら…
    var ido = position.coords.latitude;
    var keido = position.coords.longitude;
    
   
    //位置情報取得後、地図表示
   		map.setView([ido, keido], 17);
    
}

function gps_error(error) {

     alert("GPSの取得に失敗したため、日本地図全図を表示します。")

}

function mail(){
	p = map.getCenter();
	zoom = map.getZoom();
	url = "http://iamhere.webcrow.jp/nihonz.html#" + zoom + "/" + p.lat + "/" + p.lng;
	location.href =  "mailto:?body=MAP URL " + url;
}

function line(){
	p = map.getCenter();
	zoom = map.getZoom();
	url = "http://iamhere.webcrow.jp/nihonz.html#" + zoom + "/" + p.lat + "/" + p.lng;
	location.href = "line://msg/text/%e4%bb%8a%e3%80%81%e3%81%93%e3%81%93%e3%81%ab%e3%81%84%e3%82%8b%e3%82%88%e3%80%82%0d%0a%0d%0a"+ url;
}

function tel(){
	$("#tel_mode").show();
}

function cancel(){
	$("#tel_mode").hide();
}

function tel_ok(){
	number = document.getElementById("ttel").value;
	location.href = "tel:" + number;
}