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

//-- Result GERMAN
const _truth = JSON.parse(fs.readFileSync('./result/truth.json'));
const _dare = JSON.parse(fs.readFileSync('./result/dare.json'));

const _fakten = JSON.parse(fs.readFileSync('./result/fakten.json'));
const _nsfw = JSON.parse(fs.readFileSync('./result/nsfw.json'));
const _emoji = JSON.parse(fs.readFileSync('./result/emoji.json'));

const _papier = JSON.parse(fs.readFileSync('./result/papier.json'));
const _schere = JSON.parse(fs.readFileSync('./result/schere.json'));
const _stein = JSON.parse(fs.readFileSync('./result/stein.json'));



const _roll = JSON.parse(fs.readFileSync('./result/roll.json'));

//-- Result ENGLISH
const _truthen = JSON.parse(fs.readFileSync('./result/en/truthen.json'));
const _dareen = JSON.parse(fs.readFileSync('./result/en/dareen.json'));

const _facten = JSON.parse(fs.readFileSync('./result/en/facten.json'));
const _nsfwen = JSON.parse(fs.readFileSync('./result/en/nsfwen.json'));

const _paperen = JSON.parse(fs.readFileSync('./result/en/paperen.json'));
const _sissorsen = JSON.parse(fs.readFileSync('./result/en/sissorsen.json'));
const _stoneen = JSON.parse(fs.readFileSync('./result/en/stoneen.json'));

const _rollen = JSON.parse(fs.readFileSync('./result/en/dice.json'));




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


//-- UPDATE CHANGELOG
const _update = JSON.parse(fs.readFileSync('./report/update.json'));

//-- Help
const { menu, menufun, menusticker, menuowner, menuvip, menuadmin, menuagb} = require('./help/menu');

const { updates} = require('./help/updates');
const { ass} = require('./help/ass');

const { info } = require('./help/info');
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
myMonths = ["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"];
			myDays = ['Sonntag','Montag','Dienstag','Mittwoch','Donnerstag','Freitag','Samstag'];
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
	Lxa.on('qr', () => {
		console.log(color('[CHILLOCTI]','aqua'), color("Qr Code scannen zum verbinden...", "yellow"))
	})
	fs.existsSync('./session/Lexa.json') && Lxa.loadAuthInfo('./session/Lexa.json')
Lxa.on('connecting', () => {
        const time_connecting = moment.tz('Asia/Jakarta').format('HH:mm:ss')
        console.log(color('[CHILLOCTI]','aqua'), color("Verbindet bro...", "yellow"))
    })
