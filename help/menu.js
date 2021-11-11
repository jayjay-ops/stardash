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






const menu = (tanggal, jam, pushname, sender, prem_, Lxa, prefix, user, uptime, isGroupAdmins, groupMetadata, groupAdmins, Welcome_, AntiLink_, isGroup, process, website) => { 
  if (isGroupAdmins){
    admin = "Admin Group"
  } else if (!isGroupAdmins){
    admin = "Member Group"
  }
		if (isGroup) return `
............................
⇝  ${pushname}
⇝   ${prem_}
............................
⌯   .𝚖𝚎𝚗𝚞 𝚘𝚗𝚎
⌯   .𝚖𝚎𝚗𝚞 𝚝𝚠𝚘
⌯   .𝚖𝚎𝚗𝚞 𝚝𝚑𝚛𝚎𝚎
............................
⌯   .𝚖𝚎𝚗𝚞 𝚊𝚍𝚖𝚒𝚗
⌯   .𝚖𝚎𝚗𝚞 𝚘𝚠𝚗𝚎𝚛
............................
~https://fc8f-87-184-109-242.ngrok.io~
............................
⍗  .𝚞𝚙𝚍𝚊𝚝𝚎𝚜
`


else if (!isGroup) return`............................
⇝  ${pushname}
⇝   ${prem_}
............................
⌯   .𝚖𝚎𝚗𝚞 𝚘𝚗𝚎
⌯   .𝚖𝚎𝚗𝚞 𝚝𝚠𝚘
⌯   .𝚖𝚎𝚗𝚞 𝚝𝚑𝚛𝚎𝚎
............................
⌯   .𝚖𝚎𝚗𝚞 𝚊𝚍𝚖𝚒𝚗
⌯   .𝚖𝚎𝚗𝚞 𝚘𝚠𝚗𝚎𝚛
............................
~https://fc8f-87-184-109-242.ngrok.io~
............................
⍗  .𝚞𝚙𝚍𝚊𝚝𝚎𝚜
`

}

//---
const menus = (tanggal, jam, pushname, sender, prem_, Lxa, prefix, user, uptime, isGroupAdmins, groupMetadata, groupAdmins, Welcome_, AntiLink_, isGroup, process, website) => { 
  return `⇝  ${pushname}
⇝   ${prem_}
............................
⌯   .𝚝𝚛𝚞𝚝𝚑
⌯   .𝚍𝚊𝚛𝚎
⌯   .𝚗𝚜𝚏𝚠𝚎𝚗
⌯   .𝚖𝚎𝚖𝚎
............................
⌯   .𝚜𝚊𝚢
⌯   .𝚐𝚊𝚢
⌯   .𝚍𝚒𝚌𝚎
⌯   .𝚕𝚘𝚟𝚎
............................
⌯   .𝚏𝚊𝚌𝚝
⌯   .𝚊𝚗𝚒𝚖𝚊𝚕
⌯   .𝚙𝚘𝚔𝚎𝚖𝚘𝚗
⌯   .𝚎𝚖𝚘𝚓𝚒𝚎
............................
⌯   .𝚏𝚕𝚊𝚐
⌯   .𝚎𝚞𝚏𝚕𝚊𝚐
⌯   .𝚜𝚘𝚗𝚐
............................
⌯   .𝚜𝚢𝚖𝚋𝚘𝚕
`
}

const menusticker = (tanggal, jam, pushname, sender, prem_, Lxa, prefix, user, uptime, isGroupAdmins, groupMetadata, groupAdmins, Welcome_, AntiLink_, isGroup, process) => { 
  return `⇝  ${pushname}
⇝   ${prem_}
............................
⌯   .𝚜𝚝𝚒𝚌𝚔𝚎𝚛
⌯   .𝚒𝚖𝚊𝚐𝚎𝚜𝚝𝚒𝚌𝚔𝚎𝚛
`

}

