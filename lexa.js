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
  AcceptInvite,
  ProxyAgent,
  WAMetric, 
  WAFlag, 
  WANode,
  WAGroupCreateResponse,
  waChatKey,
  mentionedJid,
  WAGroupModification,
  processTime,
  ChatModification,
  WAInitResponse,
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
const _tipps = JSON.parse(fs.readFileSync('./result/en/tipps.json'));
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

const _dashtype = JSON.parse(fs.readFileSync('./result/games/dashtype.json'));
const _shiny = JSON.parse(fs.readFileSync('./result/games/shiny.json'));

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
myMonths = ["Jan","Feb","March","April","May","Jun","Jul","Aug","Sept","Octob","Nov","Dec"];
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
let prem_ = '𝐹𝑎𝑟𝑚𝑒𝑟'
			if (isPrem) {
			prem_ = '𝑃𝑟𝑜'
			} 
			if (isOwner) {
			prem_ = '𝐾𝑖𝑛𝑔'
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

switch(is) {
case '🖇️':
reply(`𝚃𝚎𝚛𝚖𝚜 𝚘𝚏 𝚂𝚎𝚛𝚟𝚒𝚌𝚎

𝘞𝘩𝘢𝘵 𝘪𝘴 𝘨𝘦𝘵𝘵𝘪𝘯𝘨 𝘴𝘢𝘷𝘦𝘥 𝘸𝘩𝘦𝘯 𝘪 𝘳𝘦𝘨𝘪𝘴𝘵𝘦𝘳?

StarDash stores your pushname, name, age, emojie, account creation date, phone number and email adresse. 
Other then that it saves your money, xp, mood, stickerpack name, id, email info and saved image.

You can always delete your account, after created with the command, .deletemyaccount

𝘞𝘩𝘰 𝘤𝘢𝘯 𝘷𝘪𝘦𝘸 𝘮𝘺 𝘥𝘢𝘵𝘢?

Only you can see it, when typing  .myaccount or other commands. However if you do it in the group, all group members can see. 
For technical problems, the Server Host (owner) can also view and change them.

𝑀𝑎𝑑𝑒 𝑖𝑛 𝐺𝑒𝑟𝑚𝑎𝑛𝑦`)

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



switch(is) { case '.🇦🇫': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Afghanistan') }  switch(is) { case '.🇦🇽': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Åland Islands') }  switch(is) { case '.🇦🇱': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Albania') }  switch(is) { case '.🇩🇿': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Algeria') }  switch(is) { case '.🇦🇸': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ American Samoa') }  switch(is) { case '.🇦🇩': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Andorra') }  switch(is) { case '.🇦🇴': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Angola') }  switch(is) { case '.🇦🇮': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Anguilla') }  switch(is) { case '.🇦🇶': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Antarctica') }  switch(is) { case '.🇦🇬': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Antigua and Barbuda') } switch(is) { case '.🇦🇷': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Argentina') } switch(is) { case '.🇦🇲': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Armenia') } switch(is) { case '.🇦🇼': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Aruba') } switch(is) { case '.🇦🇺': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Australia') } switch(is) { case '.🇦🇹': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Austria') } switch(is) { case '.🇦🇿': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Azerbaijan') } switch(is) { case '.🇧🇸': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Bahamas') } switch(is) { case '.🇧🇭': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ 🇧🇭') } switch(is) { case '.🇧🇩': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Bangladesh') } switch(is) { case '.🇧🇧': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Barbados') } switch(is) { case '.🇧🇾': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Belarus') } switch(is) { case '.🇧🇪': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Belgium') } switch(is) { case '.🇧🇿': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Belize') } switch(is) { case '.🇧🇯': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Benin') } switch(is) { case '.🇧🇲': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Bermuda') } switch(is) { case '.🇧🇹': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Bhutan') } switch(is) { case '.🇧🇴': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Bolivia') } switch(is) { case '.🇧🇦': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Bosnia and Herzegovina') } switch(is) { case '.🇧🇼': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Botswana') } switch(is) { case '.🇧🇻': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Bouvet Island') } switch(is) { case '.🇧🇷': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Brazil') } switch(is) { case '.🇮🇴': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ British Indian Ocean Territory') } switch(is) { case '.🇧🇳': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Brunei') } switch(is) { case '.🇧🇬': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Bulgaria') } switch(is) { case '.🇧🇫': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Burkina Faso') } switch(is) { case '.🇧🇮': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Burundi') } switch(is) { case '.🇰🇭': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Cambodia') } switch(is) { case '.🇨🇲': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Cameroon') } switch(is) { case '.🇨🇦': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Canada') } switch(is) { case '.🇨🇻': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Cape Verde') } switch(is) { case '.🇧🇶 ': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Caribbean Netherlands') } switch(is) { case '.🇰🇾': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Cayman Islands') }switch(is) { case '.🇨🇫': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Central African Republic') } switch(is) { case '.🇹🇩': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Chad') } switch(is) { case '.🇨🇱': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Chile') } switch(is) { case '.🇨🇳': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ China') } switch(is) { case '.🇨🇽': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Christmas Island') } switch(is) { case '.🇨🇨': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Cocos (Keeling) Islands') } switch(is) { case '.🇨🇴': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Colombia') } switch(is) { case '.🇰🇲': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Comoros') } switch(is) { case '.🇨🇬': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Republic of the Congo') } switch(is) { case '.🇨🇩': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ DR Congo') } switch(is) { case '.🇨🇰': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Cook Islands') } switch(is) { case '.🇨🇷': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Costa Rica') } switch(is) { case '.🇨🇮': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Côte dIvoire Ivory Coast') } switch(is) { case '.🇭🇷': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Croatia') } switch(is) { case '.🇨🇺': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Cuba') } switch(is) { case '.🇨🇼': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Curaçao') } switch(is) { case '.🇨🇾': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Cyprus') } switch(is) { case '.🇨🇿': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Czechia') } switch(is) { case '.🇩🇰': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Denmark') } switch(is) { case '.🇩🇯': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Djibouti') } switch(is) { case '.🇩🇲': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Dominica') } switch(is) { case '.🇩🇴': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Dominican Republic') } switch(is) { case '.🇪🇨': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Ecuador') } switch(is) { case '.🇪🇬 ': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Egypt') } switch(is) { case '.🏴󠁧󠁢󠁥󠁮󠁧󠁿 ': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ England') } switch(is) { case '.🇬🇶': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Equatorial Guinea') } switch(is) { case '.🇪🇷': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Eritrea') } switch(is) { case '.🇪🇪': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Estonia') } switch(is) { case '.🇸🇿': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Eswatini Swaziland') } switch(is) { case '.🇪🇹': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Ethiopia') } switch(is) { case '.🇫🇰 ': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Falkland Islands') } switch(is) { case '.🇫🇴': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Faroe Islands') } switch(is) { case '.🇫🇯 ': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Fiji') } switch(is) { case '.🇫🇮': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Finland') } switch(is) { case '.🇫🇷': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ France') } switch(is) { case '.🇬🇫': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ French Guiana') } switch(is) { case '.🇵🇫': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ French Polynesia') } switch(is) { case '.🇹🇫': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ French Southern and Antarctic Lands') } switch(is) { case '.🇬🇦': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Gabon') } switch(is) { case '.🇬🇲': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Gambia') } switch(is) { case '.🇬🇪': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Georgia') } switch(is) { case '.🇩🇪': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Germany') } switch(is) { case '.🇬🇭': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Ghana') } switch(is) { case '.🇬🇮': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Gibraltar') } switch(is) { case '.🇬🇷': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Greece') } switch(is) { case '.🇬🇱': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Greenland') } switch(is) { case '.🇬🇩': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Grenada') } switch(is) { case '.🇬🇵': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Guadeloupe') } switch(is) { case '.🇬🇺': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Guam') } switch(is) { case '.🇬🇹': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Guatemala') } switch(is) { case '.🇬🇬': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Guernsey') } switch(is) { case '.🇬🇳': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Guinea') } switch(is) { case '.🇬🇼': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Guinea-Bissau') } switch(is) { case '.🇬🇾': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Guyana') } switch(is) { case '.🇭🇹': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Haiti') } switch(is) { case '.🇭🇲 ': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Heard Island and McDonald Islands') } switch(is) { case '.🇭🇳': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Honduras') } switch(is) { case '.🇭🇰': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Hong Kong') } switch(is) { case '.🇭🇺': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Hungary') } switch(is) { case '.🇮🇸': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Iceland') } switch(is) { case '.🇮🇳': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ India') } switch(is) { case '.🇮🇩': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Indonesia') } switch(is) { case '.🇮🇷': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Iran') }switch(is) { case '.🇮🇶': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Iraq') }switch(is) { case '.🇮🇪': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Ireland') }switch(is) { case '.🇮🇲': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Isle of Man') }switch(is) { case '.🇮🇱': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Israel') }switch(is) { case '.🇮🇹': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Italy') }switch(is) { case '.🇯🇲': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Jamaica') }switch(is) { case '.🇯🇵': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Japan') }switch(is) { case '.🇯🇪': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Jersey') }switch(is) { case '.🇯🇴': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Jordan') }switch(is) { case '.🇰🇿': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Kazakhstan') }switch(is) { case '.🇰🇪': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Kenya') }switch(is) { case '.🇰🇮': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Kiribati') }switch(is) { case '.🇰🇵': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ North Korea') }switch(is) { case '.🇰🇷': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ South Korea') }switch(is) { case '.🇽🇰': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Kosovo') }switch(is) { case '.🇰🇼': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Kuwait') }switch(is) { case '.🇰🇬': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Kyrgyzstan') }switch(is) { case '.🇱🇦': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Laos') }switch(is) { case '.🇱🇻': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Latvia') }switch(is) { case '.🇱🇧': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Lebanon') }switch(is) { case '.🇱🇸': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Lesotho') }switch(is) { case '.🇱🇷': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Liberia') }switch(is) { case '.🇱🇾': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Libya') }switch(is) { case '.🇱🇮': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Liechtenstein') }switch(is) { case '.🇱🇹': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Lithuania') }switch(is) { case '.🇱🇺': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Luxembourg') } switch(is) { case '.🇲🇴': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Macau') } switch(is) { case '.🇲🇬': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Madagascar') }switch(is) { case '.🇲🇼': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Malawi') }switch(is) { case '.🇲🇾': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Malaysia') }switch(is) { case '.🇲🇻': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Maldives') }switch(is) { case '.🇲🇱': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Mali') }switch(is) { case '.🇲🇹': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Malta') }switch(is) { case '.🇲🇭': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Marshall Islands') }switch(is) { case '.🇲🇶 ': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Martinique') }switch(is) { case '.🇲🇷': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Mauritania') }switch(is) { case '.🇲🇺 ': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Mauritius') }switch(is) { case '.🇾🇹': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Mayotte') }switch(is) { case '.🇲🇽': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Mexico') }switch(is) { case '.🇫🇲': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Micronesia') }switch(is) { case '.🇲🇩': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Moldova') }switch(is) { case '.🇲🇨': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Monaco') } switch(is) { case '.🇲🇳 ': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Mongolia') }switch(is) { case '.🇲🇪': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Montenegro') }switch(is) { case '.🇲🇸': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Montserrat') }switch(is) { case '.🇲🇦': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Morocco') }switch(is) { case '.🇲🇿': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Mozambique') }switch(is) { case '.🇲🇲': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Myanmar') }switch(is) { case '.🇳🇦': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Namibia') }switch(is) { case '.🇳🇷': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Nauru') }switch(is) { case '.🇳🇵': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Nepal') }switch(is) { case '.🇳🇱': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Netherlands') }switch(is) { case '.🇳🇨': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ New Caledonia') }switch(is) { case '.🇳🇿': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ New Zealand') }switch(is) { case '.🇳🇮': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Nicaragua') }switch(is) { case '.🇳🇪': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Niger') }switch(is) { case '.🇳🇬': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Nigeria') }switch(is) { case '.🇳🇺': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Niue') }switch(is) { case '.🇳🇫': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Norfolk Island') }switch(is) { case '.🇲🇰 ': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ North Macedonia') }switch(is) { case '.🇲🇵': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Northern Mariana Islands') }switch(is) { case '.🇳🇴': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Norway') }switch(is) { case '.🇴🇲 ': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Oman') }switch(is) { case '.🇵🇰': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Pakistan') }switch(is) { case '.🇵🇼': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Palau') }switch(is) { case '.🇵🇸': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Palestine') }switch(is) { case '.🇵🇦': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Panama') }switch(is) { case '.🇵🇬': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Papua New Guinea') }switch(is) { case '.🇵🇾': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Paraguay') }switch(is) { case '.🇵🇪': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Peru') }switch(is) { case '.🇵🇭': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Philippines') }switch(is) { case '.🇵🇳': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Pitcairn Islands') }switch(is) { case '.🇵🇱': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Poland') }switch(is) { case '.🇵🇹': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Portugal') }switch(is) { case '.🇵🇷': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Puerto Rico') }switch(is) { case '.🇶🇦': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Qatar') }switch(is) { case '.🇷🇪': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Réunion') }switch(is) { case '.🇷🇴': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Romania') }switch(is) { case '.🇷🇺': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Russia') }switch(is) { case '.🇷🇼': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Rwanda') }switch(is) { case '.🇧🇱': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Saint Barthélemy') }switch(is) { case '.🇸🇭': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Saint Helena, Ascension and Tristan da Cunha') }switch(is) { case '.🇰🇳': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Saint Kitts and Nevis') }switch(is) { case '.🇱🇨': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Saint Lucia') }switch(is) { case '.🇲🇫': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Saint Martin') }switch(is) { case '.🇵🇲': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Saint Pierre and Miquelon') }switch(is) { case '.🇻🇨': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Saint Vincent and the Grenadines') }switch(is) { case '.🇼🇸 ': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Samoa') }switch(is) { case '.🇸🇲': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ San Marino') }switch(is) { case '.🇸🇹': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ São Tomé and Príncipe') }switch(is) { case '.🇸🇦': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Saudi Arabia') }switch(is) { case '.🏴󠁧󠁢󠁳󠁣󠁴󠁿': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Scotland') } switch(is) { case '.🇸🇳': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Senegal') }switch(is) { case '.🇷🇸': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Serbia') }switch(is) { case '.🇸🇨': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Seychelles') }switch(is) { case '.🇸🇱': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Sierra Leone') }switch(is) { case '.🇸🇬': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Singapore') }switch(is) { case '.🇸🇽': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Sint Maarten') }switch(is) { case '.🇸🇰': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Slovakia') }switch(is) { case '.🇸🇮': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Slovenia') }switch(is) { case '.🇸🇧': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Solomon Islands') }switch(is) { case '.🇸🇴': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Somalia') }switch(is) { case '.🇿🇦': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ South Africa') }switch(is) { case '.🇬🇸': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ South Georgia') }switch(is) { case '.🇸🇸': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ South Sudan') }switch(is) { case '.🇪🇸': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Spain') }switch(is) { case '.🇱🇰': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Sri Lanka') }switch(is) { case '.🇸🇩': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Sudan') }switch(is) { case '.🇸🇷': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Suriname') }switch(is) { case '.🇸🇯': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Svalbard and Jan Mayen') }switch(is) { case '.🇸🇪': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Sweden') }switch(is) { case '.🇨🇭': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Switzerland') }switch(is) { case '.🇸🇾': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Syria') }switch(is) { case '.🇹🇼': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Taiwan') }switch(is) { case '.🇹🇯': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Tajikistan') }switch(is) { case '.🇹🇿': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Tanzania') }switch(is) { case '.🇹🇭': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Thailand') }switch(is) { case '.🇹🇱': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Timor-Leste') }switch(is) { case '.🇹🇬': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Togo') }switch(is) { case '.🇹🇰': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Tokelau') }switch(is) { case '.🇹🇴': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Tonga') } switch(is) { case '.🇹🇹': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Trinidad and Tobago ') } switch(is) { case '.🇹🇳': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Tunisia') } switch(is) { case '.🇹🇷': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Turkey') } switch(is) { case '.🇹🇲': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Turkmenistan') } switch(is) { case '.🇹🇨': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Turks and Caicos Islands') } switch(is) { case '.🇹🇻': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Tuvalu') } switch(is) { case '.🇺🇬': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Uganda') } switch(is) { case '.🇺🇦': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Ukraine') } switch(is) { case '.🇦🇪': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ United Arab Emirates') } switch(is) { case '.🇬🇧': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ United Kingdom') } switch(is) { case '.🇺🇸': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ United States') } switch(is) { case '.🇺🇲': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ United States Minor Outlying Islands') } switch(is) { case '.🇺🇾': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Uruguay') } switch(is) { case '.🇺🇿': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Uzbekistan') } switch(is) { case '.🇻🇺': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Vanuatu') } switch(is) { case '.🇻🇦': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Vatican City (Holy See)') } switch(is) { case '.🇻🇪': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Venezuela') } switch(is) { case '.🇻🇳': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Vietnam') } switch(is) { case '.🇻🇬': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ British Virgin Islands') } switch(is) { case '.🇻🇮': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ United States Virgin Islands') } switch(is) { case '.🏴󠁧󠁢󠁷󠁬󠁳󠁿': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Wales') } switch(is) { case '.🇼🇫': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Wallis and Futuna') } switch(is) { case '.🇪🇭': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Western Sahara') } switch(is) { case '.🇾🇪': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Yemen') } switch(is) { case '.🇿🇲': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Zambia') } switch(is) { case '.🇿🇼': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Zimbabwe') }
	
	
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
case 'setstickerpack': 
  
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
case 'setmood': 
  
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





