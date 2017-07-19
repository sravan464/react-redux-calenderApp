import React from 'react'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import { Provider } from 'react-redux'
import PropTypes from 'prop-types'
import Welcome from '../container/welcome/Welcome'

const RouterConfig = ({ store }) => (
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Welcome} />
      </Switch>
    </BrowserRouter>
  </Provider>
)

RouterConfig.propTypes = {
    store: PropTypes.object.isRequired
}

export default RouterConfig