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
		if (isGroup) return `𝔖𝔱𝔞𝔯𝔡𝔞𝔰𝔥
- - - - - - - - - - - - -
» 𝚗𝚊𝚖𝚎 ${pushname}
» 𝚗𝚞𝚖𝚋𝚎𝚛 ${sender.split("@")[0]}
» 𝚜𝚝𝚊𝚝𝚞𝚜 ${prem_}
- - - - - - - - - - - - -
» 𝚠𝚎𝚕𝚌𝚘𝚖𝚎 ${Welcome_}
» 𝚊𝚗𝚝𝚒𝚕𝚒𝚗𝚔 ${AntiLink_}
» 𝚛𝚞𝚗𝚝𝚒𝚖𝚎 ${kyun(uptime)}
» 𝚜𝚙𝚎𝚎𝚍 ${process.uptime()}
- - - - - - - - - - - - -
> .𝚖𝚎𝚗𝚞 𝚏𝚞𝚗
> .𝚖𝚎𝚗𝚞 𝚝𝚘𝚘𝚕
> .𝚖𝚎𝚗𝚞 𝚜𝚢𝚖𝚋𝚘𝚕
> .𝚖𝚎𝚗𝚞 𝚜𝚝𝚒𝚌𝚔𝚎𝚛
- - - - - - - - - - - - -  
> .𝚖𝚎𝚗𝚞 𝚊𝚍𝚖𝚒𝚗
> .𝚖𝚎𝚗𝚞 𝚟𝚒𝚙
> .𝚖𝚎𝚗𝚞 𝚘𝚠𝚗𝚎𝚛
> .𝚖𝚎𝚗𝚞 𝚊𝚐𝚋
- - - - - - - - - - - - -  
> .𝚊𝚍𝚍
𝙷𝚘𝚠 𝚝𝚘 𝚞𝚜𝚎?
𝙴𝚡𝚊𝚖𝚙𝚕𝚎: 
𝙽𝚞𝚖𝚋𝚎𝚛: +49 176 26388837
> .𝚊𝚍𝚍 4917626388837
(𝚘𝚗𝚕𝚢 𝚝𝚑𝚎 𝚗𝚞𝚖𝚋𝚎𝚛𝚜!)
- - - - - - - - - - - - -  
𝚜𝚞𝚙𝚙𝚘𝚛𝚝 𝚐𝚛𝚘𝚞𝚙
https://chat.whatsapp.com/BBAwr3RY6O77DOhJ8fuBnn
- - - - - - - - - - - - -  
𝔯𝔢𝔱𝔲𝔯𝔫 𝔱𝔬 𝔪𝔢𝔫𝔲
- - - - - - - - - - - - -  
> .𝚖𝚎𝚗𝚞
`


else if (!isGroup) return`𝔖𝔱𝔞𝔯𝔡𝔞𝔰𝔥
- - - - - - - - - - - - -
» 𝚗𝚊𝚖𝚎 ${pushname}
» 𝚗𝚞𝚖𝚋𝚎𝚛 ${sender.split("@")[0]}
» 𝚜𝚝𝚊𝚝𝚞𝚜 ${prem_}
- - - - - - - - - - - - -
> .𝚖𝚎𝚗𝚞 𝚏𝚞𝚗
> .𝚖𝚎𝚗𝚞 𝚝𝚘𝚘𝚕
> .𝚖𝚎𝚗𝚞 𝚜𝚢𝚖𝚋𝚘𝚕
> .𝚖𝚎𝚗𝚞 𝚜𝚝𝚒𝚌𝚔𝚎𝚛
- - - - - - - - - - - - -  
> .𝚖𝚎𝚗𝚞 𝚊𝚍𝚖𝚒𝚗
> .𝚖𝚎𝚗𝚞 𝚟𝚒𝚙
> .𝚖𝚎𝚗𝚞 𝚘𝚠𝚗𝚎𝚛
> .𝚖𝚎𝚗𝚞 𝚊𝚐𝚋
- - - - - - - - - - - - -  
𝔯𝔢𝔱𝔲𝔯𝔫 𝔱𝔬 𝔪𝔢𝔫𝔲
- - - - - - - - - - - - -  
> .𝚖𝚎𝚗𝚞
`

}

//---
const menufun = (prefix, tanggal, jam) => {
  return `𝔐𝔢𝔫𝔲 𝔣𝔲𝔫
- - - - - - - - - - - - -  
> .𝚝𝚛𝚞𝚝𝚑
> .𝚍𝚊𝚛𝚎
> .𝚗𝚜𝚏𝚠𝙴𝙽
- - - - - - - - - - - - - 
> .𝚏𝚕𝚊𝚐
> .euflag
- - - - - - - - - - - - - 
> .𝚗𝚘𝚝𝚎
> .𝚗𝚘𝚝𝚎𝚜
> .𝚜𝚊𝚢
- - - - - - - - - - - - - 
> .𝚍𝚘𝚐
> .𝚜𝚘𝚗𝚐
> .𝚊𝚗𝚒𝚖𝚊𝚕
> .𝚙𝚘𝚔𝚎𝚖𝚘𝚗
> .𝚏𝚊𝚌𝚝
> .𝚎𝚖𝚘𝚓𝚒𝚎
> .𝚍𝚒𝚌𝚎
- - - - - - - - - - - - - 
> .𝚕𝚘𝚟𝚎 𝚗𝚊𝚖𝚎 𝚗𝚊𝚖𝚎
> .𝚐𝚊𝚢
- - - - - - - - - - - - -  
𝔯𝔢𝔱𝔲𝔯𝔫 𝔱𝔬 𝔪𝔢𝔫𝔲
- - - - - - - - - - - - -  
> .𝚖𝚎𝚗𝚞`
}

