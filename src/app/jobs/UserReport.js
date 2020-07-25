import Mail from '../libs/Mail';

export default {
  key: 'UserReport',
  options: {
    delay: 5000,
    attempts: 3,
  },
  async handle ({ data }) {
    const { user } = data;

    console.log(user);

    // await Mail.sendMail({
    //   from: 'Queue Test <queue@queuetest.com.br>',
    //   to: `${user.name} <${user.email}>`,
    //   subject: 'User Report',
    //   html: `${user.name} seu relatório está pronto, accese o no link `
    // })
  }
}
