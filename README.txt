How it works:
This bot is Firefox extension that is triggered by specific page URLs of products. So, when the bot is active, don't go to paypal.com and bestbuy.com. Matter of fact, avoid using Firefox and let it be.

Before you activate plugin, make sure:

BESTBUY
1. You are logged in your BestBuy account and have correct shipping address and PayPal payment options set.
2. There is nothing in your BestBuy cart.

PAYPAL
1. Remove 2-step authentications.
2. Enable OneTouch at https://www.paypal.com/au/webapps/mpp/one-touch-checkout and add your browser to it.

SIMPLEPUSH - For notifications on your Phone
1. Install SimplePush app from Google App Store.
2. In the app, go to keys and make note of the key there.

COMPUTER:
1. The bot will try to beep when stock is found so make sure volume is high.
2. Make sure there aren't any background programs running that may slow down the internet.

BOT
In file 'doBuy.js':
1. Edit the file 'doBuy.js' and uncomment the SKU for the GPU while commenting the Apple watch one.
2. Change minRetryTime_ms value to 600 and maxRetryTime_ms to 3000.
3. Change SIMPLEPUSH_NOTIFY_KEY to the key from SimplePush app you made note of earlier.
4. Uncomment 'notifyPhone()'.
5. Save file.

OPTIONAL!!! - For buying GPU other than VISION 3080 Ti
Change url in 'manifest.json' file under 'content_scripts' and 'matches'.


////////////// Installing bot to Firefox
1. Open only one window of Firefox and type 'about:debugging' in the address bar.
2. Click on 'This Firefox' on the sidebar menu.
3. Click on 'Load Temporary Add-on' under 'Temporary Extensions'.
4. Navigate to bot folder and select 'manifest.json'. The bot is not installed.
5. To activate the bot, goto 'https://www.bestbuy.com/site/gigabyte-nvidia-geforce-rtx-3080-ti-vision-oc-12gb-gddr6x-pci-express-4-0-graphics-card/6466564.p?skuId=6466564&intl=nosplash'.
6. Press F12 to bring up developer tools.
7. Under 'Console' tab disable all except 'Logs' (look top right).