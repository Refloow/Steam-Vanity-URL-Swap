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

// Checking if all modules are correctly installed

try {
    // Checking if module colors is correctly installed
	colors = require('colors');
} catch (ex) {
	// If modules are not installed showing an clear error message to user.
	console.log('\n\n| [Modules] |: Missing dependencies. Install a version with dependecies or use npm install.\n\n');
	console.log(ex);
	process.exit(1);
}

// Basic display information on app start

console.log('8888888b.          .d888888                              '.cyan);
console.log('888   Y88b        d88P" 888                              '.cyan);
console.log('888    888        888   888                              '.cyan);
console.log('888   d88P .d88b. 888888888 .d88b.  .d88b. 888  888  888'.cyan);
console.log('8888888P" d8P  Y8b888   888d88""88bd88""88b888  888  888'.cyan); 
console.log('888 T88b  88888888888   888888  888888  888888  888  888'.cyan); 
console.log('888  T88b Y8b.    888   888Y88..88PY88..88PY88b 888 d88P '.cyan);
console.log('888   T88b "Y8888 888   888 "Y88P"  "Y88P"  "Y8888888P" \n\n\n'.cyan);

// Copyright notice
console.log('/* Original work: Copyright (c) 2022 Refloow (Veljko Vuckovic) All rights reserved. \n\n'.cyan);

// Importing main app file
require('./app/app.js');
