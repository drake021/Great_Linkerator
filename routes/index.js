const apiRouter = require('express').Router();

const{
  getLinks,
  createLink
}= require('../db');

apiRouter.get('/links', async (req, res, next) => {
  try {
    const returnedLinks = await getLinks();

    res.send({
      links: returnedLinks
    });
  } catch (error) {
    next(error);
  }
});

module.exports = apiRouter;
