let activeTabId = null;
let startTime = null;

chrome.tabs.onActivated.addListener((activeInfo) => {
  if (activeTabId !== null) {
    const endTime = Date.now();
    const timeSpent = endTime - startTime;

    chrome.tabs.get(activeTabId, (tab) => {
      if (tab && tab.url) {
        const domain = new URL(tab.url).hostname;
        saveTime(domain, timeSpent);
      }
    });
  }
  activeTabId = activeInfo.tabId;
  startTime = Date.now();
});

function saveTime(domain, timeSpent) {
  chrome.storage.local.get([domain], (result) => {
    const totalTime = (result[domain] || 0) + timeSpent;
    chrome.storage.local.set({ [domain]: totalTime });

    fetch("http://localhost:5000/api/usage", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ domain, timeSpent: totalTime })
    });
  });
}
