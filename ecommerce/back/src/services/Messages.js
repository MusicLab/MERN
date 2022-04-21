import fs, { promises as fsPromises } from 'fs';
import moment from 'moment';
import path from 'path';

class Message {
    mail = this.mail
    message = this.message
    date = this.date
}

const filePath = path.resolve(__dirname, '../messages.json');
export default class Messages {
    async addMessage(message) {
        try {
            const messages = await fsPromises.readFile(filePath, 'utf-8');
            const messagesJSON = JSON.parse(messages);
            message.date = moment().format('DD/MM/YYYY h:mm:ss a');
            if (fs.existsSync(filePath)) {
                messagesJSON.push(message);
                await fsPromises.writeFile(
                    filePath,
                    JSON.stringify(messagesJSON, null, '\t')
                );
                return message;
            } else {
                throw new Error('Error while sending the message');
            }
        } catch (e) {
            throw new Error('Error while sending the message');
        }
        return message
    }

    async getMessages() {
        try {
            const messages = await fsPromises.readFile(filePath, 'utf-8');
            return JSON.parse(messages);
        } catch (e) {
            throw new Error('Error while loading the messages');
        }
    }
}