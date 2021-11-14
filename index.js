console.log('Starting...')
let { spawn } = require('child_process')
let path = require('path')
let fs = require('fs')
let package = JSON.parse(fs.readFileSync('./package.json'))
const CFonts  = require('cfonts')
CFonts.say('StarDash', {
  font: 'pallet',
  align: 'center',
  gradient: ['red', 'magenta']
})
CFonts.say(`'powered by Shiba'`, {
  font: 'console',
  align: 'center',
  colors: ['yellow']
})

play start.mp3

/**
 * Start a js file
 * @param {String} file `path/to/file`
 */
function start(file) {
  let args = [path.join(__dirname, file), ...process.argv.slice(2)]
  CFonts.say([process.argv[0], ...args].join(' '), {
    font: 'console',
    align: 'center',
    gradient: ['red', 'magenta']
  })
  let p = spawn(process.argv[0], args, {
    stdio: ['inherit', 'inherit', 'inherit', 'ipc']
  })
  p.on('message', data => {
    console.log('[RECEIVED]', data)
    switch (data) {
      case 'reset':
        p.kill()
        start.apply(this, arguments)
        break
      case 'uptime':
        p.send(process.uptime())
        break
    }
  })
  p.on('exit', code => {
    console.error('There was an Error. However shiba inu was so nice and will restart the bot automaticly now. code:', code)
	start(file)
    if (code === 0) return
    fs.watchFile(args[0], () => {
      fs.unwatchFile(args[0])
      start(file)
    })
  })
  // console.log(p)
}

start('lexa.js')
