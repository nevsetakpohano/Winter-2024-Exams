// Generate random password

let generatePassword = (alphabet, length) => {

  key = '';
  for (let i = 0; i < length; i++) {
    index = Math.floor(Math.random() * alphabet.length);
    key = key + alphabet[index];
  }
  return key;
};

module.exports = generatePassword;
