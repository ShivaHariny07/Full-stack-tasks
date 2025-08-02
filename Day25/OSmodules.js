const os = require('os');

console.log("Operating System:", os.type());            // OS name
console.log("Platform:", os.platform());               // Platform (e.g., win32, linux)
console.log("CPU Architecture:", os.arch());           // CPU architecture
console.log("Number of CPUs:", os.cpus().length);      // Number of CPU cores
console.log("CPU Model:", os.cpus()[0].model);         // CPU model of first core
console.log("System Uptime:", (os.uptime() / 3600).toFixed(2), "hours"); // Uptime in hours
console.log("Free Memory:", (os.freemem() / 1024 / 1024).toFixed(2), "MB"); // Free memory in MB
console.log("Total Memory:", (os.totalmem() / 1024 / 1024).toFixed(2), "MB"); // Total memory in MB
console.log("System Endianness:", os.endianness());    // Endianness (LE or BE)
console.log("Home Directory:", os.homedir());          // User home directory
console.log("Current User:", os.userInfo().username);  // Username
console.log("Host Name:", os.hostname());              // Hostname
console.log("Network Interfaces:");
const nets = os.networkInterfaces();
for (const name of Object.keys(nets)) {
  for (const net of nets[name]) {
    console.log(` - ${name} (${net.family}): ${net.address} ${net.mac} ${net.internal ? '[Internal]' : ''}`);
  }
}
