import TelegramBot from 'node-telegram-bot-api'
import { configuration as secrets } from './config'
import { TelegramController } from './telegram/telegram.controller'

const bot = new TelegramBot(secrets.telegramToken, { polling: true });