Lxa.on('open', () => {
        const time_connect = moment.tz('Asia/Jakarta').format('HH:mm:ss')
        console.log(color('[CHILLOCTI]','aqua'), color(`Done Connecting`, "aqua"))
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
Willkommen in der 
Gruppe *${mdata.subject}*
Bitte Vorstellen mit Bild, Name und Alter.`
				Lxa.sendMessage(mdata.id, hai, MessageType.text, { contextInfo: {"mentionedJid": [num]}})
			} else if (anu.action == 'remove') {
				num = anu.participants[0]
				bye = `@${num.split('@')[0]} Ist ein Opfer 🤣`
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


//-- watermark stiker
			function addMetadata(packname, author) {	
				if (!packname) packname = '𝙲𝚑𝚒𝚕𝚕𝚘𝚌𝚝𝚒 ✯'; if (!author) author = pushname ;	
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
if (!isGroup && isCmd) console.log(color('[Chillocti]','aqua'), "CP", color(command, "orange"), "from", (sender.split('@')[0]),  args.length)
			
//--Private Chat-Log-Konsole
if (isGroup && isCmd) console.log(color('[Chillocti]','aqua'), "GC", color(command, "orange"), "from", (sender.split('@')[0]), "in", (groupName), args.length)


//-- Status
let prem_ = 'User Free'
			if (isPrem) {
			prem_ = 'User Premium'
			} 
			if (isOwner) {
			prem_ = '*VVIP*'
			}
let Welcome_ = 'Off'
			if (isWelcom) {
			Welcome_ = 'On'
			}
let AntiLink_ = 'Off'
			if (isAnti) {
			AntiLink_ = 'On'
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
  Lxa.sendMessage(from, `Sorry die Gruppe ist zu klein mindestens . . .  ${memberlimit} . . . Bye`, text)

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
    if (!isBotGroupAdmins) return reply('Brauche Admin')
    linkgc = await Lxa.groupInviteCode (from)
    if (budy.includes(`${linkwa}${linkgc}`)) return reply('bruache Admin')
		if (isGroupAdmins) return reply(`🔮 Admin`)
		Lxa.updatePresence(from, Presence.composing)
		var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
		setTimeout( () => {
		}, 1100)
		setTimeout( () => {
		Lxa.groupRemove(from, [Kick]).catch((e) => {console.log(`*ERROR:* ${e}`)}) 
					}, 1000)
		setTimeout( () => {
		reply(`⚡ *${pushname}* `)
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
case 'haha':
reply('hahaha')
}
//--Auto response
switch(is) {
case 'hahaha':
reply('hahahaha')
}	

//--Auto response
switch(is) {
case 'ily':
reply('ily2')
}	
	
	
	
//-- Command
switch(command) {
  
//-- List menu
case 'menu':
case 'help':
case 'me':
case 'premium':
  if (!isVerify) return reply(userB(prefix))
	uptime = process.uptime()
  capt = `Hii here Shiba Menu \nWuff Wuff \nUser: ${_user.length}`
  thum = await fs.readFileSync('./docs/mrf.jpeg').toString('base64')
  if (args.length < 1) return replyimg(menu(tanggal, jam, pushname, sender, prem_, Lxa, prefix, _user, uptime, isGroupAdmins, groupMetadata, groupAdmins, Welcome_, AntiLink_, isGroup, process), text, capt, thum)
  if (args[0] === 'fun' ) {
   return replyimg(menufun(prefix, tanggal, jam), text, capt, thum)
  } else if (args[0] === 'sticker' ) {
    return replyimg(menusticker(prefix, tanggal, jam), text, capt, thum)
  } else if (args[0] === 'admin' ) {
    return reply(menuadmin(prefix, tanggal, jam))
  } else if (args[0] === 'vip' ) { 
    return reply(menuvip(prefix, tanggal, jam))
  } else if (args[0] === 'owner' ) {
    return replyimg(menuowner(prefix, tanggal, jam), text, capt, thum)
  } else if (args[0] === 'agb' ) {
    return replyimg(menuagb(prefix, tanggal, jam), text, capt, thum)
  }
          break
		  
//-- List Updates
case 'updates':
  if (!isVerify) return reply(userB(prefix))
	uptime = process.uptime()
  capt = `Hi i am Shiba \nHere are the Updates\nStarDust`
  thum = await fs.readFileSync('./media/shiba.jpg').toString('base64')
  if (args.length < 1) return replyimg(updates(tanggal, jam, pushname, sender, prem_, Lxa, prefix, _user, uptime, isGroupAdmins, groupMetadata, groupAdmins, Welcome_, AntiLink_, isGroup, process), text, capt, thum)
	  
          break
//-- nsfw ass
case 'ass':
  if (!isVerify) return reply(userB(prefix))
	uptime = process.uptime()
  capt = `Hi itz mee \n♕︎\nStarDust`
  thum = await fs.readFileSync('./media/shiba.jpg').toString('base64')
  if (args.length < 1) return replyimg(ass(tanggal, jam, pushname, sender, prem_, Lxa, prefix, _user, uptime, isGroupAdmins, groupMetadata, groupAdmins, Welcome_, AntiLink_, isGroup, process), text, capt, thum)
	  
          break			  

//-- information bot
case 'info':
case 'premiuminfo':
case 'paypal':
case 'premium':
  uptime = process.uptime()
  reply(info(Lxa, uptime, process, wa_version, mcc, mnc, os_version, device_manufacturer, device_model))
					break

//-- ping
case 'speed':
case 'ping':
 if (!isPrem) return reply(premi())
const timestamp = speed();
const latensi = speed() - timestamp
uptime = process.uptime()
reply(`Pong !! *Speed* : ${latensi.toFixed(4)} _Second_`)
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


//-- Schere
case 'schere':
case 'scherre':
  if (!isVerify) return reply(userB())
  const schere = _schere[Math.floor(Math.random() * _schere.length)]
  reply(schere)
break


//-- Stein
case 'stein':
  if (!isVerify) return reply(userB())
  const stein = _stein[Math.floor(Math.random() * _stein.length)]
  reply(stein)
break


//-- Papier
case 'papier':
case 'parpier':
  if (!isVerify) return reply(userB())
  const papier = _papier[Math.floor(Math.random() * _papier.length)]
  reply(papier)
break





//-- ENGLISH

//-- Tod truth
case 'truth':
  if (!isVerify) return reply(userB())
  const truthen = _truthen[Math.floor(Math.random() * _truthen.length)]
  reply(`★ *Truth*\n${truthen}`)
break


//-- Fakt
case 'fact':

  if (!isVerify) return reply(userB())
  const facten = _facten[Math.floor(Math.random() * _facten.length)]
  reply(`🐺  *Fact:*\n${facten}`)
break



//-- Tod dare
case 'dare':
  if (!isVerify) return reply(userB())
  const dareen = _dareen[Math.floor(Math.random() * _dareen.length)]
  reply(`★ *Dare*\n${dareen}`)
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
  reply(rollen)
break


//-- Schere

case 'cut':
  if (!isVerify) return reply(userB())
  const sissorsen = _scissorsen[Math.floor(Math.random() * _sissorsen.length)]
  reply(sissorsen)
break


//-- Stein
case 'rock':
case 'stone':
  if (!isVerify) return reply(userB())
  const stoneen = _stoneen[Math.floor(Math.random() * _stoneen.length)]
  reply(stoneen)
break


//-- Papier
case 'paper':
  if (!isVerify) return reply(userB())
  const paperen = _paperen[Math.floor(Math.random() * _paperen.length)]
  reply(paperen)
break






















//-- emoji 
case 'emoji':
case 'e':
case 'emojie':
case 'smiley':
  if (!isVerify) return reply(userB())
  const emoji = _emoji[Math.floor(Math.random() * _emoji.length)]
  reply(`*Your Emojii:*\n${emoji}`)
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
	   if (!isPrem) return reply(premi())
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
								exec(`webpmux -set exif ${addMetadata('Chillocti', pushname)} ${ran} -o ${ran}`, async (error) => {
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
								exec(`webpmux -set exif ${addMetadata('Chillocti', pushname)} ${ran} -o ${ran}`, async (error) => {
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
						reply(`falsch`)
					}
					break


//-- stiker to image
case 'toimg':
case 'imagesticker':
case 'image':
  if (!isVerify) return reply(UserB())
					if (!isQuotedSticker) return reply('Answer Sticker')
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await Lxa.downloadAndSaveMediaMessage(encmedia)
					ran= getRandom('.png')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply('Error')
						buffer = fs.readFileSync(ran)
						Lxa.sendMessage(from, buffer, image, {quoted:mek, caption: 'StarDash ✯'})
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
    text: `@${nomor.split("@")[0]} Hier ist mein Besitzer, chatte einfach, wenn du es brauchst`,
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
    reply("success clear all chat")
   break

//-- mentions all members
case 'mentionall': 
case 'tagall':
case 'makier':
      if (!isVerify) return reply(userB())
		  if (!isGroup) return reply(group())
			if (!isPrem) return reply(premi())
					members_id = []
			teks = `\n★ Gruppe : *${groupName}*\n★ Teilnehmer : *${groupMetadata.participants.length}*\n${value}\n★☆☆☆★· *MENTIONS* \n`
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
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
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
case 'request':
case 'save':
case 'anfrage':
  if (!isVerify) return reply(userB())
  yoi = value
  if (args.length < 1) return reply('Geben Sie die gewünschten Funktionen in den Bot ein')
  if (yoi.length > 200 ) return reply('Der Text überschreitet das Limit, Ihre Anfrage wird abgelehnt !')
  _request.push(yoi)
  fs.writeFileSync('./report/request.json', JSON.stringify(_request))
  reply(`Danke *${pushname}*, Ihre Anfrage wurde in der Datenbank gespeichert`)
  
	break
	
//--- update
case 'addupdate':
case 'addupdates':
case 'addneu':
  if (!isVerify) return reply(userB())
  yoi = value
  if (args.length < 1) return reply('Geben Sie das update in den Bot ein')
  if (yoi.length > 300 ) return reply('Der Text überschreitet das Limit, Ihre Anfrage wird abgelehnt !')
  _request.push(yoi)
  fs.writeFileSync('./result/update.json', JSON.stringify(_update))
  reply(`Danke *${pushname}*, Das Update wurde in der Datenbank gespeichert`)
  
	break
	


//--- Bericht
case 'lapor':
case 'fehler':
case 'bericht':
  if (!isVerify) return reply(userB())
  yoi = value
  if (args.length < 1) return reply('Geben Sie den Namen der Fehlerfunktion ein, die beim Ausprobieren auftritt')
  if (yoi.length > 100) return reply('Der Text überschreitet das Limit, Ihre Anfrage wird abgelehnt !')
  _lapor.push(yoi)
  fs.writeFileSync('./report/lapor.json', JSON.stringify(_lapor))
  reply(`Terimakasih *${pushname}*, Laporan kamu telah tersimpan dalam database`)
	break

//-- liste Bericht
case 'listlapor':
case 'listfehler':
			if (!isOwner) return reply(ownerB())
				teks = `  *LIST FEHLER*\nIm Folgenden finden Sie eine Liste der eingegangenen Meldungen nach Datum *${tanggal()}* mit der Anzahl der Berichte *${_lapor.length}*\n\n· *LIST* \n`
				for (let lap of _lapor) {
					teks += `# ${lap}\n`
				}
				teks  += `########################`
				reply(teks.trim())
				break

//-- list request
case 'listreq':
case 'listrequest':
			if (!isOwner) return reply(ownerB())
				teks = `  *LIST REQUEST*\nIm Folgenden finden Sie eine Liste der eingegangenen Meldungen nach Datum *${tanggal()}* mit der Anzahl der Berichte *${_request.length}*\n\n· *LIST* \n`
				for (let req of _request) {
					teks += ` ${req}\n`
				}
				teks  += `-`
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
					if (args.length < 1) return reply('Zielnummer hinzufügen')
					if (args[0].startsWith('0')) return reply('Ländercode verwenden')
					if (args[0].startsWith('+4')) return reply('Ländervorwahl ohne + und ohne leerzeichen verwenden')
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
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Bestellung erhalten, ausgestellt :\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						Lxa.groupRemove(from, mentioned)
					} else {
						mentions(`🪄 : @${mentioned[0].split('@')[0]}`, mentioned, true)
				 Lxa.groupRemove(from, mentioned)
					}
					break

