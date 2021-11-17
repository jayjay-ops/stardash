// Wenn es einen Tippfehler oder etwas gibt, das immer noch nicht hilft, korrigieren Sie es, ziehen Sie einfach die Anfrage

//-- Whatsapp Connecting
const {
  WAConnection,
  MessageType,
  Presence,
  Mimetype,
  GroupSettingChange,
  MessageOptions,
  WALocationMessage,
  ReconnectMode,
  ProxyAgent,
  waChatKey,
  mentionedJid,
  processTime,
  ChatModification,
  whatsappID,
  WAConnectionTest,
} = require('@adiwajshing/baileys');

//-- Functions
const {color, bgcolor} = require('./fs/color');
const {fetchJson, fetchText} = require('./fs/fetcher');
const {recognize} = require('./fs/ocr');
const {_wait, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, start, success, close } = require('./fs/functions');

//-- Modules
const fs = require('fs');
const moment = require('moment-timezone');
const {exec} = require('child_process');
const fetch = require('node-fetch');
const ffmpeg = require('fluent-ffmpeg');
const imgbb = require('imgbb-uploader');
const speed = require('performance-now');
const cd = 4.32e+7 ;
const crypto = require('crypto');
const qrcode = require("qrcode-terminal");
const axios = require('axios');
const path = require('path');
const {removeBackgroundFromImageFile} = require('remove.bg');
var nodemailer = require('nodemailer');




//-- Data
const up = JSON.parse(fs.readFileSync('./data/setting.json'));
const _welcom = JSON.parse(fs.readFileSync('./data/welcom.json'));
const _user = JSON.parse(fs.readFileSync('./data/user.json'));
const _antilink = JSON.parse(fs.readFileSync('./data/antilink.json'));
const hit = JSON.parse(fs.readFileSync('./data/totalhit.json'))

//-- Media
const _stik = JSON.parse(fs.readFileSync('./media/stik.json'))
const _vid = JSON.parse(fs.readFileSync('./media/vid.json'))
const _vn = JSON.parse(fs.readFileSync('./media/vn.json'))
const _img = JSON.parse(fs.readFileSync('./media/image.json'))
const _gif = JSON.parse(fs.readFileSync('./media/gif.json'))

//-- Result GERMAN
const _truth = JSON.parse(fs.readFileSync('./result/truth.json'));
const _dare = JSON.parse(fs.readFileSync('./result/dare.json'));

const _slot = JSON.parse(fs.readFileSync('./result/games/slot.json'));
const _money = JSON.parse(fs.readFileSync('./result/games/money.json'));
const _moneys = JSON.parse(fs.readFileSync('./result/games/money.json'));

const _userss = JSON.parse(fs.readFileSync('./data/user.json'));

const _euf = JSON.parse(fs.readFileSync('./result/euflags.json'));
const _wf = JSON.parse(fs.readFileSync('./result/worldflag.json'));

const _song = JSON.parse(fs.readFileSync('./result/song.json'));

const _fakten = JSON.parse(fs.readFileSync('./result/fakten.json'));
const _nsfw = JSON.parse(fs.readFileSync('./result/nsfw.json'));
const _emoji = JSON.parse(fs.readFileSync('./result/emoji.json'));

const _roll = JSON.parse(fs.readFileSync('./result/roll.json'));


//-- Result ENGLISH
const _truthen = JSON.parse(fs.readFileSync('./result/en/truthen.json'));

const _gay = JSON.parse(fs.readFileSync('./result/gaymeter.json'));
const _love = JSON.parse(fs.readFileSync('./result/lovemeter.json'));

const _pokemon = JSON.parse(fs.readFileSync('./result/pokemon.json'));
const _animal = JSON.parse(fs.readFileSync('./result/animal.json'));
const _dareen = JSON.parse(fs.readFileSync('./result/en/dareen.json'));

const _facten = JSON.parse(fs.readFileSync('./result/en/facten.json'));
const _nsfwen = JSON.parse(fs.readFileSync('./result/en/nsfwen.json'));



const _rollen = JSON.parse(fs.readFileSync('./result/en/dice.json'));
const _meme = JSON.parse(fs.readFileSync('./result/meme.json'));

const _rboob = JSON.parse(fs.readFileSync('./result/rboob.json'));

const _imgstella = JSON.parse(fs.readFileSync('./result/imgstella.json'));
const _cute = JSON.parse(fs.readFileSync('./result/cute.json'));
const _dog = JSON.parse(fs.readFileSync('./result/dog.json'));


const _ultimateroll = JSON.parse(fs.readFileSync('./result/ultimateroll.json'));
const _legendaryroll = JSON.parse(fs.readFileSync('./result/legendaryroll.json'));




const _ilham = JSON.parse(fs.readFileSync('./result/ilham.json'));
const _dilan = JSON.parse(fs.readFileSync('./result/dilan.json'));
const _gombal = JSON.parse(fs.readFileSync('./result/gombal.json'));
const _hacker = JSON.parse(fs.readFileSync('./result/hacker.json'));
const { bahasa } = require('./result/kodebahasa');
const { negara } = require('./result/kodenegara');

//-- Report
const _lapor = JSON.parse(fs.readFileSync('./report/lapor.json'));
const _request = JSON.parse(fs.readFileSync('./report/request.json'));




//-- Help
const { menusdes, menusdess, menu, menus, menusticker, menuowner, menuy, menux, menuagb, menuthree, menu3, menusecret} = require('./help/menu');

const { updates, updatesold} = require('./help/updates');

const { ass} = require('./help/nsfw/ass');
const { boob} = require('./help/nsfw/boob');



const { bgithub, showapk, bnews} = require('./help/show');

const { termux } = require('./help/termux');
const { wait, stick, err, group, ban, ownerB, premi, userB, admin, Badmin } = require('./help/respon');

//-- Setting
const prefix = up.prefix
const memberlimit = up.memberlimit;
const banned = [
  ];
const premium = [
   "494917626388837@s.whatsapp.net", "4917626388837@s.whatsapp.net", "4949017626388837@s.whatsapp.net",
   "4915231886122@s.whatsapp.net",
   "49491728568032@s.whatsapp.net",
	  "27609580734@s.whatsapp.net",
	  "4949017637630668@s.whatsapp.net",
	  
	  
   
  ];
const ownerNumber = [
  "4917626388837@s.whatsapp.net",
  ];
  
 

//-- Apikey
const Vkey = 'apivinz'
const Xinz = 'XinzBot'
const Pkode = 'pais'




//-- Zeit und Datum
function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);

  return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`
}
function tanggal(){
myMonths = ["January","February","März","April","May","June","Juliy","August","September","October","November","December"];
			myDays = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
			var tgl = new Date();
			var day = tgl.getDate()
			bulan = tgl.getMonth()
			var thisDay = tgl.getDay(),
			thisDay = myDays[thisDay];
			var yy = tgl.getYear()
			var year = (yy < 1000) ? yy + 1900 : yy;
			return `${thisDay}, ${day} - ${myMonths[bulan]} - ${year}`
}

//--Whatsapp start connect
async function starts() {
	const Lxa = new WAConnection()
	Lxa.logger.level = 'warn'
	Lxa.version = [2, 2140, 6];
	Lxa.on('qr', () => {
		console.log(color('[DOGGO]','aqua'), color("Scan QR code to connect...", "yellow"))
	})
	fs.existsSync('./session/Lexa.json') && Lxa.loadAuthInfo('./session/Lexa.json')
Lxa.on('connecting', () => {
		exec(`play start.mp3`)
        const time_connecting = moment.tz('Asia/Jakarta').format('HH:mm:ss')
        console.log(color('[DOGGO]','aqua'), color("Connecting bro...", "yellow"))
		
    })
Lxa.on('open', () => {
        const time_connect = moment.tz('Asia/Jakarta').format('HH:mm:ss')
        console.log(color('[DOGGO]','aqua'), color(`Done Connecting`, "aqua"))
        start('')
    })
	await Lxa.connect({timeoutMs: 30*1000})
        fs.writeFileSync('./session/Lexa.json', JSON.stringify(Lxa.base64EncodedAuthInfo(), null, '\t'))

Lxa.on('group-participants-update', async (anu) => {
		if (!_welcom.includes(anu.jid)) return
		try {
			const mdata = await Lxa.groupMetadata(anu.jid)
			if (anu.action == 'add') {
				num = anu.participants[0]
				hai = `Hallo @${num.split('@')[0]}
Welcome in *${mdata.subject}*
Please introduce yourself :)`
				Lxa.sendMessage(mdata.id, hai, MessageType.text, { contextInfo: {"mentionedJid": [num]}})
			} else if (anu.action == 'remove') {
				num = anu.participants[0]
				bye = `@${num.split('@')[0]} Goodbye :)`
				Lxa.sendMessage(mdata.id, bye, MessageType.text, {contextInfo: {"mentionedJid": [num]}})
			}
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})

const blocked = []
Lxa.on('CB:Blocklist', json => {
      if (blocked.length > 2) return
	    for (let i of json[1].blocklist) {
	    	blocked.push(i.replace('c.us','s.whatsapp.net'))
	    }
	})

Lxa.on('chat-update', async (mek) => {
  if (!mek.hasNewMessage) return
  mek = mek.messages.all()[0]
  if (!mek.message) return
  if (mek.key && mek.key.remoteJid == 'status@broadcast') return
  if (mek.key.fromMe) return
  global.prefix
  global.blocked
  const content = JSON.stringify(mek.message)
  const from = mek.key.remoteJid
  const type = Object.keys(mek.message)[0]
  const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
  const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
  const jam = moment.tz('Asia/Jakarta').format('HH:mm')

//--
const body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ''
const budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
const is = budy.slice(0).trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const value = args.join(' ')
const isCmd = body.startsWith(prefix)
const totalchat = await Lxa.chats.all()
const botNumber = Lxa.user.jid
			
//-- Group Metadata
  const isGroup = from.endsWith('@g.us')
  const sender = isGroup ? mek.participant : mek.key.remoteJid
  const groupMetadata = isGroup ? await Lxa.groupMetadata(from) : ''
  const groupName = isGroup ? groupMetadata.subject : ''
  const groupId = isGroup ? groupMetadata.jid : ''
  const groupMembers = isGroup ? groupMetadata.participants : ''
  const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
  const isOwner = ownerNumber.includes(sender)
  const isVerify = _user.includes(sender)
  const isPrem = premium.includes(sender) || isOwner
  const isBan = blocked.includes(sender)
  const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
  const isGroupAdmins = groupAdmins.includes(sender) || false
  const isWelcom = isGroup ? _welcom.includes(from) : false
  const isAnti = isGroup ? _antilink.includes(from) : false
  const pushname = Lxa.contacts[sender] != undefined ? Lxa.contacts[sender].vname || Lxa.contacts[sender].notify: undefined

//-- other
  const isUrl = (url) => {
			    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
  const { wa_version, mcc, mnc, os_version, device_manufacturer, device_model } = Lxa.user.phone

//-- function reply
			const reply = (teks) => {
				Lxa.sendMessage(from, teks, text, {quoted:mek })
			}
			
			const sendMess = (hehe, teks) => {
				Lxa.sendMessage(hehe, teks, text)
			}
			
			const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? Lxa.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : Lxa.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": memberr}})
			}
      const replyimg = (pesan, tipe, rep1, rep2) => {
        Lxa.sendMessage(from, pesan, tipe, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: {
"imageMessage": {
"mimetype": "image/jpeg",
"caption": `${rep1}`,
"fileLength": "201809",
"jpegThumbnail": `${rep2}` } } }})
      }
			
//--MessageType
const isMedia = (type === 'imageMessage' || type === 'videoMessage')
const isQuotedText = type === 'extendedTextMessage' && content.includes('textMessage')
const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
const isQuotedGif = type === 'extendedTextMessage' && content.includes('gifMessage')

//-- watermark stiker
			function addMetadata(packname, author) {	
				if (!packname) packname = '𝚂𝚝𝚊𝚛𝙳𝚊𝚜𝚑'; if (!author) author = pushname ;	
				author = author.replace(/[^a-zA-Z0-9]/g, '');	
				let name = `${author}_${packname}`
				if (fs.existsSync(`./exif/${name}.exif`)) return `./exif/${name}.exif`
				const json = {	
					"sticker-pack-name": packname,
					"sticker-pack-publisher": author,
				}
				const littleEndian = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])	
				const bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]	

				let len = JSON.stringify(json).length	
				let last	

				if (len > 256) {	
					len = len - 256	
					bytes.unshift(0x01)	
				} else {	
					bytes.unshift(0x00)	
				}	

				if (len < 16) {	
					last = len.toString(16)	
					last = "0" + len	
				} else {	
					last = len.toString(16)	
				}	

				const buf2 = Buffer.from(last, "hex")	
				const buf3 = Buffer.from(bytes)	
				const buf4 = Buffer.from(JSON.stringify(json))	

				const buffer = Buffer.concat([littleEndian, buf2, buf3, buf4])	

				fs.writeFile(`./exif/${name}.exif`, buffer, (err) => {	
					return `./exif/${name}.exif`	
				})	

			}

//--Colors
colors = ['red','white','black','blue','yellow','green']

//--Console log grup
if (!isGroup && isCmd) console.log(color('[𝚂𝚝𝚊𝚛𝙳𝚊𝚜𝚑 ♕︎]','aqua'), "CP", color(command, "green"), "from", (sender.split('@')[0]),  args.length)
			
//--Private Chat-Log-Konsole
if (isGroup && isCmd) console.log(color('[𝚂𝚝𝚊𝚛𝙳𝚊𝚜𝚑 ♕︎]','aqua'), "GC", color(command, "green"), "from", (sender.split('@')[0]), "in", (groupName), args.length)


//-- Status
let prem_ = '𝙵𝚛𝚎𝚎'
			if (isPrem) {
			prem_ = '𝚅𝚒𝚙'
			} 
			if (isOwner) {
			prem_ = '𝙾𝚠𝚗𝚎𝚛'
			}
let Welcome_ = 'Off'
			if (isWelcom) {
			Welcome_ = 'On'
			}
let AntiLink_ = 'Off'
			if (isAnti) {
			AntiLink_ 
			}

//--- Total command
const cmdadd = () => {
	hit[0].totalcmd += 1
	fs.writeFileSync('./data/totalhit.json', JSON.stringify(hit))
}
  if (isCmd) cmdadd()
  const reqcmd = JSON.parse(fs.readFileSync('./data/totalhit.json'))[0].totalcmd

//--Member limit
if (isGroup) {
  try {
    const getmemex = groupMembers.length
    if (getmemex <= memberlimit) {
  Lxa.sendMessage(from, `⌯   ﹝𝙶𝚛𝚘𝚞𝚙 𝚒𝚜 𝚝𝚘𝚘 𝚜𝚖𝚊𝚕𝚕.﹞`, text)

    setTimeout(() => {
    Lxa.groupLeave(from) // ur cods
  }, 5000) // 1000 = 1s,
}
  } catch {
console.error(err)
  }
}

// ---- Antilink 
const linkwa = 'http'
		if (budy.includes(`${linkwa}`)){
		if (!isGroup) return
		if (!isAnti) return
    if (!isBotGroupAdmins) return reply('⌯   ﹝𝙸 𝚗𝚎𝚎𝚍 𝚊𝚍𝚖𝚒𝚗 𝚏𝚘𝚛 𝚝𝚑𝚒𝚜 𝚝𝚘 𝚠𝚘𝚛𝚔.﹞')
    linkgc = await Lxa.groupInviteCode (from)
    if (budy.includes(`${linkwa}${linkgc}`)) return reply('⌯   ﹝𝙸 𝚗𝚎𝚎𝚍 𝚊𝚍𝚖𝚒𝚗 𝚏𝚘𝚛 𝚝𝚑𝚒𝚜 𝚝𝚘 𝚠𝚘𝚛𝚔.﹞')
		if (isGroupAdmins) return reply(`⌯   ﹝𝙰𝚍𝚖𝚒𝚗.﹞`)
		Lxa.updatePresence(from, Presence.composing)
		var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
		setTimeout( () => {
		}, 1100)
		setTimeout( () => {
		Lxa.groupRemove(from, [Kick]).catch((e) => {console.log(`*ERROR:* ${e}`)}) 
					}, 1000)
		setTimeout( () => {
		
		}, 0)
	}
	

//-- Anti user ban
if (isCmd && isBan) return reply(banned())

//-- Automatisch lesen, wenn es eine Nachricht gibt
if (isCmd) Lxa.chatRead(from)

//--Auto response
switch(is) {
case 'chillocti':
reply('Willkommen in unserer Gruppe')
}


//--Auto response
switch(is) {
case '/menu':
reply('⌯  ﹝𝚙𝚕𝚎𝚊𝚜𝚎 𝚞𝚜𝚎﹞﹝.𝚖𝚎𝚗𝚞﹞')
}

//--Auto response
switch(is) {
case '#menu':
reply('⌯  ﹝𝚙𝚕𝚎𝚊𝚜𝚎 𝚞𝚜𝚎﹞﹝.𝚖𝚎𝚗𝚞﹞')
}

//--Auto response
switch(is) {
case '*menu':
reply('⌯  ﹝𝚙𝚕𝚎𝚊𝚜𝚎 𝚞𝚜𝚎﹞﹝.𝚖𝚎𝚗𝚞 lol jj lol﹞')
}

switch(is) {
case '.symbol':
reply('.𝚜𝚝𝚊𝚛𝚜 .𝚠𝚒𝚕𝚍 .𝚝𝚎𝚡𝚝𝚖𝚘𝚓𝚒𝚎 .𝚘𝚝𝚑𝚎𝚛𝚜 .𝚐𝚎𝚗𝚍𝚎𝚛')
}



//--Auto response
switch(is) {
case '.mimi':
reply('I wana live in Korea😭💜')
reply('Taes wifey💜💍✨😫')
reply('🤕💜')
}
//--Auto response
switch(is) {
case '.nata':
reply('Legi ❤️🦔🐺')
reply('I love Redbull 💙😼')
reply('🍉🍉🍉')
}

//--Auto response
switch(is) {
case 'ily':
reply('ily2')
}	
	
//--Auto response
switch(is) {
case '.stars':
case '.sterne':
reply('⌯   ﹝★✰✯☆✩✵✫𖣔۞⍟✪﹞')
}	
		
//--Auto response
switch(is) {
case '.textmojie':
case '.textemojie':
reply('⌯   ﹝ʕ•ᴥ•ʔ ฅ^•ﻌ•^ฅ ʕ •́؈•̀ ₎ ༼ つ ◕◡◕ ༽つ  ♡´･ᴗ･`♡﹞')
}	

