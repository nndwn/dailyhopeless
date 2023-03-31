// in gastby-browser.js
exports.shouldUpdateScroll = ({
    routerProps: { location },
    getSavedScrollPosition,
  }) => {
    const { pathname } = location
    // list of routes for the scroll-to-top-hook
    const currentPosition = getSavedScrollPosition(location)
    const scrollToTopRoutes = [`/id/`, `/en/`]
    // if the new route is part of the list above, scroll to top (0, 0)
    if (scrollToTopRoutes.indexOf(pathname) !== -1) {
      window.scrollTo(currentPosition * 0,currentPosition * 0)
    }
  
    return false
  }