const menu3 = (tanggal, jam, pushname, sender, prem_, Lxa, prefix, user, uptime, isGroupAdmins, groupMetadata, groupAdmins, Welcome_, AntiLink_, isGroup, process) => { 
  return `⇝  ${pushname}
⇝   ${prem_}
............................
⌯   .𝚋𝚕𝚞𝚛
⌯   .𝚜𝚊𝚝𝚞𝚛𝚊𝚝𝚒𝚘𝚗
⌯   .𝚏𝚒𝚕𝚝𝚎𝚛
............................
⌯   .𝚊𝚞𝚍𝚒𝚘𝚕𝚎𝚟𝚎𝚕
⌯   .𝚖𝚙3
⌯   .𝚜𝚙𝚎𝚎𝚍
⌯   .𝚌𝚛𝚞𝚜𝚑
............................
⌯   .𝚌𝚘𝚟𝚎𝚛
⌯   .𝚠𝚊𝚝𝚎𝚛𝚖𝚊𝚛𝚔𝚟𝚒𝚍𝚎𝚘
⌯   .𝚠𝚊𝚝𝚎𝚛𝚖𝚊𝚛𝚔𝚒𝚖𝚊𝚐𝚎
............................
⌯   .𝚗𝚘𝚝𝚎
⌯   .𝚠𝚒𝚜𝚑
............................
⌯   .𝚋 𝚗𝚎𝚠𝚜
⌯   .𝚋 𝚜𝚞𝚙𝚙𝚘𝚛𝚝
............................
⌯   .𝚖𝚎𝚗𝚞 𝚊𝚐𝚋
⌯   .𝚖𝚎𝚗𝚞 𝚜𝚝𝚒𝚌𝚔𝚎𝚛
`
}

const menux = (tanggal, jam, pushname, sender, prem_, Lxa, prefix, user, uptime, isGroupAdmins, groupMetadata, groupAdmins, Welcome_, AntiLink_, isGroup, process) => { 
  return `⇝  ${pushname}
⇝  ${prem_}
............................
⌯   .𝚔𝚒𝚌𝚔
⌯   .𝚙𝚛𝚘𝚖𝚘𝚝𝚎
⌯   .𝚍𝚎𝚖𝚘𝚝𝚎
⌯   .𝚊𝚍𝚍
⌯   .𝚝𝚊𝚐𝚊𝚕𝚕
............................
⌯   .𝚊𝚗𝚝𝚒𝚕𝚒𝚗𝚔 𝚘𝚗
⌯   .𝚕𝚒𝚗𝚔
⌯   .𝚕𝚎𝚊𝚟𝚎
............................
⌯   .𝚍𝚎𝚕𝚎𝚝𝚎
`
}
const menuy = (tanggal, jam, pushname, sender, prem_, Lxa, prefix, user, uptime, isGroupAdmins, groupMetadata, groupAdmins, Welcome_, AntiLink_, isGroup, process) => { 
  return `⇝  ${pushname}
⇝   ${prem_}
⇝    𝚟𝚒𝚙
............................
⌯   .𝚝𝚊𝚐𝚊𝚕𝚕
⌯   .𝚙𝚒𝚔𝚊 𝚝𝚎𝚡𝚝
⌯   .𝚙𝚒𝚗𝚐
⌯   .𝚎𝚡𝚎𝚌𝚞𝚝𝚎
............................
⌯   .𝚞𝚕𝚝𝚒𝚖𝚊𝚝𝚎𝚛𝚘𝚕𝚕
⌯   .𝚕𝚎𝚐𝚎𝚗𝚍𝚊𝚛𝚢𝚛𝚘𝚕𝚕
............................
⌯   .𝚠𝚊𝚖𝚎
............................
⌯   .𝚖𝚎𝚗𝚞 𝚘𝚠𝚗𝚎𝚛
............................
⑅   𝙹𝚘𝚒𝚗 𝚘𝚞𝚛 𝚜𝚞𝚙𝚙𝚘𝚛𝚝 𝚐𝚛𝚘𝚞𝚙 𝚏𝚘𝚛 𝚚𝚞𝚎𝚜𝚝𝚒𝚘𝚗𝚜.
⑅   https://chat.whatsapp.com/BBAwr3RY6O77DOhJ8fuBnn
`
}


const menuowner = (tanggal, jam, pushname, sender, prem_, Lxa, prefix, user, uptime, isGroupAdmins, groupMetadata, groupAdmins, Welcome_, AntiLink_, isGroup, process) => { 
  return `⇝  ${pushname}
⇝   ${prem_}
⌯   𝚘𝚠𝚗𝚎𝚛
............................
⌯   .𝚌𝚕𝚎𝚊𝚛𝚌𝚑𝚊𝚝
⌯   .𝚋𝚌
⌯   .𝚖𝚎𝚗𝚞 𝚟𝚒𝚙
............................
⌯   .𝚞𝚙𝚍𝚊𝚝𝚎𝚋𝚘𝚝
............................
⑅   𝙹𝚘𝚒𝚗 𝚘𝚞𝚛 𝚜𝚞𝚙𝚙𝚘𝚛𝚝 𝚐𝚛𝚘𝚞𝚙 𝚏𝚘𝚛 𝚚𝚞𝚎𝚜𝚝𝚒𝚘𝚗𝚜.
⑅   https://chat.whatsapp.com/BBAwr3RY6O77DOhJ8fuBnn
`
}