//--Auto response
switch(is) {
case '.others':
case '.other':
reply('⌯   ﹝☽︎☾︎♡︎♫︎𓂸𓂺シ︎㋛︎ت︎༒︎☏︎𓂀☻︎❦︎ꨄ︎ఌ︎❥︎᯾𖣘Ꙭ𖦹߷༄༆𖧷᪥☼︎␈♕︎♔︎𖠌♲︎︎︎﹞')
}			

//--Auto response
switch(is) {
case '.gender':
case '.genders':
reply('⌯   ﹝⚣︎⚢︎⚣︎⚥︎⚤︎﹞')
}			
	
//--Auto response
switch(is) {
case '.wild':
reply('⌯   ﹝ 𓅓𓆙𓅷𓆏𓃰𓄁𓀐𓀿𓃠𓅿𓃟𓆈𓀬𓃗𓃱𓀡𓅰𓆉︎𓁹﹞')
}			





//--Auto response
switch(is) {
case '.🇦🇫':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Afghanistan')
}

//--Auto response
switch(is) {
case '.🇦🇽':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Åland Islands')
}

//--Auto response
switch(is) {
case '.🇦🇱':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Albania')
}
//--Auto response
switch(is) {
case '.🇩🇿':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Algeria')
}
//--Auto response
switch(is) {
case '.🇦🇸':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ American Samoa')
}
//--Auto response
switch(is) {
case '.🇦🇩':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Andorra')
}
//--Auto response
switch(is) {
case '.🇦🇴':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Angola')
}
//--Auto response
switch(is) {
case '.🇦🇮':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Anguilla')
}
//--Auto response
switch(is) {
case '.🇦🇶':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Antarctica')
}
//--Auto response
switch(is) {
case '.🇦🇬':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Antigua and Barbuda')
}

switch(is) {
case '.🇦🇷':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Argentina')
}

