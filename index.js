const usbDetect = require("usb-detection");

usbDetect.on("add", (device) => {
  console.log(device);
  usbDetect.stopMonitoring();
  process.exit(0);
});

console.log("Insert your USB device");
usbDetect.startMonitoring();
