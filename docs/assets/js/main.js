;(function(){

			// Menu settings
			$('#menuToggle, .menu-close').on('click', function(){
				$('#menuToggle').toggleClass('active');
				$('body').toggleClass('body-push-toleft');
				$('#theMenu').toggleClass('menu-open');
			});


})(jQuery)

function mailt(){
	var url = window.location.href;
	location.href =  "mailto:?body=Appli URL " + url;
}

function linet(){
	var url = window.location.href;
	location.href = "line://msg/text/%e4%bb%8a%e3%80%81%e3%81%93%e3%81%93%e3%81%ab%e3%81%84%e3%82%8b%e3%82%88%e3%80%82%0d%0a%0d%0a"+ url;
}

function twt(){
	var url = window.location.href;
	location.href = "https://twitter.com/share?url=" + url + "&text=%e4%bb%8a%e3%80%81%e3%81%93%e3%81%93%e3%81%ab%e3%81%84%e3%82%8b%e3%82%88%e3%80%82%0d%0a%0d%0a";
}

function fbt(){
	var url = window.location.href;
	location.href = "https://www.facebook.com/sharer/sharer.php?u=" + url;
}

var ido, keido;
function em() {

	if (navigator.geolocation) {
	   //geolocationの利用
       navigator.geolocation.getCurrentPosition(gps_get,gps_error3);
     } else {
     	alert("GPSの取得に失敗したため、緊急モードを起動できません。")
     }

}
	
function gps_error3(error) {
   		//失敗したら…
       alert("GPSの取得に失敗したため、緊急モードを起動できません。");
}
 
function gps_get(position) {

    //成功したら…
    ido = position.coords.latitude;
    keido = position.coords.longitude;
    
    //位置情報取得後、地図へ飛ぶ
    location.href = "https://linkevery2s.github.io/iamherenow/index.html#" + "17/" +ido + "/" + keido;
   		//map.setView([ido, keido], 17);

}