switch(is) {
case '.🇦🇲':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Armenia')
}
switch(is) {
case '.🇦🇼':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Aruba')
}
switch(is) {
case '.🇦🇺':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Australia')
}
switch(is) {
case '.🇦🇹':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Austria')
}
switch(is) {
case '.🇦🇿':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Azerbaijan')
}
switch(is) {
case '.🇧🇸':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Bahamas')
}
switch(is) {
case '.🇧🇭':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ 🇧🇭')
}
switch(is) {
case '.🇧🇩':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Bangladesh')
}
switch(is) {
case '.🇧🇧':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Barbados')
}
switch(is) {
case '.🇧🇾':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Belarus')
}
switch(is) {
case '.🇧🇪':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Belgium')
}
switch(is) {
case '.🇧🇿':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Belize')
}
switch(is) {
case '.🇧🇯':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Benin')
}
switch(is) {
case '.🇧🇲':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Bermuda')
}
switch(is) {
case '.🇧🇹':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Bhutan')
}
switch(is) {
case '.🇧🇴':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Bolivia')
}
switch(is) {
case '.🇧🇦':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Bosnia and Herzegovina')
}
switch(is) {
case '.🇧🇼':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Botswana')
}
switch(is) {
case '.🇧🇻':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Bouvet Island')
}
switch(is) {
case '.🇧🇷':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Brazil')
}
switch(is) {
case '.🇮🇴':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ British Indian Ocean Territory')
}
switch(is) {
case '.🇧🇳':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Brunei')
}
switch(is) {
case '.🇧🇬':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Bulgaria')
}
switch(is) {
case '.🇧🇫':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Burkina Faso')
}
switch(is) {
case '.🇧🇮':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Burundi')
}
switch(is) {
case '.🇰🇭':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Cambodia')
}
switch(is) {
case '.🇨🇲':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Cameroon')
}
switch(is) {
case '.🇨🇦':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Canada')
}
switch(is) {
case '.🇨🇻':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Cape Verde')
}
switch(is) {
case '.🇧🇶	':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Caribbean Netherlands')
}
switch(is) {
case '.🇰🇾':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Cayman Islands')
}switch(is) {
case '.🇨🇫':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Central African Republic')
}
switch(is) {
case '.🇹🇩':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Chad')
}
switch(is) {
case '.🇨🇱':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Chile')
}
switch(is) {
case '.🇨🇳':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ China')
}
switch(is) {
case '.🇨🇽':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Christmas Island')
}
switch(is) {
case '.🇨🇨':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Cocos (Keeling) Islands')
}
switch(is) {
case '.🇨🇴':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Colombia')
}
switch(is) {
case '.🇰🇲':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Comoros')
}
switch(is) {
case '.🇨🇬':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Republic of the Congo')
}
switch(is) {
case '.🇨🇩':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ DR Congo')
}
switch(is) {
case '.🇨🇰':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Cook Islands')
}
switch(is) {
case '.🇨🇷':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Costa Rica')
}
switch(is) {
case '.🇨🇮':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Côte dIvoire Ivory Coast')
}
switch(is) {
case '.🇭🇷':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Croatia')
}
switch(is) {
case '.🇨🇺':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Cuba')
}
switch(is) {
case '.🇨🇼':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Curaçao')
}
switch(is) {
case '.🇨🇾':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Cyprus')
}
switch(is) {
case '.🇨🇿':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Czechia')
}
switch(is) {
case '.🇩🇰':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Denmark')
}
switch(is) {
case '.🇩🇯':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Djibouti')
}
switch(is) {
case '.🇩🇲':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Dominica')
}
switch(is) {
case '.🇩🇴':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Dominican Republic')
}
switch(is) {
case '.🇪🇨':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ 	Ecuador')
}
switch(is) {
case '.🇪🇬	':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Egypt')
}
switch(is) {
case '.🏴󠁧󠁢󠁥󠁮󠁧󠁿	':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ England')
}
switch(is) {
case '.🇬🇶':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Equatorial Guinea')
}
switch(is) {
case '.🇪🇷':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Eritrea')
}
switch(is) {
case '.🇪🇪':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Estonia')
}
switch(is) {
case '.🇸🇿':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Eswatini Swaziland')
}
switch(is) {
case '.🇪🇹':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Ethiopia')
}
switch(is) {
case '.🇫🇰	':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Falkland Islands')
}
switch(is) {
case '.🇫🇴':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ 	Faroe Islands')
}
switch(is) {
case '.🇫🇯	':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Fiji')
}
switch(is) {
case '.🇫🇮':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Finland')
}
switch(is) {
case '.🇫🇷':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ France')
}
switch(is) {
case '.🇬🇫':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ French Guiana')
}
switch(is) {
case '.🇵🇫':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ French Polynesia')
}
switch(is) {
case '.🇹🇫':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ French Southern and Antarctic Lands')
}
switch(is) {
case '.🇬🇦':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Gabon')
}
switch(is) {
case '.🇬🇲':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Gambia')
}
switch(is) {
case '.🇬🇪':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Georgia')
}
switch(is) {
case '.🇩🇪':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Germany')
}
switch(is) {
case '.🇬🇭':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Ghana')
}
switch(is) {
case '.🇬🇮':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Gibraltar')
}
switch(is) {
case '.🇬🇷':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Greece')
}
switch(is) {
case '.🇬🇱':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Greenland')
}
switch(is) {
case '.🇬🇩':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Grenada')
}
switch(is) {
case '.🇬🇵':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Guadeloupe')
}
switch(is) {
case '.🇬🇺':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Guam')
}
switch(is) {
case '.🇬🇹':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Guatemala')
}
switch(is) {
case '.🇬🇬':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Guernsey')
}
switch(is) {
case '.🇬🇳':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Guinea')
}
switch(is) {
case '.🇬🇼':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Guinea-Bissau')
}
switch(is) {
case '.🇬🇾':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Guyana')
}
switch(is) {
case '.🇭🇹':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Haiti')
}
switch(is) {
case '.🇭🇲	':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Heard Island and McDonald Islands')
}
switch(is) {
case '.🇭🇳':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Honduras')
}
switch(is) {
case '.🇭🇰':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Hong Kong')
}
switch(is) {
case '.🇭🇺':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Hungary')
}
switch(is) {
case '.🇮🇸':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ 	Iceland')
}
switch(is) {
case '.🇮🇳':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ India')
}
switch(is) {
case '.🇮🇩':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Indonesia')
}
switch(is) {
case '.🇮🇷':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Iran')
}switch(is) {
case '.🇮🇶':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Iraq')
}switch(is) {
case '.🇮🇪':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Ireland')
}switch(is) {
case '.🇮🇲':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Isle of Man')
}switch(is) {
case '.🇮🇱':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Israel')
}switch(is) {
case '.🇮🇹':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Italy')
}switch(is) {
case '.🇯🇲':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Jamaica')
}switch(is) {
case '.🇯🇵':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Japan')
}switch(is) {
case '.🇯🇪':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Jersey')
}switch(is) {
case '.🇯🇴':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Jordan')
}switch(is) {
case '.🇰🇿':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Kazakhstan')
}switch(is) {
case '.🇰🇪':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Kenya')
}switch(is) {
case '.🇰🇮':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Kiribati')
}switch(is) {
case '.🇰🇵':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ North Korea')
}switch(is) {
case '.🇰🇷':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ South Korea')
}switch(is) {
case '.🇽🇰':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Kosovo')
}switch(is) {
case '.🇰🇼':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Kuwait')
}switch(is) {
case '.🇰🇬':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Kyrgyzstan')
}switch(is) {
case '.🇱🇦':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Laos')
}switch(is) {
case '.🇱🇻':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Latvia')
}switch(is) {
case '.🇱🇧':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Lebanon')
}switch(is) {
case '.🇱🇸':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Lesotho')
}switch(is) {
case '.🇱🇷':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Liberia')
}switch(is) {
case '.🇱🇾':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Libya')
}switch(is) {
case '.🇱🇮':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Liechtenstein')
}switch(is) {
case '.🇱🇹':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Lithuania')
}switch(is) {
case '.🇱🇺':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Luxembourg')
}
switch(is) {
case '.🇲🇴':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Macau')
}
switch(is) {
case '.🇲🇬':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Madagascar')
}switch(is) {
case '.🇲🇼':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Malawi')
}switch(is) {
case '.🇲🇾':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Malaysia')
}switch(is) {
case '.🇲🇻':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Maldives')
}switch(is) {
case '.🇲🇱':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Mali')
}switch(is) {
case '.🇲🇹':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Malta')
}switch(is) {
case '.🇲🇭':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Marshall Islands')
}switch(is) {
case '.🇲🇶	':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Martinique')
}switch(is) {
case '.🇲🇷':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Mauritania')
}switch(is) {
case '.🇲🇺	':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Mauritius')
}switch(is) {
case '.🇾🇹':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Mayotte')
}switch(is) {
case '.🇲🇽':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Mexico')
}switch(is) {
case '.🇫🇲':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Micronesia')
}switch(is) {
case '.🇲🇩':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Moldova')
}switch(is) {
case '.🇲🇨':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Monaco')
}
switch(is) {
case '.🇲🇳	':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Mongolia')
}switch(is) {
case '.🇲🇪':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Montenegro')
}switch(is) {
case '.🇲🇸':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Montserrat')
}switch(is) {
case '.🇲🇦':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Morocco')
}switch(is) {
case '.🇲🇿':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Mozambique')
}switch(is) {
case '.🇲🇲':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Myanmar')
}switch(is) {
case '.🇳🇦':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Namibia')
}switch(is) {
case '.🇳🇷':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Nauru')
}switch(is) {
case '.🇳🇵':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Nepal')
}switch(is) {
case '.🇳🇱':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Netherlands')
}switch(is) {
case '.🇳🇨':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ New Caledonia')
}switch(is) {
case '.🇳🇿':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ New Zealand')
}switch(is) {
case '.🇳🇮':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Nicaragua')
}switch(is) {
case '.🇳🇪':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Niger')
}switch(is) {
case '.🇳🇬':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Nigeria')
}switch(is) {
case '.🇳🇺':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Niue')
}switch(is) {
case '.🇳🇫':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Norfolk Island')
}switch(is) {
case '.🇲🇰	':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ North Macedonia')
}switch(is) {
case '.🇲🇵':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Northern Mariana Islands')
}switch(is) {
case '.🇳🇴':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Norway')
}switch(is) {
case '.🇴🇲	':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Oman')
}switch(is) {
case '.🇵🇰':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Pakistan')
}switch(is) {
case '.🇵🇼':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Palau')
}switch(is) {
case '.🇵🇸':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Palestine')
}switch(is) {
case '.🇵🇦':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Panama')
}switch(is) {
case '.🇵🇬':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Papua New Guinea')
}switch(is) {
case '.🇵🇾':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Paraguay')
}switch(is) {
case '.🇵🇪':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Peru')
}switch(is) {
case '.🇵🇭':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Philippines')
}switch(is) {
case '.🇵🇳':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Pitcairn Islands')
}switch(is) {
case '.🇵🇱':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Poland')
}switch(is) {
case '.🇵🇹':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Portugal')
}switch(is) {
case '.🇵🇷':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Puerto Rico')
}switch(is) {
case '.🇶🇦':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Qatar')
}switch(is) {
case '.🇷🇪':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Réunion')
}switch(is) {
case '.🇷🇴':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Romania')
}switch(is) {
case '.🇷🇺':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Russia')
}switch(is) {
case '.🇷🇼':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Rwanda')
}switch(is) {
case '.🇧🇱':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Saint Barthélemy')
}switch(is) {
case '.🇸🇭':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Saint Helena, Ascension and Tristan da Cunha')
}switch(is) {
case '.🇰🇳':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Saint Kitts and Nevis')
}switch(is) {
case '.🇱🇨':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Saint Lucia')
}switch(is) {
case '.🇲🇫':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Saint Martin')
}switch(is) {
case '.🇵🇲':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Saint Pierre and Miquelon')
}switch(is) {
case '.🇻🇨':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Saint Vincent and the Grenadines')
}switch(is) {
case '.🇼🇸	':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Samoa')
}switch(is) {
case '.🇸🇲':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ San Marino')
}switch(is) {
case '.🇸🇹':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ São Tomé and Príncipe')
}switch(is) {
case '.🇸🇦':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Saudi Arabia')
}switch(is) {
case '.🏴󠁧󠁢󠁳󠁣󠁴󠁿':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Scotland')
}
switch(is) {
case '.🇸🇳':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Senegal')
}switch(is) {
case '.🇷🇸':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Serbia')
}switch(is) {
case '.🇸🇨':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Seychelles')
}switch(is) {
case '.🇸🇱':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Sierra Leone')
}switch(is) {
case '.🇸🇬':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Singapore')
}switch(is) {
case '.🇸🇽':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Sint Maarten')
}switch(is) {
case '.🇸🇰':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Slovakia')
}switch(is) {
case '.🇸🇮':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Slovenia')
}switch(is) {
case '.🇸🇧':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Solomon Islands')
}switch(is) {
case '.🇸🇴':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Somalia')
}switch(is) {
case '.🇿🇦':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ South Africa')
}switch(is) {
case '.🇬🇸':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ South Georgia')
}switch(is) {
case '.🇸🇸':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ South Sudan')
}switch(is) {
case '.🇪🇸':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Spain')
}switch(is) {
case '.🇱🇰':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Sri Lanka')
}switch(is) {
case '.🇸🇩':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Sudan')
}switch(is) {
case '.🇸🇷':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Suriname')
}switch(is) {
case '.🇸🇯':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Svalbard and Jan Mayen')
}switch(is) {
case '.🇸🇪':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Sweden')
}switch(is) {
case '.🇨🇭':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Switzerland')
}switch(is) {
case '.🇸🇾':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Syria')
}switch(is) {
case '.🇹🇼':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Taiwan')
}switch(is) {
case '.🇹🇯':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Tajikistan')
}switch(is) {
case '.🇹🇿':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Tanzania')
}switch(is) {
case '.🇹🇭':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Thailand')
}switch(is) {
case '.🇹🇱':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Timor-Leste')
}switch(is) {
case '.🇹🇬':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Togo')
}switch(is) {
case '.🇹🇰':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Tokelau')
}switch(is) {
case '.🇹🇴':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Tonga')
}
switch(is) {
case '.🇹🇹':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Trinidad and Tobago ')
}
switch(is) {
case '.🇹🇳':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Tunisia')
}
switch(is) {
case '.🇹🇷':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Turkey')
}
switch(is) {
case '.🇹🇲':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Turkmenistan')
}
switch(is) {
case '.🇹🇨':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Turks and Caicos Islands')
}
switch(is) {
case '.🇹🇻':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Tuvalu')
}
switch(is) {
case '.🇺🇬':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Uganda')
}
switch(is) {
case '.🇺🇦':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Ukraine')
}
switch(is) {
case '.🇦🇪':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ United Arab Emirates')
}
switch(is) {
case '.🇬🇧':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ United Kingdom')
}
switch(is) {
case '.🇺🇸':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ United States')
}
switch(is) {
case '.🇺🇲':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ United States Minor Outlying Islands')
}
switch(is) {
case '.🇺🇾':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Uruguay')
}
switch(is) {
case '.🇺🇿':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Uzbekistan')
}
switch(is) {
case '.🇻🇺':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Vanuatu')
}
switch(is) {
case '.🇻🇦':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Vatican City (Holy See)')
}
switch(is) {
case '.🇻🇪':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Venezuela')
}
switch(is) {
case '.🇻🇳':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Vietnam')
}
switch(is) {
case '.🇻🇬':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ British Virgin Islands')
}
switch(is) {
case '.🇻🇮':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ United States Virgin Islands')
}
switch(is) {
case '.🏴󠁧󠁢󠁷󠁬󠁳󠁿':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Wales')
}
switch(is) {
case '.🇼🇫':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Wallis and Futuna')
}
switch(is) {
case '.🇪🇭':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Western Sahara')
}
switch(is) {
case '.🇾🇪':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Yemen')
}
switch(is) {
case '.🇿🇲':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Zambia')
}
switch(is) {
case '.🇿🇼':
reply('⌯  ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Zimbabwe')
}
	
	
//-- Command
switch(command) {
  
//-- List menu
case 'menu':
case 'help':
case 'premium':
  if (!isVerify) return reply(userB(prefix))
	uptime = process.uptime()

const _shopdmen = JSON.parse(fs.readFileSync(`./${sender.split("@")[0]}@s.whatsapp.net.json`));	
shopdmen = _shopdmen[11]	//--- account design


  capt = `☆\nMenu \nDesign: ${shopdmen}`
  thum = await fs.readFileSync('./docs/mrf.jpg').toString('base64')
 
  if (args[0] === 'des' ) {
   return replyimg(menusdes(tanggal, jam, pushname, sender, prem_, Lxa, prefix, _user, uptime, isGroupAdmins, groupMetadata, groupAdmins, Welcome_, AntiLink_, isGroup, process, shopdmen), text, capt, thum)
  } else if (args[0] === 'sticker' ) {
    return replyimg(menusticker(tanggal, jam, pushname, sender, prem_, Lxa, prefix, _user, uptime, isGroupAdmins, groupMetadata, groupAdmins, Welcome_, AntiLink_, isGroup, process, shopdmen), text, capt, thum)
  } else if (args[0] === 'admin' ) {
    return reply(menux(tanggal, jam, pushname, sender, prem_, Lxa, prefix, _user, uptime, isGroupAdmins, groupMetadata, groupAdmins, Welcome_, AntiLink_, isGroup, process, shopdmen), text, capt, thum)
  } else if (args[0] === 'vip' ) { 
    return reply(menuy(prefix, tanggal, jam, shopdmen))
  } else if (args[0] === 'owner' ) {
    return replyimg(menuowner(tanggal, jam, pushname, sender, prem_, Lxa, prefix, _user, uptime, isGroupAdmins, groupMetadata, groupAdmins, Welcome_, AntiLink_, isGroup, process, shopdmen), text, capt, thum)
  } else if (args[0] === 'agb' ) {
    return replyimg(menuagb(tanggal, jam, pushname, sender, prem_, Lxa, prefix, _user, uptime, isGroupAdmins, groupMetadata, groupAdmins, Welcome_, AntiLink_, isGroup, process, shopdmen), text, capt, thum)
  } else if (args[0] === 'three' ) {
    return replyimg(menuthree(tanggal, jam, pushname, sender, prem_, Lxa, prefix, _user, uptime, isGroupAdmins, groupMetadata, groupAdmins, Welcome_, AntiLink_, isGroup, process, shopdmen), text, capt, thum)
  } else if (args[0] === 'two' ) {
    return replyimg(menu3(tanggal, jam, pushname, sender, prem_, Lxa, prefix, _user, uptime, isGroupAdmins, groupMetadata, groupAdmins, Welcome_, AntiLink_, isGroup, process, shopdmen), text, capt, thum)
  } else if (args[0] === 'secret' ) {
    return replyimg(menusecret(tanggal, jam, pushname, sender, prem_, Lxa, prefix, _user, uptime, isGroupAdmins, groupMetadata, groupAdmins, Welcome_, AntiLink_, isGroup, process, shopdmen), text, capt, thum)
	
  }  else if (args[0] === 'one' ) {
   return replyimg(menus(tanggal, jam, pushname, sender, prem_, Lxa, prefix, _user, uptime, isGroupAdmins, groupMetadata, groupAdmins, Welcome_, AntiLink_, isGroup, process, shopdmen), text, capt, thum)
  } else if (args.length < 1) return replyimg(menu(tanggal, jam, pushname, sender, prem_, Lxa, prefix, _user, shopdmen), text, capt, thum)
	   break
	   
//-- List show
case 'b':
  if (!isVerify) return reply(userB(prefix))
	uptime = process.uptime()
  capt = `Hii here Shiba  \nWuff Wuff \nUser: ${_user.length}`
  thum = await fs.readFileSync('./docs/mrf.jpg').toString('base64')
  
  if (args[0] === 'news' ) {
   return replyimg(bnews(prefix, tanggal, jam), text, capt, thum)
  } else if (args[0] === 'github' ) {
    return replyimg(bgithub(prefix, tanggal, jam), text, capt, thum)
  } else if (args[0] === 'support' ) {
    return reply(showapk(prefix, tanggal, jam))
  } 

	   break	   
	   
		  
//-- List Updates
case 'updates':
case 'update':
  if (!isVerify) return reply(userB(prefix))
	uptime = process.uptime()

  capt = `Welcome to Update Center \nYour Version is:\n19.0.0.0`
  thum = await fs.readFileSync('./docs/update.jpg').toString('base64')
  
  if (args.length < 1) 
	return replyimg(updates(tanggal, jam, pushname, sender, prem_, Lxa, prefix, _user, uptime, isGroupAdmins, groupMetadata, groupAdmins, Welcome_, AntiLink_, isGroup, process), text, capt, thum)
  if (args[0] === 'old' ) {
    return reply(updatesold(prefix, tanggal, jam))
  } 
	  
          break
//-- nsfw ass
case 'ass':
  if (!isVerify) return reply(userB(prefix))
	uptime = process.uptime()
  capt = `Stella \n♕︎\n♕︎`
  thum = await fs.readFileSync('./media/nsfw/ass.jpg').toString('base64')
  if (args.length < 1) return replyimg(ass(tanggal, jam, pushname, sender, prem_, Lxa, prefix, _user, uptime, isGroupAdmins, groupMetadata, groupAdmins, Welcome_, AntiLink_, isGroup, process), text, capt, thum)
	  
          break			  

//-- nsfw boobs
case 'boob':
case 'boobs':
  if (!isVerify) return reply(userB(prefix))
	uptime = process.uptime()
  capt = `Stella \n♕︎\n♕︎`
  thum = await fs.readFileSync('./media/nsfw/boob.jpg').toString('base64')
  if (args.length < 1) return replyimg(boob(tanggal, jam, pushname, sender, prem_, Lxa, prefix, _user, uptime, isGroupAdmins, groupMetadata, groupAdmins, Welcome_, AntiLink_, isGroup, process), text, capt, thum)
	  
          break		
		  
		  
case 'stella':

  if (!isVerify) return reply(userB(prefix))
	  
  const rboob = _rboob[Math.floor(Math.random() * _rboob.length)]
	uptime = process.uptime()
  capt = `Stella \n♕︎\n♕︎`
  thum = await fs.readFileSync(`${rboob}`).toString('base64')
  if (args.length < 1) return replyimg(boob(tanggal, jam, pushname, sender, prem_, Lxa, prefix, _user, uptime, isGroupAdmins, groupMetadata, groupAdmins, Welcome_, AntiLink_, isGroup, process), text, capt, thum)
	  
          break		

case 'imgstella':

  if (!isVerify) return reply(userB(prefix))
	  
  const imgstella = _imgstella[Math.floor(Math.random() * _imgstella.length)]
	buffer = fs.readFileSync(`${imgstella}`)
Lxa.sendMessage(from, buffer, image, {quoted:mek, caption: 'STELLA ✯'})
break	

case 'cute':

  if (!isVerify) return reply(userB(prefix))
	  
  const cute = _cute[Math.floor(Math.random() * _cute.length)]
 
	buffer = fs.readFileSync(`${cute}`)
Lxa.sendMessage(from, buffer, image, {quoted:mek, caption: 'CUTE :0 ✯'})
break

case 'dog':

  if (!isVerify) return reply(userB(prefix))
	  
  const dog = _dog[Math.floor(Math.random() * _dog.length)]
	buffer = fs.readFileSync(`${dog}`)
Lxa.sendMessage(from, buffer, image, {quoted:mek, caption: 'Wuff ✯'})
break


//-- ping
case 'ping':
 if (!isPrem) return reply(premi())
const timestamp = speed();
const latensi = speed() - timestamp
uptime = process.uptime()
reply(`⌯   ﹝𝙿𝚘𝚗𝚐 !! 𝚂𝚙𝚎𝚎𝚍: ${latensi.toFixed(4)} 𝚜𝚎𝚌𝚘𝚗𝚍𝚜﹞ `)
break


//-- Simsimi
case 'bot':
case 'simi':
if (!isVerify) return reply(userB())
		if (args.length < 1) return reply(`Hai ${pushname}`)
		sims = value
		simt = await fs.readFileSync('./media/shiba.jpg').toString('base64')
					try {
		anu = await fetchJson(`https://fdciabdul.tech/api/ayla/?pesan=${sims}`, {method: 'get'})
    jawab = anu.jawab
replyimg(jawab, text, sims, simt)
} catch (e) {
  reply(err())
  console.log('Error : %s', color(e, 'orange'))
}
break
  
  
//-- Stickerpack
case 'setstickerpack': 
case 'stickername': 
case 'stickerpack': 
  
if (!isVerify) return reply(userB())
	
	if (args.length < 1) return reply('⌯   ﹝𝙴𝚗𝚝𝚎𝚛 StickerPack name.﹞')

	
const _setpack = JSON.parse(fs.readFileSync(`./${sender.split("@")[0]}@s.whatsapp.net.json`));	
const setpack = _setpack[10]	//--- stickerpack

let stickernow = args[0];


fs.readFile(`./${sender.split("@")[0]}@s.whatsapp.net.json`, 'utf-8', function(err, data) {
    if (err) throw err;
	
    var newValue = data.replace(`${setpack}`, stickernow);
	
    fs.writeFile(`./${sender.split("@")[0]}@s.whatsapp.net.json`, newValue, 'utf-8', function(err, data) {
        if (err) throw err;
    })
})
 
  reply(`﹝Changed StickerPack name from *${setpack}* to *${value}*﹞`)
  
	break

//-- Mood
case 'mood': 
  
if (!isVerify) return reply(userB())
	
	if (args.length < 1) return reply('⌯   ﹝𝙴𝚗𝚝𝚎𝚛 mood.﹞')

	
const _mood = JSON.parse(fs.readFileSync(`./${sender.split("@")[0]}@s.whatsapp.net.json`));	
const mood = _mood[8]	//--- Mood

let moodnow = args[0];


fs.readFile(`./${sender.split("@")[0]}@s.whatsapp.net.json`, 'utf-8', function(err, data) {
    if (err) throw err;
	
    var newValue = data.replace(`${mood}`, moodnow);
	
    fs.writeFile(`./${sender.split("@")[0]}@s.whatsapp.net.json`, newValue, 'utf-8', function(err, data) {
        if (err) throw err;
    })
})

 
  reply(`﹝𝙰𝚍𝚍𝚎𝚍!﹞`)
  
	break



//-- setupclaim
case 'setupclaim': 
  
if (!isVerify) return reply(userB())
	const _claim11 = JSON.parse(fs.readFileSync(`./${sender.split("@")[0]}@s.whatsapp.net.json`));	
const claim11 = _claim11[12]	//--- claim money
if (claim11 === 'empty') {
	
const _setupclaim = JSON.parse(fs.readFileSync(`./${sender.split("@")[0]}@s.whatsapp.net.json`));	
const setupclaim = _setupclaim[12]	//--- claim

let setupclaim1 = 2;


fs.readFile(`./${sender.split("@")[0]}@s.whatsapp.net.json`, 'utf-8', function(err, data) {
    if (err) throw err;
	
    var newValue = data.replace(`${setupclaim}`, setupclaim1);
	
    fs.writeFile(`./${sender.split("@")[0]}@s.whatsapp.net.json`, newValue, 'utf-8', function(err, data) {
        if (err) throw err;
    })
})

 
  reply(`﹝Claim is setup.    .claim﹞`)
  
} 
  
	break

//-- claim money
case 'claim': 
  
if (!isVerify) return reply(userB())
	

	
const _claim = JSON.parse(fs.readFileSync(`./${sender.split("@")[0]}@s.whatsapp.net.json`));	
const claim = _claim[12]	//--- claim money

if (claim === 'empty') return reply(`Type  .setupclaim  to get command .claim`)
if (claim === '17') return reply(`﹝Already claimed. Check tomorrow.﹞`) 

let claimnow = Number(17);



fs.readFile(`./${sender.split("@")[0]}@s.whatsapp.net.json`, 'utf-8', function(err, data) {
    if (err) throw err;
	
    var newValue = data.replace(`${claim}`, claimnow);
	
    fs.writeFile(`./${sender.split("@")[0]}@s.whatsapp.net.json`, newValue, 'utf-8', function(err, data) {
        if (err) throw err;
    })
})

 
const delaydesignclaim = ms => new Promise(resolve => setTimeout(resolve, ms))
await delaydesignclaim(3000) /// waiting 1 second.
				
const _changedesignmoneyclaim = JSON.parse(fs.readFileSync(`./${sender.split("@")[0]}@s.whatsapp.net.json`));	
const changedesignmoneyclaim = _changedesignmoneyclaim[7]	//--- money	

let pprrclaim = Number(changedesignmoneyclaim);
let oorrclaim = Number(200);
let oorpprclaim = pprrclaim - oorrclaim; 
fs.readFile(`./${sender.split("@")[0]}@s.whatsapp.net.json`, 'utf-8', function(err, data) {
    if (err) throw err;
	
    var newValue = data.replace(`${changedesignmoneyclaim}`, oorpprclaim);
	
    fs.writeFile(`./${sender.split("@")[0]}@s.whatsapp.net.json`, newValue, 'utf-8', function(err, data) {
        if (err) throw err;
        console.log('Done!');
    })
})

const delaydesign1claims = ms => new Promise(resolve => setTimeout(resolve, ms))
                await delaydesign1claims(1000) /// waiting 1 second.

const _changedesignmoney1claims = JSON.parse(fs.readFileSync(`./${sender.split("@")[0]}@s.whatsapp.net.json`));	
const changedesignmoney1claims = _changedesignmoney1claims[7]	//--- money	

 
  reply(`𝚌𝚕𝚊𝚒𝚖𝚎𝚍 𝚖𝚘𝚗𝚎𝚢 💸\n\nMoney left: ${changedesignmoneyclaim}$ + $ = ${changedesignmoney1claims}$`)
  
	break	
	



//-- Slot
case 'sloter':
case 'slots':
case 'slot':
  if (!isVerify) return reply(userB())
	   if (!isGroup) return reply(group())
	  
const _slotme = JSON.parse(fs.readFileSync(`./${sender.split("@")[0]}@s.whatsapp.net.json`));	
const slotme7 = _slotme[7]	//--- money	






if (slotme7 < 7) return reply(`﹝You have not enough money to play. Your money: ${slotme7}$﹞`) 


	  
  const slot1 = _slot[Math.floor(Math.random() * _slot.length)]
  const slot2 = _slot[Math.floor(Math.random() * _slot.length)]
  const slot3 = _slot[Math.floor(Math.random() * _slot.length)]
    const slot4 = _slot[Math.floor(Math.random() * _slot.length)]
	const slot5 = _slot[Math.floor(Math.random() * _slot.length)]
	const slot6 = _slot[Math.floor(Math.random() * _slot.length)]
	const slot7 = _slot[Math.floor(Math.random() * _slot.length)]
	const slot8 = _slot[Math.floor(Math.random() * _slot.length)]
	const slot9 = _slot[Math.floor(Math.random() * _slot.length)]
	
	
	
let ps = Number(slotme7);


if ((slot1 == slot2) && slot2 == slot3) {	

let os = Number(250);
let ops = ps + os; 
fs.readFile(`./${sender.split("@")[0]}@s.whatsapp.net.json`, 'utf-8', function(err, data) {
    if (err) throw err;
	
    var newValue = data.replace(`${slotme7}`, ops);
	
    fs.writeFile(`./${sender.split("@")[0]}@s.whatsapp.net.json`, newValue, 'utf-8', function(err, data) {
        if (err) throw err;
        console.log('Done!');
    })
})

const delayslot = ms => new Promise(resolve => setTimeout(resolve, ms))
                await delayslot(1000) /// waiting 1 second.

const _slotme8 = JSON.parse(fs.readFileSync(`./${sender.split("@")[0]}@s.whatsapp.net.json`));	
const slotme8 = _slotme8[7]	//--- money	

  reply(`★ 𝚂𝚕𝚘𝚝\n\n${slot4}${slot5}${slot6}\n- - - - - - - - - \n${slot1}${slot2}${slot3} ☜︎ ♕︎ 𝙹𝚊𝚌𝚔𝚙𝚘𝚝 ♕︎\n- - - - - - - - - \n${slot7}${slot8}${slot9}\n\n𝚖𝚘𝚗𝚎𝚢 𝚕𝚎𝚏𝚝 ${slotme8}$`)  
}  
  
else if (slot1 == slot2) {	

let os = Number(7);
let ops = ps + os; 
fs.readFile(`./${sender.split("@")[0]}@s.whatsapp.net.json`, 'utf-8', function(err, data) {
    if (err) throw err;
	
    var newValue = data.replace(`${slotme7}`, ops);
	
    fs.writeFile(`./${sender.split("@")[0]}@s.whatsapp.net.json`, newValue, 'utf-8', function(err, data) {
        if (err) throw err;
        console.log('Done!');
    })
})

const delayslot = ms => new Promise(resolve => setTimeout(resolve, ms))
                await delayslot(1000) /// waiting 1 second.

const _slotme8 = JSON.parse(fs.readFileSync(`./${sender.split("@")[0]}@s.whatsapp.net.json`));	
const slotme8 = _slotme8[7]	//--- money	

	reply(`★ 𝚂𝚕𝚘𝚝\n\n${slot4}${slot5}${slot6}\n- - - - - - - - - \n${slot1}${slot2}${slot3} ☜︎ 𝚂𝚖𝚊𝚕𝚕 𝚠𝚒𝚗 ♕︎\n- - - - - - - - - \n${slot7}${slot8}${slot9}\n\n𝚖𝚘𝚗𝚎𝚢 𝚕𝚎𝚏𝚝 ${slotme8}$`)  
}

else if (slot2 == slot3) {	

let os = Number(7);
let ops = ps + os; 
fs.readFile(`./${sender.split("@")[0]}@s.whatsapp.net.json`, 'utf-8', function(err, data) {
    if (err) throw err;
	
    var newValue = data.replace(`${slotme7}`, ops);
	
    fs.writeFile(`./${sender.split("@")[0]}@s.whatsapp.net.json`, newValue, 'utf-8', function(err, data) {
        if (err) throw err;
        console.log('Done!');
    })
})

const delayslot = ms => new Promise(resolve => setTimeout(resolve, ms))
                await delayslot(1000) /// waiting 1 second.

const _slotme8 = JSON.parse(fs.readFileSync(`./${sender.split("@")[0]}@s.whatsapp.net.json`));	
const slotme8 = _slotme8[7]	//--- money	

reply(`★ 𝚂𝚕𝚘𝚝\n\n${slot4}${slot5}${slot6}\n- - - - - - - - - \n${slot1}${slot2}${slot3} ☜︎ 𝚂𝚖𝚊𝚕𝚕 𝚠𝚒𝚗 ♕︎\n- - - - - - - - - \n${slot7}${slot8}${slot9}\n\n𝚖𝚘𝚗𝚎𝚢 𝚕𝚎𝚏𝚝 ${slotme8}$`)   
}

else if (slot1 == slot3) {	

let os = Number(7);
let ops = ps + os; 
fs.readFile(`./${sender.split("@")[0]}@s.whatsapp.net.json`, 'utf-8', function(err, data) {
    if (err) throw err;
	
    var newValue = data.replace(`${slotme7}`, ops);
	
    fs.writeFile(`./${sender.split("@")[0]}@s.whatsapp.net.json`, newValue, 'utf-8', function(err, data) {
        if (err) throw err;
        console.log('Done!');
    })
})

const delayslot = ms => new Promise(resolve => setTimeout(resolve, ms))
                await delayslot(1000) /// waiting 1 second.

const _slotme8 = JSON.parse(fs.readFileSync(`./${sender.split("@")[0]}@s.whatsapp.net.json`));	
const slotme8 = _slotme8[7]	//--- money	

reply(`★ 𝚂𝚕𝚘𝚝\n\n${slot4}${slot5}${slot6}\n- - - - - - - - - \n${slot1}${slot2}${slot3} ☜︎ 𝚂𝚖𝚊𝚕𝚕 𝚠𝚒𝚗 ♕︎\n- - - - - - - - - \n${slot7}${slot8}${slot9}\n\n𝚖𝚘𝚗𝚎𝚢 𝚕𝚎𝚏𝚝 ${slotme8}$`) 

}

 else {
	 


let os = Number(4);
let ops = ps - os; 
fs.readFile(`./${sender.split("@")[0]}@s.whatsapp.net.json`, 'utf-8', function(err, data) {
    if (err) throw err;
	
    var newValue = data.replace(`${slotme7}`, ops);
	
    fs.writeFile(`./${sender.split("@")[0]}@s.whatsapp.net.json`, newValue, 'utf-8', function(err, data) {
        if (err) throw err;
        console.log('Done!');
    })
})

const delayslot = ms => new Promise(resolve => setTimeout(resolve, ms))
                await delayslot(1000) /// waiting 1 second.

const _slotme8 = JSON.parse(fs.readFileSync(`./${sender.split("@")[0]}@s.whatsapp.net.json`));	
const slotme8 = _slotme8[7]	//--- money	
	 
reply(`★ 𝚂𝚕𝚘𝚝\n\n${slot4}${slot5}${slot6}\n- - - - - - - - - \n${slot1}${slot2}${slot3} ☜︎ 𝙽𝚘 𝚠𝚒𝚗 ♕︎\n- - - - - - - - - \n${slot7}${slot8}${slot9}\n\n𝚖𝚘𝚗𝚎𝚢 𝚕𝚎𝚏𝚝 ${slotme8}$`)  
}


break



//-- DEUTSCH


//-- Tod truth
case 'wahrheit':
case 'warheit':
case 'w':
  if (!isVerify) return reply(userB())
  const truth = _truth[Math.floor(Math.random() * _truth.length)]
  reply(`★ *Wahrheit*\n${truth}`)
break


//-- email
case 'email':

var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  auth: {
    user: 'stardashnotification@gmail.com',
    pass: 'stardash20%'
  },
});

