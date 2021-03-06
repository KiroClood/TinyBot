const { Message } = require('discord.js-light')
const config = require('../../config')

module.exports = function (user_data, message = new Message(), name, type) {
    try {
        let osuname = ''
        if (name == '') {
            if (user_data[message.author.id] !== undefined) {
                if (type == 'Bancho') {
                    osuname = user_data[message.author.id].osuname
                } else if (type == 'Akatsuki') {
                    osuname = user_data[message.author.id].akatsukiname
                } else if (type == 'Ripple') {
                    osuname = user_data[message.author.id].ripplename
                } else if (type == 'Horizon') {
                    osuname = user_data[message.author.id].horizonname
                } else if (type == 'Enjuu') {
                    osuname = user_data[message.author.id].enjuuname
                } else if (type == 'Gatari') {
                    osuname = user_data[message.author.id].gatariname
                }
                return osuname
            } else {
                let error_text = `Looks like you didn't link your profile to an osu account, do **${config.config.bot_prefix}osuset (username) {server_cmd}** to link your account`
                if (type == 'Bancho') {
                    error_text = error_text.replace('{server_cmd}', '')
                } else if (type == 'Akatsuki') {
                    error_text = error_text.replace('{server_cmd}', '-akatsuki')
                } else if (type == 'Ripple') {
                    error_text = error_text.replace('{server_cmd}', '-ripple')
                } else if (type == 'Horizon') {
                    error_text = error_text.replace('{server_cmd}', '-horizon')
                } else if (type == 'Enjuu') {
                    error_text = error_text.replace('{server_cmd}', '-enjuu')
                } else if (type == 'Gatari') {
                    error_text = error_text.replace('{server_cmd}', '-gatari')
                }
                throw error_text
            }
        } else {
            let id = ''
            if (name.includes('@') == true) {
                id = message.mentions.users.first().id
                if (user_data[id] !== undefined) {
                    if (type == 'Bancho') {
                        osuname = user_data[id].osuname
                    } else if (type == 'Akatsuki') {
                        osuname = user_data[id].akatsukiname
                    } else if (type == 'Ripple') {
                        osuname = user_data[id].ripplename
                    } else if (type == 'Horizon') {
                        osuname = user_data[id].horizonname
                    } else if (type == 'Enjuu') {
                        osuname = user_data[id].enjuuname
                    } else if (type == 'Gatari') {
                        osuname = user_data[id].gatariname
                    }
                    return osuname
                } else {
                    return name
                }
            } else {
                return name
            }
    
        }
    } catch (error) {
        message.channel.send(String(error))
    }
}
