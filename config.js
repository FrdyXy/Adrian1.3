const fs = require('fs')
const chalk = require('chalk')

global.apikey = 'Maslent' // LOLHUMAN
global.rosekey = '-' // ROSE

//—————「 Set Nama Bot & Own 」—————//
global.namabot = 'FrdyBOTzོ'
global.namaowner = 'FrdyXy ×፝֟͜×'

//—————「 Setting Owner 」—————//
global.owner = ['6285758479242','6282297956601']
global.nomerowner = '6285758479242','6282297956601'
global.premium = ['6285758479242','6282297956601']

//—————「 Set Wm 」—————//
global.packname = '𝚂𝚃𝙸𝙲𝙺𝙴𝚁 𝙱𝚈 𝙵𝚛𝚍𝚢𝙱𝙾𝚃𝚣\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n'
global.author = '𝙹𝙰𝙽𝙶𝙰𝙽 𝙻𝚄𝙿𝙰 𝙵𝙾𝙻𝙻𝙾𝚆\n𝙸𝙶:𝙵𝚛𝚍𝚢𝚡𝚢'
global.prefa = ['', '.']
global.sp = '•'

//—————「 Set Message 」—————//
global.mess = {
    success: '🤗Done, Oke Desu~',
    admin: '❗Perintah Ini Hanya Bisa Digunakan Oleh Admin Group !',
    botAdmin: '❗Perintah Ini Hanya Bisa Digunakan Ketika Bot Menjadi Admin Group !',
    owner: '❗Perintah Ini Hanya Bisa Digunakan Oleh Owner !',
    group: '❗Perintah Ini Hanya Bisa Digunakan Di Group Chat !',
    private: '❗Perintah Ini Hanya Bisa Digunakan Di Private Chat !',
    bot: '🤖 Fitur Khusus Pengguna Nomor Bot !',
    wait: '⏳ Sedang Di Proses !',
    endLimit: '🕊️ Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12 !',
    error: '🚫 Fitur Sedang Error !',
}

//—————「 Set Limit 」—————//
global.limitawal = {
    premium: "Infinity",
    free: 50
}

//—————「 Set Image 」—————//
global.imageurl = 'https://telegra.ph/file/9f9ec41097c6ce530dec6.jpg'
global.link = 'https://www.instagram.com/frdyxy'
global.thumb = fs.readFileSync('./media/thumb.jpg')

//—————「 Batas Akhir 」—————//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