transporter.verify().then(console.log).catch(console.error);


var mailOptions = {
  from: 'stardashnotification@gmail.com',
  to: 'johannimus2004@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});










break




//-- Fakt
case 'fakt':
case 'fakten':
case 'f':
  if (!isVerify) return reply(userB())
  const fakten = _fakten[Math.floor(Math.random() * _fakten.length)]
  reply(`🐺  *Fakt:*\n${fakten}`)
break
//-- Tod dare
case 'pflicht':
case 'plicht':
case 'p':
  if (!isVerify) return reply(userB())
  const dare = _dare[Math.floor(Math.random() * _dare.length)]
  reply(`★ *Pflicht*\n${dare}`)
break
//-- Tod flag world
case 'euflag':
case 'europa':
case 'flagge':
  if (!isVerify) return reply(userB())
  const euf = _euf[Math.floor(Math.random() * _euf.length)]
  reply(`⌯   ﹝𝙶𝚞𝚎𝚜𝚜 𝚝𝚑𝚎 𝚏𝚕𝚊𝚐. 𝚂𝚎𝚗𝚍 𝚒𝚝 𝚕𝚒𝚔𝚎 𝚝𝚑𝚒𝚜 .🏴󠁧󠁢󠁷󠁬󠁳󠁿﹞\n\n${euf}`)
break
//-- Tod worldflags
case 'flag':
case 'flags':
  if (!isVerify) return reply(userB())
  const wf = _wf[Math.floor(Math.random() * _wf.length)]
  reply(`⌯   ﹝𝙶𝚞𝚎𝚜𝚜 𝚝𝚑𝚎 𝚏𝚕𝚊𝚐. 𝚂𝚎𝚗𝚍 𝚒𝚝 𝚕𝚒𝚔𝚎 𝚝𝚑𝚒𝚜 .🏴󠁧󠁢󠁷󠁬󠁳󠁿﹞\n\n${wf}`)
break
//-- nsfw 
case 'nsfw':
case '18':
case 'n':
  if (!isVerify) return reply(userB())
  const nsfw = _nsfw[Math.floor(Math.random() * _nsfw.length)]
  reply(`💦 *UHHHH* 😏\n${nsfw}`)
break
//-- Würfel
case 'würfel':
case 'wurf':
  if (!isVerify) return reply(userB())
  const roll = _roll[Math.floor(Math.random() * _roll.length)]
  reply(roll)
break


//-- ENGLISH



//-- randomsong
case 'rsong':
case 'randomsong':
case 'rlied':
  if (!isVerify) return reply(userB())
  const song = _song[Math.floor(Math.random() * _song.length)]
  reply(`⌯   ﹝𝚁𝚊𝚗𝚍𝚘𝚖 𝚜𝚘𝚗𝚐﹞\n\n⑅ ${song}`)
break


//-- Tod truth
case 'truth':
  if (!isVerify) return reply(userB())
  const truthen = _truthen[Math.floor(Math.random() * _truthen.length)]
  reply(`⌯   ﹝𝚈𝚘𝚞𝚛 𝚝𝚛𝚞𝚝𝚑﹞\n⑅ ${truthen}`)
break


//-- Fakt
case 'fact':

  if (!isVerify) return reply(userB())
  const facten = _facten[Math.floor(Math.random() * _facten.length)]
  reply(`⌯   ﹝𝚈𝚘𝚞𝚛 𝚏𝚊𝚌𝚝﹞\n⑅${facten}`)
break



//-- Tod dare
case 'dare':
  if (!isVerify) return reply(userB())
  const dareen = _dareen[Math.floor(Math.random() * _dareen.length)]
  reply(`⌯   ﹝𝚈𝚘𝚞𝚛 𝚍𝚊𝚛𝚎﹞\n⑅${dareen}`)
break



//-- pokemon
case 'pokemon':
  if (!isVerify) return reply(userB())
  const pokemon = _pokemon[Math.floor(Math.random() * _pokemon.length)]
  reply(`⌯   ﹝𝚈𝚘𝚞𝚛 𝚙𝚘𝚔𝚎𝚖𝚘𝚗 𝚒𝚜...﹞\n⑅ ${pokemon}`)
break
//-- animal
case 'animal':
  if (!isVerify) return reply(userB())
  const animal = _animal[Math.floor(Math.random() * _animal.length)]
  reply(`⌯   ﹝𝚈𝚘𝚞𝚛 𝚙𝚎𝚝 𝚒𝚜...﹞\n⑅ ${animal}`)
break

//-- gay
case 'gay':
case 'gaymeter':
  if (!isVerify) return reply(userB())
  const gay = _gay[Math.floor(Math.random() * _gay.length)]
  reply(`${gay}`)
break

//-- love
case 'love':


  if (!isVerify) return reply(userB())
	  if (args.length < 1) return reply('⌯   ﹝𝙿𝚕𝚎𝚊𝚜𝚎 𝚊𝚍𝚍 𝚝𝚠𝚘 𝚗𝚊𝚖𝚎𝚜 𝚝𝚘 𝚏𝚒𝚗𝚍 𝚘𝚞𝚝 𝚝𝚑𝚎𝚒𝚛 𝚕𝚘𝚟𝚎.﹞')
		  
  const love = _love[Math.floor(Math.random() * _love.length)]
  reply(`${love}`)
break

//-- nsfw 
case 'nsfwen':

  if (!isVerify) return reply(userB())
  const nsfwen = _nsfwen[Math.floor(Math.random() * _nsfwen.length)]
  reply(`💦 *Uhhh* 😏\n${nsfwen}`)
break

//-- Würfel
case 'roll':
case 'dice':
  if (!isVerify) return reply(userB())
  const rollen = _rollen[Math.floor(Math.random() * _rollen.length)]

  buffer = fs.readFileSync(`./media/dice/${rollen}.webp`)
Lxa.sendMessage(from, buffer, sticker, {quoted:mek})

break

//-- MEME
case 'meme':
case 'memes':
case 'joke':
  if (!isVerify) return reply(userB())
  const meme = _meme[Math.floor(Math.random() * _meme.length)]

  buffer = fs.readFileSync(`./media/meme/${meme}.webp`)
Lxa.sendMessage(from, buffer, sticker, {quoted:mek})

break

//-- Horny Jailed.
case 'porn':
case 'sex':
case 'sexy':
case 'hentai':
case 'waifu':
case 'naked':

  buffer = fs.readFileSync(`./media/dog/hornyjail.webp`)
Lxa.sendMessage(from, buffer, sticker, {quoted:mek})

break

//-- Why are yu geh
case '🏳️‍🌈':
case 'gay':

  buffer = fs.readFileSync(`./media/cringe/whygeh.webp`)
Lxa.sendMessage(from, buffer, sticker, {quoted:mek})

break

//-- What is this eh
case '🏳‍⚧':

  buffer = fs.readFileSync(`./media/cringe/cringe1.webp`)
Lxa.sendMessage(from, buffer, sticker, {quoted:mek})

break


//-- emoji 
case 'emoji':
case 'e':
case 'emojie':
case 'smiley':
  if (!isVerify) return reply(userB())
  const emoji = _emoji[Math.floor(Math.random() * _emoji.length)]
  reply(`⌯   ﹝𝚈𝚘𝚞𝚛 𝙴𝚖𝚘𝚓𝚒𝚎﹞\n${emoji}`)
break


//-- Würfel Ultimate
case 'ultimatewürfel':
case 'ultimatewurf':
case 'ultimateroll':
case 'premiumroll':
case 'premiumwürfel':
  if (!isVerify) return reply(userB())

  const ultimateroll = _ultimateroll[Math.floor(Math.random() * _ultimateroll.length)]
  reply(ultimateroll)
break


//-- Würfel legendär
case 'legendarywürfel':
case 'legendarywurf':
case 'legendaryroll':
case 'legendärwürfel':
  if (!isVerify) return reply(userB())

  const legendaryroll = _legendaryroll[Math.floor(Math.random() * _legendaryroll.length)]
  reply(legendaryroll)
break


//-- link whatsapp
case 'wame':
case 'mylink':
  if (!isVerify) return reply(userB())
					reply(`wa.me/${sender.split('@')[0]}`)
			break
			
			
//-- Aussprache wiederholen
case 'say':
case 'sag':
  if (!isVerify) return reply(userB())
sendMess(from, value)

break


case 'dog':
  if (!isVerify) return reply(userB())

buffer = fs.readFileSync('./media/shiba.jpg')
Lxa.sendMessage(from, buffer, image, {quoted:mek, caption: 'StarDash ✯'})
break

	
//-- pict to sticker
case 'stiker': case 's': case 'stikergif':
case 'sticker': case 'stickergif': case 'sgif':
  if (!isVerify) return reply(userB())
	  
const _stickerpack = JSON.parse(fs.readFileSync(`./${sender.split("@")[0]}@s.whatsapp.net.json`));	
const stickerpack = _stickerpack[10]	//--- stickerpack name

					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await Lxa.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply(stick)
							})
							.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ${addMetadata('StarDash', stickerpack)} ${ran} -o ${ran}`, async (error) => {
									if (error) return reply(stick())
									Lxa.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
									fs.unlinkSync(media)	
									fs.unlinkSync(ran)	
								})
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await Lxa.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						reply(wait())
						await ffmpeg(`./${media}`)
							.inputFormat(media.split('.')[1])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(`falsch`)
						  })
							.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ${addMetadata('StarDash', stickerpack)} ${ran} -o ${ran}`, async (error) => {
									if (error) return reply(stick())
									Lxa.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})			
									fs.unlinkSync(media)
									fs.unlinkSync(ran)
								})
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else {
						reply(`⌯   ﹝𝙿𝚕𝚎𝚊𝚜𝚎 𝚝𝚊𝚐 𝚊 𝚙𝚒𝚌𝚝𝚞𝚛𝚎.﹞`)
					}
					break




//-- stiker to image
case 'toimg':
case 'imagesticker':
case 'image':
  if (!isVerify) return reply(UserB())
						if (!isQuotedSticker) return reply('⌯   ﹝𝙿𝚕𝚎𝚊𝚜𝚎 𝚝𝚊𝚐 𝚊 𝚜𝚝𝚒𝚌𝚔𝚎𝚛.﹞')
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await Lxa.downloadAndSaveMediaMessage(encmedia)
					ran= getRandom('.png')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply('⌯   ﹝Doesnt work with animated stickers.﹞')
						buffer = fs.readFileSync(ran)
						Lxa.sendMessage(from, buffer, image, {quoted:mek, caption: 'StarDash ✯'})
						fs.unlinkSync(ran)
					})
					break
					
				
					
//-- audio volume
case 'audiolevel':
case 'level':
case 'loud':
case 'volume':
  
	  
			if (!isQuotedAudio) return reply('⌯   ﹝Please tag an audio.﹞')
					 if (args.length < 1) return reply('⌯   ﹝Enter Number how loud. example:    .audiolevel 10﹞')

	  reply('⌯   ﹝Changing volume 1/1.﹞')
  
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await Lxa.downloadAndSaveMediaMessage(encmedia)
				ran= getRandom('.opus')
				exec(`ffmpeg -i ${media} -af  'volume=${value}'  ${ran} `, (err) => {
						fs.unlinkSync(media)
						if (err) return reply('Error')
						buffer = fs.readFileSync(ran)
						Lxa.sendMessage(from, buffer, audio, {quoted:mek, caption: 'StarDash ✯'})
						fs.unlinkSync(ran)
					})
					break
					


//-- brightness
case 'brightness':

  
	  
			if (!isQuotedImage) return reply('⌯   ﹝Please tag an image.﹞')
					 if (args.length < 1) return reply('⌯   ﹝Enter Number of Brightnes example 0.5﹞')

	  reply('⌯ Shining sun on your picture 1/2﹞')
  
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await Lxa.downloadAndSaveMediaMessage(encmedia)
				ran= getRandom('.png')
				exec(`ffmpeg -i ${media} -vf eq=brightness=${value} -c:a copy  ${ran} `, (err) => {
						fs.unlinkSync(media)
						if (err) return reply('⌯   ﹝Enter Number of Brightnes example 0.5﹞')
					
					

	
	  reply('⌯ Sending your picture 2/2﹞')
					
						buffer = fs.readFileSync(ran)
						Lxa.sendMessage(from, buffer, image, {quoted:mek, caption: 'StarDash ✯'})
						fs.unlinkSync(ran)
					})
					break

//-- Calculator

case 'calc':

if (!isVerify) return reply(UserB())
if (args.length < 1) return reply('⌯   ﹝Enter Calculation. Example:   .calc 5 + 9     or  .calc 6 / 2      or   .calc   5 * 5     or   .calc   10 - 5﹞')

let x = Number(args[0]);
let y = Number(args[2]);

	if (args[1] === '+' ) {
		let z = x + y;
   reply('⌯   The result of﹝'+ x +'﹞and﹝'+ y +'﹞is﹝'+ z +'﹞'); 
  } else if (args[1] === '*' ) {
		let z = x * y;
  reply('⌯   The result of﹝'+ x +'﹞and﹝'+ y +'﹞is﹝'+ z +'﹞');
  } else if (args[1] === 'x' ) {
		let z = x * y;
  reply('⌯   The result of﹝'+ x +'﹞and﹝'+ y +'﹞is﹝'+ z +'﹞');
  } else if (args[1] === '/' ) {
		let z = x / y;
	reply('⌯   The result of﹝'+ x +'﹞and﹝'+ y +'﹞is﹝'+ z +'﹞');	
  } else if (args[1] === ':' ) {
		let z = x / y;
	reply('⌯   The result of﹝'+ x +'﹞and﹝'+ y +'﹞is﹝'+ z +'﹞');	
  } 
  else if (args[1] === '-' ) {
		let z = x - y;
	reply('⌯   The result of﹝'+ x +'﹞and﹝'+ y +'﹞is﹝'+ z +'﹞');	
  } 


