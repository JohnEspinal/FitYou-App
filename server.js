// function requireHTTPS(req, res, next) {
//     // The 'x-forwarded-proto' check is for Heroku
//     if (!req.secure && req.get('x-forwarded-proto') !== 'https') {
//         return res.redirect('https://' + req.get('host') + req.url);
//     }
//     next();
// }



const express = require('express');
const app = express();

// app.use(requireHTTPS);

app.use(express.static(`./dist/fit-you-app`));

app.get(`/*`, function(req, res) {
    console.log("first")
    res.sendFile(`index.html`, {root: 'dist/fit-you-app'}
  );
  });

  const PORT = process.env.PORT || 8080;

  app.listen(PORT, () => {
    console.log("Listening on port", PORT)
  });

  