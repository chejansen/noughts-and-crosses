import { match } from 'react-router';
import r from 'ramda';

//These functions are curried so we can use in compose stack
const matchRoute = routes => req =>
  new Promise((resolve, reject) => {
    match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
      if (error) {
        reject(error.message);
      } else {
        resolve({ redirectLocation, renderProps });
      }
    })
  });

const resolveRequest = r.curry(
  (res, html, result) => {
    if (result.redirectLocation) {
      res.redirect(302, result.redirectLocation.pathname + result.redirectLocation.search);
    } else if (result.renderProps) {
      res.status(200).send(html);
    } else {
      res.status(404).send('Not found');
    }
  });

export {
  matchRoute,
  resolveRequest
}