break
					
//-- saturation
case 'saturation':

  
	  
			if (!isQuotedImage) return reply('⌯   ﹝Please tag an image.﹞')
					 if (args.length < 1) return reply('⌯   ﹝Enter Number of saturation from 0.5 to 2﹞')

	   
	  reply('⌯ Satturating your picture 1/2﹞')
  
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await Lxa.downloadAndSaveMediaMessage(encmedia)
				ran= getRandom('.png')
				exec(`ffmpeg -i ${media} -vf eq=saturation=${value} -c:a copy  ${ran} `, (err) => {
						fs.unlinkSync(media)
						if (err) return reply('⌯   ﹝Enter Number of saturation from 0.5 to 2﹞')
					
					
	  reply('⌯ Sending your picture 2/2﹞')
					
						buffer = fs.readFileSync(ran)
						Lxa.sendMessage(from, buffer, image, {quoted:mek, caption: 'StarDash ✯'})
						fs.unlinkSync(ran)
					})
					break					

//-- Mirror
case 'mirror':
case 'miror':
case 'flip':
  
	  
			if (!isQuotedImage) return reply('⌯   ﹝Please tag an image.﹞')
					   
				   
	  reply('⌯ Looking for a mirror 1/1﹞')
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await Lxa.downloadAndSaveMediaMessage(encmedia)
				ran= getRandom('.png')
				exec(`gm convert -flop ${media} ${ran} `, (err) => {
						fs.unlinkSync(media)
						if (err) return reply('⌯   ﹝Error﹞')
						buffer = fs.readFileSync(ran)
						Lxa.sendMessage(from, buffer, image, {quoted:mek, caption: 'StarDash ✯'})
						fs.unlinkSync(ran)
					})
					break	

//-- blackwhite
case 'bw':
case 'blackwhite':
  
	  
			if (!isQuotedImage) return reply('⌯   ﹝Please tag an image.﹞')
					   reply('⌯   ﹝We are going back in time 1/1﹞')
				   
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await Lxa.downloadAndSaveMediaMessage(encmedia)
				ran= getRandom('.png')
				exec(`gm convert -modulate 100,0 ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply('⌯   ﹝Error﹞')
						buffer = fs.readFileSync(ran)
						Lxa.sendMessage(from, buffer, image, {quoted:mek, caption: 'StarDash ✯'})
						fs.unlinkSync(ran)
					})
					break	


					
//-- filter
case 'filter':

  
	  
			if (!isQuotedImage) return reply('⌯   ﹝Please tag an image.﹞')
					 if (args.length < 1) return reply('⌯   ﹝Enter Filter. vintage, strong_contrast, lighter, darker﹞')

	  
  
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await Lxa.downloadAndSaveMediaMessage(encmedia)
				ran= getRandom('.png')
				exec(`ffmpeg -i ${media} -vf curves=${value}   ${ran} `, (err) => {
						fs.unlinkSync(media)
						if (err) return reply('⌯   ﹝failed﹞')
						buffer = fs.readFileSync(ran)
						Lxa.sendMessage(from, buffer, image, {quoted:mek, caption: 'StarDash ✯'})
						fs.unlinkSync(ran)
					})
					break

			
									
//-- video to mp3
case 'mp3':
case 'sound':
  if (!isVerify) return reply(UserB())
	  
			if (!isQuotedVideo) return reply('⌯   ﹝Please tag an video.﹞')
					

					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await Lxa.downloadAndSaveMediaMessage(encmedia)
				ran= getRandom('.opus')
				exec(`ffmpeg -i ${media}  -vn  ${ran} `, (err) => {
					
					
					
						fs.unlinkSync(media)
						if (err) return reply('Error')
						buffer = fs.readFileSync(ran)
						Lxa.sendMessage(from, buffer, audio, {quoted:mek, caption: 'StarDash ✯'})
						fs.unlinkSync(ran)
					})
					break
					
//-- cover song
case 'cover':

  if (!isVerify) return reply(UserB())
	  
         if (!isQuotedAudio) return reply('⌯   ﹝Please tag an audio.﹞')

       reply('⌯   ﹝This is awesome 1/1﹞')
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await Lxa.downloadAndSaveMediaMessage(encmedia)
				ran= getRandom('.mp4')
				exec(`ffmpeg -loop 1 -i coverfox.jpg -i ${media}  -c:v libx264 -c:a aac -strict experimental -b:a 192k -shortest  ${ran} `, (err) => {
					
					
					
						fs.unlinkSync(media)
						if (err) return reply('Error')
						buffer = fs.readFileSync(ran)
						Lxa.sendMessage(from, buffer, video, {quoted:mek, caption: 'StarDash ✯'})
						fs.unlinkSync(ran)
					})
					break
		

						

						

						

						

					

					
					
//-- update bot
case 'updatebot':

  if (!isVerify) return reply(UserB())
	  
exec(`play error.mp3`)

const delay6 = ms => new Promise(resolve => setTimeout(resolve, ms))
                await delay6(1000) /// waiting 5 second.	
				
       reply('⌯   ﹝Please wait.  Bot will update in 5 seconds.﹞')
		const delay5 = ms => new Promise(resolve => setTimeout(resolve, ms))
                await delay5(4000) /// waiting 5 second.		
	
		
		reply('⌯   ﹝Please open termux﹞')
		

		
		
		
				
			await	exec(`git pull https://github.com/joewilliams007/stardash && bash install.sh`, (err) => {
																			
						if (err) return reply('Error')
							
					     reply('⌯   ﹝Bot has been updated to newest version. It will now restart.﹞')
						 				
					})
					
					 process.exit(1);
					 
					break

										
					
//-- youtube song opus
case 'song':
case 'youtubesong':
case 'tbsong':

	  
          if (args.length < 1) return reply('⌯   ﹝What is the song name?﹞')			

const _yourcashsong = JSON.parse(fs.readFileSync(`./${sender.split("@")[0]}@s.whatsapp.net.json`));	
const yourcashsong = _yourcashsong[7]	//--- money	
if (yourcashsong < 5) return reply(`﹝You have not enough money to download a song. Money needed: 5$ Your money: ${yourcashsong}$﹞`) 
	
let pprrsong = Number(yourcashsong);
let oorrsong = Number(5);
let oorpprsong = pprrsong - oorrsong; 


fs.readFile(`./${sender.split("@")[0]}@s.whatsapp.net.json`, 'utf-8', function(err, data) {
    if (err) throw err;
	
	
    var newValue = data.replace(`${yourcashsong}`, oorpprsong);
	
    fs.writeFile(`./${sender.split("@")[0]}@s.whatsapp.net.json`, newValue, 'utf-8', function(err, data) {
        if (err) throw err;
        console.log('Done!');
    })
})
													
const delaysong = ms => new Promise(resolve => setTimeout(resolve, ms))
await delaysong(1000) /// waiting 1 second.					
															
const _changedesignmoneysong = JSON.parse(fs.readFileSync(`./${sender.split("@")[0]}@s.whatsapp.net.json`));	
const changedesignmoneysong = _changedesignmoneysong[7]	//--- money	

			  
					reply(`⌯   ﹝Downloading 1/2﹞ \n\nMoney left: ${changedesignmoneysong}$`)
				
				ran= getRandom('.opus')
				exec(`yt-dlp -x --audio-format opus -o, --output ${ran} "ytsearch:${value}"`, (err) => {
													
						if (err) return reply('Error')
							
						reply('⌯   ﹝Sending 2/2﹞')
						
						buffer = fs.readFileSync(ran)
						Lxa.sendMessage(from, buffer, audio, {quoted:mek})
						fs.unlinkSync(ran)
					})
				
					
				
  
break								
					
					
					
					
						



					
					
		
//-- intro
			
case 'cool':
case 'intro':
case 'stardash':

  
	  
			if (!isQuotedImage) return reply('⌯   ﹝Please tag an image.﹞')
				
