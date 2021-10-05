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

const menu = (tanggal, jam, pushname, sender, prem_, Lxa, prefix, user, uptime, isGroupAdmins, groupMetadata, groupAdmins, Welcome_, AntiLink_, isGroup, process) => { 
  if (isGroupAdmins){
    admin = "Admin Group"
  } else if (!isGroupAdmins){
    admin = "Member Group"
  }
		if (isGroup) return `
⇝  ${pushname}
⌬  ${prem_}


⌯   ﹝.𝚖𝚎𝚗𝚞 𝚜﹞
⑅    
⌯   ﹝.𝚖𝚎𝚗𝚞 3﹞
⑅
⌯   ﹝.𝚖𝚎𝚗𝚞 𝚡﹞
⑅
⌯   ﹝.𝚖𝚎𝚗𝚞 𝚢﹞
⑅

⍗  .𝚞𝚙𝚍𝚊𝚝𝚎𝚜
`


else if (!isGroup) return`⇝  ${pushname}
⌬  ${prem_}


⌯   ﹝.𝚖𝚎𝚗𝚞 𝚜﹞
⑅    
⌯   ﹝.𝚖𝚎𝚗𝚞 3﹞
⑅
⌯   ﹝.𝚖𝚎𝚗𝚞 𝚡﹞
⑅
⌯   ﹝.𝚖𝚎𝚗𝚞 𝚢﹞
⑅

⍗  .𝚞𝚙𝚍𝚊𝚝𝚎𝚜
`

}

//---
const menus = (tanggal, jam, pushname, sender, prem_, Lxa, prefix, user, uptime, isGroupAdmins, groupMetadata, groupAdmins, Welcome_, AntiLink_, isGroup, process) => { 
  return `⇝  ${pushname}
⌬  ${prem_}


⌯   ﹝.𝚝𝚛𝚞𝚝𝚑﹞
⑅
⌯   ﹝.𝚍𝚊𝚛𝚎﹞
⑅
⌯   ﹝.𝚗𝚜𝚏𝚠𝚎𝚗﹞
⑅
⌯   ﹝.𝚜𝚊𝚢﹞
⑅
⌯   ﹝.𝚐𝚊𝚢﹞
⑅
⌯   ﹝.𝚍𝚒𝚌𝚎﹞
⑅
⌯   ﹝.𝚕𝚘𝚟𝚎 𝚗𝚊𝚖𝚎 𝚗𝚊𝚖𝚎﹞
⑅
⌯   ﹝.𝚏𝚊𝚌𝚝﹞
⑅
⌯   ﹝.𝚊𝚗𝚒𝚖𝚊𝚕﹞
⑅
⌯   ﹝.𝚙𝚘𝚔𝚎𝚖𝚘𝚗﹞
⑅
⌯   ﹝.𝚎𝚖𝚘𝚓𝚒𝚎﹞
⑅
⌯   ﹝.𝚏𝚕𝚊𝚐﹞
⑅
⌯   ﹝.𝚎𝚞𝚏𝚕𝚊𝚐﹞
⑅   
⌯   ﹝.𝚜𝚘𝚗𝚐﹞
⑅
⌯   ﹝.𝚖𝚎𝚗𝚞 𝚜𝚢𝚖𝚋𝚘𝚕﹞
⑅`
}

const menusticker = (tanggal, jam, pushname, sender, prem_, Lxa, prefix, user, uptime, isGroupAdmins, groupMetadata, groupAdmins, Welcome_, AntiLink_, isGroup, process) => { 
  return `⇝  ${pushname}
⌬  ${prem_}


⌯   ﹝.𝚜𝚝𝚒𝚌𝚔𝚎𝚛﹞
⑅
⌯   ﹝.𝚒𝚖𝚊𝚐𝚎𝚜𝚝𝚒𝚌𝚔𝚎𝚛﹞
⑅
`

}

const menu3 = (tanggal, jam, pushname, sender, prem_, Lxa, prefix, user, uptime, isGroupAdmins, groupMetadata, groupAdmins, Welcome_, AntiLink_, isGroup, process) => { 
  return `⇝  ${pushname}
⌬  ${prem_}


⌯   ﹝.𝚗𝚘𝚝𝚎﹞
⑅    
⌯   ﹝.𝚗𝚎𝚠𝚜﹞
⑅    
⌯   ﹝.𝚠𝚒𝚜𝚑﹞
⑅    
⌯   ﹝.𝚋 𝚗𝚎𝚠𝚜﹞
⑅    
⌯   ﹝.𝚋 𝚜𝚞𝚙𝚙𝚘𝚛𝚝﹞
⑅    
⌯   ﹝.𝚖𝚎𝚗𝚞 𝚊𝚐𝚋﹞
⑅
⌯   ﹝.𝚖𝚎𝚗𝚞 𝚜𝚝𝚒𝚌𝚔𝚎𝚛﹞
⑅`
}

