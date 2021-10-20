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

const updates = (tanggal, jam, pushname, sender, prem_, Lxa, prefix, user, uptime, isGroupAdmins, groupMetadata, groupAdmins, Welcome_, AntiLink_, isGroup, process) => { 
  if (isGroupAdmins){
    admin = "Admin Group"
  } else if (!isGroupAdmins){
    admin = "Member Group"
  }
		if (isGroup) return `https://chat.whatsapp.com/KvqaZbeT69X46Lo6G650ht
............................
𝚈𝚘𝚞𝚛 𝚅𝚎𝚛𝚜𝚒𝚘𝚗: ﹝15.0.0.0﹞
𝙲𝚑𝚎𝚌𝚔 𝚐𝚛𝚘𝚞𝚙 𝚗𝚊𝚖𝚎 𝚏𝚘𝚛 𝚞𝚙𝚍𝚊𝚝𝚎
............................
𝚘𝚗𝚎 𝚞𝚒 4.0
............................
𝙽𝚎𝚠      .𝚊𝚞𝚍𝚒𝚘𝚕𝚎𝚟𝚎𝚕 
-> 𝚜𝚎𝚝 𝚊𝚞𝚍𝚒𝚘 𝚜𝚘𝚞𝚗𝚍 𝚕𝚎𝚟𝚎𝚕
»   .𝚊𝚞𝚍𝚒𝚘𝚕𝚎𝚟𝚎𝚕 200

𝙽𝚎𝚠      .𝚖𝚙3
-> 𝚌𝚘𝚗𝚟𝚎𝚛𝚝 𝚟𝚒𝚍𝚎𝚘 𝚝𝚘 𝚖𝚙3

𝙽𝚎𝚠      .𝚜𝚙𝚎𝚎𝚍
-> 𝚌𝚑𝚊𝚗𝚐𝚎 𝚊𝚞𝚍𝚒𝚘 𝚜𝚙𝚎𝚎𝚍 (𝚝𝚊𝚐 𝚟𝚒𝚍𝚎𝚘 𝚘𝚛 𝚊𝚞𝚍𝚒𝚘)
»    .𝚜𝚙𝚎𝚎𝚍 2
»    .𝚜𝚙𝚎𝚎𝚍 0.5

𝙽𝚎𝚠      .𝚌𝚘𝚟𝚎𝚛
-> 𝚊𝚍𝚍𝚜 𝚊 𝚒𝚖𝚊𝚐𝚎 𝚝𝚘 𝚊𝚗 𝚊𝚞𝚍𝚒𝚘

𝙽𝚎𝚠      .𝚌𝚛𝚞𝚜𝚑
-> 𝚖𝚊𝚔𝚎𝚜 𝚊𝚞𝚍𝚒𝚘 𝚜𝚘𝚞𝚗𝚍 𝚋𝚛𝚘𝚔𝚎𝚗

𝙽𝚎𝚠      .𝚠𝚊𝚝𝚎𝚛𝚖𝚊𝚛𝚔𝚟𝚒𝚍𝚎𝚘
𝙽𝚎𝚠      .𝚠𝚊𝚝𝚎𝚛𝚖𝚊𝚛𝚔𝚒𝚖𝚊𝚐𝚎
-> 𝚊𝚍𝚍𝚜 𝚊 𝚍𝚘𝚐 𝚘𝚗 𝚢𝚘𝚞𝚛 𝚟𝚒𝚍𝚎𝚘/𝚒𝚖𝚊𝚐𝚎


𝙵𝚒𝚡      .𝚝𝚊𝚐𝚊𝚕𝚕 𝚒𝚜 𝚏𝚘𝚛 𝚊𝚍𝚖𝚒𝚗𝚜
............................
⌯   𝙿𝚕𝚎𝚊𝚜𝚎 𝚊𝚕𝚠𝚊𝚢𝚜 𝚌𝚑𝚎𝚌𝚔 𝚏𝚘𝚛 𝚄𝚙𝚍𝚊𝚝𝚎!
		
`


else if (!isGroup) return`https://chat.whatsapp.com/KvqaZbeT69X46Lo6G650ht
............................
𝚈𝚘𝚞𝚛 𝚅𝚎𝚛𝚜𝚒𝚘𝚗: ﹝15.0.0.0﹞
𝙲𝚑𝚎𝚌𝚔 𝚐𝚛𝚘𝚞𝚙 𝚗𝚊𝚖𝚎 𝚏𝚘𝚛 𝚞𝚙𝚍𝚊𝚝𝚎
............................
𝚘𝚗𝚎 𝚞𝚒 4.0
............................
𝙽𝚎𝚠      .𝚊𝚞𝚍𝚒𝚘𝚕𝚎𝚟𝚎𝚕 
-> 𝚜𝚎𝚝 𝚊𝚞𝚍𝚒𝚘 𝚜𝚘𝚞𝚗𝚍 𝚕𝚎𝚟𝚎𝚕
»   .𝚊𝚞𝚍𝚒𝚘𝚕𝚎𝚟𝚎𝚕 200

𝙽𝚎𝚠      .𝚖𝚙3
-> 𝚌𝚘𝚗𝚟𝚎𝚛𝚝 𝚟𝚒𝚍𝚎𝚘 𝚝𝚘 𝚖𝚙3

𝙽𝚎𝚠      .𝚜𝚙𝚎𝚎𝚍
-> 𝚌𝚑𝚊𝚗𝚐𝚎 𝚊𝚞𝚍𝚒𝚘 𝚜𝚙𝚎𝚎𝚍 (𝚝𝚊𝚐 𝚟𝚒𝚍𝚎𝚘 𝚘𝚛 𝚊𝚞𝚍𝚒𝚘)
»    .𝚜𝚙𝚎𝚎𝚍 2
»    .𝚜𝚙𝚎𝚎𝚍 0.5

𝙽𝚎𝚠      .𝚌𝚘𝚟𝚎𝚛
-> 𝚊𝚍𝚍𝚜 𝚊 𝚒𝚖𝚊𝚐𝚎 𝚝𝚘 𝚊𝚗 𝚊𝚞𝚍𝚒𝚘

𝙽𝚎𝚠      .𝚌𝚛𝚞𝚜𝚑
-> 𝚖𝚊𝚔𝚎𝚜 𝚊𝚞𝚍𝚒𝚘 𝚜𝚘𝚞𝚗𝚍 𝚋𝚛𝚘𝚔𝚎𝚗

𝙽𝚎𝚠      .𝚠𝚊𝚝𝚎𝚛𝚖𝚊𝚛𝚔𝚟𝚒𝚍𝚎𝚘
𝙽𝚎𝚠      .𝚠𝚊𝚝𝚎𝚛𝚖𝚊𝚛𝚔𝚒𝚖𝚊𝚐𝚎
-> 𝚊𝚍𝚍𝚜 𝚊 𝚍𝚘𝚐 𝚘𝚗 𝚢𝚘𝚞𝚛 𝚟𝚒𝚍𝚎𝚘/𝚒𝚖𝚊𝚐𝚎


𝙵𝚒𝚡      .𝚝𝚊𝚐𝚊𝚕𝚕 𝚒𝚜 𝚏𝚘𝚛 𝚊𝚍𝚖𝚒𝚗𝚜
............................
⌯   𝙿𝚕𝚎𝚊𝚜𝚎 𝚊𝚕𝚠𝚊𝚢𝚜 𝚌𝚑𝚎𝚌𝚔 𝚏𝚘𝚛 𝚄𝚙𝚍𝚊𝚝𝚎!
`

}