reply('⌯   ﹝Please wait.﹞')
	  
  
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await Lxa.downloadAndSaveMediaMessage(encmedia)
				ran= getRandom('.mp4')
				exec(`ffmpeg -loop 1 -i ${media} -i intro.mp3 -c:v libx264 -tune stillimage -c:a aac -shortest ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply('⌯   ﹝Does not work with this picture format. Please use a other picture.﹞')
						buffer = fs.readFileSync(ran)
						Lxa.sendMessage(from, buffer, video, {quoted:mek, caption: 'StarDash ✯'})
						fs.unlinkSync(ran)
					})
					break

case 'speed':
case 'fast':
  if (!isVerify) return reply(UserB())
	  
				  if (args.length < 1) return reply('⌯   ﹝Tag Video or Audio AND Enter Number how fast. from 0.5 - 4 example:    .speed 2﹞')
					

					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await Lxa.downloadAndSaveMediaMessage(encmedia)
				ran= getRandom('.opus')
				exec(`ffmpeg -i ${media}  -filter:a "atempo=${value}" -vn  ${ran} `, (err) => {
					
					
					
						fs.unlinkSync(media)
						if (err) return reply('Speed must be from 0.5 to 4')
						buffer = fs.readFileSync(ran)
						Lxa.sendMessage(from, buffer, audio, {quoted:mek})
						fs.unlinkSync(ran)
					})
					break		
 
		
	

	

	
case 'tts':
case 'speak':
  if (!isVerify) return reply(UserB())
	  
			

		

							
				ran= getRandom('.mp3')

				exec(`espeak -w ${ran} "${value}"`, (err) => {

					

					

						if (err) return reply('Error')
					buffer = fs.readFileSync(ran)

						Lxa.sendMessage(from, buffer, audio, {quoted:mek})

						fs.unlinkSync(ran)

					})

					break		
		
//-- watermark 
case 'watermarkvideo':

  if (!isVerify) return reply(UserB())
	
           if (!isQuotedVideo)  return reply('⌯   ﹝Please tag an video.﹞')
   reply('⌯   ﹝Please wait.﹞')

					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await Lxa.downloadAndSaveMediaMessage(encmedia)
				ran= getRandom('.mp4')
				exec(`ffmpeg  -i ${media} -i watermark.png -filter_complex "[1]format=rgba,colorchannelmixer=aa=0.5[logo];[0][logo]overlay=(W-w)/2:(H-h)/2:format=auto,format=yuv420p" -c:a copy  ${ran} `, (err) => {
					
					
					
						fs.unlinkSync(media)
						if (err) return reply('Error')
						buffer = fs.readFileSync(ran)
						Lxa.sendMessage(from, buffer, video, {quoted:mek, caption: 'StarDash ✯'})
						fs.unlinkSync(ran)
					})
					
					break	

//-- blur
case 'blur':

  if (!isVerify) return reply(UserB())
	  
			
				if (!isQuotedImage)  return reply('⌯   ﹝Please tag a picture.﹞')
					   
				
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await Lxa.downloadAndSaveMediaMessage(encmedia)
				ran= getRandom('.png')
				exec(`ffmpeg  -i ${media} -filter_complex "[0:v]boxblur=luma_radius=10:chroma_radius=10:luma_power=2[blurred]" -map "[blurred]"   ${ran} `, (err) => {
					
					
					
						fs.unlinkSync(media)
						if (err) return reply('Error')
						buffer = fs.readFileSync(ran)
						Lxa.sendMessage(from, buffer, image, {quoted:mek, caption: 'StarDash ✯'})
						fs.unlinkSync(ran)
					})
					
							
			break
						
//-- watermark 
case 'watermarkimage':

  if (!isVerify) return reply(UserB())
	  
			
				if (!isQuotedImage)  return reply('⌯   ﹝Please tag a picture.﹞')
					   reply('⌯   ﹝Please wait.﹞')
				
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await Lxa.downloadAndSaveMediaMessage(encmedia)
				ran= getRandom('.png')
				exec(`ffmpeg  -i ${media} -i watermark.png -filter_complex "[1]format=rgba,colorchannelmixer=aa=0.5[logo];[0][logo]overlay=(W-w)/2:(H-h)/2:format=auto,format=yuv420p" -c:a copy  ${ran} `, (err) => {
					
					
					
						fs.unlinkSync(media)
						if (err) return reply('Error')
						buffer = fs.readFileSync(ran)
						Lxa.sendMessage(from, buffer, image, {quoted:mek, caption: 'StarDash ✯'})
						fs.unlinkSync(ran)
					})
					
							
			break	

//-- remove background and make sticker
case 'nobgsticker':
case 'nobgs':
case 'rmbgs':

  if (!isVerify) return reply(UserB())
	  

				  if (args.length < 1) return reply('⌯   ﹝Tag an image or Sticker and Choose Color. Hex or real. Example:   .nobgs black﹞')
					
					   reply('⌯   ﹝Please wait.﹞')
				
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await Lxa.downloadAndSaveMediaMessage(encmedia)
				ran= getRandom('.webp')
				exec(`ffmpeg -i ${media} -vf colorkey=${value}:0.1 ${ran} `, (err) => {
					
					
					
						fs.unlinkSync(media)
						if (err) return reply('⌯   ﹝Choose a real color or real hex code.﹞')
						buffer = fs.readFileSync(ran)
						Lxa.sendMessage(from, buffer, sticker, {quoted:mek})
						fs.unlinkSync(ran)
					})
					
							
			break	

//-- save picture as sticker
case 'addsticker':
case 'savesticker':

  if (!isVerify) return reply(UserB())	  
  if (!isQuotedImage)  return  reply(`⌯   ﹝Tag Sticker. Cost: 22$﹞`)
	   
const _yourcashsticker = JSON.parse(fs.readFileSync(`./${sender.split("@")[0]}@s.whatsapp.net.json`));	
const yourcashsticker = _yourcashsticker[7]	//--- money	
if (yourcashsticker < 22) return reply(`﹝You have not enough money to change your design. Money needed: 22$ Your money: ${yourcashsticker}$﹞`) 
	
let pprrsticker = Number(yourcashsticker);
let oorrsticker = Number(22);
let oorpprsticker = pprrsticker - oorrsticker; 
fs.readFile(`./${sender.split("@")[0]}@s.whatsapp.net.json`, 'utf-8', function(err, data) {
    if (err) throw err; 
	
    var newValue = data.replace(`${yourcashsticker}`, oorpprsticker);
	
    fs.writeFile(`./${sender.split("@")[0]}@s.whatsapp.net.json`, newValue, 'utf-8', function(err, data) {
        if (err) throw err;
        console.log('Done!');
    })
})
													
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await Lxa.downloadAndSaveMediaMessage(encmedia)
			
				
				exec(`rm -rf ${sender.split("@")[0]}.webp`)
				exec(`ffmpeg -i ${media} ${sender.split("@")[0]}.webp`, (err) => {
					
	
					
				fs.unlinkSync(media)
						if (err) return reply('⌯   ﹝Error﹞')
				
	
					})

	
					


const delaydesign1sticker = ms => new Promise(resolve => setTimeout(resolve, ms))
await delaydesign1sticker(1000) /// waiting 1 second.					
															
const _changedesignmoney1sticker = JSON.parse(fs.readFileSync(`./${sender.split("@")[0]}@s.whatsapp.net.json`));	
const changedesignmoney1sticker = _changedesignmoney1sticker[7]	//--- money	
 
  reply(`⌯   ﹝Saved as your sticker!  .mysticker﹞ \n\nMoney left: ${changedesignmoney1sticker}$`)
  
break			

//-- mysticker

case 'mysticker':
case 'mys':

  if (!isVerify) return reply(UserB())
	  

					buffer = fs.readFileSync(`${sender.split("@")[0]}.webp`)
					Lxa.sendMessage(from, buffer, sticker, {quoted:mek})
					
							
			break	
			

case 'beep':
		
		
		
exec(`play error.mp3`)
	
break
		
		
//-- remove background
case 'rmbg':
case 'nobg':

  if (!isVerify) return reply(UserB())
 	  
  if (!isQuotedImage)  return reply('⌯   ﹝Please tag a picture.﹞')
	  
       if (args.length < 1) return reply('⌯   ﹝Choose Color. Hex or real. Example:   .nobg black﹞')

					   reply('⌯   ﹝Please wait.﹞')
				
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await Lxa.downloadAndSaveMediaMessage(encmedia)
				ran= getRandom('.png')
				exec(`ffmpeg -i ${media} -vf colorkey=${value}:0.1 ${ran} `, (err) => {
					
					
					
						fs.unlinkSync(media)
						if (err) return reply('⌯   ﹝Choose a real color or real hex code.﹞')
						buffer = fs.readFileSync(ran)
						Lxa.sendMessage(from, buffer, image, {quoted:mek, caption: 'StarDash ✯'})
						fs.unlinkSync(ran)
					})
					
							
			break	

//-- crusher
case 'crush':

  if (!isVerify) return reply(UserB())
	  
			
				if (!isQuotedAudio)  return reply('⌯   ﹝Please tag an audio.﹞')
					
				
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await Lxa.downloadAndSaveMediaMessage(encmedia)
				ran= getRandom('.opus')
				exec(`ffmpeg  -i ${media} -filter_complex "acrusher=level_in=8:level_out=18:bits=8:mode=log:aa=1"  ${ran} `, (err) => {
					
					
					
						fs.unlinkSync(media)
						if (err) return reply('Error')
						buffer = fs.readFileSync(ran)
						Lxa.sendMessage(from, buffer, audio, {quoted:mek, caption: 'StarDash ✯'})
						fs.unlinkSync(ran)
					})
					
							
			break	
			


			
//-- owner bot
case 'owner':
case 'besitzer':
    nomor = '4917626388837@s.whatsapp.net'
    owner = await fs.readFileSync('./docs/mrf.jpeg').toString('base64')
    capt = "𝙲𝚑𝚒𝚕𝚕𝚘𝚌𝚝𝚒 ✯"
    const been = {
    text: `@${nomor.split("@")[0]} 𝚃𝚑𝚒𝚜 𝚒𝚜 𝚖𝚢 𝙾𝚠𝚗𝚎𝚛. 𝙲𝚑𝚊𝚝 𝚠𝚒𝚝𝚑 𝚑𝚒𝚖 𝚒𝚏 𝚢𝚘𝚞 𝚠𝚊𝚗𝚝.`,
  contextInfo: {
mentionedJid: [nomor]
  }
}
replyimg(been, text, capt, owner)
break

//--clear all messages
case 'clearchat':
case 'clear':
		if (!isOwner) return reply(ownerB())
		anu = await Lxa.chats.all()
		list_chat = await Lxa.chats.all()
    for (let chat of list_chat) {
    Lxa.modifyChat(chat.jid, "delete")
    }
    reply("⌯   ﹝𝚂𝚞𝚌𝚎𝚜𝚜. 𝙰𝚕𝚕 𝚖𝚎𝚜𝚜𝚊𝚐𝚎𝚜 𝚌𝚕𝚎𝚊𝚛𝚎𝚍. 𝙸 𝚠𝚒𝚕𝚕 𝚛𝚎𝚜𝚝𝚊𝚛𝚝.﹞")
   break

//-- mentions all members
case 'mentionall': 
case 'tagall':
case 'makier':
      if (!isVerify) return reply(userB())
		  if (!isGroup) return reply(group())
			if (!isGroupAdmins) return reply(admin())
					members_id = []
			teks = `\n★ 𝚐𝚛𝚘𝚞𝚙 : *${groupName}*\n★ 𝚞𝚜𝚎𝚛𝚜 : *${groupMetadata.participants.length}*\n${value}\n★☆☆☆★· 𝚖𝚎𝚗𝚝𝚒𝚘𝚗𝚜 \n`
			for (let mem of groupMembers) {
						teks += `☆ @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
			teks += `★☆☆☆☆☆☆☆☆☆☆☆☆☆☆★`
			mentions(teks, members_id, true)
			break

case 'pika2': 

      if (!isVerify) return reply(userB())
		  if (!isGroup) return reply(group())
			if (!isGroupAdmins) return reply(admin())
					members_id = []
			teks = `\n★ 𝚐𝚛𝚘𝚞𝚙 : *${groupName}*\n★ 𝚞𝚜𝚎𝚛𝚜 : *${groupMetadata.participants.length}*\n${value}\n★☆☆☆★· 𝚖𝚎𝚗𝚝𝚒𝚘𝚗𝚜 \n`
			for (let mem of groupMembers) {
						teks += `☆ @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
			teks += `★☆☆☆☆☆☆☆☆☆☆☆☆☆☆★`
			mentions(teks, members_id, true)
			break
			
//-- blocklist user
case 'blocklist':
  if (!isVerify) return reply(userB())
      teks = ` Die folgende Nummer ist eine Liste von Nummern, die wegen Verstoßes gegen die Regeln und Spam-Bots gesperrt wurden\n\n*Total* : ${blocked.length}\n· *LIST* \n`
	    for (let block of blocked) {
	    teks += `@${block.split('@')[0]}\n`
					}
	    teks += `#`
	    Lxa.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": blocked}})
					break

//--- Gebannt
case 'ban':
					if (args.length < 1) return
					if (!isPrem) return reply(ownerB())
					banned = mek.message.extendedTextMessage.contextInfo.mentionedJid
			        banned = mentioned
					reply(`🔒 Gebannt : ${banned}`)
					break

//--- entbannt
case 'unban':
case 'freigeben':
					if (!isPrem)return reply(ownerB())
					ban = value
					banned.splice(`${ban}@s.whatsapp.net`, 1)
					reply(`🔓 Nummer wa.me/${ban} wieder verifiziert!`)
					break


//-- banlist user
case 'banlist':
  if (!isVerify) return reply(userB())
      teks = ` Die folgende Nummer ist eine Liste von Nummern, die wegen Verstoßes gegen die Regeln und Spam-Bots gesperrt wurden\n\n*Total* : ${blocked.length}\n· *LIST* \n`
	    for (let block of blocked) {
	    teks += `@${block.split('@')[0]}\n`
					}
	    teks += `#`
	    Lxa.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": blocked}})
					break

//--- request
case 'wish':
case 'command':
case 'wunsch':
  if (!isVerify) return reply(userB())
  yoi = value
  if (args.length < 1) return reply('⌯   ﹝𝙴𝚗𝚝𝚎𝚛 𝚠𝚒𝚜𝚑. 𝙴𝚡𝚊𝚖𝚙𝚕𝚎     .𝚠𝚒𝚜𝚑 𝚒 𝚠𝚊𝚗𝚝 𝚊 𝚌𝚘𝚖𝚖𝚊𝚗𝚍 𝚝𝚘 𝚍𝚒𝚎.﹞')
  if (yoi.length > 200 ) return reply('⌯   ﹝𝚃𝚎𝚡𝚝 𝚒𝚜 𝚝𝚘𝚘 𝚕𝚘𝚗𝚐.﹞')
  _request.push(yoi)
  fs.writeFileSync('./report/request.json', JSON.stringify(_request))
  reply(`⌯   ﹝𝙰𝚍𝚍𝚎𝚍!﹞﹝.𝚠𝚒𝚜𝚑𝚎𝚜﹞`)
  
	break
	


//--- Note
case 'note':
case 'type':

  if (!isVerify) return reply(userB())
  yoi = value
  if (args.length < 1) return reply('⌯   ﹝𝙴𝚗𝚝𝚎𝚛 𝚗𝚘𝚝𝚎. 𝙴𝚡𝚊𝚖𝚙𝚕𝚎     .𝚗𝚘𝚝𝚎 𝚒 𝚊𝚖 𝚐𝚘𝚍.﹞')
  if (yoi.length > 100) return reply('⌯   ﹝𝚃𝚎𝚡𝚝 𝚒𝚜 𝚝𝚘𝚘 𝚕𝚘𝚗𝚐.﹞')
  _lapor.push(yoi)
  fs.writeFileSync('./report/lapor.json', JSON.stringify(_lapor))
  reply(`⌯   ﹝𝙰𝚍𝚍𝚎𝚍!﹞﹝.𝚗𝚘𝚝𝚎𝚜﹞`)
	break

//-- list Notes
case 'notes':
case 'list note':
			if (!isVerify) return reply(userB())
				teks = `⇝ 𝙽𝚘𝚝𝚎𝚜\n⌬  𝚝𝚘𝚝𝚊𝚕: ${_lapor.length}\n\n⌯ \n`
				for (let lap of _lapor) {
					teks += `⑅ ${lap}\n`
				}
				reply(teks.trim())
				break
				
			

//-- list wish
case 'wishes':
case 'listwish':
			if (!isVerify) return reply(userB())
				teks = `⇝ 𝚆𝚒𝚜𝚑𝚎𝚜 \n⌬  𝚝𝚘𝚝𝚊𝚕: ${_request.length}\n\n⌯\n`
				for (let req of _request) {
					teks += `⑅ ${req}\n`
				}
				reply(teks.trim())
				break

//--- List admin gruppe
case 'adminlist':
case 'listadmin':
case 'admin':
  if (!isVerify) return reply(userB())
					if (!isGroup) return reply(group())
						if (!isPrem) return reply(premi())
					teks = `Liste Admin *${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`
					teks = `Liste Admin *${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`
					for (let admin of groupAdmins) {
						teks += `- @${admin.split('@')[0]}\n`
					}
					mentions(teks, groupAdmins, true)
					break

case 'listonline':
case 'online':
  if (!isVerify) return reply(userB())
  if (!isGroup) return reply(group())
  if (!isPrem) return reply(premi())
        		let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
			    let online = [...Object.keys(Lxa.chats.get(ido).presences), Lxa.user.jid]
			    Lxa.sendMessage(from, 'Liste Online:\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join`\n`, text, { quoted: mek,
  			  contextInfo: { mentionedJid: online }
			    })
			    
				break

//--- Gruppe öffnen
					case 'gruppe':
					if (!isGroup) return reply(group())
					if (!isGroupAdmins && !isOwner) return reply(admin())
					if (!isBotGroupAdmins) return reply(Badmin())
					if (args.length < 1) return reply(`Füge *open* hinzu, um zu öffnen & "close*, um zu schließen`)
					if (args[0] === 'open') {
					    reply(`Gruppe offen *${groupMetadata.subject}*`)
						Lexa.groupSettingChange(from, GroupSettingChange.messageSend, false)
					} else if (args[0] === 'close') {
						reply(`Gruppe geschlossen *${groupMetadata.subject}*`)
						Lexa.groupSettingChange(from, GroupSettingChange.messageSend, true)
					}
					break

//--- Add member
case 'add':
				  if (!isVerify) return reply(userB())
			
					if (!isGroup) return reply(group())
			
					if (!isBotGroupAdmins) return reply(Badmin())
					if (args.length < 1) return reply('⌯   ﹝𝙰𝚍𝚍 𝚗𝚞𝚖𝚋𝚎𝚛.﹞')
					if (args[0].startsWith('0')) return reply('⌯   ﹝𝚄𝚜𝚎 𝚌𝚘𝚞𝚗𝚝𝚛𝚢 𝚌𝚘𝚍𝚎.﹞')
					if (args[0].startsWith('+49')) return reply('⌯   ﹝𝙽𝚘 +. 𝚄𝚜𝚎 𝚠𝚒𝚝𝚑 𝚘𝚗𝚕𝚢 𝚗𝚞𝚖𝚋𝚎𝚛𝚜.﹞')
					try {
						num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
						Lxa.groupAdd(from, [num])
					} catch (e) {
						console.log('Error :', e)
						reply('Fehler beim Hinzufügen des Ziels, vielleicht weil er privat ist')
					}
					break

//--- Kick member
case 'kick':
			    if (!isVerify) return reply(userB())
			 
					if (!isGroup) return reply(group())
					if (!isGroupAdmins) return reply(admin())
					if (!isBotGroupAdmins) return reply(Badmin())
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('⌯   ﹝𝚃𝚊𝚐 𝚝𝚊𝚛𝚐𝚎𝚝.﹞')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Bestellung erhalten, ausgestellt :\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						Lxa.groupRemove(from, mentioned)
					} else {
						
					
									
					buffer = fs.readFileSync('./docs/flash.webp')
Lxa.sendMessage(from, buffer, sticker, {quoted:mek})
					
					
					
				 Lxa.groupRemove(from, mentioned)
					}
					break

//-- Bewerben Sie die Abteilung
case 'promote':
				  if (!isVerify) return reply(userB())
					if (!isGroup) return reply(group())
					if (!isGroupAdmins && !isOwner) return reply(admin())
					if (!isBotGroupAdmins) return reply(Badmin())
			
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('⌯   ﹝𝚃𝚊𝚐 𝚝𝚊𝚛𝚐𝚎𝚝.﹞')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = '⌯   ﹝𝚁𝚎𝚚𝚞𝚎𝚜𝚝 𝚊𝚌𝚌𝚎𝚙𝚝𝚎𝚍.﹞﹝,𝚢𝚘𝚞 𝚊𝚛𝚎 𝚗𝚘𝚠 𝚊𝚗 𝚊𝚍𝚖𝚒𝚗.﹞ :\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						Lxa.groupMakeAdmin(from, mentioned)
					} else {
						mentions(`⌯   ﹝𝚁𝚎𝚚𝚞𝚎𝚜𝚝 𝚊𝚌𝚌𝚎𝚙𝚝𝚎𝚍.﹞﹝,𝚢𝚘𝚞 𝚊𝚛𝚎 𝚗𝚘𝚠 𝚊𝚗 𝚊𝚍𝚖𝚒𝚗.﹞ @${mentioned[0].split('@')[0]} `, mentioned, true)
						Lxa.groupMakeAdmin(from, mentioned)
					}
					break


//-- Herabgestuft
case 'demote':
			    if (!isVerify) return reply(userB())
					if (!isGroup) return reply(group())
					if (!isGroupAdmins && !isOwner) return reply(admin())
					if (!isBotGroupAdmins) return reply(Badmin())
			
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('⌯   ﹝𝚃𝚊𝚐 𝚝𝚊𝚛𝚐𝚎𝚝.﹞')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = '⌯   ﹝𝚁𝚎𝚚𝚞𝚎𝚜𝚝 𝚊𝚌𝚌𝚎𝚙𝚝𝚎𝚍.﹞﹝,𝚢𝚘𝚞 𝚊𝚛𝚎 𝚗𝚘𝚠 𝚗𝚘 𝚊𝚍𝚖𝚒𝚗.﹞ :\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						Lxa.groupDemoteAdmin(from, mentioned)
					} else {
						mentions(`⌯   ﹝𝚁𝚎𝚚𝚞𝚎𝚜𝚝 𝚊𝚌𝚌𝚎𝚙𝚝𝚎𝚍.﹞﹝,𝚢𝚘𝚞 𝚊𝚛𝚎 𝚗𝚘𝚠 𝚗𝚘 𝚊𝚍𝚖𝚒𝚗.﹞ @${mentioned[0].split('@')[0]}`, mentioned, true)
						Lxa.groupDemoteAdmin(from, mentioned)
					}
		break
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		

//-- Gruppenlink
case 'linkgrup':
case 'linkgc':
case 'gruppenlink':
case 'link':
  if (!isVerify) return reply(userB())
			 if (!isGroupAdmins) return reply(admin())
				if (!isGroup) return reply(group())
				if (!isBotGroupAdmins) return reply(Badmin())
				linkgc = await Lxa.groupInviteCode (from)
				yeh = `https://chat.whatsapp.com/${linkgc}\n\n⌯   ﹝𝙷𝚎𝚛𝚎 𝚒𝚜 𝚝𝚑𝚎 𝚐𝚛𝚘𝚞𝚙 𝚕𝚒𝚗𝚔.﹞ *${groupName}*`
				Lxa.sendMessage(from, yeh, text, {quoted: mek})
				break

