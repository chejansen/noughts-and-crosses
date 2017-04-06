import React from 'react';
import { renderToString } from 'react-dom/server';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { RouterContext } from 'react-router';
import reducers from './reducers';

const renderApp = renderProps =>
  renderToString(
    <Provider store={createStore(reducers)}>
      <RouterContext {...renderProps} />
    </Provider>
  )

const appHtml = env => renderProps =>
renderProps &&
  `<!doctype html>
					<html>
						<header>
							<link href="https://fonts.googleapis.com/css?family=Oswald" rel="stylesheet">
							${ env === 'production' && '<link href = "bundle.css" rel = "stylesheet">' || ''}
							<title>My Universal App</title>
						</header>
						<body>
							<div id='app'>${env === 'production' && renderApp(renderProps) || ''}</div>
							<script src='bundle.js'></script>
						</body>
					</html>`

export default appHtml