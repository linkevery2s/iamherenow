//version 5.
var map;var p;var zoom;var hash1;var url;var number;var marker; var markers = []; var gps_button; var hinanj;var geok;var cloud;
var todou; var todou = new Array(47);var markers = new Array(47);

    function map_ini() {
		map = L.map('map_canvas');
		L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png', {
  		attribution: '&copy; <a href="http://maps.gsi.go.jp/development/ichiran.html" target="_blank">地理院タイル</a>'
  		}).addTo(map);
		map.setView([35.619, 138.466], 5);
		hash1 = L.hash(map);
		
			gps_button = L.easyButton('fa-location-arrow', function(){
    			GPS();
			}).addTo( map );

			hinanj = L.easyButton('fa-book fa-2x', function(){
    			hi();
			}).addTo( map );

			cloud = L.easyButton('fa-cloud fa-1x', function(){
    			cl();
			}).addTo( map );

		ini();
		todou_ini();
		

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

			gps_button = L.easyButton('fa-location-arrow', function(){
    			GPS();
			}).addTo( map );

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

function hi(){
$("#hinan").show();
}

function cl(){
$("#cloud").show();
}

function cancel(){
	$("#tel_mode").hide();
}

function cancel_h(){
	$("#hinan").hide();
}

function cancel_c(){
	$("#cloud").hide();
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

function todou_ini(){
		todou[0] = L.geoJson(hokkaido, {style: sty,onEachFeature: geo_k,pointToLayer: iro});
		todou[1] = L.geoJson(aomori, {style: sty,onEachFeature: geo_k,pointToLayer: iro});
		todou[2] = L.geoJson(iwate, {style: sty,onEachFeature: geo_k,pointToLayer: iro});
		todou[3] = L.geoJson(miyagi, {style: sty,onEachFeature: geo_k,pointToLayer: iro});
		todou[4] = L.geoJson(akita, {style: sty,onEachFeature: geo_k,pointToLayer: iro});
		todou[5] = L.geoJson(yamagata, {style: sty,onEachFeature: geo_k,pointToLayer: iro});
		todou[6] = L.geoJson(fukushima, {style: sty,onEachFeature: geo_k,pointToLayer: iro});
		todou[7] = L.geoJson(ibaragi, {style: sty,onEachFeature: geo_k,pointToLayer: iro});
		todou[8] = L.geoJson(tochigi, {style: sty,onEachFeature: geo_k,pointToLayer: iro});
		todou[9] = L.geoJson(gunma, {style: sty,onEachFeature: geo_k,pointToLayer: iro});
		todou[10] = L.geoJson(saitama, {style: sty,onEachFeature: geo_k,pointToLayer: iro});
		todou[11] = L.geoJson(tiba, {style: sty,onEachFeature: geo_k,pointToLayer: iro});
		todou[12] = L.geoJson(tokyo, {style: sty,onEachFeature: geo_k,pointToLayer: iro});
		todou[13] = L.geoJson(kanagawa, {style: sty,onEachFeature: geo_k,pointToLayer: iro});
		todou[14] = L.geoJson(nigata, {style: sty,onEachFeature: geo_k,pointToLayer: iro});
		todou[15] = L.geoJson(toyama, {style: sty,onEachFeature: geo_k,pointToLayer: iro});
		todou[16] = L.geoJson(ishikawa, {style: sty,onEachFeature: geo_k,pointToLayer: iro});
		todou[17] = L.geoJson(fukui, {style: sty,onEachFeature: geo_k,pointToLayer: iro});
		todou[18] = L.geoJson(yamanashi, {style: sty,onEachFeature: geo_k,pointToLayer: iro});
		todou[19] = L.geoJson(nagano, {style: sty,onEachFeature: geo_k,pointToLayer: iro});
		todou[20] = L.geoJson(gifu, {style: sty,onEachFeature: geo_k,pointToLayer: iro});
		todou[21] = L.geoJson(shizuoka, {style: sty,onEachFeature: geo_k,pointToLayer: iro});
		todou[22] = L.geoJson(aichi, {style: sty,onEachFeature: geo_k,pointToLayer: iro});
		todou[23] = L.geoJson(mie, {style: sty,onEachFeature: geo_k,pointToLayer: iro});
		todou[24] = L.geoJson(shiga, {style: sty,onEachFeature: geo_k,pointToLayer: iro});
		todou[25] = L.geoJson(kyoto, {style: sty,onEachFeature: geo_k,pointToLayer: iro});
		todou[26] = L.geoJson(osaka, {style: sty,onEachFeature: geo_k,pointToLayer: iro});
		todou[27] = L.geoJson(hyogo, {style: sty,onEachFeature: geo_k,pointToLayer: iro});
		todou[28] = L.geoJson(nara, {style: sty,onEachFeature: geo_k,pointToLayer: iro});
		todou[29] = L.geoJson(wakayama, {style: sty,onEachFeature: geo_k,pointToLayer: iro});
		todou[30] = L.geoJson(tottori, {style: sty,onEachFeature: geo_k,pointToLayer: iro});
		todou[31] = L.geoJson(shimane, {style: sty,onEachFeature: geo_k,pointToLayer: iro});
		todou[32] = L.geoJson(hiroshima, {style: sty,onEachFeature: geo_k,pointToLayer: iro});
		todou[33] = L.geoJson(okayama, {style: sty,onEachFeature: geo_k,pointToLayer: iro});
		todou[34] = L.geoJson(yamaguchi, {style: sty,onEachFeature: geo_k,pointToLayer: iro});
		todou[35] = L.geoJson(tokushima, {style: sty,onEachFeature: geo_k,pointToLayer: iro});
		todou[36] = L.geoJson(kagawa, {style: sty,onEachFeature: geo_k,pointToLayer: iro});
		todou[37] = L.geoJson(ehime, {style: sty,onEachFeature: geo_k,pointToLayer: iro});
		todou[38] = L.geoJson(kochi, {style: sty,onEachFeature: geo_k,pointToLayer: iro});
		todou[39] = L.geoJson(fukuoka, {style: sty,onEachFeature: geo_k,pointToLayer: iro});
		todou[40] = L.geoJson(saga, {style: sty,onEachFeature: geo_k,pointToLayer: iro});
		todou[41] = L.geoJson(nagasaki, {style: sty,onEachFeature: geo_k,pointToLayer: iro});
		todou[42] = L.geoJson(kumamoto, {style: sty,onEachFeature: geo_k,pointToLayer: iro});
		todou[43] = L.geoJson(oita, {style: sty,onEachFeature: geo_k,pointToLayer: iro});
		todou[44] = L.geoJson(miyazaki, {style: sty,onEachFeature: geo_k,pointToLayer: iro});
		todou[45] = L.geoJson(kagoshima, {style: sty,onEachFeature: geo_k,pointToLayer: iro});
		todou[46] = L.geoJson(okinawa, {style: sty,onEachFeature: geo_k,pointToLayer: iro});
}

function sty(feature) {
				return feature.properties && feature.properties.style;
			}

function iro(feature, latlng) {
				return L.circleMarker(latlng, {
					radius: 10,
					fillColor: "#2EFE2E",
					color: "#000",
					weight: 1,
					opacity: 1,
					fillOpacity: 0.8
				});
			}

function geo_k(feature, layer) {
    var popup;
    if (feature.properties && feature.properties.Name) {
        popup = "名称：" + feature.properties.Name;
    }
    
    if (feature.properties && feature.properties.Jusho){
    	popup += '<br>住所：' + feature.properties.Jusho;
    }
    
    layer.bindPopup(popup);
}


function hok(){

for (  var i = 0;  i < 47;  i++  ) {
markers[i] = L.markerClusterGroup();
markers[i].addLayer(todou[i]);
map.addLayer(markers[i]);
}



}