//-- Gruppenbenachrichtigungen
case 'notif':
case 'nachrichten':
case 'nachichten':
case 'nachricht':
case 'pika':
    if (!isVerify) return reply(userB())
    if (!isGroup) return reply(group())
	if (!isPrem) return reply(premi())
    if (args.length < 1) return reply(`Was ist die Nachricht ?`)
    teks = `${value}`
 try { 
gc = await Lxa.groupMetadata(from)
    member = gc['participants']
    jids = [];
    member.map(async adm => {
	jids.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
options = {
  text: teks,
  contextInfo: {
mentionedJid: jids
  },
  quoted: mek
}
await Lxa.sendMessage(from, options, text)
	 } catch (e) {

						console.log('Error :', e)

						reply('Fehler.. eine Nummer hat komische zeichen')

					}
break

//-- Bot gruppe verlassen
case 'leave': 
case 'verlass':
				if (!isGroup) return reply(group())
				if (!isGroupAdmins) return reply(ownerB())
				anu = await Lxa.groupLeave(from, `Bye *${groupMetadata.subject}*`, groupId)
				break
				
				

//-- Gruppenbild machen
case 'setppgc':
case 'gruppenbild':
				if (!isGroup) return reply(group())
				if (!isGroupAdmins && !isOwner) return reply(admin())
				if (!isBotGroupAdmins) return reply(Badmin())
				if (!isQuotedImage && isMedia) return reply('Antworten Sie auf das Foto, für das Sie ein Gruppenprofil erstellen möchten')
				if (!isPrem) return reply(premi())
				try {
				media = await Lxa.downloadAndSaveMediaMessage(mek)
				await Lxa.updateProfilePicture (from, media)
				reply(wait())
				reply(`Gruppenprofilfoto erfolgreich geändert *${groupMetadata.subject}*`)
				} catch (e) {
				  reply('Geht nur bei Fotos')
				}
			break


//-- broadcast
case 'bc':
					if (!isOwner) return reply(ownerB())
					if (args.length < 1) return reply('Thats All ?')
					anu = await Lxa.chats.all()
						for (let _ of anu)
							sendMess(_.jid, value)
						reply('⌯   ﹝𝙱𝙲 𝚜𝚞𝚌𝚎𝚜𝚜.﹞')
					break


//-- Total user
case 'totaluser':
case 'all':
case 'userss':
  if (!isPrem) return reply(premi())
					teks = `TOTAL USER\n`
					no = 0
					for (let hehehe of _user) {
						no += 1
						teks += `[${no.toString()}] @${hehehe.split('@')[0]}\n`
					}
					teks += `Total User : ${_user.length}`
					Lxa.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": _user}})
					
					 const userss = _userss
						reply(`★ *all*\n${userss}`)
						
					break

//-- number
case 'number':
case 'nummer':
					teks = `Everyone\n`
					no = 0
					for (let hehehe of _user) {
						no += 1
						teks += `[${no.toString()}] @${hehehe.split('@')[0]}\n`
					}
					teks += `Total User : ${_user.length}`
					Lxa.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": _user}})
					
			
						
					break

//-- Delet message
case 'delete':
case 'del':
case 'burn':
					if (!isGroup)return reply(group())
					if (!isGroupAdmins) return reply(admin())
					try {
					Lxa.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
					} catch (e) {
					  reply('⌯   ﹝𝙸 𝚌𝚊𝚗 𝚘𝚗𝚕𝚢 𝚍𝚎𝚕𝚎𝚝𝚎 𝚖𝚢 𝚖𝚎𝚜𝚜𝚊𝚐𝚎𝚜.﹞')
					}
					break

//-- hide message
case 'hide':

					if (!isGroup)return reply(group())
					try {
					Lxa.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
					} catch (e) {
					  reply('⌯   ﹝Please tag my message. I will then delete it.﹞')
					}
					break



//--- verify
case 'verify':
case 'daftar':
case 'registrieren':
case 'register':
			if (isVerify) return reply('⌯   ﹝𝚈𝚘𝚞 𝚊𝚛𝚎 𝚊𝚕𝚛𝚎𝚊𝚍𝚢 𝚛𝚎𝚐𝚒𝚜𝚝𝚎𝚛𝚎𝚍.﹞') 
				if (args.length < 4) return reply(`⌯   ﹝Please register with your first name, age, favorite emoji and email adress﹞\n⚠️ Still in BETA. You may have to register soon again.\n\nExample\n\n .register StarDash 16 🐺 StarDash@gmail.com`)
			    if (args.length > 4) return reply(`⌯   ﹝Please only say 1 name.﹞`) 
				if (args[1] > 50) return reply(`⌯   ﹝Sorry old grandma you are to old.﹞`) 
	
				if (args[1] < 12) return reply(`⌯   ﹝Sorry kid. You are too young.﹞`)

function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);

  return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`
}
function tanggal(){
myMonths = ["January","February","März","April","May","June","Juliy","August","September","October","November","December"];
			myDays = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
			var tgl = new Date();
			var day = tgl.getDate()
			bulan = tgl.getMonth()
			var thisDay = tgl.getDay(),
			thisDay = myDays[thisDay];
			var yy = tgl.getYear()
			var year = (yy < 1000) ? yy + 1900 : yy;
			return `${day}. ${myMonths[bulan]} ${year}`
}			


						
					_user.push(sender)
			fs.writeFileSync('./data/user.json', JSON.stringify(_user))
			
			capt = `𝔖𝔱𝔞𝔯𝔇𝔞𝔰𝔥 \nRegistered! *${pushname}*\n𝙲𝚑𝚎𝚌𝚔 𝚢𝚘𝚞𝚛 𝚊𝚌𝚌𝚘𝚞𝚗𝚝 𝚠𝚒𝚝𝚑 .me`
			Lxa.sendMessage(from, capt, text, {quoted: mek})
			
			const userid = Math.floor(Math.random() * 1000000000)
			
			fs.appendFile(`${sender.split("@")[0]}@s.whatsapp.net.json`, `["+${sender.split("@")[0]}", "${pushname}", "${args[0]}" , "${args[1]}", "${args[2]}", "${userid}", "1", "100", "-", "${tanggal()}", "-", "⌥", "1", "${args[3]}", "⚠️ notverified Check your Email!", "empty"]`, function (err) {
				
				
		
				
  if (err) throw err;
  console.log('Account Opend.');
});
					
			
var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  auth: {
    user: 'stardashnotification@gmail.com',
    pass: 'stardash20%'
  },
});

transporter.verify().then(console.log).catch(console.error);


var mailOptions = {
  from: 'stardashnotification@gmail.com',
  to: `${args[3]}`,
  subject: `StarDash Account registered! ${pushname}`,
  text: `Your account was sucessfully created with the name ${args[0]}. You can find the details in whatsapp under command: .me  Please verify your email adress by sending this message to bot (.code with number):    .code ${userid}`
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
			
			

							
			break
		
	

	

	
//--- verify after deleted
case 'verifyagain':

	

if (args.length < 4) return reply(`⌯   ﹝Please register with your first name, age, favorite emoji and email adress﹞\n⚠️ Still in BETA. You may have to register soon again.\n\nExample\n\n .verifyagaian StarDash 16 🐺 StarDash@gmail.com`)
			    if (args.length > 4) return reply(`⌯   ﹝Please only say 1 name.﹞`) 




				if (args[1] > 50) return reply(`⌯   ﹝Sorry old grandma you are to old.﹞`) 

	

				if (args[1] < 12) return reply(`⌯   ﹝Sorry kid. You are too young.﹞`) 

						


function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);

  return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`
}
function tanggal(){
myMonths = ["January","February","März","April","May","June","Juliy","August","September","October","November","December"];
			myDays = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
			var tgl = new Date();
			var day = tgl.getDate()
			bulan = tgl.getMonth()
			var thisDay = tgl.getDay(),
			thisDay = myDays[thisDay];
			var yy = tgl.getYear()
			var year = (yy < 1000) ? yy + 1900 : yy;
			return `${day}. ${myMonths[bulan]} ${year}`
}			



			

			

			capt = `𝔖𝔱𝔞𝔯𝔇𝔞𝔰𝔥 \n 𝚁𝚎-Registered! *${pushname}*\n𝙲𝚑𝚎𝚌𝚔 𝚢𝚘𝚞𝚛 𝚊𝚌𝚌𝚘𝚞𝚗𝚝 𝚠𝚒𝚝𝚑 .me`

			Lxa.sendMessage(from, capt, text, {quoted: mek})

			

			const userid2 = Math.floor(Math.random() * 1000000000)

			

			fs.appendFile(`${sender.split("@")[0]}@s.whatsapp.net.json`, `["+${sender.split("@")[0]}", "${pushname}", "${args[0]}" , "${args[1]}", "${args[2]}", "${userid2}", "1", "100", "-", "${tanggal()}", "-", "⌥", "1", "${args[3]}", "⚠️ notverified Check your Email!", "empty"]`, function (err) {

				

				

		

				

  if (err) throw err;

  console.log('Account Opend.');
  
  var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  auth: {
    user: 'stardashnotification@gmail.com',
    pass: 'stardash20%'
  },
});

transporter.verify().then(console.log).catch(console.error);


var mailOptions = {
  from: 'stardashnotification@gmail.com',
  to: `${args[3]}`,
  subject: `StarDash Account registered! ${pushname}`,
  text: `Your account was sucessfully created with the name ${args[0]}. You can find the details in whatsapp under command: .me  Please verify your email adress by sending this message to bot (.code with number):    .code ${userid2}    `
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});

});

					

							

			break
			
//--- Shop	

case 'shop':			

if (!isVerify) return reply(userB())
	

const _shopmoney = JSON.parse(fs.readFileSync(`./${sender.split("@")[0]}@s.whatsapp.net.json`));	
const shopmoney = _shopmoney[7]	//--- money
		
const _shopd = JSON.parse(fs.readFileSync(`./${sender.split("@")[0]}@s.whatsapp.net.json`));	
const shopd = _shopd[11]	//--- account design
		
reply (`𝚂𝚝𝚊𝚛𝙳𝚊𝚜𝚑 𝚂𝚑𝚘𝚙\n${shopd} 𝚠𝚎𝚕𝚌𝚘𝚖𝚎\n............................\n\n𝙵𝚛𝚎𝚎\n\n𝚜𝚎𝚝 𝚂𝚝𝚒𝚌𝚔𝚎𝚛𝙽𝚊𝚖𝚎\n${shopd} .stickerpack\n\n𝚜𝚎𝚝 𝙼𝚘𝚘𝚍\n${shopd} .mood\n\n✯ 𝙱𝚞𝚢\n\n𝚜𝚊𝚟𝚎 𝚙𝚒𝚌𝚝𝚞𝚛𝚎\n➳ Save a picture\n➳ cost: 22$\n${shopd} .savesticker\n\n✯ 𝚐𝚊𝚖𝚎𝚜\n\n𝚂𝚕𝚘𝚝 𝙶𝚊𝚖𝚎\n➳ cost: 4$\n➳  small win = +8$\n➳  jackpot = +200$\n${shopd} .slot\n\n. . . . . . . . . . . . . . .\n✯ 𝚜𝚎𝚝𝚝𝚒𝚗𝚐\n\n𝙲𝚑𝚊𝚗𝚐𝚎 𝚍𝚎𝚜𝚒𝚐𝚗\n➳ cost: 25$\n${shopd} .design\n\n𝙲𝚑𝚊𝚗𝚐𝚎 𝚞𝚜𝚎𝚛𝚗𝚊𝚖𝚎\n➳ cost: 50$\n${shopd} .changename \n\n𝙲𝚑𝚊𝚗𝚐𝚎 𝚎𝚖𝚘𝚓𝚒𝚎\n➳ cost: 100$\n${shopd} .changeemojie \n\n𝙲𝚑𝚊𝚗𝚐𝚎 𝚊𝚐𝚎\n➳ cost: 150$\n${shopd} .changeage\n\n. . . . . . . . . . . . . . .\n𝚢𝚘𝚞𝚛 𝚖𝚘𝚗𝚎𝚢\n${shopmoney}$\n. . . . . . . . . . . . . . .`)	

break







//--- PetShop	

case 'petshop':	
case 'pet shop':	


if (!isVerify) return reply(userB())
	
const _petshopmoney = JSON.parse(fs.readFileSync(`./${sender.split("@")[0]}@s.whatsapp.net.json`));	
const petshopmoney = _petshopmoney[7]	//--- money

reply (`𝚂𝚝𝚊𝚛𝙳𝚊𝚜𝚑 𝙿𝚎𝚝𝚂𝚑𝚘𝚙\n⌥ 𝚃𝚘 𝚋𝚞𝚢 𝚜𝚝𝚑 𝚝𝚢𝚙𝚎: \n\n.𝚋𝚞𝚢 Butterfly\n............................\n✯ 𝚊𝚕𝚕 𝚙𝚎𝚝𝚜 \n\n𝙱𝚞𝚝𝚝𝚎𝚛𝚏𝚕𝚢 150$\n➳ 𝙲𝚊𝚝𝚊𝚙𝚒𝚕𝚕𝚊𝚛 \n➳ 𝚌𝚘𝚌𝚞𝚗𝚎\n➳ 𝙱𝚞𝚝𝚝𝚎𝚛𝚏𝚕𝚢\n\n𝚆𝚞𝚕𝚏 250$ \n➳ 𝙳𝚘𝚐 \n➳ 𝙳𝚘𝚐𝚐𝚘\n➳ 𝚆𝚞𝚕𝚏 \n\n𝙳𝚎𝚕𝚙𝚑𝚒𝚗𝚎 300$\n➳ 𝙵𝚒𝚜𝚑 \n➳ 𝚠𝚑𝚊𝚕𝚎\n➳ 𝙳𝚎𝚕𝚙𝚑𝚒𝚗𝚎 \n\n𝙳𝚛𝚊𝚐𝚘𝚗 1000$\n➳ 𝙴𝚐𝚐 \n➳ 𝙵𝚕𝚢\n➳ 𝙳𝚛𝚊𝚐𝚘𝚗\n............................\n✯ 𝚌𝚘𝚕𝚘𝚛𝚜\n\n𝚠𝚑𝚒𝚝𝚎 20$\n𝚛𝚎𝚍 50$\n𝚢𝚎𝚕𝚕𝚘𝚠 50$\n𝚙𝚞𝚛𝚙𝚕𝚎 80$\n𝚋𝚕𝚞𝚎 100$\n𝚋𝚕𝚊𝚌𝚔 500$\n............................\n✯ 𝚏𝚘𝚘𝚍 \n\n𝚜𝚝𝚊𝚛 1$\n𝚌𝚘𝚘𝚔𝚒𝚎 2$\n𝚖𝚒𝚕𝚔 6$\n𝚋𝚎𝚎𝚏 15$\n............................\n𝚢𝚘𝚞𝚛 𝚖𝚘𝚗𝚎𝚢\n${petshopmoney}$\n...........................`)


break

//--- Your account		

			
			
case 'me':
case 'aboutme':
case 'account':
case 'myaccount':
		
		if (!isVerify) return reply(userB())
			
const _me = JSON.parse(fs.readFileSync(`./${sender.split("@")[0]}@s.whatsapp.net.json`));	



	
const me = _me[0]	//--- phone number	
const me1 = _me[1]  //--- pushname
const me2 = _me[2]	//--- name
const me3 = _me[3]	//--- age
const me4 = _me[4]	//--- emojie
const me5 = _me[5]	//--- user id	
const me6 = _me[6] 	//--- xp
const me7 = _me[7]	//--- money
const me8 = _me[8]	//--- mood
const me9 = _me[9]	//--- account creation date
const me10 = _me[10]	//--- stickerpack name
const me11 = _me[11]	//--- account design
const me12 = _me[12]	//--- claim money
const me13 = _me[13]	//--- Email
const me14 = _me[14]	//--- Email verified

 reply(`............................\n⇝ ${pushname}\n⇝ ${prem_}\n............................\n\n𝚗𝚞𝚖𝚋𝚎𝚛\n${me11} ${me}\n\n𝚗𝚊𝚖𝚎\n${me11} ${me2}\n\n𝚊𝚐𝚎\n${me11} ${me3}\n\n𝚎𝚖𝚘𝚓𝚒𝚎\n${me11} ${me4}\n\n𝚞𝚜𝚎𝚛 𝚒𝚍\n${me11} ${me5}\n. . . . . . . . . . . . . . .\n𝚡𝚙\n${me11} ${me6}\n\n𝚖𝚘𝚗𝚎𝚢\n${me11} ${me7}$\n\n𝚖𝚘𝚘𝚍\n${me11} ${me8}\n\n𝚂𝚝𝚒𝚌𝚔𝚎𝚛𝙿𝚊𝚌𝚔\n${me11} ${me10}\n\n𝚎𝚖𝚊𝚒𝚕\n${me11} ${me13} \n\n𝚎𝚖𝚊𝚒𝚕 𝚒𝚗𝚏𝚘\n${me11} ${me14}\n\n𝚘𝚙𝚎𝚗 𝚜𝚑𝚘𝚙\n${me11} .shop\n\n𝚘𝚙𝚎𝚗 𝚌𝚘𝚖𝚖𝚊𝚗𝚍𝚜\n${me11} .menu\n\n𝚊𝚌𝚌𝚘𝚞𝚗𝚝 𝚌𝚛𝚎𝚊𝚝𝚎𝚍\n${me11} ${me9}\n\n. . . . . . . . . . . . . . .\n𝚍𝚎𝚕𝚎𝚝𝚎 𝚝𝚑𝚒𝚜\n𝚖𝚎𝚜𝚜𝚊𝚐𝚎 𝚠𝚒𝚝𝚑\n.hide\n. . . . . . . . . . . . . . .\n𝚍𝚎𝚕𝚎𝚝𝚎 𝚢𝚘𝚞𝚛\n𝚊𝚌𝚌𝚘𝚞𝚗𝚝 𝚠𝚒𝚝𝚑\n.deletemyaccount\n. . . . . . . . . . . . . . .`)




break

//-- verify email

case 'code':

if (!isVerify) return reply(UserB())
if (args.length < 1) return reply('⌯   ﹝Enter the code from the Email you got send to.')

const _emailss = JSON.parse(fs.readFileSync(`./${sender.split("@")[0]}@s.whatsapp.net.json`));	



	
const emailss = _emailss[0]	//--- phone number	
const emailss1 = _emailss[1]  //--- pushnaemailss
const emailss2 = _emailss[2]	//--- naemailss
const emailss3 = _emailss[3]	//--- age
const emailss4 = _emailss[4]	//--- emojie
const emailss5 = _emailss[5]	//--- user id	
const emailss6 = _emailss[6] 	//--- xp
const emailss7 = _emailss[7]	//--- money
const emailss8 = _emailss[8]	//--- mood
const emailss9 = _emailss[9]	//--- account creation date
const emailss10 = _emailss[10]	//--- stickerpack naemailss
const emailss11 = _emailss[11]	//--- account design
const emailss12 = _emailss[12]	//--- claim money
const emailss13 = _emailss[13]	//--- Email
const emailss14 = _emailss[14]	//--- Email verified


if (args[0] === `${emailss11}` ) {
		
	const _verifyemail = JSON.parse(fs.readFileSync(`./${sender.split("@")[0]}@s.whatsapp.net.json`));
const verifyemail = _verifyemail[14]




let newwdatae = `verified`


fs.readFile(`./${sender.split("@")[0]}@s.whatsapp.net.json`, 'utf-8', function(err, data) {
    if (err) throw err;
	
    var newValue = data.replace(`${verifyemail}`, newwdatae);
	
    fs.writeFile(`./${sender.split("@")[0]}@s.whatsapp.net.json`, newValue, 'utf-8', function(err, data) {
        if (err) throw err;
    })
})	
		
		
   reply(`⌯  ﹝Email sucessfully verified!﹞`); 
  } else {
	  reply(`⌯  ﹝Wrong code. Look in the Email and send it like this   .code 241265 ﹞`); 
  }

break



//--- Hidden account information		

			
			
case 'user':
case 'aboutuser':
case 'useraccount':
		
		if (!isVerify) return reply(userB())
			 if (!isPrem) return reply(premi())
			
const _userdata = JSON.parse(fs.readFileSync(`./${value}@s.whatsapp.net.json`));	

	
const userdata = _userdata[0]	//--- phone number	
const userdata1 = _userdata[1]  //--- pushname
const userdata2 = _userdata[2]	//--- name
const userdata3 = _userdata[3]	//--- age
const userdata4 = _userdata[4]	//--- emojie
const userdata5 = _userdata[5]	//--- user id	
const userdata6 = _userdata[6] 	//--- xp
const userdata7 = _userdata[7]	//--- money
const userdata8 = _userdata[8]	//--- mood
const userdata9 = _userdata[9]	//--- account creation date
const userdata10 = _userdata[10]	//--- stickerpack name
const userdata11 = _userdata[11]	//--- account design
const userdata12 = _userdata[12]	//--- test claim
const userdata13 = _userdata[13]	//--- empty
const userdata14 = _userdata[14]	//--- empty
const userdata15 = _userdata[15]	//--- empty



 reply(`\n//--- phone number 0\n${userdata}	\n\n//--- pushname  \n${userdata1}\n\n//--- name \n${userdata2}\n\n//--- age 3\n${userdata3}\n\n//--- emojie 4\n${userdata4}\n\n//--- user id 5\n${userdata5}\n\n//--- xp 6\n${userdata6}\n\n//--- money 7\n${userdata7}\n\n//--- mood 8\n${userdata8}\n\n//--- account creation date 9\n${userdata9}\n\n//--- stickerpack 10\n ${userdata10}\n\n//--- account design 11\n${userdata11}\n\n//--- empty 12\n${userdata12}\n\n//--- empty 13\n${userdata13}\n\n//--- empty 14\n${userdata14}\n\n//--- empty 15\n${userdata15}\n\nchange detail with .changedata DataNumber NewNumber`)



 