//-- Bewerben Sie die Abteilung
case 'promote':
				  if (!isVerify) return reply(userB())
					if (!isGroup) return reply(group())
					if (!isGroupAdmins && !isOwner) return reply(admin())
					if (!isBotGroupAdmins) return reply(Badmin())
			
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di jadi admin!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Bestellung eingegangen, Sie werden Administrator :\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						Lxa.groupMakeAdmin(from, mentioned)
					} else {
						mentions(`Bestellung erhalten, @${mentioned[0].split('@')[0]} Du bist ein Admin in der Gruppe *${groupMetadata.subject}*`, mentioned, true)
						Lxa.groupMakeAdmin(from, mentioned)
					}
					break


//-- Herabgestuft
case 'demote':
			    if (!isVerify) return reply(userB())
					if (!isGroup) return reply(group())
					if (!isGroupAdmins && !isOwner) return reply(admin())
					if (!isBotGroupAdmins) return reply(Badmin())
			
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Markier Benutzer')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Bestellung eingegangen, Administrator herabgestuft :\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						Lxa.groupDemoteAdmin(from, mentioned)
					} else {
						mentions(`Bestellung angenommen, zurückgestuft : @${mentioned[0].split('@')[0]} Mitglied geworden`, mentioned, true)
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
				yeh = `https://chat.whatsapp.com/${linkgc}\n\nlink Gruppe *${groupName}*`
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
    gc = await Lxa.groupMetadata(from);
    member = gc['participants']
    jids = [];
    member.map(async adm => {
  jids.push(adm.id.replace('c.us', 's.whatsapp.net'));
})
options = {
  text: teks,
  contextInfo: {
mentionedJid: jids
  },
  quoted: mek
}
await Lxa.sendMessage(from, options, text)
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
					if (args.length < 1) return reply('Alles ?')
					anu = await Lxa.chats.all()
						for (let _ of anu)
							sendMess(_.jid, value)
						reply('Broadcast erfolgreich')
					break


//-- Total user
case 'totaluser':
case 'all':
  if (!isPrem) return reply(premi())
					teks = `TOTAL USER\n`
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
					  reply('Ich kann nur Nachrichten von mir löschen..')
					}
					break

