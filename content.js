function trackTime() {
  const payload = {
    url: window.location.hostname,
    timestamp: new Date(),
  };
  chrome.runtime.sendMessage({ type: "TRACK_ACTIVITY", payload });
}
setInterval(trackTime, 60000); // every minute
