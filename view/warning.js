const currentURL = new URL(window.location.href)
const fromURL = new URL(currentURL.searchParams.get('from'))

// if url contains 'from' param
if(currentURL.searchParams.has('from')) {

  // set blocked url text to the page
  document.getElementById('blockedURL').textContent = fromURL.href

  // set custom link for go back button
  document.getElementById('backURL').href = "https://google.com/search?q=" + fromURL.href
}

// add custom event for the 'continue' button
document.getElementById('continueButton').addEventListener('click', allowURL)

// allow to access to a dangerous URL with 'continue' button
function allowURL() {

  fromURL.searchParams.set('SecureNet', true)
  window.location = fromURL
}