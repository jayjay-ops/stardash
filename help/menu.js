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
		if (isGroup) return `${tanggal()}
*CHILLOCTI*
┌───⊷ *USER* ⊶
├╼ Nummer : *${sender.split("@")[0]}*
├╼ Premium : ${prem_}
└──────────────
- *List*
------------------
*STANDARD* (🆓)
- kostenlos - free
------------------
🇬🇧 English - Englisch
🆓- .truth - .dare
🆓- .scissors - .stone - .paper
🆓- .roll - .dice
🆓- .sticker
🆓- .imagesticker
🆓- .fact
🆓- .nsfwEN
🆓- .emoji
🆓- .bot
🆓- .verify
🆓- .say
🇩🇪 German - Deutsch
🆓- .wahrheit - .pflicht
🆓- .schere - .stein - .papier
🆓- .wurf
🆓- .imagesticker
🆓- .sag
🆓- .verify
🆓- .fakt
🆓- .nsfw
🆓- .emoji
🆓- .bot
------------------
💎💎 *PREMIUM* 💎💎
- paypal 2€ / 2$ 💸
- at +4917626388837
------------------
💎- standardPLUS
💎- .delete
💎- .tagall
💎- .nachricht 
💎- .ultimateroll
💎- .kick
💎- .promote
💎- .demote
💎- .addtruth
💎- .addare
💎- .welcome
💎- .ping
💎 .wame
💎- .antilink 
💎- .gruppenlink
💎- .leave
- Chat Support
------ bald ------
- .ultimate SchereSteinPapier 
- .Fakten
- immer neue Updates
------------------
💎💎 *LEGENDARY* 💎💎
- paypal 6€ / 6$ 💰
- an +4917626388837
------------------
💎💎- Standard&Premium
💎💎- .legendaryroll 
💎💎- .bc -broadcast
💎💎- Eigener Befehl mit eigener Antwort
💎💎- Kostenlos Premium für zwei Freunde
💎💎- Bis zu 10 Nummern ohne Premium vom Bot bannen
💎💎- Information wie man Nummmern bannt von Whatsapp
------ bald Soon ------
- .legendary SchereSteinPapier 
- Updates
------------------
- Buy Premium: *.info* 
`


else if (!isGroup) return`▢ ${tanggal()}
*CHILLOCTI*
┌───⊷ *USER* ⊶
├╼ Nummer : *${sender.split("@")[0]}*
├╼ Premium : ${prem_}
└──────────────
- *List*
------------------
*STANDARD* (🆓)
- kostenlos - free
------------------
🇬🇧 English - Englisch
🆓- .truth - .dare
🆓- .scissors - .stone - .paper
🆓- .roll - .dice
🆓- .sticker
🆓- .imagesticker
🆓- .fact
🆓- .nsfwEN
🆓- .emoji
🆓- .bot
🆓- .verify
🇩🇪 German - Deutsch
🆓- .wahrheit - .pflicht
🆓- .schere - .stein - .papier
🆓- .roll
🆓- .imagesticker
🆓- .sag
🆓- .verify
🆓- .fakt
🆓- .nsfw
🆓- .emoji
🆓- .bot
------------------
💎💎 *PREMIUM* 💎💎
- paypal 2€ / 2$ 💸
- at +4917626388837
------------------
💎- standardPLUS
💎- .delete
💎- .tagall
💎- .nachricht 
💎- .ultimateroll
💎- .kick
💎- .promote
💎- .demote
💎- .addtruth
💎- .addare
💎- .welcome
💎- .ping
💎 .wame
💎- .antilink 
💎- .gruppenlink
💎- .leave
- Chat Support
------ bald ------
- .ultimate SchereSteinPapier 
- .Fakten
- immer neue Updates
------------------
💎💎 *LEGENDARY* 💎💎
- paypal 6€ / 6$ 💰
- an +4917626388837
------------------
💎💎- Standard&Premium
💎💎- .legendaryroll 
💎💎- .bc -broadcast
💎💎- Eigener Befehl mit eigener Antwort
💎💎- Kostenlos Premium für zwei Freunde
💎💎- Bis zu 10 Nummern ohne Premium vom Bot bannen
💎💎- Information wie man Nummmern bannt von Whatsapp
------ bald Soon ------
- .legendary SchereSteinPapier 
- Updates
------------------
- Buy Premium: *.info* 
`

}

//---
const menu1 = (prefix, tanggal, jam) => {
  return `▢ ${tanggal()}
▢ Jam ${jam} (Asia/Jakarta)
  ≡ *MENU*
┌───⊷ *FUN* ⊶
├╼ *${prefix}Ilham*
├╼ *${prefix}Dilan*
├╼ *${prefix}Hacker*
├╼ *${prefix}Gombal*
├╼ *${prefix}Senja*
├╼ *${prefix}Quotesislam*
├╼ *${prefix}Fakta*
├╼ *${prefix}Ciee*
├╼ *${prefix}Ganteng*
├╼ *${prefix}Cantik*
├╼ *${prefix}Jelek*
├╼ *${prefix}Sadboy*
├╼ *${prefix}Sadgirl*
├╼ *${prefix}Wibu*
├╼ *${prefix}Kutuk (Tag target)*
├╼ *${prefix}Say (Teks)*
└──────────────
┌───⊷ *GAME* ⊶
├╼ *${prefix}Truth*
├╼ *${prefix}Dare*
├╼ *${prefix}Gantengcek (Target)*
├╼ *${prefix}Cantikcek (Target)*
├╼ *${prefix}Apakah (Teks)*
├╼ *${prefix}Kapankah (Teks)*
├╼ *${prefix}Bisakah (Teks)*
├╼ *${prefix}Rate (Teks)*
├╼ *${prefix}Suit (Gunting/Batu/Kertas)*
└──────────────`
}

