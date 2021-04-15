const apiRouter = require('express').Router();

const{
  getLinks,
  createLink,
  addClick
}= require('../db');

apiRouter.get('/links', async (req, res, next) => {
  try {
    const returnedLinks = await getLinks();

    res.send(
      returnedLinks
    );
  } catch (error) {
    next(error);
  }
});

apiRouter.post('/links', async (req, res, next) => {

  const { link, comment } = req.body;
  const linkData = {link, comment};

 try {
     const createdLink = await createLink(linkData);
     res.send({
       createdLink
     });
   } catch (error) {
     next(error);
   }
 });


//  const data = { clicks: 'example' };

//  apiRouter.fetch('/links', {
//    method: 'PATCH',
//    headers: {
//      'Content-Type': 'application/json',
//    },
//    body: JSON.stringify(data),
//  })
//  .then(response => response.json())
//  .then(data => {
//    console.log('Success:', data);
//  })
//  .catch((error) => {
//    console.error('Error:', error);
//  });

 apiRouter.patch('/links', async (req, res, next) => {

  const { link } = req.body;
  const linkData = {link};

 try {
     const updateClick = await addClick(linkData);
     res.send({
       updateClick
     });
   } catch (error) {
     next(error);
   }
 });




module.exports = apiRouter;
