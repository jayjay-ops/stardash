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

const ass = (tanggal, jam, pushname, sender, prem_, Lxa, prefix, user, uptime, isGroupAdmins, groupMetadata, groupAdmins, Welcome_, AntiLink_, isGroup, process) => { 
  if (isGroupAdmins){
    admin = "Admin Group"
  } else if (!isGroupAdmins){
    admin = "Member Group"
  }
		if (isGroup) return  `𝔖𝔱𝔞𝔯𝔇𝔞𝔰𝔥 ♕︎
`


else if (!isGroup) return`𝔖𝔱𝔞𝔯𝔇𝔞𝔰𝔥 ♕︎
`

}



module.exports = { ass}
