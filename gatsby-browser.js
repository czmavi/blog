import ReactGA from 'react-ga'

let id = 'NOPE'

if (document.location.hostname.indexOf('martinvich.net') !== -1) {
  id = 'UA-120141270-1'
}

ReactGA.initialize(id)

exports.onRouteUpdate = (state, page, pages) => {
  ReactGA.pageview(state.location.pathname)
}