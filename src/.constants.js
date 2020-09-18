module.exports = Object.freeze({
  TOKEN: '1336183013:AAE8JhGZckXGeXJ681WRANVSTmgPcCDpdsE',
  ARIA_SECRET: 'AiGdrive_Bot12345',
  ARIA_DOWNLOAD_LOCATION: '/home/user/path/to/download/dir (no trailing "/")',
  ARIA_DOWNLOAD_LOCATION_ROOT: '/', //The mountpoint that contains ARIA_DOWNLOAD_LOCATION
  ARIA_FILTERED_DOMAINS: [''], // Prevent downloading from URLs containing these substrings
  ARIA_FILTERED_FILENAMES: [''], // Files/top level directories with these substrings in the filename won't be downloaded
  ARIA_PORT: 8210, // Port for aria2c RPC server, if you change this here, make sure to update aria.sh as well
  GDRIVE_PARENT_DIR_ID: '1lp-sJdCt9qY4BLIgcS8Olz2wc-0--47c',
  SUDO_USERS: [1004538768, 1326703864],	// Telegram user IDs. These users can use the bot in any chat.
  AUTHORIZED_CHATS: [1001186041542, 1001379954842],	// Telegram chat IDs. Anyone in these chats can use the bot.
  STATUS_UPDATE_INTERVAL_MS: 2000, // A smaller number will update faster, but might cause rate limiting
  DRIVE_FILE_PRIVATE: {
    ENABLED: false,
    EMAILS: ['someMail@gmail.com', 'someOtherMail@gmail.com']
  },
  DOWNLOAD_NOTIFY_TARGET: {  // Information about the web service to notify on download completion.
    enabled: false,   // Set this to true to use the notify functionality
    host: 'hostname.domain',
    port: 80,
    path: '/botNotify'
  },
  COMMANDS_USE_BOT_NAME: {
    ENABLED: true,  // If true, all commands except '/list' has to have the bot username after the command
    NAME: "@AiGdrive_Bot"
  },
  IS_TEAM_DRIVE: true
});
