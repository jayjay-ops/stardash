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
> .𝚖𝚎𝚗𝚞 𝚏𝚞𝚗
> .𝚖𝚎𝚗𝚞 𝚜𝚝𝚒𝚌𝚔𝚎𝚛
> .𝚖𝚎𝚗𝚞 𝚊𝚍𝚖𝚒𝚗
> .𝚖𝚎𝚗𝚞 𝚟𝚒𝚙
> .𝚖𝚎𝚗𝚞 𝚘𝚠𝚗𝚎𝚛
> .𝚊𝚐𝚋
> .𝚞𝚙𝚍𝚊𝚝𝚎𝚜
𝔯𝔢𝔱𝔲𝔯𝔫 𝔱𝔬 𝔪𝔢𝔫𝔲
> .𝚖𝚎𝚗𝚞		
`


else if (!isGroup) return`𝔖𝔱𝔞𝔯𝔡𝔞𝔰𝔥
> .𝚖𝚎𝚗𝚞 𝚏𝚞𝚗
> .𝚖𝚎𝚗𝚞 𝚜𝚝𝚒𝚌𝚔𝚎𝚛
> .𝚖𝚎𝚗𝚞 𝚊𝚍𝚖𝚒𝚗
> .𝚖𝚎𝚗𝚞 𝚟𝚒𝚙
> .𝚖𝚎𝚗𝚞 𝚘𝚠𝚗𝚎𝚛
> .𝚖𝚎𝚗𝚞 𝚊𝚐𝚋
> .𝚞𝚙𝚍𝚊𝚝𝚎𝚜
𝔯𝔢𝔱𝔲𝔯𝔫 𝔱𝔬 𝔪𝔢𝔫𝔲
> .𝚖𝚎𝚗𝚞
`

}

//---
const menufun = (prefix, tanggal, jam) => {
  return `𝔐𝔢𝔫𝔲 𝔣𝔲𝔫
> .𝚝𝚛𝚞𝚝𝚑
> .𝚍𝚊𝚛𝚎
> .𝚜𝚊𝚢
> .𝚏𝚊𝚌𝚝
> .𝚎𝚖𝚘𝚓𝚒𝚎
> .𝚍𝚒𝚌𝚎
> .𝚋𝚘𝚝
> .𝚗𝚜𝚏𝚠𝙴𝙽
𝔯𝔢𝔱𝔲𝔯𝔫 𝔱𝔬 𝔪𝔢𝔫𝔲
> .𝚖𝚎𝚗𝚞`
}

const menusticker = (prefix, tanggal, jam) => {
  return `𝔐𝔢𝔫𝔲 𝔰𝔱𝔦𝔠𝔨𝔢𝔯
> .𝚜𝚝𝚒𝚌𝚔𝚎𝚛
> .𝚒𝚖𝚊𝚐𝚎𝚜𝚝𝚒𝚌𝚔𝚎𝚛
𝔯𝔢𝔱𝔲𝔯𝔫 𝔱𝔬 𝔪𝔢𝔫𝔲
> .𝚖𝚎𝚗𝚞
`

}

const menuadmin = (prefix, tanggal, jam) => {
  return `𝔐𝔢𝔫𝔲 𝔞𝔡𝔪𝔦𝔫
> .𝚔𝚒𝚌𝚔
> .𝚙𝚛𝚘𝚖𝚘𝚝𝚎
> .𝚍𝚎𝚖𝚘𝚝𝚎
> .𝚍𝚎𝚕𝚎𝚝𝚎
> .𝚙𝚒𝚗𝚐
> .𝚊𝚗𝚝𝚒𝚕𝚒𝚗𝚔 𝚘𝚗
> .𝚕𝚒𝚗𝚔
> .𝚕𝚎𝚊𝚟𝚎
𝔯𝔢𝔱𝔲𝔯𝔫 𝔱𝔬 𝔪𝔢𝔫𝔲
> .𝚖𝚎𝚗𝚞`
}
const menuvip = (prefix, tanggal, jam) => {
  return `𝔐𝔢𝔫𝔲 𝔳𝔦𝔭
> .𝚝𝚊𝚐𝚊𝚕𝚕
> .𝚗𝚊𝚌𝚑𝚛𝚒𝚌𝚑𝚝
> .𝚞𝚕𝚝𝚒𝚖𝚊𝚝𝚎𝚛𝚘𝚕𝚕
> .𝚕𝚎𝚐𝚎𝚗𝚍𝚊𝚛𝚢𝚛𝚘𝚕𝚕
> .𝚠𝚊𝚖𝚎
𝔯𝔢𝔱𝔲𝔯𝔫 𝔱𝔬 𝔪𝔢𝔫𝔲
> .𝚖𝚎𝚗𝚞`
}


const menuowner = (prefix, tanggal, jam) => {
  return `𝔐𝔢𝔫𝔲 𝔬𝔴𝔫𝔢𝔯
> .𝚋𝚌
> .𝚌𝚕𝚎𝚊𝚛𝚌𝚑𝚊𝚝
𝔯𝔢𝔱𝔲𝔯𝔫 𝔱𝔬 𝔪𝔢𝔫𝔲
> .𝚖𝚎𝚗𝚞`
}

const menuagb = (prefix, tanggal, jam) => {
  return `𝔞𝔤𝔟
• 𝚈𝚘𝚞𝚛 𝚌𝚘𝚖𝚖𝚊𝚗𝚍𝚜 𝚖𝚒𝚐𝚑𝚝 𝚋𝚎 𝚜𝚝𝚘𝚛𝚎𝚍 𝚒𝚏 𝚢𝚘𝚞 𝚑𝚊𝚟𝚎 𝚛𝚎𝚐𝚒𝚜𝚝𝚎𝚛𝚎𝚍
• 𝚍𝚘𝚗𝚝 𝚊𝚋𝚞𝚜𝚎 𝚋𝚘𝚝 𝚠𝚒𝚝𝚑 𝚒𝚕𝚕𝚎𝚐𝚊𝚕 𝚌𝚘𝚗𝚝𝚎𝚗𝚝
• 𝚌𝚑𝚊𝚝 𝚠𝚒𝚝𝚑 𝚋𝚘𝚝 𝚘𝚠𝚗𝚎𝚛 𝚝𝚘 𝚍𝚎𝚕𝚎𝚝𝚎 𝚢𝚘𝚞𝚛 𝚊𝚌𝚌𝚘𝚞𝚗𝚝
• 𝚒𝚏 𝚢𝚘𝚞 𝚑𝚊𝚟𝚎 𝚖𝚘𝚛𝚎 𝚚𝚞𝚎𝚜𝚝𝚒𝚘𝚗 𝚢𝚘𝚞 𝚖𝚊𝚢 𝚊𝚜𝚠𝚎𝚕𝚕 𝚓𝚘𝚒𝚗 𝚘𝚞𝚛 𝚜𝚞𝚙𝚙𝚘𝚛𝚝 𝚐𝚛𝚘𝚞𝚙
https://chat.whatsapp.com/BBAwr3RY6O77DOhJ8fuBnn
• 𝚘𝚛 𝚌𝚘𝚗𝚝𝚊𝚌𝚝 𝚖𝚎
4917626388837
𝔯𝔢𝔱𝔲𝔯𝔫 𝔱𝔬 𝔪𝔢𝔫𝔲
> .𝚖𝚎𝚗𝚞`
}

module.exports = { menu, menufun, menusticker, menuadmin, menuvip, menuagb}
