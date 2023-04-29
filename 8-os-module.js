const os = require('os')

// info about current user
const user = os.userInfo()

// system uptime in sec
const uptime = os.uptime()

// currentOs
const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
}

console.log(currentOS)
