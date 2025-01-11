// var url="";
if ((navigator.userAgent.match(
    /(iPhone|iPod|Android|ios|iOS|iPad|Backerry|WebOS|Symbian|Windows Phone|Phone)/i))) {
    url =
        "https://minecraft.onelink.me/1010960778?pid=minecraftnet&is_retargeting=true&af_dp=minecraft://openStore/?showStoreOffer=";
    // console.log(url);
} else {
    url = "minecraft://openStore/?showStoreOffer=";
    // console.log(url);
}
// window.onload = function() {
// 	if ((navigator.userAgent.match(
// 			/(iPhone|iPod|Android|ios|iOS|iPad|Backerry|WebOS|Symbian|Windows Phone|Phone)/i))) {
// 		url =
// 			"https://minecraft.onelink.me/1010960778?pid=minecraftnet&is_retargeting=true&af_dp=minecraft://openStore/?showStoreOffer=";
// 		// console.log(url);
// 	} else {
// 		url = "minecraft://openStore/?showStoreOffer=";
// 		// console.log(url);
// 	}

// 	var imgdog = [
// 		"url(img/cursor/favicon.ico), auto",
// 		"url(img/cursor/favicon.ico), auto",
// 		"url(img/cursor/favicon.ico), auto",
// 		"url(img/cursor/favicon.ico), auto",
// 		"url(img/cursor/favicon.ico), auto",
// 		"url(img/cursor/favicon.ico), auto"
// 	];
// 	var imgpickaxe = [
// 		"url(img/cursor/favicon.ico), auto",
// 		"url(img/cursor/favicon.ico), auto",
// 		"url(img/cursor/favicon.ico), auto",
// 		"url(img/cursor/favicon.ico), auto",
// 		"url(img/cursor/favicon.ico), auto",
// 		"url(img/cursor/favicon.ico), auto"
// 	];
// 	randomdog = Math.floor((Math.random() * imgdog.length));
// 	randompickaxe = Math.floor((Math.random() * imgpickaxe.length));
// 	$("body").css("cursor", imgdog[randomdog]);
// 	$('a,summary').hover(
// 		function() {
// 			this.style.cursor = imgpickaxe[randompickaxe];
// 		}
// 	);


// }


const myskin = [
    "8e78a44d-0c1f-4ce2-826b-yi", //跳转链接1
    "02b54955-9b4d-40cb-9b73-er2", //跳转链接2
    "603d6be1-7745-4ad8-8af3-1z1", //跳转链接3
    "a2a7ad5c-f55e-44ff-9f70-a5a", //跳转链接4
    "cc1e1b86-1863-4c1c-9103-b82", //跳转链接5
    "7dae6bfe-e92b-403e-842e-d8d", //跳转链接6
    "20b4d681-df67-420c-aff3-076", //跳转链接7
    "d0f9abcb-4915-4008-9837-ff7", //跳转链接8
    "b89ef5de-78ad-4a48-b8a5-f12", //跳转链接9
    "b3b50166-5612-4ff1-8f03-9af", //跳转链接10
    "0c77040a-abb6-4938-963d-5a8", //跳转链接11
    "530f1451-92dd-4924-9265-a96"  //跳转链接12
]

function OnclickSound() {
    let OnclickAudio = new Audio("../audio/OnclickSound.ogg");
    OnclickAudio.play();

}

let urljump = $(".btn")
for (let i = 0; i < urljump.length; i++) {
    urljump[i].onclick = function () {
        OnclickSound();
        // console.log(i)
        let juurl = url + myskin[i];
        // console.log(juurl);
        this.href = juurl;
    }
}