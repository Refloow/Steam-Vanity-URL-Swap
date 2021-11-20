module.exports = {


    /* Original work: Copyright (c) 2021 Refloow (Veljko Vuckovic) All rights reserved. */


        // Account1 => tempVanityURL
        // Account2 => Claims vanityURL2 (Url from old account as fast as possible)
    
    
        // Account Information // [Account 1]
    
        Account1Name: '',
        Account1password: '',
        // Leave empty if account dont have 2fa auth. 
        // If you leave shared_secret empty configure steamguardauto false to manualy enter codes.
        Account1_shared_secret: '',
        Account1_SteamGuardAuto: true,     // Enable or disable | [true / false] automaticly generating 2fa codes for loging into account.
        
        // Account Information // [Account 2]
    
        Account2Name: '',
        Account2password: '',
        // Leave empty if account dont have 2fa auth. 
        // If you leave shared_secret empty configure steamguardauto false to manualy enter codes.
        Account2_shared_secret: '',
        Account2_SteamGuardAuto: true,     // Enable or disable | [true / false] automaticly generating 2fa codes for loging into account.



        tempVanityURL: '', // Url that will be set on acc1 so acc2 can claim old url. Can't be already taken url or url from acc2
        vanityURL2: '',        // Url Account2 will claim from acc1 ones acc1 has changed url.

        // Make sure if 2FA is off to put high delay so both accounts can be logged in at time for transfer. (1000 ms = 1sec)
        loginDelay: 20000, // Delay in miliseconds between logging account2 and initializing swap (transfer will be attempted after this time)



        // Aditional info

// In case steamguard is enabled but script asks for manual input,
// you are trying to login twice in the time it needs for 1 code to be generated
// (Close and wait 15 sec, than run the script)
// In case steam is throwing invalid passord error but passwords are correct.
// You are rate limited. Steam doesn't accept any login requests for next x hours no matter if password is correct or not
// You get rated limited in case you send too many login requests in short amount of time (example, you try to run the script 10 times with wrong passwords (than right ones wont work too))
// Make sure info is correct to avoid these errors.
    }