//--- verify
case 'verify':
case 'daftar':
case 'registrieren':
case 'register':
			if (isVerify) return reply('Du bist schon registiert 🔓')
					_user.push(sender)
			fs.writeFileSync('./data/user.json', JSON.stringify(_user))
			capt = `𝔖𝔱𝔞𝔯𝔇𝔞𝔰𝔥 \nRegistered! *${pushname}* \nYou are User nr. *${_user.length}*`
			Lxa.sendMessage(from, capt, text, {quoted: mek})
					break

//--- Welcome on/off
case 'welcome':
case 'wellcome':
case 'willkommen':
        if (!isVerify) return reply(userB())
		if (!isGroup) return reply(group())
		if (!isPrem) return reply(premi())
		if (!isGroupAdmins && !isOwner) return reply(admin())
		if (args.length < 1) return reply(`On zum Aktivieren & off zum Deaktivieren`)
		if ((args[0]) === 'on') {
		if (isWelcom) return reply('Welcome aktiv')
						_welcom.push(from)
						fs.writeFileSync('./data/welcom.json', JSON.stringify(_welcom))
						reply(`Willkommen in der Gruppe, *${groupMetadata.subject}*`)
		} else if ((args[0]) === 'off') {
		if (!isWelcom) return reply('Welcome off')
						_welcom.splice(from, 1)
						fs.writeFileSync('./data/welcom.json', JSON.stringify(_welcom))
						reply(`Willkommen in der Gruppe, *${groupMetadata.subject}*`)
					} else {
						reply('*.welcome on* zum Anschalten. *.welcome off* zum Ausschalten')
					}
		break

