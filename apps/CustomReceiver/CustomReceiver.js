const Castv2Client = require('castv2-client')
const CustomReceiverController = require('./CustomReceiverController')
const Application = Castv2Client.Application

class CustomReceiver extends Application {
    constructor(client, session) {
        super(client, session)
        this.CustomReceiver = this.createController(CustomReceiverController)

        const self = this

        // this.media.on('status', function (status) {
        // })
        self.emit('status', true)
    }

    static get APP_ID() { return '0AA4CA7E' }

    sendMessage(message, callback) {
        console.log("3")
        this.CustomReceiver.sendMessage.apply(this.CustomReceiver, arguments)
    }
}

module.exports = CustomReceiver
