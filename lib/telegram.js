const axios = require('axios')
const baseUrl = 'https://api.telegram.org'

const sendMsg = (msg = '', options = {}) => {
    const {telegramToken, telegramChatId} = options

    const url = `${baseUrl}/bot${telegramToken}/sendMessage?chat_id=${telegramChatId}&text=${msg}`
      
    return axios.get(url)
}

module.exports = {sendMsg}