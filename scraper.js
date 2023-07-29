const Xray = require('x-ray');
const x = Xray();
const fs = require('fs');

x('https://www.iana.org/domains/root/db', {
  domains: ['.domain.tld'],
})((err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  // create file with domains
  fs.writeFileSync('domains.text', result.domains.join('\n'));
});