const menu2 = (prefix, tanggal, jam) => {
  return `▢ ${tanggal()}
▢ Jam ${jam} (Asia/Jakarta)
  ≡ *MENU*
┌───⊷ *STICKER* ⊶
├╼ *${prefix}Sticker (Foto/video)*
├╼ *${prefix}Toimg (Reply Sticker)*
└──────────────
┌───⊷ *TOOLS* ⊶
├╼ *${prefix}Wame*
├╼ *${prefix}Ocr (Foto)*
├╼ *${prefix}Tomp3 (Video)*
├╼ *${prefix}Tovn (Audio)*
├╼ *${prefix}Wait (Foto)*
├╼ *${prefix}Tts (Kode bahasa + Teks)*
├╼ *${prefix}Kodebahasa*
├╼ *${prefix}Kodenegara*
└──────────────
┌───⊷ *MEDIA* ⊶
├╼ *${prefix}Nightcore (Reply audio)*
├╼ *${prefix}Slow (Reply audio)*
├╼ *${prefix}Bass (Reply audio)*
├╼ *${prefix}Tupai (Reply audio)*
├╼ *${prefix}Gemuk (Reply audio)*
├╼ *${prefix}Listvn*
├╼ *${prefix}Listimg*
├╼ *${prefix}Listvid*
├╼ *${prefix}Liststik*
├╼ *${prefix}Getvn (Nama pack)*
├╼ *${prefix}Getimg (Nama pack)*
├╼ *${prefix}Getvid (Nama pack)*
├╼ *${prefix}Getstik (Nama pack)*
└──────────────
`

}

/*onstt menu3 = (prefix, tanggal, jam) => {
  return `▢ ${tanggal()}
▢ Jam ${jam} (Asia/Jakarta)
  ≡ *MENU*
┌───⊷ *GAME* ⊶
├╼
└──────────────`
}
const menuPrem = (prefix, tanggal, jam) => {
  return ` ▢ ${tanggal()}
▢ Jam ${jam} (Asia/Jakarta)
  ≡ *MENU PREMIUM*
┌───⊷ *PREMIUM* ⊶
├╼ 
└──────────────`
}
*/

const menuOwner = (prefix, tanggal, jam) => {
  return `▢ ${tanggal()}
▢ Jam ${jam} (Asia/Jakarta)
  ≡ *MENU OWNER*
┌───⊷ *OWNER* ⊶
├╼ *${prefix}Clone (Tag target)*
├╼ *${prefix}Clearchat*
├╼ *${prefix}Totaluser*
├╼ *${prefix}Listrequest*
├╼ *${prefix}Listlapor*
├╼ *${prefix}Addstik (Reply stiker)*
├╼ *${prefix}Addvn (Reply audio)*
├╼ *${prefix}Addimg (Reply foto)*
├╼ *${prefix}Addvid (Reply video)*
├╼ *${prefix}Addtruth (Teks)*
├╼ *${prefix}Adddare (Teks)*
├╼ *${prefix}Addfakta (Teks)*
├╼ *${prefix}Addilham (Teks)*
├╼ *${prefix}Adddilan (Teks)*
├╼ *${prefix}Addgombal (Teks)*
├╼ *${prefix}Addhacker (Teks)*
├╼ *${prefix}Bc (Teks)*
├╼ *${prefix}Leave*
├╼ *${prefix}Term*
├╼ *${prefix}Return*
├╼ *${prefix}View (url)*
└──────────────`
}

const menuGrup = (prefix, tanggal, jam) => {
  return `▢ ${tanggal()}
▢ Jam ${jam} (Asia/Jakarta)
  ≡ *MENU GROUP*
┌───⊷ *GROUP* ⊶
├╼ *${prefix}Listadmin*
├╼ *${prefix}Listonline*
├╼ *${prefix}Promote (Tag target)*
├╼ *${prefix}Demote (Tag target)*
├╼ *${prefix}Setppgc (Foto)*
├╼ *${prefix}Tagall*
├╼ *${prefix}Linkgc*
├╼ *${prefix}Notif (Teks)*
├╼ *${prefix}Kick (Tag Target)*
├╼ *${prefix}Add (Nomor)*
├╼ *${prefix}Delete (Reply pesan)*
├╼ *${prefix}Grup (Open/Close)*
├╼ *${prefix}Welcome (on/off)*
├╼ *${prefix}Antilink (on/off)*
└──────────────`
}

module.exports = { menu, menu1, menu2, menuOwner, menuGrup}
