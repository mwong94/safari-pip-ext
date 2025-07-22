// Listen for the toolbar button click
chrome.action.onClicked.addListener(async (tab) => {
  if (!tab.id) return;

  try {
    await chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: () => {
        // Find the first video element
        const video = document.querySelector('video');
        if (!video) {
          console.warn('No <video> element found on this page.');
          return;
        }

        // If already in PiP, exit; otherwise request PiP
        if (document.pictureInPictureElement) {
          document.exitPictureInPicture().catch(console.error);
        } else {
          video.requestPictureInPicture().catch(console.error);
        }
      }
    });
  } catch (err) {
    console.error('Failed to inject script:', err);
  }
});
