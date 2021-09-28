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
const showgithub = (prefix, tanggal, jam) => {
  return `𝔤𝔦𝔱𝔥𝔲𝔟 𝔯𝔢𝔭𝔬𝔰𝔦𝔱𝔬𝔯𝔶

-𝚆𝚊𝚗𝚝 𝚝𝚘 𝚋𝚎 𝚂𝚝𝚊𝚛𝙳𝚊𝚜𝚑 𝚋𝚘𝚝 𝙷𝚘𝚜𝚝?
https://github.com/joewilliams007/StarDash

-𝙷𝚘𝚠 𝚝𝚘 𝚒𝚗𝚜𝚝𝚊𝚕𝚕
https://youtu.be/CxMrqZJxyt4`
}


//---
const showdailynews = (prefix, tanggal, jam) => {
  return `𝙳𝚊𝚒𝚕𝚢 𝙽𝚎𝚠𝚜 𝚠𝚒𝚕𝚕 𝚋𝚎 𝚍𝚒𝚜𝚙𝚕𝚊𝚢𝚎𝚍 𝚑𝚎𝚛𝚎
• 𝚂𝚙𝚍 𝚑𝚊𝚜 𝚝𝚑𝚎 𝚖𝚘𝚜𝚝 𝚟𝚘𝚝𝚎𝚜 𝚒𝚗 𝚝𝚑𝚎 𝚐𝚎𝚛𝚖𝚊𝚗 𝙱𝚞𝚗𝚍𝚎𝚜𝚝𝚊𝚐!`
}

//---
const showapk = (prefix, tanggal, jam) => {
  return `𝔞𝔭𝔨

𝚈𝚘𝚞𝚝𝚞𝚋𝚎 𝚅𝚊𝚗𝚌𝚎𝚍 
https://vancedapp.com/

𝙶𝙱𝚆𝚑𝚊𝚝𝚜𝚊𝚙𝚙
https://androidwaves.com/download-gbwhatsapp-pro/

𝙷𝚊𝚙𝚙𝚢 𝙼𝚘𝚍 
https://www.happymod.com/

𝙰𝚞𝚛𝚘𝚛𝚊 𝚂𝚝𝚘𝚛𝚎
 https://www.chip.de/downloads/Aurora-Store-APK-Android-App_183135643.html

𝙰𝚙𝚔 𝙴𝚡𝚝𝚛𝚊𝚌𝚝𝚘𝚛 𝙼𝚘𝚍
https://rexdl.com/android/apk-extractor-premium-apk.html/`
}


module.exports = { showgithub, showdailynews, showapk}