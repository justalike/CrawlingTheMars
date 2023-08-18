import * as dotenv from 'dotenv'
// see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config()

export const configuration = {
  telegramToken: process.env.TELEGRAM_TOKEN as string,
  mongoUri: process.env.MONGO_URI,
  dbName: process.env.DB_NAME,
}