//--- on/off antilink
				case 'antilink':
				if (!isGroupAdmins) return reply(admin())
				if (!isGroup) return reply(group())
					if (!isGroupAdmins && !isOwner) return reply(admin())
					if (!isBotGroupAdmins) return reply(Badmin())
					if (args.length < 1) return reply(`.antilink on to activate .antilink off to deactivate`)
					if ((args[0]) === 'on') {
						if (isAnti) return reply('Antilink active')
						_antilink.push(from)
						fs.writeFileSync('./data/antilink.json', JSON.stringify(_antilink))
						reply(`Antilink active in *${groupMetadata.subject}*`)
					} else if ((args[0]) === 'off') {
						if (!isAnti) return reply('Antilink off')
						_antilink.splice(from, 1)
						fs.writeFileSync('./data/antilink.json', JSON.stringify(_antilink))
						reply(`Antilink off *${groupMetadata.subject}*`)
					} else {
						reply('On zum aktivieren und off zum deaktivieren.')
					}
					break

//--- add truth
case 'addtruth':
	   if (!isPrem) return reply(premi())
  tru = value
  if (args.length < 1) return reply('Wo ist der Text')
  _truth.push(tru)
  fs.writeFileSync('./result/truth.json', JSON.stringify(_truth))
  reply(`Done`)
  break

//--- add dare
case 'adddare':
   if (!isPrem) return reply(premi())
  dar = value
  if (args.length < 1) return reply('Wo ist der Text')
  _dare.push(dar)
  fs.writeFileSync('./result/dare.json', JSON.stringify(_dare))
  reply(`Done`)
  break

//--- add truth
case 'addilham':
  if (!isGroup) return reply(ownerB())
  stat = value
  if (args.length < 1) return reply('Wo ist der Text')
  _ilham.push(stat)
  fs.writeFileSync('./result/ilham.json', JSON.stringify(_ilham))
  reply(`*Hinzugefügt*`)
  break

//--- add fakt
case 'addfakta':
case 'addfact':
  if (!isOwner) return reply(ownerB())
  stat = value
  if (args.length < 1) return reply('Wo ist der Text?')
  _fakta.push(stat)
  fs.writeFileSync('./resutl/fakta.json', JSON.stringify(_fakta))
  reply(`Done`)
  break

//--- add gombla ka haha
case 'adddilan':
  if (!isOwner) return reply(ownerB())
  stat = value
  if (args.length < 1) return reply('Wo ist der Text?')
  _dilan.push(stat)
  fs.writeFileSync('./result/dilan.json', JSON.stringify(_dilan))
  reply(`Done`)
  break

//--- add gombla ka haha
case 'addgombal':
  if (!isOwner) return reply(ownerB())
  stat = value
  if (args.length < 1) return reply('Wo ist der Text?')
  _gombal.push(stat)
  fs.writeFileSync('./result/dilan.json', JSON.stringify(_gombal))
  reply(`Done`)
  break

//--- add gombla
case 'addhacker':
  if (!isOwner) return reply(ownerB())
  stat = value
  if (args.length < 1) return reply('Wo ist der Text?')
  _hacker.push(stat)
  fs.writeFileSync('./result/hacker.json', JSON.stringify(_hacker))
  reply(`Done`)
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
