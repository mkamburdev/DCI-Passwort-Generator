let passswordLength = process.argv[2];

function generatePassword() {
  if (isNaN(passswordLength) || passswordLength < 8) {
	 console.log('-----------------------------------------------------------------');
	 console.log(` `);
 	 console.log(`----            Number must be greater than 8!               ----`);
	 console.log(` `);
	 console.log('-----------------------------------------------------------------');
    return;
  }
}

const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*(){}[]=<>/,.";

const all = uppercase + lowercase + numbers + symbols;

let passwordy = "";

for (let i = 0; i < passswordLength; i++) {
  const index = Math.floor(Math.random() * all.length);
  passwordy += all[index];
}
if (passwordy.length >= 8) {
  console.log('-----------------------------------------------------------------');
  console.log(` `);
  console.log(`----        	Hier ist ihr generiertes Passwort:	     ----`);
  console.log(`			  ${passwordy}`);
  console.log(` `);
  console.log('-----------------------------------------------------------------');
}

// Password Length Alert
generatePassword();