const menusticker = (prefix, tanggal, jam) => {
  return `𝔐𝔢𝔫𝔲 𝔰𝔱𝔦𝔠𝔨𝔢𝔯
- - - - - - - - - - - - -  
> .𝚜𝚝𝚒𝚌𝚔𝚎𝚛
> .𝚒𝚖𝚊𝚐𝚎𝚜𝚝𝚒𝚌𝚔𝚎𝚛
- - - - - - - - - - - - -  
𝔯𝔢𝔱𝔲𝔯𝔫 𝔱𝔬 𝔪𝔢𝔫𝔲
- - - - - - - - - - - - -  
> .𝚖𝚎𝚗𝚞
`

}

const menuadmin = (prefix, tanggal, jam) => {
  return `𝔐𝔢𝔫𝔲 𝔞𝔡𝔪𝔦𝔫
- - - - - - - - - - - - -  
> .𝚔𝚒𝚌𝚔
> .𝚙𝚛𝚘𝚖𝚘𝚝𝚎
> .𝚍𝚎𝚖𝚘𝚝𝚎
> .𝚍𝚎𝚕𝚎𝚝𝚎
> .𝚙𝚒𝚗𝚐
> .𝚊𝚗𝚝𝚒𝚕𝚒𝚗𝚔 𝚘𝚗
> .𝚕𝚒𝚗𝚔
> .𝚕𝚎𝚊𝚟𝚎
- - - - - - - - - - - - -  
𝚜𝚞𝚙𝚙𝚘𝚛𝚝 𝚐𝚛𝚘𝚞𝚙
https://chat.whatsapp.com/BBAwr3RY6O77DOhJ8fuBnn
- - - - - - - - - - - - -  
𝔯𝔢𝔱𝔲𝔯𝔫 𝔱𝔬 𝔪𝔢𝔫𝔲
- - - - - - - - - - - - -  
> .𝚖𝚎𝚗𝚞`
}
const menuvip = (prefix, tanggal, jam) => {
  return `𝔐𝔢𝔫𝔲 𝔳𝔦𝔭
- - - - - - - - - - - - -  
> .𝚝𝚊𝚐𝚊𝚕𝚕
> .𝚗𝚊𝚌𝚑𝚛𝚒𝚌𝚑𝚝
> .𝚞𝚕𝚝𝚒𝚖𝚊𝚝𝚎𝚛𝚘𝚕𝚕
> .𝚕𝚎𝚐𝚎𝚗𝚍𝚊𝚛𝚢𝚛𝚘𝚕𝚕
> .𝚠𝚊𝚖𝚎
- - - - - - - - - - - - -  
𝚜𝚞𝚙𝚙𝚘𝚛𝚝 𝚐𝚛𝚘𝚞𝚙
https://chat.whatsapp.com/BBAwr3RY6O77DOhJ8fuBnn
- - - - - - - - - - - - - 
𝔯𝔢𝔱𝔲𝔯𝔫 𝔱𝔬 𝔪𝔢𝔫𝔲
- - - - - - - - - - - - -  
> .𝚖𝚎𝚗𝚞`
}


const menuowner = (prefix, tanggal, jam) => {
  return `𝔐𝔢𝔫𝔲 𝔬𝔴𝔫𝔢𝔯
- - - - - - - - - - - - -  
> .𝚋𝚌
> .𝚌𝚕𝚎𝚊𝚛𝚌𝚑𝚊𝚝
- - - - - - - - - - - - -  
𝚜𝚞𝚙𝚙𝚘𝚛𝚝 𝚐𝚛𝚘𝚞𝚙
https://chat.whatsapp.com/BBAwr3RY6O77DOhJ8fuBnn
- - - - - - - - - - - - - 
𝔯𝔢𝔱𝔲𝔯𝔫 𝔱𝔬 𝔪𝔢𝔫𝔲
- - - - - - - - - - - - -  
> .𝚖𝚎𝚗𝚞`
}

