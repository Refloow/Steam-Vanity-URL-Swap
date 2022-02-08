// Copyright notice:

/*--------------------------------------------------------------------------------------------- 
* Original work: Copyright (c) 2022 Refloow.com (Veljko Vuckovic) All rights reserved.
* Developer name: Veljko Vuckovic
* Licensed under the MIT License. See LICENSE in the project root for license information.
  Main developer steam: https://steamcommunity.com/id/MajokingGames/ 
  Mail: refloowlibrarycontact@gmail.com
  
 --------------------------------------------------------------------------------------------*/

 /* 
// legal advice: PERMISSIONS AND RIGHTS
* License does not prohibit modification, distribution, private/commercial use or sale of copies as long as the original LICENSE file
 and authors copyright notice are left as they are in the project files.
* Copyright notice could be included ones or multiple times within the file.
* Copyright notice should not be removed even within the larger works (Larger modifications applied).
* Original file tags cannot be removed without creators exclusive permission.
* Adding own tags in files is possible in case of modification - even in that case original tags must be kept.
* Year on the copyright notice breakdown:
* Generally, the “year of first publication of the work” refers to the year in which the work was first distributed to the public (first year mentioned)
* Any year after represents the year of added modifications.
* Copyright cannot expire so therefore you cannot remove copyright notice if its not updated to the latest year.
* Editing existing copyright notice(s) is also prohibited.
===================================================================================
Removing copyright notice & distributing, using or selling the software without
the original license and copyright notice is licence agreement breach and its considered criminal offense and piracy.
===================================================================================
*/

// Checking if required modules are properly installed

try {
    // Checking if steam-totp module is installed
	SteamUser = require('steam-user');
    // Checking if steam-user module is installed
	SteamTotp = require('steam-totp');
    // Checking if console module is installed
    Console = require('console-master');
    // Checking if fs module is installed
	fs = require('fs');
    // Checking if module colors is correctly installed
	colors = require('colors');
	// Checking if module console master is correctly installed
	Console = require("console-master");
	// Checking if module steamcommunity is correctly installed
	SteamCommunity = require('steamcommunity');
} catch (ex) {
    // If modules are not installed showing an clear error message to user.
	console.log('\n\n\n| [Modules] |: Missing dependencies. Install a version with dependecies or use npm install.\n\n\n');
	console.log(ex);
	process.exit(1);
}


// Importing files into project

// Importing config file
const config = require('./Settings/config.js');
// Importing methods file
const method = require('./methods');


require('./accounts.js'); // Starting loging on account 1, ones account 1 is logged in it will start logging on account 2.