//-- claim money
case 'claim': 
  
if (!isVerify) return reply(userB())
	 if (!isPrem) return reply(premi())

	
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
let oorpprclaim = pprrclaim + oorrclaim; 
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
	
		const slotdesign = _slotme[11]	//--- account design
		


	if (slotme7 < 7) return reply(`${slotdesign} ﹝You have not enough money to play. Your money: ${slotme7}$﹞`) 
		  
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
						await delayslot(3000) /// waiting 1 second.

		const _slotme8 = JSON.parse(fs.readFileSync(`./${sender.split("@")[0]}@s.whatsapp.net.json`));	
		const slotme8 = _slotme8[7]	//--- money	

  reply(`${slotdesign} 𝚂𝚕𝚘𝚝\n\n${slot4}${slot5}${slot6}\n- - - - - - - - - \n${slot1}${slot2}${slot3} ☜︎ ♕︎ 𝙹𝚊𝚌𝚔𝚙𝚘𝚝 ♕︎\n- - - - - - - - - \n${slot7}${slot8}${slot9}\n\n𝚖𝚘𝚗𝚎𝚢 𝚕𝚎𝚏𝚝 ${slotme8}$`)  
}  
  
else if (slot1 == slot2) {	

			let os = Number(14);
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
					await delayslot(3000) /// waiting 1 second.

					const _slotme8 = JSON.parse(fs.readFileSync(`./${sender.split("@")[0]}@s.whatsapp.net.json`));	
					const slotme8 = _slotme8[7]	//--- money	

	reply(`${slotdesign} 𝚂𝚕𝚘𝚝\n\n${slot4}${slot5}${slot6}\n- - - - - - - - - \n${slot1}${slot2}${slot3} ☜︎ 𝚂𝚖𝚊𝚕𝚕 𝚠𝚒𝚗 ♕︎\n- - - - - - - - - \n${slot7}${slot8}${slot9}\n\n𝚖𝚘𝚗𝚎𝚢 𝚕𝚎𝚏𝚝 ${slotme8}$`)  
}

else if (slot2 == slot3) {	

			let os = Number(14);
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
                await delayslot(3000) /// waiting 1 second.

				const _slotme8 = JSON.parse(fs.readFileSync(`./${sender.split("@")[0]}@s.whatsapp.net.json`));	
				const slotme8 = _slotme8[7]	//--- money	

reply(`${slotdesign} 𝚂𝚕𝚘𝚝\n\n${slot4}${slot5}${slot6}\n- - - - - - - - - \n${slot1}${slot2}${slot3} ☜︎ 𝚂𝚖𝚊𝚕𝚕 𝚠𝚒𝚗 ♕︎\n- - - - - - - - - \n${slot7}${slot8}${slot9}\n\n𝚖𝚘𝚗𝚎𝚢 𝚕𝚎𝚏𝚝 ${slotme8}$`)   
}

