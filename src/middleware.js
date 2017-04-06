import React from 'react';
import {matchRoute, resolveRequest} from '../lib/route-helpers';
import routes from './routes';
import appHtml from '../src/app-html'
import {handleError} from '../lib/utils'

export default (req, res) => {
  matchRoute(routes)(req)
    .then((result) => {
      const html = appHtml(process.env.NODE_ENV)(result.renderProps)
      resolveRequest(res, html, result)
    })
    .catch(err => {
      handleError('Server 500 error')(err)
      res.status(500).send(err)
    })
};
