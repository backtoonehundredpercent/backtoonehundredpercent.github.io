var bodyEl = document.querySelector("body");

var logoEl = document.createElement("div");
logoEl.setAttribute("id", "logo");
bodyEl.appendChild(logoEl);

var menyEl = document.createElement("div");
menyEl.setAttribute("class", "meny");
var menyValg = [["HOME", "index.html"], ["SHOP", "index.html"], ["ABOUT US", "index.html"], ["CONTACT US", "index.html"]];
for (var i = 0; i < menyValg.length; i++) {
  var lenkeEl = document.createElement("a");
  lenkeEl.setAttribute("href", menyValg[i][1]);
  var menyRadEl = document.createElement("div");
  menyRadEl.setAttribute("class", "menyRad");
  menyRadEl.innerHTML = menyValg[i][0];
  lenkeEl.appendChild(menyRadEl);
  menyEl.appendChild(lenkeEl);
}
bodyEl.appendChild(menyEl)

var sosialemedierEl = document.createElement("div");
sosialemedierEl.setAttribute("class", "sosialemedier");

var lenkeSMEl = document.createElement("a");
lenkeSMEl.setAttribute("href", "https://www.youtube.com/channel/UClTN60IRcVVS97LYJn-nabQ");
lenkeSMEl.setAttribute("target", "_blank");
var youtubeEl = document.createElement("img");
youtubeEl.setAttribute("src", "media/youtube.png");
youtubeEl.setAttribute("id", "youtube");
lenkeSMEl.appendChild(youtubeEl);
sosialemedierEl.appendChild(lenkeSMEl);

var lenkeSM2El = document.createElement("a");
lenkeSM2El.setAttribute("href", "https://www.instagram.com/back_to_100/");
lenkeSM2El.setAttribute("target", "_blank");
var instagramEl = document.createElement("img");
instagramEl.setAttribute("src", "media/instagram.png");
instagramEl.setAttribute("id", "instagram");
lenkeSM2El.appendChild(instagramEl);
sosialemedierEl.appendChild(lenkeSM2El);
bodyEl.appendChild(sosialemedierEl);
