
// Write a JavaScript program 
// to  detect if the website is being opened in a mobile device or a desktop/laptop.

const detectDeviceType = () =>
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    ? 'Mobile'
    : 'Desktop';
console.log(detectDeviceType()); // "Mobile" or "Desktop"