const menuagb = (prefix, tanggal, jam) => {
  return `𝔞𝔤𝔟
- - - - - - - - - - - - -
• 𝚈𝚘𝚞𝚛 𝚌𝚘𝚖𝚖𝚊𝚗𝚍𝚜 𝚖𝚒𝚐𝚑𝚝 𝚋𝚎 𝚜𝚝𝚘𝚛𝚎𝚍 𝚒𝚏 𝚢𝚘𝚞 𝚑𝚊𝚟𝚎 𝚛𝚎𝚐𝚒𝚜𝚝𝚎𝚛𝚎𝚍
• 𝚍𝚘𝚗𝚝 𝚊𝚋𝚞𝚜𝚎 𝚋𝚘𝚝 𝚠𝚒𝚝𝚑 𝚒𝚕𝚕𝚎𝚐𝚊𝚕 𝚌𝚘𝚗𝚝𝚎𝚗𝚝
• 𝚌𝚑𝚊𝚝 𝚠𝚒𝚝𝚑 𝚋𝚘𝚝 𝚘𝚠𝚗𝚎𝚛 𝚝𝚘 𝚍𝚎𝚕𝚎𝚝𝚎 𝚢𝚘𝚞𝚛 𝚊𝚌𝚌𝚘𝚞𝚗𝚝
• 𝚒𝚏 𝚢𝚘𝚞 𝚑𝚊𝚟𝚎 𝚖𝚘𝚛𝚎 𝚚𝚞𝚎𝚜𝚝𝚒𝚘𝚗 𝚢𝚘𝚞 𝚖𝚊𝚢 𝚊𝚜𝚠𝚎𝚕𝚕 𝚓𝚘𝚒𝚗 𝚘𝚞𝚛 𝚜𝚞𝚙𝚙𝚘𝚛𝚝 𝚐𝚛𝚘𝚞𝚙
https://chat.whatsapp.com/BBAwr3RY6O77DOhJ8fuBnn
• 𝚘𝚛 𝚌𝚘𝚗𝚝𝚊𝚌𝚝 𝚖𝚎
4917626388837
- - - - - - - - - - - - -  
𝔯𝔢𝔱𝔲𝔯𝔫 𝔱𝔬 𝔪𝔢𝔫𝔲
> .𝚖𝚎𝚗𝚞`
}

const menusymbol = (prefix, tanggal, jam) => {
  return `𝔪𝔢𝔫𝔲 𝔰𝔶𝔪𝔟𝔬𝔩
- - - - - - - - - - - - -  
> .𝚜𝚝𝚊𝚛𝚜
> .𝚠𝚒𝚕𝚍
> .𝚝𝚎𝚡𝚝𝚖𝚘𝚓𝚒𝚎
> .𝚘𝚝𝚑𝚎𝚛𝚜
> .𝚐𝚎𝚗𝚍𝚎𝚛
- - - - - - - - - - - - -  
𝔯𝔢𝔱𝔲𝔯𝔫 𝔱𝔬 𝔪𝔢𝔫𝔲
- - - - - - - - - - - - -  
> .𝚖𝚎𝚗𝚞`
}

const menutool = (prefix, tanggal, jam) => {
  return `𝔪𝔢𝔫𝔲 𝔱𝔬𝔬𝔩
- - - - - - - - - - - - -  
> .𝚠𝚒𝚜𝚑
> .𝚠𝚒𝚜𝚑𝚎𝚜
> .𝚜𝚑𝚘𝚠 dailynews
> .𝚜𝚑𝚘𝚠 𝚐𝚒𝚝𝚑𝚞𝚋
> .𝚜𝚑𝚘𝚠 𝚊𝚙𝚔
- - - - - - - - - - - - -
> .𝚞𝚙𝚍𝚊𝚝𝚎𝚜
> .𝚞𝚙𝚍𝚊𝚝𝚎𝚜 𝚘𝚕𝚍
- - - - - - - - - - - - -    
𝚜𝚞𝚙𝚙𝚘𝚛𝚝 𝚐𝚛𝚘𝚞𝚙
https://chat.whatsapp.com/BBAwr3RY6O77DOhJ8fuBnn
- - - - - - - - - - - - - 
𝔯𝔢𝔱𝔲𝔯𝔫 𝔱𝔬 𝔪𝔢𝔫𝔲
- - - - - - - - - - - - -  
> .𝚖𝚎𝚗𝚞`
}

const menusecret = (prefix, tanggal, jam) => {
  return `𝔪𝔢𝔫𝔲 𝔰𝔢𝔠𝔯𝔢𝔱
- - - - - - - - - - - - -  
♕︎ 𝙳𝙾𝙽𝚃 𝚃𝙴𝙻𝙻 𝙰𝙽𝚈𝙾𝙽𝙴 ♕︎
- - - - - - - - - - - - -
> .𝚌𝚞𝚝𝚎
> .𝚊𝚜𝚜
> .𝚋𝚘𝚘𝚋𝚜
- - - - - - - - - - - - -  
> .𝚜𝚝𝚎𝚕𝚕𝚊
> .𝚒𝚖𝚐𝚜𝚝𝚎𝚕𝚕𝚊
- - - - - - - - - - - - -  
𝔯𝔢𝔱𝔲𝔯𝔫 𝔱𝔬 𝔪𝔢𝔫𝔲
- - - - - - - - - - - - -  
> .𝚖𝚎𝚗𝚞`
}


module.exports = { menu, menufun, menusticker, menuadmin, menuowner, menuvip, menuagb, menusymbol, menutool, menusecret}
