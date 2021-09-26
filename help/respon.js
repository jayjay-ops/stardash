// Function respon

//-- 
const wait = () => { 
return '🍿 Bitte warten . . . - Please wait . . .'
}

//--
const stick = () => {
  return 'Fehler - Error'
}

//--
const err = (prefix) => {
  return '🪨 Failed'
}

//-- 
const group = () => {
  return 'Only 4 groups'
}

//-- 
const ban = () => {
  return '🍂 Sorry du bist gebannt'
}

//--
const ownerB = () => {
  return '💎 Diese Funktion ist nur für Legendäre Benutzer. Mehr infos? : *.menu* - 🇬🇧: This function is only for legendary users. More information: *.menu*'
}

//--
const premi = () => {
  return '💎 Diese Funktion ist nur für Premium Benutzer. Premium Befehle: *.menu* 🇬🇧: This function is only for premium Users.'
}

//--
const userB = (prefix) => {
  return `🦁: *.register* eingeben um zu registrieren. 🇬🇧: Type *.register* to register.`
}

//--
const admin = () => {
  return '🐉 Sorry ... nur für Gruppen Admins 🇬🇧: Sorry. Only 4Admins'
}

//--
const Badmin = () => {
  return '🦭 Machen sie mich erst Admin um die Funktion zu benutzen!'
}


module.exports =  { wait, stick, err, group, ban, ownerB, premi, userB, admin, Badmin } 