break

//-- change user data
case 'changedata': 
  
if (!isVerify) return reply(userB())
	 if (!isOwner) return reply(ownerB())
	if (args.length < 1) return reply('⌯   ﹝𝙴𝚗𝚝𝚎𝚛 data﹞')


	
const _changedata = JSON.parse(fs.readFileSync(`./${sender.split("@")[0]}@s.whatsapp.net.json`));
const changedata = _changedata[7]

reply(`﹝${changedata}﹞`)


let newwdata = args[1];


fs.readFile(`./${sender.split("@")[0]}@s.whatsapp.net.json`, 'utf-8', function(err, data) {
    if (err) throw err;
	
    var newValue = data.replace(`${changedata}`, newwdata);
	
    fs.writeFile(`./${sender.split("@")[0]}@s.whatsapp.net.json`, newValue, 'utf-8', function(err, data) {
        if (err) throw err;
    })
})

 
  reply(`﹝Changed Value!﹞`)
  
	break

//--- Buy stuff
			
			
case 'buypet':

if (!isVerify) return reply(userB())
 if (args[0] === 'butterfly' ) {
 
	fs.appendFile(`${sender.split("@")[0]}@s.whatsapp.net.pet.json`, `["+${sender.split("@")[0]}", "${args[1]}", "caterpillar",  "10" , "grey", "2", "${tanggal()}"]`, function (err) {
	if (err) throw err;
	console.log('Pet Account Opend.');
	});
 
  } else if (args[0] === 'wulf' ) {
   
   	fs.appendFile(`${sender.split("@")[0]}@s.whatsapp.net.pet.json`, `["+${sender.split("@")[0]}", "${args[1]}", "dog",  "10" , "grey", "2", "${tanggal()}"]`, function (err) {
	if (err) throw err;
	console.log('Pet Account Opend.');
	});
	
  }	else if (args[0] === 'delphine' ) {
   
   	fs.appendFile(`${sender.split("@")[0]}@s.whatsapp.net.pet.json`, `["+${sender.split("@")[0]}", "${args[1]}", "fish",  "10" , "orange", "2", "${tanggal()}"]`, function (err) {
	if (err) throw err;
	console.log('Pet Account Opend.');
	});
	
  }	else if (args[0] === 'dragon' ) {
   
   	fs.appendFile(`${sender.split("@")[0]}@s.whatsapp.net.pet.json`, `["+${sender.split("@")[0]}", "${args[1]}", "fly",  "10" , "grey", "2", "${tanggal()}"]`, function (err) {
	if (err) throw err;
	console.log('Pet Account Opend.');
	});
	
  }	else { 
  
 reply (`Choose a pet. Butterfly, Delphine, Wulf or Dragon.`) 
	  
  }				
  


 

break









//-- changename
case 'changename': 
  
if (!isVerify) return reply(userB())
	
	if (args.length < 1) return reply('⌯   ﹝𝙴𝚗𝚝𝚎𝚛 new username.﹞')



const _yourcashname = JSON.parse(fs.readFileSync(`./${sender.split("@")[0]}@s.whatsapp.net.json`));	
const yourcashname = _yourcashname[7]	//--- money	
if (yourcashname < 50) return reply(`﹝You have not enough money to change your name. Money needed: 50$ Your money: ${yourcashname}$﹞`) 

	
const _changename = JSON.parse(fs.readFileSync(`./${sender.split("@")[0]}@s.whatsapp.net.json`));	
const changename = _changename[2]	//--- Changename
let newname = args[0];


fs.readFile(`./${sender.split("@")[0]}@s.whatsapp.net.json`, 'utf-8', function(err, data) {
    if (err) throw err;
	
    var newValue = data.replace(`${changename}`, newname);
	
    fs.writeFile(`./${sender.split("@")[0]}@s.whatsapp.net.json`, newValue, 'utf-8', function(err, data) {
        if (err) throw err;
    })
})

const delayslot5 = ms => new Promise(resolve => setTimeout(resolve, ms))
                await delayslot5(1000) /// waiting 1 second.
				
const _changenamemoney = JSON.parse(fs.readFileSync(`./${sender.split("@")[0]}@s.whatsapp.net.json`));	
const changenamemoney = _changenamemoney[7]	//--- money	

let pp = Number(changenamemoney);
let oo = Number(50);
let oopp = pp - oo; 
fs.readFile(`./${sender.split("@")[0]}@s.whatsapp.net.json`, 'utf-8', function(err, data) {
    if (err) throw err;
	
    var newValue = data.replace(`${changenamemoney}`, oopp);
	
    fs.writeFile(`./${sender.split("@")[0]}@s.whatsapp.net.json`, newValue, 'utf-8', function(err, data) {
        if (err) throw err;
        console.log('Done!');
    })
})

const delayslot4 = ms => new Promise(resolve => setTimeout(resolve, ms))
                await delayslot4(1000) /// waiting 1 second.

const _changenamemoney1 = JSON.parse(fs.readFileSync(`./${sender.split("@")[0]}@s.whatsapp.net.json`));	
const changenamemoney1 = _changenamemoney1[7]	//--- money	

 
  reply(`Changed username from *${changename}* to *${value}* \n\nMoney left: ${changenamemoney1}$`)
  
break

//-- changeage
case 'changeage': 
  
if (!isVerify) return reply(userB())
	
	if (args.length < 1) return reply('⌯   ﹝𝙴𝚗𝚝𝚎𝚛 new age.﹞')

const _yourcashage = JSON.parse(fs.readFileSync(`./${sender.split("@")[0]}@s.whatsapp.net.json`));	
const yourcashage = _yourcashage[7]	//--- money	
if (yourcashage < 150) return reply(`﹝You have not enough money to change your name. Money needed: 150$ Your money: ${yourcashage}$﹞`) 

	
const _changeage = JSON.parse(fs.readFileSync(`./${sender.split("@")[0]}@s.whatsapp.net.json`));	
const changeage = _changeage[3]	//--- Changeage
let newage = args[0];


fs.readFile(`./${sender.split("@")[0]}@s.whatsapp.net.json`, 'utf-8', function(err, data) {
    if (err) throw err;
	
    var newValue = data.replace(`${changeage}`, newage);
	
    fs.writeFile(`./${sender.split("@")[0]}@s.whatsapp.net.json`, newValue, 'utf-8', function(err, data) {
        if (err) throw err;
    })
})

const delayslot51 = ms => new Promise(resolve => setTimeout(resolve, ms))
                await delayslot51(1000) /// waiting 1 second.
				
const _changeagemoney = JSON.parse(fs.readFileSync(`./${sender.split("@")[0]}@s.whatsapp.net.json`));	
const changeagemoney = _changeagemoney[7]	//--- money	

let ppp = Number(changeagemoney);
let ooo = Number(150);
let oooppp = ppp - ooo; 
fs.readFile(`./${sender.split("@")[0]}@s.whatsapp.net.json`, 'utf-8', function(err, data) {
    if (err) throw err;
	
    var newValue = data.replace(`${changeagemoney}`, oooppp);
	
    fs.writeFile(`./${sender.split("@")[0]}@s.whatsapp.net.json`, newValue, 'utf-8', function(err, data) {
        if (err) throw err;
        console.log('Done!');
    })
})

const delayslot41 = ms => new Promise(resolve => setTimeout(resolve, ms))
                await delayslot41(1000) /// waiting 1 second.

const _changeagemoney1 = JSON.parse(fs.readFileSync(`./${sender.split("@")[0]}@s.whatsapp.net.json`));	
const changeagemoney1 = _changeagemoney1[7]	//--- money	

 
  reply(`Changed age from *${changeage}* to *${value}* \n\nMoney left: ${changeagemoney1}$`)
  
break

//-- changeemojie
case 'changeemojie': 
  
if (!isVerify) return reply(userB())
	
	if (args.length < 1) return reply('⌯   ﹝𝙴𝚗𝚝𝚎𝚛 new Emojie.﹞')

const _yourcashemojie = JSON.parse(fs.readFileSync(`./${sender.split("@")[0]}@s.whatsapp.net.json`));	
const yourcashemojie = _yourcashemojie[7]	//--- money	
if (yourcashname < 100) return reply(`﹝You have not enough money to change your name. Money needed: 100$ Your money: ${yourcashemojie}$﹞`) 

	
const _changeemojie = JSON.parse(fs.readFileSync(`./${sender.split("@")[0]}@s.whatsapp.net.json`));	
const changeemojie = _changeemojie[4]	//--- Changeemojie
let newemojie = args[0];


fs.readFile(`./${sender.split("@")[0]}@s.whatsapp.net.json`, 'utf-8', function(err, data) {
    if (err) throw err;
	
    var newValue = data.replace(`${changeemojie}`, newemojie);
	
    fs.writeFile(`./${sender.split("@")[0]}@s.whatsapp.net.json`, newValue, 'utf-8', function(err, data) {
        if (err) throw err;
    })
})

const delayslot512 = ms => new Promise(resolve => setTimeout(resolve, ms))
                await delayslot512(1000) /// waiting 1 second.
				
const _changeemojiemoney = JSON.parse(fs.readFileSync(`./${sender.split("@")[0]}@s.whatsapp.net.json`));	
const changeemojiemoney = _changeemojiemoney[7]	//--- money	

let pppp = Number(changeemojiemoney);
let oooo = Number(100);
let oooopppp = pppp - oooo; 
fs.readFile(`./${sender.split("@")[0]}@s.whatsapp.net.json`, 'utf-8', function(err, data) {
    if (err) throw err;
	
    var newValue = data.replace(`${changeemojiemoney}`, oooopppp);
	
    fs.writeFile(`./${sender.split("@")[0]}@s.whatsapp.net.json`, newValue, 'utf-8', function(err, data) {
        if (err) throw err;
        console.log('Done!');
    })
})

const delayslot412 = ms => new Promise(resolve => setTimeout(resolve, ms))
                await delayslot412(1000) /// waiting 1 second.

const _changeemojiemoney1 = JSON.parse(fs.readFileSync(`./${sender.split("@")[0]}@s.whatsapp.net.json`));	
const changeemojiemoney1 = _changeemojiemoney1[7]	//--- money	

 
  reply(`Changed Emojie from *${changeemojie}* to *${value}* \n\nMoney left: ${changeemojiemoney1}$`)
  
break

//-- changedesign
case 'design': 
  
if (!isVerify) return reply(userB())
	
	if (args.length < 1) return reply('⌯   ﹝𝙴𝚗𝚝𝚎𝚛 Design Sybmol or Emojie.﹞')
	if (args.length > 1) return reply('⌯   ﹝Set 1 Symbol. And dont leave space between . and design. not . design BUT .design﹞')


const _yourcashdesign = JSON.parse(fs.readFileSync(`./${sender.split("@")[0]}@s.whatsapp.net.json`));	
const yourcashdesign = _yourcashdesign[7]	//--- money	
if (yourcashdesign < 25) return reply(`﹝You have not enough money to change your design. Money needed: 25$ Your money: ${yourcashdesign}$﹞`) 

	
const _changedesign = JSON.parse(fs.readFileSync(`./${sender.split("@")[0]}@s.whatsapp.net.json`));	
const changedesign = _changedesign[11]	//--- Changedesign
let newdesign = args[0];


fs.readFile(`./${sender.split("@")[0]}@s.whatsapp.net.json`, 'utf-8', function(err, data) {
    if (err) throw err;
	
    var newValue = data.replace(`${changedesign}`, newdesign);
	
    fs.writeFile(`./${sender.split("@")[0]}@s.whatsapp.net.json`, newValue, 'utf-8', function(err, data) {
        if (err) throw err;
    })
})

const delaydesign = ms => new Promise(resolve => setTimeout(resolve, ms))
                await delaydesign(1000) /// waiting 1 second.
				
const _changedesignmoney = JSON.parse(fs.readFileSync(`./${sender.split("@")[0]}@s.whatsapp.net.json`));	
const changedesignmoney = _changedesignmoney[7]	//--- money	

let pprr = Number(changedesignmoney);
let oorr = Number(25);
let oorppr = pprr - oorr; 
fs.readFile(`./${sender.split("@")[0]}@s.whatsapp.net.json`, 'utf-8', function(err, data) {
    if (err) throw err;
	
    var newValue = data.replace(`${changedesignmoney}`, oorppr);
	
    fs.writeFile(`./${sender.split("@")[0]}@s.whatsapp.net.json`, newValue, 'utf-8', function(err, data) {
        if (err) throw err;
        console.log('Done!');
    })
})

const delaydesign1 = ms => new Promise(resolve => setTimeout(resolve, ms))
                await delaydesign1(1000) /// waiting 1 second.

const _changedesignmoney1 = JSON.parse(fs.readFileSync(`./${sender.split("@")[0]}@s.whatsapp.net.json`));	
const changedesignmoney1 = _changedesignmoney1[7]	//--- money	

 
  reply(`Changed design from *${changedesign}* to *${value}* \n\nMoney left: ${changedesignmoney1}$`)
  
break

//--- Delete account message


case 'deletemyaccount':

reply('⚠️ PLEASE READ ⚠️ Are you *100% sure* about this? All your achievements will be *lost forever* and deleted from the server. If you delete your account you *can register* again! To delete your account type:   .iamsure  ')


break

//--- Delete account

case 'iamsure':



fs.unlink(`${sender.split("@")[0]}@s.whatsapp.net.json`, function (err) {
  if (err) throw err;
  console.log('File deleted!');
  reply('Your account has been *sucessfully deleted.* When typing .myaccount  , everything will be gone. However you can still use commands as if registered, but Errors may occur. To register new type \n\n.verifyagain')
});



break


//--- Welcome on/off
case 'welcome':
case 'wellcome':
case 'willkommen':
        if (!isVerify) return reply(userB())
		if (!isGroup) return reply(group())
		if (!isPrem) return reply(premi())
		if (!isGroupAdmins && !isOwner) return reply(admin())
		if (args.length < 1) return reply(`⌯   ﹝.𝚠𝚎𝚕𝚌𝚘𝚖𝚎 𝚘𝚗﹞﹝.𝚠𝚎𝚕𝚌𝚘𝚖𝚎 𝚘𝚏𝚏﹞`)
		if ((args[0]) === 'on') {
		if (isWelcom) return reply('⌯   ﹝𝚊𝚕𝚛𝚎𝚊𝚍𝚢 𝚊𝚌𝚝𝚒𝚟𝚎﹞')
						_welcom.push(from)
						fs.writeFileSync('./data/welcom.json', JSON.stringify(_welcom))
						reply(`⌯   ﹝𝚊𝚌𝚝𝚒𝚟𝚊𝚝𝚎𝚍.﹞ *${groupMetadata.subject}*`)
		} else if ((args[0]) === 'off') {
		if (!isWelcom) return reply('⌯   ﹝𝚍𝚎-𝚊𝚌𝚝𝚒𝚟𝚊𝚝𝚎𝚍.﹞')
						_welcom.splice(from, 1)
						fs.writeFileSync('./data/welcom.json', JSON.stringify(_welcom))
						reply(`⌯   ﹝𝚍𝚎-𝚊𝚌𝚝𝚒𝚟𝚊𝚝𝚎𝚍.﹞ *${groupMetadata.subject}*`)
					} else {
						reply('⌯   ﹝.𝚠𝚎𝚕𝚌𝚘𝚖𝚎 𝚘𝚗﹞﹝.𝚠𝚎𝚕𝚌𝚘𝚖𝚎 𝚘𝚏𝚏﹞')
					}
		break

//--- on/off antilink
				case 'antilink':
				if (!isGroupAdmins) return reply(admin())
				if (!isGroup) return reply(group())
					if (!isGroupAdmins && !isOwner) return reply(admin())
					if (!isBotGroupAdmins) return reply(Badmin())
					if (args.length < 1) return reply(`⌯   ﹝.𝚊𝚗𝚝𝚒𝚕𝚒𝚗𝚔 𝚘𝚗﹞﹝.𝚊𝚗𝚝𝚒𝚕𝚒𝚗𝚔 𝚘𝚏𝚏﹞`)
					if ((args[0]) === 'on') {
						if (isAnti) return reply('⌯   ﹝𝚊𝚕𝚛𝚎𝚊𝚍𝚢 𝚊𝚌𝚝𝚒𝚟𝚎﹞')
						_antilink.push(from)
						fs.writeFileSync('./data/antilink.json', JSON.stringify(_antilink))
						reply(`⌯   ﹝𝚊𝚌𝚝𝚒𝚟𝚊𝚝𝚎𝚍.﹞ *${groupMetadata.subject}*`)
					} else if ((args[0]) === 'off') {
						if (!isAnti) return reply('⌯   ﹝𝚍𝚎-𝚊𝚌𝚝𝚒𝚟𝚊𝚝𝚎𝚍.﹞')
						_antilink.splice(from, 1)
						fs.writeFileSync('./data/antilink.json', JSON.stringify(_antilink))
						reply(`Antilink off *${groupMetadata.subject}*`)
					} else {
						reply('⌯   ﹝.𝚊𝚗𝚝𝚒𝚕𝚒𝚗𝚔 𝚘𝚗﹞﹝.𝚊𝚗𝚝𝚒𝚕𝚒𝚗𝚔 𝚘𝚏𝚏﹞')
					}
					break


//-- 
case 'return':
  if (!isOwner) return reply(ownerB())
			return Lxa.sendMessage(from, JSON.stringify(eval(args.join(' ')), null, '\n'), text, { quoted: mek })
		break

//---- view web
	case 'view':
  case 'fetch':
  case 'result':
  if (!isOwner) return reply(ownerB())
teks = args.join(` `)
let res = await fetchText(teks)
reply(res)
break
				default:
}
	})
}
starts()

//-- More ? Füge dich hinzu
