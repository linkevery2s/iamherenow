//version 5.
var map;var p;var zoom;var hash;var url;var number;var marker; var markers = [];

    function map_ini() {
		map = L.map('map_canvas');
		L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png', {
  		attribution: '&copy; <a href="http://maps.gsi.go.jp/development/ichiran.html" target="_blank">地理院タイル</a>'
  		}).addTo(map);
		map.setView([35.619, 138.466], 5);
		hash = L.hash(map);
	}

    function em_ini() {
		map = L.map('map_canvas');
		L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png', {
  		attribution: '&copy; <a href="http://maps.gsi.go.jp/development/ichiran.html" target="_blank">地理院タイル</a>'
  		}).addTo(map);
		hash = L.hash(map);
		var para = location.hash;
		var par = para.split("/");
		//p = map.getCenter();
		var pulsingIcon = L.icon.pulse({iconSize:[12,12],color:'blue'});
		var marker = L.marker([par[1] ,par[2]] ,{icon: pulsingIcon}).addTo(map);
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

function mail(){
	var para = location.hash;
	var par = para.split("/");
	zoom = map.getZoom();
	var url = "https://linkevery2s.github.io/iamherenow/emap.html%23" + zoom + "/" + par[1] + "/" +par[2];
	location.href =  "mailto:?body= %e4%bb%8a%e3%80%81%e3%81%93%e3%81%93%e3%81%ab%e3%81%84%e3%82%8b%e3%82%88%e3%80%82%0d%0a%0d%0a " + url;
}

function line(){
	var para = location.hash;
	var par = para.split("/");
	zoom = map.getZoom();
	var url = "https://linkevery2s.github.io/iamherenow/emap.html%23" + zoom + "/" + par[1] + "/" +par[2];
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

function tw(){
	var para = location.hash;
	var par = para.split("/");
	zoom = map.getZoom();
	var url = "https://linkevery2s.github.io/iamherenow/emap.html%23" + zoom + "/" + par[1] + "/" +par[2];
	location.href = "https://twitter.com/share?url=" + url + "&text=%e4%bb%8a%e3%80%81%e3%81%93%e3%81%93%e3%81%ab%e3%81%84%e3%82%8b%e3%82%88%e3%80%82%0d%0a%0d%0a";
}

function fb(){
	var para = location.hash;
	var par = para.split("/");
	zoom = map.getZoom();
	var url = "https://linkevery2s.github.io/iamherenow/emap.html%23" + zoom + "/" + par[1] + "/" +par[2];
	location.href = "https://www.facebook.com/sharer/sharer.php?u=" + url;
}