const menux = (tanggal, jam, pushname, sender, prem_, Lxa, prefix, user, uptime, isGroupAdmins, groupMetadata, groupAdmins, Welcome_, AntiLink_, isGroup, process) => { 
  return `⇝  ${pushname}
⌬  ${prem_}


⌯   ﹝.𝚔𝚒𝚌𝚔﹞
⑅
⌯   ﹝.𝚙𝚛𝚘𝚖𝚘𝚝𝚎﹞
⑅
⌯   ﹝.𝚍𝚎𝚖𝚘𝚝𝚎﹞
⑅
⌯   ﹝.𝚙𝚒𝚗𝚐﹞
⑅
⌯   ﹝.𝚊𝚗𝚝𝚒𝚕𝚒𝚗𝚔 𝚘𝚗﹞
⑅
⌯   ﹝.𝚕𝚒𝚗𝚔﹞
⑅
⌯   ﹝.𝚕𝚎𝚊𝚟𝚎﹞
⑅
⌯   ﹝.𝚊𝚍𝚍 𝚗𝚞𝚖𝚋𝚎𝚛﹞
⑅
⌯   ﹝.𝚙𝚒𝚗𝚐﹞
⑅
⌯   ﹝.𝚍𝚎𝚕𝚎𝚝𝚎﹞
⑅`
}
const menuy = (tanggal, jam, pushname, sender, prem_, Lxa, prefix, user, uptime, isGroupAdmins, groupMetadata, groupAdmins, Welcome_, AntiLink_, isGroup, process) => { 
  return `⇝  ${pushname}
⌬  ${prem_}
⌯   ﹝𝚟𝚒𝚙﹞


⌯   ﹝.𝚝𝚊𝚐𝚊𝚕𝚕﹞
⑅
⌯   ﹝.𝚙𝚒𝚔𝚊 𝚝𝚎𝚡𝚝﹞
⑅
⌯   ﹝.𝚞𝚕𝚝𝚒𝚖𝚊𝚝𝚎𝚛𝚘𝚕𝚕﹞
⑅
⌯   ﹝.𝚕𝚎𝚐𝚎𝚗𝚍𝚊𝚛𝚢𝚛𝚘𝚕𝚕﹞
⑅
⌯   ﹝.𝚠𝚊𝚖𝚎﹞
⑅
⌯   ﹝.𝚖𝚎𝚗𝚞 𝚘𝚠𝚗𝚎𝚛﹞
⑅

⑅   𝙹𝚘𝚒𝚗 𝚘𝚞𝚛 𝚜𝚞𝚙𝚙𝚘𝚛𝚝 𝚐𝚛𝚘𝚞𝚙 𝚏𝚘𝚛 𝚚𝚞𝚎𝚜𝚝𝚒𝚘𝚗𝚜.
⑅   https://chat.whatsapp.com/BBAwr3RY6O77DOhJ8fuBnn
`
}


const menuowner = (tanggal, jam, pushname, sender, prem_, Lxa, prefix, user, uptime, isGroupAdmins, groupMetadata, groupAdmins, Welcome_, AntiLink_, isGroup, process) => { 
  return `⇝  ${pushname}
⌬  ${prem_}
⌯   ﹝𝚘𝚠𝚗𝚎𝚛﹞


⌯   ﹝.𝚌𝚕𝚎𝚊𝚛𝚌𝚑𝚊𝚝﹞
⑅
⌯   ﹝.𝚋𝚌﹞
⑅ 

⑅   𝙹𝚘𝚒𝚗 𝚘𝚞𝚛 𝚜𝚞𝚙𝚙𝚘𝚛𝚝 𝚐𝚛𝚘𝚞𝚙 𝚏𝚘𝚛 𝚚𝚞𝚎𝚜𝚝𝚒𝚘𝚗𝚜.
⑅   https://chat.whatsapp.com/BBAwr3RY6O77DOhJ8fuBnn
`
}

