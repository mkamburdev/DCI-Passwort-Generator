// Zunächst nehmen wir die Länge des Passworts als Argument aus der Kommandozeile.
let passswordLength = process.argv[2];

// Hier haben wir eine Funktion, die die Passwortlänge generiert.
function generatePassword() {
  // Innerhalb dieser Funktion überprüfen wir, ob die Eingabe eine Zahl ist und ob sie größer als 8 ist.
  if (isNaN(passswordLength)) {
    console.log(`╔═══════════════════════════════════════════════════════════════╗`);
    console.log(`║                                                               ║`);
    console.log(`║                   Bitte trage eine Zahl ein!                  ║`);
    console.log(`║                                                               ║`);
    console.log(`╚═══════════════════════════════════════════════════════════════╝`);
    return;
  } else if (passswordLength < 8) {
    // Wenn diese Bedingungen nicht erfüllt sind, geben wir eine Fehlermeldung aus.
    console.log(`╔═══════════════════════════════════════════════════════════════╗`);
    console.log(`║                                                               ║`);
    console.log(`║               Die Zahl muss mindestens 8 sein!                ║`);
    console.log(`║                                                               ║`);
    console.log(`╚═══════════════════════════════════════════════════════════════╝`);
    return;
  }
}

// Als nächstes definieren wir Zeichensätze für verschiedene Passwortkomponenten.
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*(){}[]=<>/,.";

// Dann kombinieren wir alle Zeichensätze in einer einzigen Zeichenkette.
const all = uppercase + lowercase + numbers + symbols;

// Wir initialisieren das Passwort als leere Zeichenkette.
let passwordy = "";

// Nun generieren wir das Passwort.
for (let i = 0; i < passswordLength; i++) {
  // In jedem Durchlauf wählen wir ein zufälliges Zeichen aus der Zeichenkette "all" aus.
  const index = Math.floor(Math.random() * all.length);
  // Das ausgewählte Zeichen fügen wir zum Passwort hinzu.
  passwordy += all[index];
}

// Schließlich überprüfen wir, ob das generierte Passwort die Mindestlänge erfüllt.
if (passwordy.length >= 8) {
  // Wenn es die Mindestlänge erfüllt, geben wir das generierte Passwort aus.
  console.log(`╔═══════════════════════════════════════════════════════════════╗`);
  console.log(`║                                                               ║`);
  console.log(`║                Hier ist ihr generiertes Passwort:             ║`);
  console.log(`                          ${passwordy}                           `);
  console.log(`║                                                               ║`);
  console.log(`╚═══════════════════════════════════════════════════════════════╝`);
}
/*
Schließlich rufen wir die Funktion generatePassword auf,
um die Überprüfung der Passwortlänge zu starten und das Passwort zu generieren.
*/
generatePassword();
