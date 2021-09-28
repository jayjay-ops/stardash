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
		if (isGroup) return `𝚄𝚙𝚍𝚊𝚝𝚎 𝙽𝚊𝚖𝚎
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
[𝙽𝙴𝚆] For the boys!!  .secret menu
[𝙽𝙴𝚆] .updates old
[++] .register is redesigned
[++] premium is now called vip
[++] added more truths! .truth
[++] added more dares! .dare
[++] minor changes
- - - - - - - - - - - - - - -
`


else if (!isGroup) return`𝚄𝚙𝚍𝚊𝚝𝚎 𝙽𝚊𝚖𝚎
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
[𝙽𝙴𝚆] For the boys!!  .secret menu
[𝙽𝙴𝚆] .updates old
[++] .register is redesigned
[++] premium is now called vip
[++] added more truths! .truth
[++] added more dares! .dare
[++] minor changes
- - - - - - - - - - - - - - -
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
- - - - - - - - - - - - - - - - - - - - -`
}

module.exports = { updates, updatesold}