const menuagb = (tanggal, jam, pushname, sender, prem_, Lxa, prefix, user, uptime, isGroupAdmins, groupMetadata, groupAdmins, Welcome_, AntiLink_, isGroup, process) => { 
  return `⇝  ${pushname}
⌬  ${prem_}


⌯   ﹝𝙰𝚐𝚋﹞
⑅   𝚈𝚘𝚞𝚛 𝚗𝚞𝚖𝚋𝚎𝚛, 𝚌𝚘𝚖𝚖𝚊𝚗𝚍𝚜, 𝚗𝚘𝚝𝚎𝚜 𝚊𝚗𝚍 𝚠𝚒𝚜𝚑𝚎𝚜
⑅   𝚖𝚒𝚐𝚑𝚝 𝚋𝚎 𝚜𝚝𝚘𝚛𝚎𝚍 𝚒𝚏 𝚛𝚎𝚐𝚒𝚜𝚝𝚎𝚛𝚎𝚍
⑅   𝚒𝚏 𝚢𝚘𝚞 𝚠𝚒𝚜𝚑 𝚝𝚘 𝚑𝚊𝚟𝚎 𝚝𝚑𝚎𝚖 𝚍𝚎𝚕𝚎𝚝𝚎𝚍 
⑅   𝚌𝚑𝚊𝚝 𝚠𝚒𝚝𝚑 𝚝𝚑𝚎 𝚋𝚘𝚝 𝚘𝚠𝚗𝚎𝚛.
⑅   𝙿𝚕𝚎𝚊𝚜𝚎 𝚍𝚘𝚗𝚝 𝚊𝚋𝚞𝚜𝚎 𝚋𝚘𝚝 𝚠𝚒𝚝𝚑 𝚒𝚕𝚕𝚎𝚐𝚊𝚕 𝚌𝚘𝚗𝚝𝚎𝚗𝚝.
⑅   𝙹𝚘𝚒𝚗 𝚘𝚞𝚛 𝚜𝚞𝚙𝚙𝚘𝚛𝚝 𝚐𝚛𝚘𝚞𝚙 𝚏𝚘𝚛 𝚚𝚞𝚎𝚜𝚝𝚒𝚘𝚗𝚜.
⑅   https://chat.whatsapp.com/BBAwr3RY6O77DOhJ8fuBnn
⑅   𝚈𝚘𝚞 𝚌𝚊𝚗 𝚊𝚕𝚜𝚘 𝚌𝚘𝚗𝚝𝚊𝚌𝚝 𝚖𝚎. 
⑅   wa.me/4917626388837
⌯   ﹝𝚋𝚊𝚜𝚎𝚍 𝚒𝚗 𝚐𝚎𝚛𝚖𝚊𝚗𝚢﹞`
}

const menusymbol = (tanggal, jam, pushname, sender, prem_, Lxa, prefix, user, uptime, isGroupAdmins, groupMetadata, groupAdmins, Welcome_, AntiLink_, isGroup, process) => { 
  return `⇝  ${pushname}
⌬  ${prem_}


⌯   ﹝.𝚜𝚝𝚊𝚛𝚜﹞
⑅
⌯   ﹝.𝚠𝚒𝚕𝚍﹞
⑅
⌯   ﹝.𝚝𝚎𝚡𝚝𝚖𝚘𝚓𝚒𝚎﹞
⑅
⌯   ﹝.𝚘𝚝𝚑𝚎𝚛𝚜﹞
⑅
⌯   ﹝.𝚐𝚎𝚗𝚍𝚎𝚛﹞
⑅`
}



const menusecret = (tanggal, jam, pushname, sender, prem_, Lxa, prefix, user, uptime, isGroupAdmins, groupMetadata, groupAdmins, Welcome_, AntiLink_, isGroup, process) => { 
  return `⇝  ${pushname}
⌬  ${prem_}


⌯   ﹝.𝚊𝚜𝚜﹞
⑅
⌯   ﹝.𝚋𝚘𝚘𝚋𝚜﹞
⑅
⌯   ﹝.𝚌𝚞𝚝𝚎﹞
⑅
⌯   ﹝.𝚜𝚝𝚎𝚕𝚕𝚊﹞
⑅
⌯   ﹝.𝚒𝚖𝚐𝚜𝚝𝚎𝚕𝚕𝚊﹞
⑅`
}


module.exports = { menu, menus, menusticker, menux, menuowner, menuy, menuagb, menusymbol, menu3, menusecret}
