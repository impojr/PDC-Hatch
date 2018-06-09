# PDC-Hatch
This is an app built for the Fitbit Versa that lets you hatch and evolve all the original 151 Pokemon on your wrist!

As this is not my IP, I am not able to upload this onto the GAM, but follow these instuctions to deploy the app on your device as a developer.

## How to Install
(taken from the sdk-oauth tutorial)

1. You must first register a Web Application on
   [dev.fitbit.com](https://dev.fitbit.com/apps/new) to get an OAuth ID and
   secret. Configure the application as:

- OAuth 2.0 Application Type: **Personal**
- Callback URL:
  **https://app-settings.fitbitdevelopercontent.com/simple-redirect.html**
  
2. Download the PDC-Hatch files and create an empty project in Fitbit Studio. Copy over all the files (except the readme).

2. Enter your **OAuth 2.0 Client ID** and **Client Secret** into
   `settings/index.jsx`

3. After installing the project from Fitbit Studio, you need to login to the
   Fitbit Web API using the settings page within the Fitbit mobile application
   
## Connecting to the web API

If you try to sync your app without giving the correct permissions, you will be directed to the error screen.
To fix this, go to:
your Fitbit app > click the versa icon on the top left > Developer Menu > PDC Hatch (under sideloaded apps) > settings > login > follow the prompts.

This will grant permissions for a limited time. You will need to repeat this process every time the permissions expire.

## How to Play

There is no tutorial in PDC, the limited memory space really doesn't allow it. So, here's how to use PDC:

### Syncing Steps

Synchronizing steps isn't too much of a hassle in PDC. 
Your Daily Step goal is refreshed every time you load the main page, as it's stored directly on the device as your daily steps.
However, to give your partner pokemon steps, you'll need to Sync. What syncing does is send a request to the server asking for all your steps between now and your last sync. 
If it's your first time syncing, it takes your steps from now until the beginning of the day. This is to allow you to not fret about steps not syncing if you miss a day or two of checking the app!

I think it's important for this app to motivate you to exercize, but not require so much attention that it distract from the actual activity you're doing.

### Menu

To access the PDC menu, click the top right button of your Versa. From there, you'll be able to return to the main page, check your partner's stats, or go to your pc.

### Collecting Pokemon

Once you've reached your Daily Step Goal, you'll collect a new egg! Simply head to the home screen and follow the prompts.

**Please note: Since the daily steps reset each day, if you don't look at the home screen after reaching your goal you won't recieve an egg**

#### Mega Pokemon

Training your Pokemon without battles is tough! But, if you're a stepping-go-getter and manage to get certain Pokemon to their absolute limit, you might get to see some Mega Pokemon!

#### Legendary Pokemon

Smashing your step goal might not seem to do anything once you've collected your egg, but if you really pound the pavement a few special eggs might sneak their way into your egg pool!

### Evolving Pokemon

All Pokemon evolve once the necessary steps have been walked. Pokemon that require stone or trade evolutions will now evolve at a certain level instead.
It's not feasible to program items into the app due to the limited memory of the Fitbit Device. (at least, I couldn't figure it out). (besides, this is meant to be a simple app, just walk and watch your pokemon evolve)!

#### Eevee

Eevee has three evolutions, which it will evolve into in order. I.e, your first eevee will evolve into Vaporeon, your next Jolteon, and your last Flareon.
(yes, you will get the chance to obtain all three eeveelutions)

### Changing Partners

To change partners, go to the pc and click on a Pokemon. At first it might seem the click box is a little small, but try to aim just above the icon and it should work fine.
From there, there is a stats page that has a "Make Partner" button. Click that and now you can level and evolve your new partner!

## Find a bug/error?

My testing on the Fitbit Simulator proved to find no errors. However, if you seem to find something you think shouldn't be, please let me know.
