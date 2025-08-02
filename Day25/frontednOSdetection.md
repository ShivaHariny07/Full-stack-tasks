## Detect OS and Device Details in Frontend JavaScript

Use the following method to detect the user's operating system and device type:

```js
function getOSAndDevice() {
  const userAgent = navigator.userAgent;

  let os = "Unknown OS";
  if (userAgent.includes("Win")) os = "Windows";
  else if (userAgent.includes("Mac")) os = "MacOS";
  else if (userAgent.includes("Linux")) os = "Linux";
  else if (userAgent.includes("Android")) os = "Android";
  else if (userAgent.includes("like Mac")) os = "iOS";

  const isMobile = /Mobi|Android/i.test(userAgent);

  return {
    os,
    device: isMobile ? "Mobile" : "Desktop"
  };
}

console.log(getOSAndDevice());
```

This function returns an object with `os` and `device` properties based on the user's environment.


