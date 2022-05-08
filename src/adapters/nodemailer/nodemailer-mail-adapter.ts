import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "4c6af3bc06c492",
      pass: "9b732ceeaeebd4"
    }
});

export class NodemailerMailAdapter implements MailAdapter {
    async sendMail ({ subject, body }: SendMailData) {
        await transport.sendMail({
            from: 'Equipe Feedget <suporte@feedget.com>',
            to: 'Erick Menezes <erickmenezes25@hotmail.com>',
            subject,
            html: body,
        })
    }
}