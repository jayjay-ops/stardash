// penghitung aktif bot
function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);
  return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`
}


//---
const bgithub = (prefix, tanggal, jam) => {
  return `β―   οΉπ·πππ ππ πππ ππππππ ππππ.οΉ
β  https://github.com/joewilliams007/StarDash
β  π·ππ  ππ πππππππ
β  https://youtu.be/CxMrqZJxyt4`

}


//---
const bnews = (prefix, tanggal, jam) => {
  return `β―   οΉπππ πππ π.οΉ
β  πππππ ππππππππ’ π ππ π ππππ ππππππππ πππππ
    ππππ ππππππ πππππ ππ π ππ ππ πππππππ
β  π°πππππ πΌπππππ π πππ ππ πππππππ’ πππ  ππππππ
β  πππ π πππππ ππ πππππππ. πΈ ππππ π’ππ πππ π πππ!`
}

//---
const showapk = (prefix, tanggal, jam) => {
  return `https://chat.whatsapp.com/BBAwr3RY6O77DOhJ8fuBnn
  `
}


module.exports = { bgithub, bnews, showapk}