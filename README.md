<div align='center'>
<p align="center"> 
        <img src="https://github.com/Sanzhanov/Newman-Telegram-API/blob/main/assets/header1.png" alt="header" 
   align="center"/> 
 </p></div>
<br/>

# Newman-Telegram-API

Hi everyone, 

How about running your API collections and getting an informative report directly to the Telegram? A cool combination of two great tools - <a rel="Newman" href="https://www.npmjs.com/package/newman">Newman</a> and <a rel="TelegramBotAPI" href="https://core.telegram.org/bots/api#authorizing-your-bot">Telegram Bot API</a> will help you to do this.

---
## Install

1. Firstly, in order to receive notifications and reports in the Telegram, you need to create an API bot with the help of the <a rel="BotFather" href="https://telegram.me/BotFather">BotFather</a>. This is very easy to do and there are a lot of instructions on the Internet how to do it. The main thing here is you need to get a `token` of your bot to access the HTTP API.

2. Create your own Telegram group (public or private) to receive notifications and reports there. All you need in this step is to get a `chat id` of your group. This can be easily done using special bots inside Telegram, for example 'Get My ID' bot, just forward any message from your group to this bot. Then add your bot to the created group and give bot the admin permission to send messages to the group. You can also find all instructions on the Internet.

3. Fork this repository, create new project in IDE on your computer using copied link of  forked repository. Install the required node modules in the project. For this open a built-in terminal in your IDE and run the following command: `npm i`. Ok, now you have all required dependencies.

4. In the root of the project, find a file named `.env.example` and rename it to `.env`. Then open this file and replace the values ​​of all environment variables there with your own values:
- `COLLECTION_PATH` is the path to a json-file on your computer containing a collection of your API requests. 
- `ENVIRONMENT_PATH` is the path to a json-file on your computer containing the environment variables. You can export them for example from `Postman`.
- `TOKEN` is the token of your Telegram API Bot (see step #1).
- `CHAT_ID` is the chat id of your group (see step #2).
Try not to make any mistakes here. No quotation marks or another extra characters - everything is exactly as in the contained example. Please note that the paths to the files contain the names of these files and end with `.json`. Don't forget to save your changes (`Crtl+S`).

---
## Usage
Well, it's time to run your collection and get the report exactly to your Telegram group. Use command: `npm run test`. 

In the terminal you can see a special green bar that indicates the progress of running the collection. When the running is over you will receive a notification and an html-report directly to your Telegram group. After sending the report, also you will see a message in the terminal that the report was successfully sent to Telegram.
>It is important to note that you can receive such reports in absolutely any Telegram group to which you add your bot with administrator rights.

Also a new directory `report` will appear in the sidebar with an attached file `report.html` inside it. It will be created as part of the Newman run.

---
## Examples
Here you can see examples of notifications and reports received in my group 'API alerts', as well as snippets of the html-report:

<img align="" width="300" src="https://github.com/Sanzhanov/Newman-Telegram-API/blob/main/examples/screenshot.jpg" alt="screenshot" />

<img align="" width="300" src="https://github.com/Sanzhanov/Newman-Telegram-API/blob/main/examples/main.png" alt="main" />

<img align="" width="300" src="https://github.com/Sanzhanov/Newman-Telegram-API/blob/main/examples/request.png" alt="request" />

<img align="" width="300" src="https://github.com/Sanzhanov/Newman-Telegram-API/blob/main/examples/response.png" alt="response" />

<img align="" width="300" src="https://github.com/Sanzhanov/Newman-Telegram-API/blob/main/examples/tests.png" alt="tests" />

<img align="" width="300" src="https://github.com/Sanzhanov/Newman-Telegram-API/blob/main/examples/failed.png" alt="failed" />

---
## Additional links
In this project were used:
- <a rel="Newman" href="https://www.npmjs.com/package/newman">newman</a>
- <a rel="NewmanReporter" href="https://www.npmjs.com/package/newman-reporter-htmlextra">newman Reporter htmlextra</a>
- <a rel="DeAsync.js" href="https://www.npmjs.com/package/deasync/v/0.1.28">DeAsync.js</a>
- <a rel="Node-Fetch" href="https://www.npmjs.com/package/node-fetch/v/2.6.1">node-fetch</a>
- <a rel="Form-Data" href="https://www.npmjs.com/package/form-data/v/4.0.0">form-data</a>
- <a rel="" href="https://www.npmjs.com/package/dotenv">dotenv</a>

More information about the Telegram Bot API you can find <a rel="NewmanReporter" href="https://core.telegram.org/bots/api#authorizing-your-bot">here</a>.
