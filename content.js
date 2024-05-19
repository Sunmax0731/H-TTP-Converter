// content.js

// Function to convert ttps:// and ttp:// links to https:// and http:// links
function convertLinks() {
  // Select all tweet text elements
  const tweetTextElements = document.querySelectorAll('[data-testid="tweetText"]');

  tweetTextElements.forEach(element => {
    let html = element.innerHTML;

    // Replace ttps:// with https://
    html = html.replace(/(^|[\s>])ttps:\/\/([^\s<]+)/g, '$1<a href="https://$2" target="_blank">https://$2</a>');
    
    // Replace ttp:// with http://
    html = html.replace(/(^|[\s>])ttp:\/\/([^\s<]+)/g, '$1<a href="http://$2" target="_blank">http://$2</a>');

    // Update the element's HTML only if there was a change
    if (element.innerHTML !== html) {
      element.innerHTML = html;
    }
  });
}

// Run the function on page load
window.addEventListener('load', convertLinks);

// Also run the function whenever the DOM is updated (for dynamically loaded content)
const observer = new MutationObserver(() => {
  convertLinks();
});
observer.observe(document.body, { childList: true, subtree: true });
