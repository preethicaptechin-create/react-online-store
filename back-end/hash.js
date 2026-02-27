const bcrypt = require('bcryptjs'); // or 'bcrypt' if that's what you use

const password = 'admin123'; // ← CHANGE THIS TO WHATEVER YOU WANT TO USE

bcrypt.hash(password, 10)
  .then(hash => {
    console.log('\nUse this exact hash in MongoDB:');
    console.log(hash);
    console.log('\nLogin with password: ' + password);
  })
  .catch(err => console.error('Hash error:', err));