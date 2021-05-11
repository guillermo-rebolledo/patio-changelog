const express = require('express');

const router = express.Router();

const github = require('octonode');

const client = github.client('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');

// eslint-disable-next-line no-unused-vars
router.get('/', (req, res, next) => {
  client.get(
    '/users/guillermo-rebolledo',
    {},
    function (err, status, body, headers) {
      // console.log(body); //json object
    }
  );

  client.get(
    '/repos/wizeline/patio-ui/commits',
    {},
    function (err, status, body, headers) {
      if (err) {
        res.send({
          error: true,
          error: err,
        });
      }
      res.send(body);
    }
  );

  // res.send({ message: 'Hello mangs' });
});

module.exports = router;
