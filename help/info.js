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

const info = (Lxa, uptime, process, wa_version, mcc, mnc, os_version, device_manufacturer, device_model) => { 
return `  ≡ *INFORMATION*
 
💎💎  Premium 2€ 💎💎
💎-Standard -Premium
💎Befehle = .menu
💎💎💎💎💎💎💎💎💎
 
💎💎  Legendär 6€ 💎💎
💎-Standard -Premium -Legendär
💎Befehle = .menu
💎💎💎💎💎💎💎💎💎

┌───⊷ *PAYPAL* ⊶
├╼ Name : *${Lxa.user.name}*
├╼ Version Bot : 2.0.2
├╼ PAYPAL ADRESSE
├╼ https://www.paypal.com/paypalme/premiumchillocti
├╼ ODER
├╼ +4917626388837
└─────────────
┌───⊷ *INFO PAYPAL* ⊶
├╼ Der Bot kann ab und zu zur Aktualisierung und Verbesserung bis zu 30min aus sein.   
├╼ Im normalfall ist er Aktiv.
├╼ In dem Fall das der Bot dauerhaft deaktiviert wird, wird das Geld zurückgestatet.
├╼ War der Kauf 2+ Wochen her
├╼ wird nichts zurückgestattet.
├╼ Versi Wa : ${Lxa.user.phone.wa_version}
└──────────────

Andere Zahlungsoptionen? 
1. Google Play Karte / 2. Paysafe
- Kann leider kein Rückgeld geben bei Gutscheinen
`
}
exports.info = info