//---
const updatesold = (prefix, tanggal, jam) => {
  return `𝔬𝔩𝔡 𝔲𝔭𝔡𝔞𝔱𝔢𝔰
𝚄𝚙𝚍𝚊𝚝𝚎 𝙽𝚊𝚖𝚎
♕︎ 𝚂𝚝𝚊𝚛𝙳𝚊𝚜𝚑
𝚅𝚎𝚛𝚜𝚒𝚘𝚗 
¹¹ -> ¹²'⁰'⁰'⁰
- - - ᴄʜᴀɴɢᴇʟᴏɢ - - -
[𝙽𝙴𝚆] Name StarDash
[𝙽𝙴𝚆] Repository
[𝙽𝙴𝚆] Changelog
[𝙽𝙴𝚆] Shiba Inu Theme
[𝙵𝙸𝚇] AL htt -> http
[++] AD delete via .burn
[++] Verify in EN
[++] New Menu 
[++] Premium is now VIP
- - - - - - - - - - - - - - - - - - - - -
𝚄𝚙𝚍𝚊𝚝𝚎 𝙽𝚊𝚖𝚎
♕︎ 𝚂𝚝𝚊𝚛𝙻𝚒𝚐𝚑𝚝
𝚅𝚎𝚛𝚜𝚒𝚘𝚗 ¹²'⁰'¹'⁵
- - - - - - - - - - - - - - - - - - - - -
[𝙽𝙴𝚆] .animal
[𝙽𝙴𝚆] .pokemon
[𝙽𝙴𝚆] .love Name Name
[𝙽𝙴𝚆] .gay
- - - - - - - - - - - - - - - - - - - - -
𝚄𝚙𝚍𝚊𝚝𝚎 𝙽𝚊𝚖𝚎
♕︎ 𝙲𝚘𝚜𝚖𝚘𝚠𝚊𝚢
𝚅𝚎𝚛𝚜𝚒𝚘𝚗
¹²'⁰'¹'⁵ -> ¹²'¹'⁰'¹

- - - - ᴄʜᴀɴɢᴇʟᴏɢ - - - -
[𝙽𝙴𝚆] .menu symbol
• [𝙽𝙴𝚆] .stars 
• [𝙽𝙴𝚆] .wild
• [𝙽𝙴𝚆] .textmojie
• [𝙽𝙴𝚆] .others
• [𝙽𝙴𝚆] .genders
[𝙽𝙴𝚆] .menu tool
• [𝙽𝙴𝚆] .show dailynews
• [𝙽𝙴𝚆] .wish
• [𝙽𝙴𝚆] .wishes
• [𝙽𝙴𝚆] .show github
• [𝙽𝙴𝚆] .show apk
[𝙽𝙴𝚆] For the boys!!  .menu secret 
[𝙽𝙴𝚆] .updates old
[++] .register is redesigned
[++] premium is now called vip
[++] added more truths! .truth
[++] added more dares! .dare
[++] minor changes
- - - - - - - - - - - - - - - - - - - - -
[𝚄𝚙𝚍𝚊𝚝𝚎 𝚜𝚒𝚣𝚎: 𝚜𝚖𝚊𝚕𝚕]

» 𝚗𝚎𝚠 «

𝚔𝚒𝚌𝚔 𝚜𝚝𝚒𝚌𝚔𝚎𝚛
> .𝚎𝚟𝚎𝚛𝚢𝚘𝚗𝚎 / > .𝚊𝚕𝚕
𝚖𝚒𝚗𝚘𝚛 𝚌𝚑𝚊𝚗𝚐𝚎𝚜

﹝13.0.0.0﹞

⇝ 𝙽𝚊𝚖𝚎: 𝚂𝚝𝚊𝚛𝙳𝚞𝚜𝚝
⌬  𝚏𝚘𝚌𝚞𝚜: 𝚌𝚕𝚎𝚊𝚗

⌯   ﹝𝚘𝚟𝚎𝚛𝚊𝚕𝚕 𝚕𝚘𝚘𝚔 𝚌𝚑𝚊𝚗𝚐𝚎𝚍.﹞
⑅
⌯   ﹝𝚍𝚒𝚌𝚎 𝚒𝚜 𝚗𝚘𝚠 𝚊𝚜 𝚜𝚝𝚒𝚌𝚔𝚎𝚛𝚜.﹞
⑅
⌯   ﹝𝚞𝚙𝚍𝚊𝚝𝚎 𝚜𝚝𝚊𝚝𝚞𝚜.﹞
⑅

............................
𝚅𝚎𝚛𝚜𝚒𝚘𝚗: ﹝14.0.0.3﹞
𝙲𝚑𝚎𝚌𝚔 𝚐𝚛𝚘𝚞𝚙 𝚗𝚊𝚖𝚎 𝚏𝚘𝚛 𝚞𝚙𝚍𝚊𝚝𝚎
............................
𝚘𝚗𝚎 𝚞𝚒 4.0
............................
𝙽𝚎𝚠      .𝚖𝚎𝚖𝚎 
𝙽𝚎𝚠      𝚍𝚎𝚜𝚒𝚐𝚗 𝚌𝚑𝚊𝚗𝚐𝚎
𝙵𝚒𝚡      𝚜𝚘𝚖𝚎 𝚋𝚞𝚐𝚜
............................
`
}

module.exports = { updates, updatesold}
