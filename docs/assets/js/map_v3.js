var map;var p;var zoom;var hash;var url;var number;var marker; var markers = [];

    function map_ini() {
		map = L.map('map_canvas');
		L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
  		attribution: '&copy; <a href="http://osm.org/copyright" target="_blank">OpenStreetMap</a> contributors'
  		}).addTo(map);
		//map.setView([35.5589394, 136.9058424], 8);
		hash = L.hash(map);
	}

    function em_n_ini() {
	map = L.map('map_canvas');
	if (navigator.geolocation) {
	   //geolocationの利用
       navigator.geolocation.getCurrentPosition(gps_get,gps_error2);
     } else {
     	alert("GPSの取得に失敗したため、日本地図全図を表示します。")
     }
     	L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
  		attribution: '&copy; <a href="http://osm.org/copyright" target="_blank">OpenStreetMap</a> contributors'
  		}).addTo(map);
		map.setView([37.7768703, 137.5870323], 6);
	}
	
    function em_w_ini() {
	map = L.map('map_canvas');
	if (navigator.geolocation) {
	   //geolocationの利用
       navigator.geolocation.getCurrentPosition(gps_get,gps_error3);
     } else {
     	alert("GPSの取得に失敗したため、世界地図全図を表示します。")
     }
		L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
  		attribution: '&copy; <a href="http://osm.org/copyright" target="_blank">OpenStreetMap</a> contributors'
		}).addTo(map);
		map.setView([35.6189816, 138.4659385], 3);
	}


function GPS(){

	if (navigator.geolocation) {

	   //geolocationの利用
       navigator.geolocation.getCurrentPosition(gps_get,gps_error);
       
     } else {
   
       alert("エラーが発生したので、現在地を取得できませんでした。");

      
     }
   
}
 
function gps_get(position) {

    //成功したら…
    var ido = position.coords.latitude;
    var keido = position.coords.longitude;
    
    //位置情報取得後、地図表示
   		map.setView([ido, keido], 17);
	//marker = L.marker([ido, keido]);
	//map.addLayer(marker);
}

function gps_error(error) {
   		//失敗したら…
       alert("エラーが発生したので、現在地を取得できませんでした。");
}

function gps_error2(error) {
   		//失敗したら…
       alert("GPSの取得に失敗したため、日本地図全図を表示します。");
}

function gps_error3(error) {
   		//失敗したら…
       alert("GPSの取得に失敗したため、世界地図全図を表示します。");
}

function mail(){
	var url = window.location.href;
	location.href =  "mailto:?body=MAP URL " + url;
}

function line(){
	var url = window.location.href;
	location.href = "line://msg/text/%e4%bb%8a%e3%80%81%e3%81%93%e3%81%93%e3%81%ab%e3%81%84%e3%82%8b%e3%82%88%e3%80%82%0d%0a%0d%0a"+ url;
}

function mail2(){
	p = map.getCenter();
	zoom = map.getZoom();
	url = "http://iamhere.webcrow.jp/map.html#" + zoom + "/" + p.lat + "/" + p.lng;
	location.href =  "mailto:?body=MAP URL " + url;
}

function line2(){
	p = map.getCenter();
	zoom = map.getZoom();
	url = "http://iamhere.webcrow.jp/map.html#" + zoom + "/" + p.lat + "/" + p.lng;
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

function g_map(){
	p = map.getCenter();
	zoom = map.getZoom();
	location.href = "https://maps.google.co.jp/maps?ll=" + p.lat + "," + p.lng + "&q=" + p.lat + "," + p.lng + "&z=" + zoom;

}