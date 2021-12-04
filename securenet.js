const blockedDomains = []

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