else if (slot1 == slot3) {	

				let os = Number(14);
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
					await delayslot(3000) /// waiting 1 second.

					const _slotme8 = JSON.parse(fs.readFileSync(`./${sender.split("@")[0]}@s.whatsapp.net.json`));	
					const slotme8 = _slotme8[7]	//--- money	

reply(`${slotdesign} 𝚂𝚕𝚘𝚝\n\n${slot4}${slot5}${slot6}\n- - - - - - - - - \n${slot1}${slot2}${slot3} ☜︎ 𝚂𝚖𝚊𝚕𝚕 𝚠𝚒𝚗 ♕︎\n- - - - - - - - - \n${slot7}${slot8}${slot9}\n\n𝚖𝚘𝚗𝚎𝚢 𝚕𝚎𝚏𝚝 ${slotme8}$`) 

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
                await delayslot(3000) /// waiting 1 second.

				const _slotme8 = JSON.parse(fs.readFileSync(`./${sender.split("@")[0]}@s.whatsapp.net.json`));	
				const slotme8 = _slotme8[7]	//--- money	
	 
reply(`${slotdesign} 𝚂𝚕𝚘𝚝\n\n${slot4}${slot5}${slot6}\n- - - - - - - - - \n${slot1}${slot2}${slot3} ☜︎ 𝙽𝚘 𝚠𝚒𝚗 ♕︎\n- - - - - - - - - \n${slot7}${slot8}${slot9}\n\n𝚖𝚘𝚗𝚎𝚢 𝚕𝚎𝚏𝚝 ${slotme8}$`)  
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

	const _rsongdesign = JSON.parse(fs.readFileSync(`./${sender.split("@")[0]}@s.whatsapp.net.json`));		
	const rsongdesign = _rsongdesign[11]	//--- account design
		
  if (!isVerify) return reply(userB())
  const song = _song[Math.floor(Math.random() * _song.length)]
  reply(`${rsongdesign}﹝𝚁𝚊𝚗𝚍𝚘𝚖 𝚜𝚘𝚗𝚐﹞\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-\n${song}\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-\n✅ StarDash Song`)
break




//-- Tod truth
case 'truth':

		const _truthdesign = JSON.parse(fs.readFileSync(`./${sender.split("@")[0]}@s.whatsapp.net.json`));		
		const truthdesign = _truthdesign[11]	//--- account design
				
  if (!isVerify) return reply(userB())
  const truthen = _truthen[Math.floor(Math.random() * _truthen.length)]
  reply(`${truthdesign}﹝𝚈𝚘𝚞𝚛 𝚝𝚛𝚞𝚝𝚑﹞\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-\n${truthen}\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-\n✅ StarDash Games`)
break


//-- Fakt
case 'fact':

		const _factdesign = JSON.parse(fs.readFileSync(`./${sender.split("@")[0]}@s.whatsapp.net.json`));		
		const factdesign = _factdesign[11]	//--- account design

  if (!isVerify) return reply(userB())
  const facten = _facten[Math.floor(Math.random() * _facten.length)]
  reply(`${factdesign}﹝𝚈𝚘𝚞𝚛 𝚏𝚊𝚌𝚝﹞\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-\n${facten}\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-\n✅ StarDash Facts`)
break



//-- Tod dare
case 'dare':

		const _daredesign = JSON.parse(fs.readFileSync(`./${sender.split("@")[0]}@s.whatsapp.net.json`));		
		const daredesign = _daredesign[11]	//--- account design
		
  if (!isVerify) return reply(userB())
  const dareen = _dareen[Math.floor(Math.random() * _dareen.length)]
  reply(`${daredesign}﹝𝚈𝚘𝚞𝚛 𝚍𝚊𝚛𝚎﹞\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-\n${dareen}\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-\n✅ StarDash Games`)
break



//-- pokemon
case 'pokemon':
  if (!isVerify) return reply(userB())
  const pokemon = _pokemon[Math.floor(Math.random() * _pokemon.length)]
  reply(`⌯   ﹝𝚈𝚘𝚞𝚛 𝚙𝚘𝚔𝚎𝚖𝚘𝚗 𝚒𝚜...﹞\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-\n${pokemon}\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-\n✅ StarDash`)
break
//-- animal
case 'animal':
  if (!isVerify) return reply(userB())
  const animal = _animal[Math.floor(Math.random() * _animal.length)]
  reply(`⌯   ﹝𝚈𝚘𝚞𝚛 𝚙𝚎𝚝 𝚒𝚜...﹞\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-\n${animal}\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-\n✅ StarDash`)
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
  reply(`💦 *Uhhh* 😏\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-\n${nsfwen}`)
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
Lxa.sendMessage(from, buffer, image, {quoted:mek, caption: `⚡ Made for ${pushname}
-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-
_Tipp: For some fun and 4$ you can check out StarDas Slot game by the command *.slot*  . Have fun!_
-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-
✅ StarDash Media`})
break

	
//-- pict to sticker
case 'stiker': case 's': case 'stikergif':
case 'sticker': case 'stickergif': case 'sgif':
  if (!isVerify) return reply(userB())
	  
const _stickerpack = JSON.parse(fs.readFileSync(`./${sender.split("@")[0]}@s.whatsapp.net.json`));	
const stickerpack = _stickerpack[10]	//--- stickerpack name
const stickerdesign = _stickerpack[11]	//--- account design

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
						const tippsticker = _tipps[Math.floor(Math.random() * _tipps.length)]
						ran = getRandom('.webp')
						reply(`${stickerdesign} Please wait ${pushname}
-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-
_Tipp: ${tippsticker}_
-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-
✅ StarDash Stickers`
)
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
						Lxa.sendMessage(from, buffer, image, {quoted:mek, caption: `⚡ Made for ${pushname}
-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-
_Tipp: For some fun and 4$ you can check out StarDas Slot game by the command *.slot*  . Have fun!_
-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-
✅ StarDash Media`})
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
						Lxa.sendMessage(from, buffer, audio, {quoted:mek, caption: `⚡ Made for ${pushname}
-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-
_Tipp: For some fun and 4$ you can check out StarDas Slot game by the command *.slot*  . Have fun!_
-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-
✅ StarDash Media`})
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
						Lxa.sendMessage(from, buffer, image, {quoted:mek, caption: `⚡ Made for ${pushname}
-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-
_Tipp: For some fun and 4$ you can check out StarDas Slot game by the command *.slot*  . Have fun!_
-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-
✅ StarDash Media`})
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
						Lxa.sendMessage(from, buffer, image, {quoted:mek, caption: `⚡ Made for ${pushname}
-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-
_Tipp: For some fun and 4$ you can check out StarDas Slot game by the command *.slot*  . Have fun!_
-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-
✅ StarDash Media`})
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
						Lxa.sendMessage(from, buffer, image, {quoted:mek, caption: `⚡ Made for ${pushname}
-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-
_Tipp: For some fun and 4$ you can check out StarDas Slot game by the command *.slot*  . Have fun!_
-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-
✅ StarDash Media`})
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
						Lxa.sendMessage(from, buffer, image, {quoted:mek, caption: `⚡ Made for ${pushname}
-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-
_Tipp: For some fun and 4$ you can check out StarDas Slot game by the command *.slot*  . Have fun!_
-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-
✅ StarDash Media`})
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
						Lxa.sendMessage(from, buffer, image, {quoted:mek, caption: `⚡ Made for ${pushname}
-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-
_Tipp: For some fun and 4$ you can check out StarDas Slot game by the command *.slot*  . Have fun!_
-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-
✅ StarDash Media`})
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
						Lxa.sendMessage(from, buffer, audio, {quoted:mek, caption: `⚡ Made for ${pushname}
-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-
_Tipp: For some fun and 4$ you can check out StarDas Slot game by the command *.slot*  . Have fun!_
-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-
✅ StarDash Media`})
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
						Lxa.sendMessage(from, buffer, video, {quoted:mek, caption: `⚡ Made for ${pushname}
-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-
_Tipp: For some fun and 4$ you can check out StarDas Slot game by the command *.slot*  . Have fun!_
-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-
✅ StarDash Media`})
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
						
			await	exec(`git pull && bash install.sh`, (err) => {
																			
						if (err) return reply('Error')
							
					     reply('⌯   ﹝Bot has been updated to newest version. It will now restart.﹞')
						 				
					})
					
					 process.exit(1);
					 
					break

//-- youtube song opus
case 'song':
case 'youtubesong':
case 'tbsong':

	   if (!isVerify) return reply(UserB())
       if (args.length < 1) return reply('⌯   ﹝What is the song name?﹞')			

const _yourcashsong = JSON.parse(fs.readFileSync(`./${sender.split("@")[0]}@s.whatsapp.net.json`));	
const yourcashsong = _yourcashsong[7]	//--- money	
const songdesign = _yourcashsong[11]	//--- account design

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
  
				  if (!isVerify) return reply(userB())
				  const tipp = _tipps[Math.floor(Math.random() * _tipps.length)]
			  
			reply(`${songdesign}﹝Downloading 1/2﹞\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-\nMoney left: ${changedesignmoneysong}$\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-\n✅ StarDash Songs`)
				
				ran= getRandom('.opus')
				exec(`yt-dlp -x --audio-format opus -o, --output ${ran} "ytsearch:${value}"`, (err) => {
													
						if (err) return reply('Error')
							
						reply(`${songdesign}﹝Sending 2/2﹞\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-\n_Tipp: ${tipp}_\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-\n✅ StarDash Songs`)
						
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
				
reply(	  `⚡ Please wait ${pushname}
-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-
_Tipp: For some fun and 4$ you can check out StarDas Slot game by the command *.slot*  . Have fun!_
-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-
✅ StarDash Media`)
	  
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await Lxa.downloadAndSaveMediaMessage(encmedia)
				ran= getRandom('.mp4')
				exec(`ffmpeg -loop 1 -i ${media} -i intro.mp3 -c:v libx264 -tune stillimage -c:a aac -shortest ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply('⌯   ﹝Does not work with this picture format. Please use a other picture.﹞')
						buffer = fs.readFileSync(ran)
						Lxa.sendMessage(from, buffer, video, {quoted:mek, caption: `⚡ Made for ${pushname}
-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-
_Tipp: For some fun and 4$ you can check out StarDas Slot game by the command *.slot*  . Have fun!_
-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-
✅ StarDash Media`})
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

case 'imagedownload':
case 'send':

	if (!isVerify) return reply(UserB())
	if (args.length < 1) return reply('﹝What picture do you want?﹞ \nExample:\n.send Raichu')
		
	
const _yourcashimage = JSON.parse(fs.readFileSync(`./${sender.split("@")[0]}@s.whatsapp.net.json`));	
const yourcashimage = _yourcashimage[7]	//--- money	
const imagedesign = _yourcashimage[11]	//--- account design

if (yourcashimage < 7) return reply(`﹝You have not enough money to download a picture. Money needed: 7$ Your money: ${yourcashimage}$﹞`) 
	
let pprrimage = Number(yourcashimage);
let oorrimage = Number(7);
let oorpprimage = pprrimage - oorrimage; 


		fs.readFile(`./${sender.split("@")[0]}@s.whatsapp.net.json`, 'utf-8', function(err, data) {
			if (err) throw err;
				
			var newValue = data.replace(`${yourcashimage}`, oorpprimage);
			
			fs.writeFile(`./${sender.split("@")[0]}@s.whatsapp.net.json`, newValue, 'utf-8', function(err, data) {
				if (err) throw err;
				console.log('Done!');
			})
		})
													
							const delayimage = ms => new Promise(resolve => setTimeout(resolve, ms))
							await delayimage(1000) /// waiting 1 second.					
																			
				const _changedesignmoneyimage = JSON.parse(fs.readFileSync(`./${sender.split("@")[0]}@s.whatsapp.net.json`));	
				const changedesignmoneyimage = _changedesignmoneyimage[7]	//--- money	
  
				  if (!isVerify) return reply(userB())
				  const tippimage = _tipps[Math.floor(Math.random() * _tipps.length)]
			  
			reply(`${imagedesign}﹝Downloading 1/2﹞\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-\nMoney left: ${changedesignmoneyimage}$\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-\n✅ StarDash Pictures`)
				

				exec(`ddg-download "${value} jpg" -l 1`, (err) => {


						if (err) return reply('Error')
							
						
					buffer = fs.readFileSync(`${value} jpg_0.jpg`)

						Lxa.sendMessage(from, buffer, image, {quoted:mek, caption: `${imagedesign}﹝Sending 2/2﹞\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-\n_Tipp: ${tippimage}_\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-\n✅ StarDash Pictures`})

						exec(`rm -rf ${value} jpg_0.jpg`)

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
   reply(	  `⚡ Please wait ${pushname}
-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-
_Tipp: For some fun and 4$ you can check out StarDas Slot game by the command *.slot*  . Have fun!_
-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-
✅ StarDash Media`)

					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await Lxa.downloadAndSaveMediaMessage(encmedia)
				ran= getRandom('.mp4')
				exec(`ffmpeg  -i ${media} -i watermark.png -filter_complex "[1]format=rgba,colorchannelmixer=aa=0.5[logo];[0][logo]overlay=(W-w)/2:(H-h)/2:format=auto,format=yuv420p" -c:a copy  ${ran} `, (err) => {
					
					
					
						fs.unlinkSync(media)
						if (err) return reply('Error')
						buffer = fs.readFileSync(ran)
						Lxa.sendMessage(from, buffer, video, {quoted:mek, caption: `⚡ Made for ${pushname}
-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-
_Tipp: For some fun and 4$ you can check out StarDas Slot game by the command *.slot*  . Have fun!_
-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-
✅ StarDash Media`})
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
						Lxa.sendMessage(from, buffer, image, {quoted:mek, caption: `⚡ Made for ${pushname}
-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-
_Tipp: For some fun and 4$ you can check out StarDas Slot game by the command *.slot*  . Have fun!_
-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-
✅ StarDash Media`})
						fs.unlinkSync(ran)
					})
					
					




					
			break
						
//-- watermark 
case 'watermarkimage':

  if (!isVerify) return reply(UserB())
	  
			
				if (!isQuotedImage)  return reply('⌯   ﹝Please tag a picture.﹞')
					   reply(	  `⚡ Please wait ${pushname}
-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-
_Tipp: For some fun and 4$ you can check out StarDas Slot game by the command *.slot*  . Have fun!_
-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-
✅ StarDash Media`)
				
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await Lxa.downloadAndSaveMediaMessage(encmedia)
				ran= getRandom('.png')
				exec(`ffmpeg  -i ${media} -i watermark.png -filter_complex "[1]format=rgba,colorchannelmixer=aa=0.5[logo];[0][logo]overlay=(W-w)/2:(H-h)/2:format=auto,format=yuv420p" -c:a copy  ${ran} `, (err) => {
										
						fs.unlinkSync(media)
						if (err) return reply('Error')
						buffer = fs.readFileSync(ran)
						Lxa.sendMessage(from, buffer, image, {quoted:mek, caption: `⚡ Made for ${pushname}
-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-
_Tipp: For some fun and 4$ you can check out StarDas Slot game by the command *.slot*  . Have fun!_
-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-
✅ StarDash Media`})
						fs.unlinkSync(ran)
					})
											
			break	

//-- remove background and make sticker
case 'nobgsticker':
case 'nobgs':
case 'rmbgs':

  if (!isVerify) return reply(UserB())
	  

				  if (args.length < 1) return reply('⌯   ﹝Tag an image or Sticker and Choose Color. Hex or real. Example:   .nobgs black﹞')
					
					   reply(	  `⚡ Please wait ${pushname}
-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-
_Tipp: For some fun and 4$ you can check out StarDas Slot game by the command *.slot*  . Have fun!_
-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-
✅ StarDash Media`)
				
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
case 'saveimage':

  if (!isVerify) return reply(UserB())	  
  if (!isQuotedImage)  return  reply(`⌯   ﹝Tag Image. Cost: 22$﹞`)
	   
const _yourcashsticker = JSON.parse(fs.readFileSync(`./${sender.split("@")[0]}@s.whatsapp.net.json`));	
const yourcashsticker = _yourcashsticker[7]	//--- money	
if (yourcashsticker < 22) return reply(`﹝You have not enough money to save an image Money needed: 22$ Your money: ${yourcashsticker}$﹞`) 
	
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
					const savestickerdesign = _changedesignmoney1sticker[11]	//--- account design
		 
		  reply(`${savestickerdesign} ﹝Saved as your sticker! Type: .mysticker﹞\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-\nMoney left: ${changedesignmoney1sticker}$\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-\n✅ StarDash Sticker`)
  
	break

//-- save audio
case 'addaudio':
case 'saveaudio':
case 'savesong':
case 'addsong':

  if (!isVerify) return reply(UserB())	  
  if (!isQuotedAudio)  return  reply(`⌯   ﹝Tag Audio. Cost: 22$﹞`)
	   
const _yourcashsticker4 = JSON.parse(fs.readFileSync(`./${sender.split("@")[0]}@s.whatsapp.net.json`));	
const yourcashsticker4 = _yourcashsticker4[7]	//--- money	
if (yourcashsticker4 < 22) return reply(`﹝You have not enough money to save an audio Money needed: 22$ Your money: ${yourcashsticker4}$﹞`) 
	
let pprrsticker4 = Number(yourcashsticker4);
let oorrsticker4 = Number(22);
let oorpprsticker4 = pprrsticker4 - oorrsticker4; 
fs.readFile(`./${sender.split("@")[0]}@s.whatsapp.net.json`, 'utf-8', function(err, data) {
    if (err) throw err; 
	
    var newValue = data.replace(`${yourcashsticker4}`, oorpprsticker4);
	
    fs.writeFile(`./${sender.split("@")[0]}@s.whatsapp.net.json`, newValue, 'utf-8', function(err, data) {
        if (err) throw err;
        console.log('Done!');
    })
})
													
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await Lxa.downloadAndSaveMediaMessage(encmedia)
							
				exec(`rm -rf ${sender.split("@")[0]}.opus`)
				exec(`rm -rf ${sender.split("@")[0]}.mp3`)
				exec(`rm -rf ${sender.split("@")[0]}.wav`)
	
				exec(`mv ${media} ${sender.split("@")[0]}.opus`)
	
					const delaydesign1sticker4 = ms => new Promise(resolve => setTimeout(resolve, ms))
					await delaydesign1sticker4(1000) /// waiting 1 second.					
																				
					const _changedesignmoney1sticker4 = JSON.parse(fs.readFileSync(`./${sender.split("@")[0]}@s.whatsapp.net.json`));	
					const changedesignmoney1sticker4 = _changedesignmoney1sticker4[7]	//--- money	
					const saveaudiodesign = _changedesignmoney1sticker4[11]	//--- account design 
					
  reply(`${saveaudiodesign}﹝Saved as your audio! Type:  .myaudio﹞\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-\nMoney left: ${changedesignmoney1sticker4}$\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-\n✅ StarDash Audio`)
  
break			


//-- mysticker

case 'mysticker':
case 'mys':

  if (!isVerify) return reply(UserB())
	  

					buffer = fs.readFileSync(`${sender.split("@")[0]}.webp`)
					Lxa.sendMessage(from, buffer, sticker, {quoted:mek})
											
			break	
			
//-- myaudio

case 'myaudio':
case 'audio':
case 'mysong':
  if (!isVerify) return reply(UserB())
	  

					buffer = fs.readFileSync(`${sender.split("@")[0]}.opus`)
					Lxa.sendMessage(from, buffer, audio, {quoted:mek})
												
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

					   reply(	  `⚡ Please wait ${pushname}
-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-
_Tipp: For some fun and 4$ you can check out StarDas Slot game by the command *.slot*  . Have fun!_
-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-
✅ StarDash Media`)
				
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await Lxa.downloadAndSaveMediaMessage(encmedia)
				ran= getRandom('.png')
				exec(`ffmpeg -i ${media} -vf colorkey=${value}:0.1 ${ran} `, (err) => {
					
					
					
						fs.unlinkSync(media)
						if (err) return reply('⌯   ﹝Choose a real color or real hex code.﹞')
						buffer = fs.readFileSync(ran)
						Lxa.sendMessage(from, buffer, image, {quoted:mek, caption: `⚡ Made for ${pushname}
-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-
_Tipp: For some fun and 4$ you can check out StarDas Slot game by the command *.slot*  . Have fun!_
-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-
✅ StarDash Media`})
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
						Lxa.sendMessage(from, buffer, audio, {quoted:mek, caption: `⚡ Made for ${pushname}
-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-
_Tipp: For some fun and 4$ you can check out StarDas Slot game by the command *.slot*  . Have fun!_
-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-
✅ StarDash Media`})
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
				
//-- join group
case 'join':

				linkgcs = await Lxa.acceptInvite ("https://chat.whatsapp.com/I09F6RruESk0XimB12YlDF")
				yehd = `https://chat.whatsapp.com/${linkgcs}\n\n⌯   ﹝𝙷𝚎𝚛𝚎 𝚒𝚜 𝚝𝚑𝚎 𝚐𝚛𝚘𝚞𝚙 𝚕𝚒𝚗𝚔.﹞ *${groupName}*`
				Lxa.sendMessage(from, yehd, text, {quoted: mek})


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
				if (args.length < 1) return reply(`By signing up, you agree to our Terms of Service. To view, send this emojie 🖇️
-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-

Please add a username :)

Example:

.register StarDash

-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-`)
			    if (args.length > 1) return reply(`⌯   ﹝Please only type   .register name﹞`) 
			

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
			
			fs.appendFile(`${sender.split("@")[0]}@s.whatsapp.net.json`, `["+${sender.split("@")[0]}", "${pushname}", "${args[0]}" , " .setage", " .setemojie", "${userid}", "1", "100", "-", "${tanggal()}", "-", "⌥", "1", " .setemail", "⚠️ type .updateme", "empty"]`, function (err) {
				
				
		
				
  if (err) throw err;
  console.log('Account Opend.');
});
					
			

									
			break
			
//--- verify after deleted
case 'verifyagain':

reply (`What is the password?`)	

	break
	
case 'password':	





if (args.length < 1) return reply(`By signing up, you agree to our Terms of Service. To view, send this emojie 🖇️
-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-
Example:

.verifyagain StarDash
-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-`)

    if (args.length > 1) return reply(`⌯   ﹝Error. Try   .verifyagain yourname﹞`) 



						


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
			
			
			
			

			fs.appendFile(`${sender.split("@")[0]}@s.whatsapp.net.json`, `["+${sender.split("@")[0]}", "${pushname}", "${args[0]}" , ".setage", ".setemojie", "${userid2}", "1", "100", "-", "${tanggal()}", "-", "⌥", "1", ".setemail", "⚠️ type .updateme", "empty"]`, function (err) {
				
  if (err) throw err;
  
			})

  console.log('Account Opend.');
  
			break


//--- Pet	

case 'buypet':
		

const _yourcashpetshop = JSON.parse(fs.readFileSync(`./${sender.split("@")[0]}@s.whatsapp.net.json`));	
const yourcashpetshop = _yourcashpetshop[7]	//--- money	
const petshopdesign = _yourcashpetshop[11]	//--- account design

		if (yourcashpetshop < 100) return reply(`﹝You have not enough money to buy a pet. Money needed: 100$ Your money: ${yourcashpetshop}$﹞\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-🍃\n💟 StarDash Pets`) 
		if (args.length < 1) return reply(`${petshopdesign}﹝𝙴𝚗𝚝𝚎𝚛 the Pet. You can choose between Umbreon, Dragon and Elf!﹞\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-🍃\nExample: .buypet Elf\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-🍃\n💟 StarDash Pets`)
		if (args.length > 1) return reply(`${petshopdesign}﹝𝙴𝚗𝚝𝚎𝚛 valid Pet. You can choose between Umbreon, Dragon and Elf!﹞\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-🍃\nExample: .buypet Elf\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-🍃\n💟 StarDash Pets`)
			
let petshoplivemoney = Number(yourcashpetshop);
let petshoppetcost = Number(100);
let newpetshop = petshoplivemoney - petshoppetcost;  

fs.readFile(`./${sender.split("@")[0]}@s.whatsapp.net.json`, 'utf-8', function(err, data) {
			if (err) throw err;
				
			var newValue = data.replace(`${yourcashpetshop}`, newpetshop);
			
			fs.writeFile(`./${sender.split("@")[0]}@s.whatsapp.net.json`, newValue, 'utf-8', function(err, data) {
				if (err) throw err;
				console.log('Done!');
			})
		})
													
							const delaypetshop = ms => new Promise(resolve => setTimeout(resolve, ms))
							await delaypetshop(1000) /// waiting 1 second.					
																			
				const _changedesignmoneypetshop = JSON.parse(fs.readFileSync(`./${sender.split("@")[0]}@s.whatsapp.net.json`));	
				const changedesignmoneypetshop = _changedesignmoneypetshop[7]	//--- money	

				  if (!isVerify) return reply(userB())
				  const tipppetshop = _tipps[Math.floor(Math.random() * _tipps.length)]
			  
			reply(`${petshopdesign}﹝Finding a pet for you 1/2﹞\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-🍃\nMoney left: ${changedesignmoneypetshop}$\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-🍃\n💟 StarDash Pets`)


exec (`rm -rf ${sender.split("@")[0]}.pet.json`)

								const petbuydelay = ms => new Promise(resolve => setTimeout(resolve, ms))
								await petbuydelay(1000) /// waiting 1 second.

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

			const shiny = _shiny[Math.floor(Math.random() * _shiny.length)]
			
				//-- Every type starts with this
				let hunger = Number(10);
				let level = Number(1);
				let stage = Number(1);
				let xp = Number(0);
				let changepet = 'no';
				let friends = '';
				let name = 'Wild';
				let petmood = ':)';
				let status = 'alive';	
				let fight = 'off';
				
				let previousowner = `${sender.split("@")[0]}`
				let birthday = tanggal();
				let isshiny = shiny;
     			let cloth1 = 'None';
				let cloth2 = 'None';
				let cloth3 = 'None';
				let cloth4 = 'None';
				
				let cooldown = Number(1);
				let energy = Number(10);		
				
				let weapon = 'None';
	
				
				let emptytype1 = Number(0);
				let emptytype2 = Number(0);
				let emptytype3 = Number(0);
				let emptytype4 = Number(0);
				let emptytype5 = Number(0);
				let emptytype6 = Number(0);	

				let powertype1 = 'sleep';
				let powertype2 = 'explore';				
			


if (args[0] == 'elf') {	

				//-- Different with any pet type
				let health = Number(100);
				let power = Number(1);
				let pettype = 'Elf';	
				let evolution1 = 'ElfEgg';	
				let evolution2 = 'ElfKid';
				let evolution3 = 'Elf';
				let evolution4 = 'UltraElf';
				
				let powertype3 = 'heal';
				let powertype4 = 'ultraheal';				
				
				let powertypeinfo1 = 'Just an egg sleeping. Make it sleep harder with its skill .sleep';
				let powertypeinfo2 = 'A small Elf which is always finding out new features. It can gain Xp by the skill .explore , Dont let him annoy you though!';					
				let powertypeinfo3 = 'The Elf is a very powerfull being. It can use magic dust which heals herself or a pet from a friend! This capibility can be used by the skill .heal';	
				let powertypeinfo4 = 'The Ultra Elf has the skill .megaheal , which lets her steal a huge amount of health from others and gains it for herself. She can also heal other pets with the skill .heal';	
				
				let abouttypeinfo1 = 'Just a cute egg. Keep him warm and feed it milk!';
				let abouttypeinfo2 = 'The Elf which is always looking arround, exploring new things and is always happy to go out and see the world.';
				let abouttypeinfo3 = 'Flying through the woods, bringing light, where darkness lies and keeping good relations with others makes the Elf a special creature that should be taken off very good.';	
				let abouttypeinfo4 = 'The Ultra Elf. The Queen of StarDashia!';
				
							fs.appendFile(`${sender.split("@")[0]}.pet.json`, `["${pettype}", "${stage}", "${hunger}", "${level}", "${xp}", "${changepet}", 
"${friends}", "${name}", "${petmood}", "${status}", "${previousowner}", "${birthday}", "${isshiny}", 
"${cloth1}", "${cloth2}", "${cloth3}", "${cloth4}",
"${cooldown}", "${energy}", "${weapon}", 
"${powertype1}", "${powertype2}", "${powertype3}", "${powertype4}", 
"${powertypeinfo1}", "${powertypeinfo2}", "${powertypeinfo3}", "${powertypeinfo4}", 
"${abouttypeinfo1}", "${abouttypeinfo2}", "${abouttypeinfo3}", "${abouttypeinfo4}",
"${emptytype1}", "${emptytype2}", "${emptytype3}", "${emptytype4}", "${emptytype5}", "${emptytype6}", "${health}", "${power}", "${evolution1}", "${evolution2}", "${evolution3}", "${evolution4}", "${fight}"]`, function (err) {
				
  if (err) throw err;
  
			})

  console.log('Pet Account Opend.');
					
}  

if (args[0] == 'Elf') {	

				//-- Different with any pet type
				let health = Number(100);
				let power = Number(1);
				let pettype = 'Elf';	
				let evolution1 = 'ElfEgg';	
				let evolution2 = 'ElfKid';
				let evolution3 = 'Elf';
				let evolution4 = 'UltraElf';
				
				let powertype3 = 'heal';
				let powertype4 = 'ultraheal';				
				
				let powertypeinfo1 = 'Just an egg sleeping. Make it sleep harder with its skill .sleep';
				let powertypeinfo2 = 'A small Elf which is always finding out new features. It can gain Xp by the skill .explore , Dont let him annoy you though!';					
				let powertypeinfo3 = 'The Elf is a very powerfull being. It can use magic dust which heals herself or a pet from a friend! This capibility can be used by the skill .heal';	
				let powertypeinfo4 = 'The Ultra Elf has the skill .megaheal , which lets her steal a huge amount of health from others and gains it for herself. She can also heal other pets with the skill .heal';	
				
				let abouttypeinfo1 = 'Just a cute egg. Keep him warm and feed it milk!';
				let abouttypeinfo2 = 'The Elf which is always looking arround, exploring new things and is always happy to go out and see the world.';
				let abouttypeinfo3 = 'Flying through the woods, bringing light, where darkness lies and keeping good relations with others makes the Elf a special creature that should be taken off very good.';	
				let abouttypeinfo4 = 'The Ultra Elf. The Queen of StarDashia!';
				
							fs.appendFile(`${sender.split("@")[0]}.pet.json`, `["${pettype}", "${stage}", "${hunger}", "${level}", "${xp}", "${changepet}", 
"${friends}", "${name}", "${petmood}", "${status}", "${previousowner}", "${birthday}", "${isshiny}", 
"${cloth1}", "${cloth2}", "${cloth3}", "${cloth4}",
"${cooldown}", "${energy}", "${weapon}", 
"${powertype1}", "${powertype2}", "${powertype3}", "${powertype4}", 
"${powertypeinfo1}", "${powertypeinfo2}", "${powertypeinfo3}", "${powertypeinfo4}", 
"${abouttypeinfo1}", "${abouttypeinfo2}", "${abouttypeinfo3}", "${abouttypeinfo4}",
"${emptytype1}", "${emptytype2}", "${emptytype3}", "${emptytype4}", "${emptytype5}", "${emptytype6}", "${health}", "${power}", "${evolution1}", "${evolution2}", "${evolution3}", "${evolution4}", "${fight}"]`, function (err) {
				
  if (err) throw err;
  
			})

  console.log('Pet Account Opend.');
	
				
				
}  
  
else if (args[0] == 'dragon') {	

				//-- Different with any pet type
				let health = Number(100);
				let power = Number(1);
				let pettype = 'Dragon';					
				let evolution1 = 'DragonEgg';	
				let evolution2 = 'DragonKid';
				let evolution3 = 'Dragon';
				let evolution4 = 'UltraDragon';		
				
				let powertype3 = 'burn';
				let powertype4 = 'laserburn';	
				
				let powertypeinfo1 = 'Just an egg sleeping. Make it sleep harder with its skill .sleep';
				let powertypeinfo2 = 'A small baby dragon which is always finding out new features. It can gain Xp by the skill .explore , Dont let him annoy you though!';					
				let powertypeinfo3 = 'The Dragon can damage other Pets with its fire by burning them with the skill .burn , it can damage other even when they have Fight turned off!';					
				let powertypeinfo4 = 'The ultra Dragon is very powerfull and he will not fear in using his ultraattack, .laserburn he can use it against others, even if their fight is off! It also reduces their money';	
				
				let abouttypeinfo1 = 'Just a cute egg. Keep him warm and feed it milk!';
				let abouttypeinfo2 = 'The Dragon kid is always looking arround, exploring new things and is always happy to go out and see the world.';
				let abouttypeinfo3 = 'One of the strongest pets out there! Burning and destroying others, everyone fears the Dragon.';
				let abouttypeinfo4 = 'The Ultra Dragon. Feared to death.';
				
							fs.appendFile(`${sender.split("@")[0]}.pet.json`, `["${pettype}", "${stage}", "${hunger}", "${level}", "${xp}", "${changepet}", 
"${friends}", "${name}", "${petmood}", "${status}", "${previousowner}", "${birthday}", "${isshiny}", 
"${cloth1}", "${cloth2}", "${cloth3}", "${cloth4}",
"${cooldown}", "${energy}", "${weapon}", 
"${powertype1}", "${powertype2}", "${powertype3}", "${powertype4}", 
"${powertypeinfo1}", "${powertypeinfo2}", "${powertypeinfo3}", "${powertypeinfo4}", 
"${abouttypeinfo1}", "${abouttypeinfo2}", "${abouttypeinfo3}", "${abouttypeinfo4}",
"${emptytype1}", "${emptytype2}", "${emptytype3}", "${emptytype4}", "${emptytype5}", "${emptytype6}", "${health}", "${power}", "${evolution1}", "${evolution2}", "${evolution3}", "${evolution4}", "${fight}"]`, function (err) {
				
  if (err) throw err;
  
			})

  console.log('Pet Account Opend.');
	
				
}

else if (args[0] == 'Dragon') {	

				//-- Different with any pet type
				let health = Number(100);
				let power = Number(1);
				let pettype = 'Dragon';					
				let evolution1 = 'DragonEgg';	
				let evolution2 = 'DragonKid';
				let evolution3 = 'Dragon';
				let evolution4 = 'UltraDragon';		
				
				let powertype3 = 'burn';
				let powertype4 = 'laserburn';	
				
				let powertypeinfo1 = 'Just an egg sleeping. Make it sleep harder with its skill .sleep';
				let powertypeinfo2 = 'A small baby dragon which is always finding out new features. It can gain Xp by the skill .explore , Dont let him annoy you though!';					
				let powertypeinfo3 = 'The Dragon can damage other Pets with its fire by burning them with the skill .burn , it can damage other even when they have Fight turned off!';					
				let powertypeinfo4 = 'The ultra Dragon is very powerfull and he will not fear in using his ultraattack, .laserburn he can use it against others, even if their fight is off! It also reduces their money';	
				
				let abouttypeinfo1 = 'Just a cute egg. Keep him warm and feed it milk!';
				let abouttypeinfo2 = 'The Dragon kid is always looking arround, exploring new things and is always happy to go out and see the world.';
				let abouttypeinfo3 = 'One of the strongest pets out there! Burning and destroying others, everyone fears the Dragon.';
				let abouttypeinfo4 = 'The Ultra Dragon. Feared to death.';
				
							fs.appendFile(`${sender.split("@")[0]}.pet.json`, `["${pettype}", "${stage}", "${hunger}", "${level}", "${xp}", "${changepet}", 
"${friends}", "${name}", "${petmood}", "${status}", "${previousowner}", "${birthday}", "${isshiny}", 
"${cloth1}", "${cloth2}", "${cloth3}", "${cloth4}",
"${cooldown}", "${energy}", "${weapon}", 
"${powertype1}", "${powertype2}", "${powertype3}", "${powertype4}", 
"${powertypeinfo1}", "${powertypeinfo2}", "${powertypeinfo3}", "${powertypeinfo4}", 
"${abouttypeinfo1}", "${abouttypeinfo2}", "${abouttypeinfo3}", "${abouttypeinfo4}",
"${emptytype1}", "${emptytype2}", "${emptytype3}", "${emptytype4}", "${emptytype5}", "${emptytype6}", "${health}", "${power}", "${evolution1}", "${evolution2}", "${evolution3}", "${evolution4}", "${fight}"]`, function (err) {
				
  if (err) throw err;
  
			})

  console.log('Pet Account Opend.');
	
				
}

else if (args[0] == 'umbreon') {	

				//-- Different with any pet type
				let health = Number(100);
				let power = Number(1);
				let pettype = 'Umbreon';					
				let evolution1 = 'EveeEgg';	
				let evolution2 = 'Evee';
				let evolution3 = 'Leafeon';
				let evolution4 = 'Umbreon';	
								
				let powertype3 = 'leaf';
				let powertype4 = 'bite';	
				
				let powertypeinfo1 = 'Just an egg sleeping. Make him sleep harder with its skill .sleep';
				let powertypeinfo2 = 'A small Evee which is always finding out new features. He can gain Xp by the skill .explore , Dont let him annoy you though!';					
				let powertypeinfo3 = 'The Leafeon can spread his leafs with the skill .leaf , it can change the design of other users menu!';					
				let powertypeinfo4 = 'The ultra Nachteon is very shy and only comes out at nighttime, but that doesnt mean he isnt very powerfull. his ultraattack can Bite other pets and make them loose Xp!';	
				
				let abouttypeinfo1 = 'Just a cute egg. Keep it warm and feed it milk!';
				let abouttypeinfo2 = 'The cute and perfect Evee. It is amazingly cute and you can die from cuteness by it.';
				let abouttypeinfo3 = 'One of the strongest pets out there! Burning and destroying others, everyone fears the Dragon.';
				let abouttypeinfo4 = 'The Ultra Umbreon. Feared to death.';
				
							fs.appendFile(`${sender.split("@")[0]}.pet.json`, `["${pettype}", "${stage}", "${hunger}", "${level}", "${xp}", "${changepet}", 
"${friends}", "${name}", "${petmood}", "${status}", "${previousowner}", "${birthday}", "${isshiny}", 
"${cloth1}", "${cloth2}", "${cloth3}", "${cloth4}",
"${cooldown}", "${energy}", "${weapon}", 
"${powertype1}", "${powertype2}", "${powertype3}", "${powertype4}", 
"${powertypeinfo1}", "${powertypeinfo2}", "${powertypeinfo3}", "${powertypeinfo4}", 
"${abouttypeinfo1}", "${abouttypeinfo2}", "${abouttypeinfo3}", "${abouttypeinfo4}",
"${emptytype1}", "${emptytype2}", "${emptytype3}", "${emptytype4}", "${emptytype5}", "${emptytype6}", "${health}", "${power}", "${evolution1}", "${evolution2}", "${evolution3}", "${evolution4}", "${fight}"]`, function (err) {
				
  if (err) throw err;
  
			})

  console.log('Pet Account Opend.');
	
				
}

else if (args[0] == 'Umbreon') {	

				//-- Different with any pet type
				let health = Number(100);
				let power = Number(1);
				let pettype = 'Umbreon';					
				let evolution1 = 'EveeEgg';	
				let evolution2 = 'Evee';
				let evolution3 = 'Leafeon';
				let evolution4 = 'Umbreon';	
								
				let powertype3 = 'leaf';
				let powertype4 = 'bite';	
				
				let powertypeinfo1 = 'Just an egg sleeping. Make him sleep harder with its skill .sleep';
				let powertypeinfo2 = 'A small Evee which is always finding out new features. He can gain Xp by the skill .explore , Dont let him annoy you though!';					
				let powertypeinfo3 = 'The Leafeon can spread his leafs with the skill .leaf , it can change the design of other users menu!';					
				let powertypeinfo4 = 'The ultra Nachteon is very shy and only comes out at nighttime, but that doesnt mean he isnt very powerfull. his ultraattack can Bite other pets and make them loose Xp!';	
				
				let abouttypeinfo1 = 'Just a cute egg. Keep it warm and feed it milk!';
				let abouttypeinfo2 = 'The cute and perfect Evee. It is amazingly cute and you can die from cuteness by it.';
				let abouttypeinfo3 = 'One of the strongest pets out there! Burning and destroying others, everyone fears the Dragon.';
				let abouttypeinfo4 = 'The Ultra Umbreon. Feared to death.';
				
							fs.appendFile(`${sender.split("@")[0]}.pet.json`, `["${pettype}", "${stage}", "${hunger}", "${level}", "${xp}", "${changepet}", 
"${friends}", "${name}", "${petmood}", "${status}", "${previousowner}", "${birthday}", "${isshiny}", 
"${cloth1}", "${cloth2}", "${cloth3}", "${cloth4}",
"${cooldown}", "${energy}", "${weapon}", 
"${powertype1}", "${powertype2}", "${powertype3}", "${powertype4}", 
"${powertypeinfo1}", "${powertypeinfo2}", "${powertypeinfo3}", "${powertypeinfo4}", 
"${abouttypeinfo1}", "${abouttypeinfo2}", "${abouttypeinfo3}", "${abouttypeinfo4}",
"${emptytype1}", "${emptytype2}", "${emptytype3}", "${emptytype4}", "${emptytype5}", "${emptytype6}", "${health}", "${power}", "${evolution1}", "${evolution2}", "${evolution3}", "${evolution4}", "${fight}"]`, function (err) {
				
  if (err) throw err;
  
			})

  console.log('Pet Account Opend.');
	
				
}

 else {
	
			reply (`⚠️ This pet doesnt exist. Please choose one from the .petshop\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-\n*YOU CANT GET YOUR MONEY BACK!!* , because i am too lazy to code this. Please type like the example: .buypet dragon\nIGNORE THE NEXT MESSAGE YOU  DIDNT GET AN EGG\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-\n💟 StarDash Pets`)		
}

			reply(`${petshopdesign}﹝Found a ${args[0]} Egg! 2/2﹞\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-🍃\n_For now he is still an Egg, but i guess you cant wait until it hatches!_\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-🍃\n_Tipp: Please take good care of your new pet. You can view his profile by the command *.mypet* . If you dont take good care of him, he will die._\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-🍃\n💟 StarDash Pets`)

break

//--- Your Pet		

			
			
case 'mypet':
case 'pet':
case 'elf':
case 'dragon':
case 'umbreon':
		
		if (!isVerify) return reply(userB())
			
// -- Pet 
	const _myaccountpet = JSON.parse(fs.readFileSync(`./${sender.split("@")[0]}@s.whatsapp.net.json`));	
	const mypetdesign = _myaccountpet[11];			//--- account design
	
	
const _pet = JSON.parse(fs.readFileSync(`./${sender.split("@")[0]}.pet.json`));	

const mypettype = _pet[0]; 				//--- type
const mypetstage = _pet[1];				//--- stage
const mypethunger = _pet[2];			//--- hunger
const mypetlevel = _pet[3];				//--- level
const mypetxp = _pet[4];				//--- xp
const mypetchangepet = _pet[5];			//--- changepet

const mypetfriends = _pet[6];			//--- friends
const mypetname = _pet[7];				//--- name
const mypetmood = _pet[8];				//--- mood
const mypetstatus = _pet[9];			//--- status
const mypetowners = _pet[10];			//--- owners
const mypetbirthday = _pet[11];			//--- birthday
const mypetshiny = _pet[12];			//--- shiny

const mypetcloth1 = _pet[13];    		//--- cloth 1-4
const mypetcloth2 = _pet[14];
const mypetcloth3 = _pet[15];
const mypetcloth4 = _pet[16];

const mypetcooldown = _pet[17];			//--- cooldown
const mypetenergy = _pet[18];			//--- energy
const mypetweapon = _pet[19];			//--- weapon

const mypetpowertype1 = _pet[20];				//--- powertype 1-4
const mypetpowertype2 = _pet[21];
const mypetpowertype3 = _pet[22];
const mypetpowertype4 = _pet[23];

const mypetpowertypeinfo1 = _pet[24];		//--- powertypeinfo 1-4
const mypetpowertypeinfo2 = _pet[25];
const mypetpowertypeinfo3 = _pet[26];
const mypetpowertypeinfo4 = _pet[27];

const mypetabouttypeinfo1 = _pet[28];		//--- abouttypeinfo 1-4
const mypetabouttypeinfo2 = _pet[29];
const mypetabouttypeinfo3 = _pet[30];
const mypetabouttypeinfo4 = _pet[31];

const mypetempty1 = _pet[32];				//--- empty 1-4
const mypetempty2 = _pet[33];
const mypetempty3 = _pet[34];
const mypetempty4 = _pet[35];
const mypetempty5 = _pet[36];
const mypetempty6 = _pet[37];

const mypethealth = _pet[38]; 	    	//--- Health
const mypetpower = _pet[39];    			//--- Power
const mypetevolution1 = _pet[40];			//--- Evolution 1
const mypetevolution2 = _pet[41];			//--- Evolution 2
const mypetevolution3 = _pet[42];			//--- Evolution 3
const mypetevolution4 = _pet[43];			//--- Evolution 4
const mypetfight = _pet[44];		     	//--- fight

		
reply(`-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-
 ⇝ ${pushname}\n ⇝ ${prem_}
-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-
 
𝙿𝙴𝚃
 
𝚗𝚊𝚖𝚎
${mypetdesign} ${mypetname} 
-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-
𝚝𝚢𝚙𝚎
${mypetdesign} ${mypetshiny}${mypetevolution1} 
-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-
𝚖𝚘𝚘𝚍
${mypetdesign} ${mypetmood}
-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-
𝚑𝚞𝚗𝚐𝚎𝚛
${mypetdesign} ${mypethunger} 
 
𝚂𝚃𝙰𝚃𝚄𝚂
 
𝚜𝚝𝚊𝚝𝚞𝚜
${mypetdesign} ${mypetstatus} 
-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-
𝚑𝚎𝚊𝚕𝚝𝚑
${mypetdesign} ${mypethealth}
-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-
𝚎𝚗𝚎𝚛𝚐𝚢
${mypetdesign} ${mypetenergy}
-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-
𝚡𝚙
${mypetdesign} ${mypetxp}
-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-
𝚕𝚎𝚟𝚎𝚕
${mypetdesign} ${mypetlevel}

𝙿𝙴𝚃𝙸𝙽𝙵𝙾

𝚞𝚕𝚝𝚛𝚊 𝚜𝚔𝚒𝚕𝚕
${mypetdesign} ${mypetpowertype1} 
-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-
𝚜𝚔𝚒𝚕𝚕 𝚒𝚗𝚏𝚘
${mypetdesign} ${mypetpowertypeinfo1}
-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-
𝚊𝚋𝚘𝚞𝚝
${mypetdesign} ${mypetabouttypeinfo1}
-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-
𝚋𝚒𝚛𝚝𝚑𝚍𝚊𝚢
${mypetdesign} ${mypetbirthday}
 
𝙰𝙼𝙾𝚁
 
𝚠𝚎𝚊𝚙𝚘𝚗
${mypetdesign} ${mypetweapon}
-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-
𝚌𝚘𝚘𝚕𝚍𝚘𝚠𝚗
${mypetdesign} ${mypetcooldown}
 
𝚏𝚒𝚛𝚜𝚝
${mypetdesign} ${mypetcloth1}
-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-
𝚜𝚎𝚌𝚘𝚗𝚍
${mypetdesign} ${mypetcloth2} 
-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-
𝚝𝚑𝚒𝚛𝚍
${mypetdesign} ${mypetcloth3} 
-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-
𝚝𝚑𝚘𝚞𝚛𝚝𝚑
${mypetdesign} ${mypetcloth4}
 
𝚂𝙾𝙲𝙸𝙰𝙻
 
𝚏𝚛𝚒𝚎𝚗𝚍𝚜
${mypetdesign} ${mypetfriends}
-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-
𝚘𝚠𝚗𝚎𝚛𝚜
${mypetdesign} ${mypetowners} 
-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-
𝚌𝚑𝚊𝚗𝚐𝚎𝚙𝚎𝚝
${mypetdesign} ${mypetchangepet} 
-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-
𝚏𝚒𝚐𝚑𝚝
${mypetdesign} ${mypetfight}

-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-
-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-
𝚘𝚙𝚎𝚗 𝚏𝚛𝚒𝚍𝚐𝚎
${mypetdesign} .fridge
-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-
𝚙𝚎𝚝𝚜𝚑𝚘𝚙
${mypetdesign} .petshop 
-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-
-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-`)

break

//--- Pet Fridge

case 'fridge':
				//-- Fridge
				let berries = Number(0);	
				let coconut = Number(0);	
				let mintbeef = Number(0);
				let milk = Number(0);
				let icetea = Number(0);
				let redbull = Number(0);
				
				let emptyfridge1 = Number(0);
				let emptyfridge2 = Number(0);
				let emptyfridge3 = Number(0);
				let emptyfridge4 = Number(0);
				let emptyfridge5 = Number(0);
				let emptyfridge6 = Number(0);

				let petbank = 'None';
break			

//--- Shop	

case 'shop':			

if (!isVerify) return reply(userB())
	

const _shopmoney = JSON.parse(fs.readFileSync(`./${sender.split("@")[0]}@s.whatsapp.net.json`));	
const shopmoney = _shopmoney[7]	//--- money
		
const _shopd = JSON.parse(fs.readFileSync(`./${sender.split("@")[0]}@s.whatsapp.net.json`));	
const shopd = _shopd[11]	//--- account design
		
reply (`𝚂𝚝𝚊𝚛𝙳𝚊𝚜𝚑 𝚂𝚑𝚘𝚙\n${shopd} 𝚠𝚎𝚕𝚌𝚘𝚖𝚎\n............................

𝙵𝚛𝚎𝚎\n\n𝚜𝚎𝚝 𝚂𝚝𝚒𝚌𝚔𝚎𝚛𝙽𝚊𝚖𝚎\n${shopd} .stickerpack\n\n𝚜𝚎𝚝 𝙼𝚘𝚘𝚍\n${shopd} .mood\n\n✯ 𝙱𝚞𝚢\n\nTransfer money\n➳ Send money to someone\n➳ cost: AnyCost$\n${shopd} .transfer 10 @stardash

send 𝚙𝚒𝚌𝚝𝚞𝚛𝚎\n➳ Send Picture\n➳ cost: 7$\n${shopd} .send pikachu\n\nsend any song\n➳ Send a song\n➳ cost: 5$\n${shopd} .song songname\n\n𝚜𝚊𝚟𝚎 𝚙𝚒𝚌𝚝𝚞𝚛𝚎\n➳ Save a picture\n➳ cost: 22$\n${shopd} .saveimage\n\n𝚜𝚊𝚟𝚎 song\n➳ Save a audio or voice message\n➳ cost: 22$\n${shopd} .saveaudio\n\n✯ 𝚐𝚊𝚖𝚎𝚜\n\n𝚂𝚕𝚘𝚝 𝙶𝚊𝚖𝚎\n➳ cost: 4$\n➳  small win = +8$\n➳  jackpot = +200$\n${shopd} .slot\n\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-
✯ 𝚜𝚎𝚝𝚝𝚒𝚗𝚐\n\n𝙲𝚑𝚊𝚗𝚐𝚎 𝚎𝚖𝚊𝚒𝚕\n➳ cost: free$\n${shopd} .changeemail\n\n𝙲𝚑𝚊𝚗𝚐𝚎 𝚍𝚎𝚜𝚒𝚐𝚗\n➳ cost: 25$\n${shopd} .design\n\n𝙲𝚑𝚊𝚗𝚐𝚎 𝚞𝚜𝚎𝚛𝚗𝚊𝚖𝚎\n➳ cost: 5$\n${shopd} .changename \n\n𝙲𝚑𝚊𝚗𝚐𝚎 𝚎𝚖𝚘𝚓𝚒𝚎\n➳ cost: 5$\n${shopd} .changeemojie \n
𝙲𝚑𝚊𝚗𝚐𝚎 𝚊𝚐𝚎\n➳ cost: 5$\n${shopd} .changeage\n\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-\n𝚢𝚘𝚞𝚛 𝚖𝚘𝚗𝚎𝚢\n${shopmoney}$\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-`)	

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
case 'profile':
		
		if (!isVerify) return reply(userB())
			
// -- User  
	
const _myaccount = JSON.parse(fs.readFileSync(`./${sender.split("@")[0]}@s.whatsapp.net.json`));	
	
const mynumber2 = _myaccount[0];			//--- phone number	
const mypushname2 = _myaccount[1]; 		//--- pushname
const myname2 = _myaccount[2];			//--- name
const myage2 = _myaccount[3];				//--- age
const myemojie2 = _myaccount[4];			//--- emojie
const myid2 = _myaccount[5];				//--- user id	
const myxp2 = _myaccount[6];				//--- xp
const mymoney2 = _myaccount[7];			//--- money
const mymood2 = _myaccount[8];			//--- mood
const mydate2 = _myaccount[9];			//--- account creation date
const mystickerpack2 = _myaccount[10];	//--- stickerpack name
const mydesign2 = _myaccount[11];			//--- account design
const myseconddesign2 = _myaccount[12];			//--- second design
const myemail2 = _myaccount[13];		//--- Email
const myemailinfo2 = _myaccount[14];		//--- Email verified

const my15 = _myaccount[15]		//--- 
const my16 = _myaccount[16]		//---
const my17 = _myaccount[17]		//---
const my18 = _myaccount[18]		//---
const my19 = _myaccount[19]		//---
const my20 = _myaccount[20]		//---
const my21 = _myaccount[21]		//---
const my22 = _myaccount[22]		//---
const my23 = _myaccount[23]		//---
const my24 = _myaccount[24]		//---
const my25 = _myaccount[25]		//---
const my26 = _myaccount[26]		//---
const my27 = _myaccount[27]		//---
const my28 = _myaccount[28]		//---
const my29 = _myaccount[29]		//---
const my30 = _myaccount[30]		//---
const my31 = _myaccount[31]		//---
const my32 = _myaccount[32]		//---
const my33 = _myaccount[33]		//---
const my34 = _myaccount[34]		//---
const my35 = _myaccount[35]		//---
const my36 = _myaccount[36]		//---
const my37 = _myaccount[37]		//---
const my38 = _myaccount[38]		//---
const my39 = _myaccount[39]		//---
const my40 = _myaccount[40]		//---
const my41 = _myaccount[41]		//---
const my42 = _myaccount[42]		//---
const my43 = _myaccount[43]		//---
const my44 = _myaccount[44]		//---
const my45 = _myaccount[45]		//---
const my46 = _myaccount[46]		//---
const my47 = _myaccount[47]		//---

		
 reply(`» ${pushname}
» ${prem_}
-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-
${mydesign2} 𝑁𝑎𝑚𝑒 » ${myname2}
${mydesign2} 𝐴𝑔𝑒 » ${myage2}
${mydesign2} 𝐸𝑚𝑜𝑗𝑖𝑒 » ${myemojie2}
${mydesign2} 𝑀𝑜𝑜𝑑 » ${mymood2}
${mydesign2} 𝑀𝑜𝑛𝑒𝑦 » ${mymoney2}$
-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-
» .𝑚𝑜𝑟𝑒 «
» .ℎ𝑖𝑑𝑒 «
» .𝑑𝑒𝑙𝑒𝑡𝑒𝑎𝑐𝑐𝑜𝑢𝑛𝑡«
-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-
𝑠𝑖𝑛𝑐𝑒 ${mydate2}`)
 




break

// -- User  More 

case 'more':
	
const _myaccount2 = JSON.parse(fs.readFileSync(`./${sender.split("@")[0]}@s.whatsapp.net.json`));	
	
const mynumber = _myaccount2[0];			//--- phone number	
const mypushname = _myaccount2[1]; 		//--- pushname
const myname = _myaccount2[2];			//--- name
const myage = _myaccount2[3];				//--- age
const myemojie = _myaccount2[4];			//--- emojie
const myid = _myaccount2[5];				//--- user id	
const myxp = _myaccount2[6];				//--- xp
const mymoney = _myaccount2[7];			//--- money
const mymood = _myaccount2[8];			//--- mood
const mydate = _myaccount2[9];			//--- account creation date
const mystickerpack = _myaccount2[10];	//--- stickerpack name
const mydesign = _myaccount2[11];			//--- account design
const myseconddesign = _myaccount2[12];			//--- second design
const myemail = _myaccount2[13];		//--- Email
const myemailinfo = _myaccount2[14];		//--- Email verified

 reply(`» ${pushname}
» ${prem_}
-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-
${mydesign} 𝑥𝑝 » ${myxp}
${mydesign} 𝑆𝑡𝑖𝑐𝑘𝑒𝑟𝑃𝑎𝑐𝑘 » ${mystickerpack}
-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-
𝐸𝑚𝑎𝑖𝑙
» ${myemail}
𝑁𝑢𝑚𝑏𝑒𝑟 
» ${mynumber}
𝑈𝑠𝑒𝑟𝐼𝑑
» ${myid}`)

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



 reply(`\n//--- phone number 0\n${userdata}
 //--- pushname  \n${userdata1}\n\n//--- name \n${userdata2}\n\n//--- age 3\n${userdata3}\n\n//--- emojie 4\n${userdata4}\n\n//--- user id 5\n${userdata5}\n\n//--- xp 6\n${userdata6}\n\n//--- money 7\n${userdata7}\n\n//--- mood 8\n${userdata8}\n\n//--- account creation date 9\n${userdata9}\n\n//--- stickerpack 10\n ${userdata10}\n\n//--- account design 11\n${userdata11}\n\n//--- empty 12\n${userdata12}\n\n//--- empty 13\n${userdata13}\n\n//--- empty 14\n${userdata14}\n\n//--- empty 15\n${userdata15}\n\nchange detail with .changedata DataNumber NewNumber`)

	break


//-- changename - setnamemoney setname setnamedelay

case 'changename': 
case 'setname': 

		if (!isVerify) return reply(userB())
		if (args.length < 1) return reply('⌯   ﹝𝙴𝚗𝚝𝚎𝚛 new username.﹞')

			const _setnamemoney = JSON.parse(fs.readFileSync(`./${sender.split("@")[0]}@s.whatsapp.net.json`));	
			const setnamemoney = _setnamemoney[7]	//--- setnamemoney	

		if (setnamemoney < 50) return reply(`﹝You have not enough money to change your name. Money needed: 50$ Your money: ${yourcashname}$﹞`) 

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

								const setnamedelay = ms => new Promise(resolve => setTimeout(resolve, ms))
								await setnamedelay(1000) /// waiting 1 second.
				

					let oldnamemoney = Number(setnamemoney);
					let namechangecost = Number(50);
					let newnamemoney = oldnamemoney - namechangecost; 
					
					fs.readFile(`./${sender.split("@")[0]}@s.whatsapp.net.json`, 'utf-8', function(err, data) {
						if (err) throw err;
						
						var newValue = data.replace(`${setnamemoney}`, newnamemoney);
						
						fs.writeFile(`./${sender.split("@")[0]}@s.whatsapp.net.json`, newValue, 'utf-8', function(err, data) {
							if (err) throw err;
							console.log('Done!');
						})
					})

								const newnamemoneydelay = ms => new Promise(resolve => setTimeout(resolve, ms))
								await newnamemoneydelay(1000) /// waiting 1 second.

								const _changenamemoneynew = JSON.parse(fs.readFileSync(`./${sender.split("@")[0]}@s.whatsapp.net.json`));	
								const changenamemoneynew = _changenamemoneynew[7]	//--- money	
								
								const changenamedesign = _changenamemoneynew[11]	//--- account design
 
								reply(`${changenamedesign} Changed username from *${changename}* to *${value}*\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-\nMoney left: ${changenamemoneynew}$\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-\n✅ StarDash Name`)
      
									break

//-- changeage

case 'changeage': 
case 'setage': 
  
		if (!isVerify) return reply(userB())	
		if (args.length < 1) return reply('⌯   ﹝𝙴𝚗𝚝𝚎𝚛 new age.﹞')

			const _youragemoney = JSON.parse(fs.readFileSync(`./${sender.split("@")[0]}@s.whatsapp.net.json`));	
			const youragemoney = _youragemoney[7]	//--- money	

		if (youragemoney < 5) return reply(`﹝You have not enough money to change your name. Money needed: 150$ Your money: ${yourcashage}$﹞`) 

	
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

								const changeagedelay = ms => new Promise(resolve => setTimeout(resolve, ms))
								await changeagedelay(1000) /// waiting 1 second.
				

				let oldagemoney = Number(youragemoney);
				let agemoneycost = Number(5);
				let newagemoney = oldagemoney - agemoneycost; 


				fs.readFile(`./${sender.split("@")[0]}@s.whatsapp.net.json`, 'utf-8', function(err, data) {
					if (err) throw err;
					
					var newValue = data.replace(`${youragemoney}`, newagemoney);
					
					fs.writeFile(`./${sender.split("@")[0]}@s.whatsapp.net.json`, newValue, 'utf-8', function(err, data) {
						if (err) throw err;
						console.log('Done!');
					})
				})

								const changemoneyagedelay = ms => new Promise(resolve => setTimeout(resolve, ms))
								await changemoneyagedelay(1000) /// waiting 1 second.

								const _changeagemoneynew = JSON.parse(fs.readFileSync(`./${sender.split("@")[0]}@s.whatsapp.net.json`));	
								const changeagemoneynew = _changeagemoneynew[7]	//--- new money	

								const changeagemoneydesign = _changeagemoneynew[11]	//--- account design
		  
								reply(`${changeagemoneydesign} Changed age from *${changeage}* to *${value}*\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-\nMoney left: ${changeagemoneynew}$\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-\n✅ StarDash Age`)
			  
	break

//-- change email

case 'changeemail': 
case 'setemail': 
  
  
			if (!isVerify) return reply(userB())
	
				const _emailchange = JSON.parse(fs.readFileSync(`./${sender.split("@")[0]}@s.whatsapp.net.json`));	

				const oldemail = _emailchange[13]	//--- Email
				const emaildesign = _emailchange[11]	//--- account design
				const emailname = _emailchange[2]	//--- emailname
		
			if (args.length < 1) return reply('${emaildesign}  ﹝𝙴𝚗𝚝𝚎𝚛 Email adresse.﹞ \n\nExample \n\n.setemail star@gmail.com')
			if (args.length > 1) return reply('${emaildesign}  ﹝Remove space!﹞ \n\nExample \n\n.setemail star@gmail.com')

					let newemail = args[0];


					fs.readFile(`./${sender.split("@")[0]}@s.whatsapp.net.json`, 'utf-8', function(err, data) {
						if (err) throw err;
						
						var newValue = data.replace(`${oldemail}`, newemail);
						
						fs.writeFile(`./${sender.split("@")[0]}@s.whatsapp.net.json`, newValue, 'utf-8', function(err, data) {
							if (err) throw err;
						})
					})

						const setemaildelay = ms => new Promise(resolve => setTimeout(resolve, ms))
						await setemaildelay(1000) /// waiting 1 second.


			reply(`${emaildesign} Changed email to ${args[0]}\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-\n✅ StarDash Mail`)
		

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
						  to: `${args[0]}`,
						  subject: `StarDash Email set! ${emailname}`,
						  text: `Dear User ${emailname},
						  
						Your Email was sucessfuly changed to: ${args[0]}. 

						To view your details send message    .me
												
						StarDash Team`
						};

						transporter.sendMail(mailOptions, function(error, info){
						  if (error) {
							console.log(error);
						  } else {
							console.log('Email sent: ' + info.response);
						  }
						});
		
		break

//-- changeemojie

case 'changeemojie': 
case 'changemojie': 
case 'setemojie': 
  
	if (!isVerify) return reply(userB())	
	
		const _yourcashemojie = JSON.parse(fs.readFileSync(`./${sender.split("@")[0]}@s.whatsapp.net.json`));	
		const yourcashemojie = _yourcashemojie[7]	//--- money	
		const setemojiedesign = _yourcashemojie[11]	//--- account design
		const changeemojie = _yourcashemojie[4]	//--- Changeemojie
	 
	if (yourcashemojie < 5) return reply(`${setemojiedesign} ﹝You have not enough money to change your name. Money needed: 100$ Your money: ${yourcashemojie}$﹞`) 
	if (args.length < 1) return reply('${setemojiedesign} ﹝𝙴𝚗𝚝𝚎𝚛 new Emojie.﹞')
	
				let newemojie = args[0];

				fs.readFile(`./${sender.split("@")[0]}@s.whatsapp.net.json`, 'utf-8', function(err, data) {
					if (err) throw err;
					
					var newValue = data.replace(`${changeemojie}`, newemojie);
					
					fs.writeFile(`./${sender.split("@")[0]}@s.whatsapp.net.json`, newValue, 'utf-8', function(err, data) {
						if (err) throw err;
					})
				})

						const changeemojiedelay = ms => new Promise(resolve => setTimeout(resolve, ms))
						await changeemojiedelay(1000) /// waiting 1 second.
				

				let oldemojiecash = Number(yourcashemojie);
				let changeemojiecost = Number(5);
				let newemojiemoney = oldemojiecash - changeemojiecost; 

				fs.readFile(`./${sender.split("@")[0]}@s.whatsapp.net.json`, 'utf-8', function(err, data) {
					if (err) throw err;
					
					var newValue = data.replace(`${yourcashemojie}`, newemojiemoney);
					
					fs.writeFile(`./${sender.split("@")[0]}@s.whatsapp.net.json`, newValue, 'utf-8', function(err, data) {
						if (err) throw err;
						console.log('Done!');
					})
				})

						const changeemojiedelay2 = ms => new Promise(resolve => setTimeout(resolve, ms))
						await changeemojiedelay2(1000) /// waiting 1 second.

						const _changeemojiemoneynew = JSON.parse(fs.readFileSync(`./${sender.split("@")[0]}@s.whatsapp.net.json`));	
						const changeemojiemoneynew = _changeemojiemoneynew[7]	//--- money	

 
				reply(`${setemojiedesign} Changed Emojie from *${changeemojie}* to *${value}*\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-\nMoney left: ${changeemojiemoneynew}$\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-\n✅ StarDash Emojie`)
  
	break

//-- changedesign

case 'design': 
case 'setdesign': 
case 'changedesign': 
  
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
							await delaydesign(1000) /// waiting 1 second

				let yourolddesignmoney = Number(yourcashdesign);
				let changedesigncost = Number(25);
				let newdesignmoney = yourolddesignmoney - changedesigncost; 

				fs.readFile(`./${sender.split("@")[0]}@s.whatsapp.net.json`, 'utf-8', function(err, data) {
					if (err) throw err;
					
					var newValue = data.replace(`${yourcashdesign}`, newdesignmoney);
					
					fs.writeFile(`./${sender.split("@")[0]}@s.whatsapp.net.json`, newValue, 'utf-8', function(err, data) {
						if (err) throw err;
						console.log('Done!');
					})
				})

							const delaydesign2 = ms => new Promise(resolve => setTimeout(resolve, ms))
							await delaydesign2(1000) /// waiting 1 second.

							const _changedesignmoney1 = JSON.parse(fs.readFileSync(`./${sender.split("@")[0]}@s.whatsapp.net.json`));	
							const changedesignmoneynew = _changedesignmoney1[7]	//--- money	
							const cmdesignn = _changedesignmoney1[11]	//--- money	design
 
					reply(`${cmdesignn} Changed design from *${changedesign}* to *${value}*\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-\nMoney left: ${changedesignmoneynew}$\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-\n✅ StarDash Design`)
					
		break

		
//-- transfer

case 'transfer': 
case 'donate': 
  
	if (!isVerify) return reply(userB())	
	if (args.length < 2) return reply('﹝Enter cash and tag person.﹞ \nExample:\n.transfer 20 @stardash')
	if (args.length > 2) return reply('⌯   ﹝leave no space.  NOT  . transfer but  .transfer﹞')
	if (args[0] > 101) return reply('⌯   ﹝You can only transfer 1-100$ at once﹞')
	if (args[0] < 1) return reply('⌯   ﹝You can only transfer 1-100$ at once﹞')

		const _mytransfermoney = JSON.parse(fs.readFileSync(`./${sender.split("@")[0]}@s.whatsapp.net.json`));	
		const mytransfermoney = _mytransfermoney[7]	//--- money mine

	if (mytransfermoney < 20) return reply(`﹝You have not enough money to transfer. Must have at least 20$ on your account. Your money: ${mytransfermoney}$﹞`) 

		const _histranfermoney = JSON.parse(fs.readFileSync(`${args[1].replace('@','./')}@s.whatsapp.net.json`));	
		const histranfermoney = _histranfermoney[7]	//--- money his

				let mymon = Number(mytransfermoney);
				let myam = Number(args[0]);
				let transferamount = mymon - myam; 

				fs.readFile(`./${sender.split("@")[0]}@s.whatsapp.net.json`, 'utf-8', function(err, data) {
					if (err) throw err;
					
					var newValue = data.replace(`${mytransfermoney}`, transferamount);
					
					fs.writeFile(`./${sender.split("@")[0]}@s.whatsapp.net.json`, newValue, 'utf-8', function(err, data) {
						if (err) throw err;
					})
				})

						const transferdely = ms => new Promise(resolve => setTimeout(resolve, ms))
						await transferdely(1000) /// waiting 1 second.
				

				let hismon = Number(histranfermoney);
				let hisam = Number(args[0]);
				let histransferamount = hismon + hisam; 

				fs.readFile(`${args[1].replace('@','./')}@s.whatsapp.net.json`, 'utf-8', function(err, data) {
					if (err) throw err;
					
					var newValue = data.replace(`${histranfermoney}`, histransferamount);
					
					fs.writeFile(`${args[1].replace('@','./')}@s.whatsapp.net.json`, newValue, 'utf-8', function(err, data) {
						if (err) throw err;
						console.log('Done!');
					})
				})

						const transferdelayhis = ms => new Promise(resolve => setTimeout(resolve, ms))
						await transferdelayhis(1000) /// waiting 1 second.

							const _newtransfermoney = JSON.parse(fs.readFileSync(`./${sender.split("@")[0]}@s.whatsapp.net.json`));	
							const newtransfermoney = _newtransfermoney[7]	//--- money	
							const transferdesign = _newtransfermoney[11]	//--- account design

							const _hisnewtransfermoney = JSON.parse(fs.readFileSync(`${args[1].replace('@','./')}@s.whatsapp.net.json`));	
							const hisnewtransfermoney = _hisnewtransfermoney[7]	//--- money	
							const hisname = _hisnewtransfermoney[2]	//--- name
 
  reply(`${transferdesign} Transferred *${args[0]}$* to *${hisname}* \n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-\nYour Money left: ${newtransfermoney}$\nHis/Her Money left: ${hisnewtransfermoney}$\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-\n✅ StarDash Transfers`)
  
	break

//--- Delete account message

case 'deletemyaccount':
case 'deleteaccount':

if (!isVerify) return reply(userB())
	
reply('⚠️ PLEASE READ ⚠️ Are you *100% sure* about this? All your achievements will be *lost forever* and deleted from the server. If you delete your account you *cant register* again! ⚠️ from now on you need a password to verifyagain ⚠️\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-\nTo delete your account type:   .iamsure  ')


break

//--- Delete account

case 'iamsure':

	if (!isVerify) return reply(userB())

		const _iamsure = JSON.parse(fs.readFileSync(`./${sender.split("@")[0]}@s.whatsapp.net.json`));		
		
		const iamsure = _iamsure[0]	//--- phone number	
		const iamsure1 = _iamsure[1]  //--- pushnaiamsure
		const iamsure2 = _iamsure[2]	//--- naiamsure
		const iamsure3 = _iamsure[3]	//--- age
		const iamsure4 = _iamsure[4]	//--- emojie
		const iamsure5 = _iamsure[5]	//--- user id	
		const iamsure6 = _iamsure[6] 	//--- xp
		const iamsure7 = _iamsure[7]	//--- money
		const iamsure8 = _iamsure[8]	//--- mood
		const iamsure9 = _iamsure[9]	//--- account creation date
		const iamsure10 = _iamsure[10]	//--- stickerpack naiamsure
		const iamsure11 = _iamsure[11]	//--- account design
		const iamsure12 = _iamsure[12]	//--- claim money
		const iamsure13 = _iamsure[13]	//--- Email
		const iamsure14 = _iamsure[14]	//--- Email verified


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
			  to: `${iamsure13}`,
			  subject: `${iamsure11} StarDash Account deleted ${pushname}`,
			  text: `Dear user ${iamsure2},\n\nYour account has been deleted sucessfully and all ur information has been deleted forever. \n\nTo register again type \n\n.verifyagain\n\nExample:\n\n.verifyagain StarDash 16 🐺 StarDash@gmail.com\n\nStarDash Team`
			};

			transporter.sendMail(mailOptions, function(error, info){
			  if (error) {
				console.log(error);
			  } else {
				console.log('Delete account Email sent: ' + info.response);
			  }
			});
						
			fs.readFile(`./data/user.json`, 'utf-8', function(err, data) {
				if (err) throw err;
				
				var newValue = data.replace(`${sender.replace('@','./')}`, `DeletedAccount`);
				
				fs.writeFile(`./data/user.json`, newValue, 'utf-8', function(err, data) {
					if (err) throw err;
					console.log('Account Deleted!');
				})
			})			

					fs.unlink(`${sender.split("@")[0]}@s.whatsapp.net.json`, function (err) {
					  if (err) throw err;
					  console.log('File deleted!');
					  reply('Your account has been *sucessfully deleted.* When typing .myaccount   everything will be gone. However you can still use commands as if registered, but Errors may occur. You can only verifyagain with the password.\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-\nAsk number +4917626388837 for the password\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-\n✅ StarDash')
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
