const blockedSitesList = [
  "twitter.com",
  "facebook.com",
  "instagram.com",
  "twitch.tv",
];
function blockSites() {
  const currentUrl = window.location.href;
  for (let i = 0; i < blockedSitesList.length; i++) {
    if (currentUrl.includes(blockedSitesList[i])) {
      window.location.href = "about:blank";
      break;
    }
  }
}

blockSites();
