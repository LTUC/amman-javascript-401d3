// ./file -u api -m (GET/PUT/POST/DELTE)

const http = {};

http.fetch = function(opts) {
  if (opts) {
        console.log(`Fetching ${opts.url}`);
    console.log(`Fetching ${opts.method}`);
  }
};

module.exports = http;