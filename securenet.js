const blockedDomains = [
  "01net.com",
  "uptodown.com",
  "clubic.com",
  "cnet.com",
  "softonic.com",
  "17ebook.co",
  "aladel.net",
  "bpwhamburgorchardpark.org",
  "clicnews.com",
  "dfwdiesel.net",
  "divineenterprises.net",
  "fantasticfilms.ru",
  "gardensrestaurantandcatering.com",
  "ginedis.com",
  "gncr.org",
  "hdvideoforums.org",
  "hihanin.com",
  "kingfamilyphotoalbum.com",
  "likaraoke.com",
  "mactep.org",
  "magic4you.nu",
  "marbling.pe.kr",
  "nacjalneg.info",
  "pronline.ru",
  "purplehoodie.com",
  "qsng.cn",
  "seksburada.net",
  "sportsmansclub.net",
  "stock888.cn",
  "tathli.com",
  "teamclouds.com",
  "texaswhitetailfever.com",
  "wadefamilytree.org",
  "xnescat.info",
  "yt118.com"
]
const currentURL = new URL(window.location.href)
const warningPage = chrome.runtime.getURL('view/warning.html').toString()

// set 'SecureNet' to session storage if the URL contain it
if(currentURL.searchParams.has('SecureNet')) {
  sessionStorage.setItem('SecureNet', true)
}

// check if url contains a blocked domain
if(blockedDomains.some(v => window.location.hostname.includes(v))) {
  
  // if page doesn't contains param "SecureNet" or local storage "SecureNet"
  if(!currentURL.searchParams.has('SecureNet') && !sessionStorage.getItem('SecureNet')) {
    window.location = warningPage + "?from=" + window.location.href
  }

}