// password-generator.js
const generatePassword = require("generate-password");

// Function to generate a random password
function generateRandomPassword() {
  const password = generatePassword.generate({
    length: 12,
    numbers: true,
    symbols: true,
    uppercase: true,
    excludeSimilarCharacters: true,
  });

  console.log(password);
}

// Call the function to generate and log a random password
generateRandomPassword();