const menuagb = (tanggal, jam, pushname, sender, prem_, Lxa, prefix, user, uptime, isGroupAdmins, groupMetadata, groupAdmins, Welcome_, AntiLink_, isGroup, process) => { 
  return `⇝  ${pushname}
⇝  ${prem_}
............................
⌯   𝙰𝚐𝚋
⑅   𝚈𝚘𝚞𝚛 𝚗𝚞𝚖𝚋𝚎𝚛, 𝚌𝚘𝚖𝚖𝚊𝚗𝚍𝚜, 𝚗𝚘𝚝𝚎𝚜 𝚊𝚗𝚍 𝚠𝚒𝚜𝚑𝚎𝚜
⑅   𝚖𝚒𝚐𝚑𝚝 𝚋𝚎 𝚜𝚝𝚘𝚛𝚎𝚍 𝚒𝚏 𝚛𝚎𝚐𝚒𝚜𝚝𝚎𝚛𝚎𝚍
⑅   𝚒𝚏 𝚢𝚘𝚞 𝚠𝚒𝚜𝚑 𝚝𝚘 𝚑𝚊𝚟𝚎 𝚝𝚑𝚎𝚖 𝚍𝚎𝚕𝚎𝚝𝚎𝚍 
⑅   𝚌𝚑𝚊𝚝 𝚠𝚒𝚝𝚑 𝚝𝚑𝚎 𝚋𝚘𝚝 𝚘𝚠𝚗𝚎𝚛.
⑅   𝙿𝚕𝚎𝚊𝚜𝚎 𝚍𝚘𝚗𝚝 𝚊𝚋𝚞𝚜𝚎 𝚋𝚘𝚝 𝚠𝚒𝚝𝚑 𝚒𝚕𝚕𝚎𝚐𝚊𝚕 𝚌𝚘𝚗𝚝𝚎𝚗𝚝.
⑅   𝙹𝚘𝚒𝚗 𝚘𝚞𝚛 𝚜𝚞𝚙𝚙𝚘𝚛𝚝 𝚐𝚛𝚘𝚞𝚙 𝚏𝚘𝚛 𝚚𝚞𝚎𝚜𝚝𝚒𝚘𝚗𝚜.
............................
⑅   https://chat.whatsapp.com/BBAwr3RY6O77DOhJ8fuBnn
............................
⑅   𝚈𝚘𝚞 𝚌𝚊𝚗 𝚊𝚕𝚜𝚘 𝚌𝚘𝚗𝚝𝚊𝚌𝚝 𝚖𝚎. 
⑅   wa.me/4917626388837
⌯   𝚋𝚊𝚜𝚎𝚍 𝚒𝚗 𝚐𝚎𝚛𝚖𝚊𝚗𝚢`
}

const menuthree = (tanggal, jam, pushname, sender, prem_, Lxa, prefix, user, uptime, isGroupAdmins, groupMetadata, groupAdmins, Welcome_, AntiLink_, isGroup, process) => { 
  return `⇝  ${pushname}
⇝  ${prem_}
............................
⌯   .𝚛𝚖𝚋𝚐
⌯   .𝚛𝚖𝚋𝚐𝚜
............................
⌯   .𝚌𝚊𝚕𝚌
............................
⌯   .𝚌𝚘𝚘𝚕
⌯   .𝚜𝚘𝚗𝚐
⌯   .𝚛𝚊𝚗𝚍𝚘𝚖𝚜𝚘𝚗𝚐
............................
⌯   .𝚜𝚕𝚘𝚝
`
}



const menusecret = (tanggal, jam, pushname, sender, prem_, Lxa, prefix, user, uptime, isGroupAdmins, groupMetadata, groupAdmins, Welcome_, AntiLink_, isGroup, process) => { 
  return `⇝  ${pushname}
⌬  ${prem_}
............................
⌯   .𝚊𝚜𝚜
⌯   .𝚋𝚘𝚘𝚋𝚜
............................
⌯   .𝚌𝚞𝚝𝚎
⌯   .𝚜𝚝𝚎𝚕𝚕𝚊
⌯   .𝚒𝚖𝚐𝚜𝚝𝚎𝚕𝚕𝚊
`
}


module.exports = { menu, menus, menusticker, menux, menuowner, menuy, menuagb, menuthree, menu3, menusecret}
