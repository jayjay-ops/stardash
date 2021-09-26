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
		if (isGroup) return `${tanggal()}
		
𝔘𝔭𝔡𝔞𝔱𝔢 𝔖𝔱𝔞𝔯𝔇𝔞𝔰𝔥

ver. 11 -> 12
─── ᴄʜᴀɴɢᴇʟᴏɢ ───
[NEW] Name StarDash
[NEW] Repository
[NEW] Changelog
[NEW] Shiba Inu Theme
[FIX] AL htt -> http
[+++] AD delete via .burn
[+++] Verify in EN
─────────────────
`


else if (!isGroup) return`▢ ${tanggal()}

𝔘𝔭𝔡𝔞𝔱𝔢 𝔖𝔱𝔞𝔯𝔇𝔞𝔰𝔥

ver. 11 -> 12
─── ᴄʜᴀɴɢᴇʟᴏɢ ───
[NEW] Name StarDash
[NEW] Repository
[NEW] Changelog
[NEW] Shiba Inu Theme
[FIX] AL htt -> http
[+++] AD delete via .burn
[+++] Verify in EN
─────────────────
`

}



module.exports = { updates}
