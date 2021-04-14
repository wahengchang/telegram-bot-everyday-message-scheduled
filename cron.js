const cron = require('node-cron')
const telegram = require('./lib/telegram')
const telegramChatId = process.env.TELEGRAM_CHAT_ID
const telegramToken = process.env.TELEGRAM_TOKEN

const executionHourList = [9, 12, 22] // 9am

for(const hr of executionHourList) {
    console.log(`[INFO] cron ${hr}:00`)

    cron.schedule(`1 ${hr} * * *`, async function(){
        console.log('[INFO] cron: processing ... ')
        const msg = 'Everyday Pic, upload'
        await telegram.sendMsg(msg, {telegramToken, telegramChatId})
    });
}

