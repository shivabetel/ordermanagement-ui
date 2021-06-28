 import canUseDOM from 'can-use-dom'
import { trimLastChar, isLastChar, trimFirstChar, isFirstChar } from './string'

export function getCurrentAppStep (pathname = '') {
  let appStep = {}
  appStep = {
    path: fetchCurrentPage(),
    step: parseQueryString()['step'],
    module: getCurrentSubModule(pathname),
    parentModule: getCurrentParentModule(pathname)
  }
  return appStep
}

export function openInNewTab (url) {
  var win = window.open(url, '_blank')
  win.focus()
}

export function goBack (getNativeComObj = null, getNativesLandingPage = null) {
  if (canUseDOM) {
    let landingPage = getNativesLandingPage && getNativesLandingPage()
    if (landingPage === getCurrentPathDetails()['relativeFullPath']) {
      const nativeComObj = getNativeComObj && getNativeComObj()
      nativeComObj.goHomeNative()
      return
    }
    window.history.back()
  }
}

export function goHome () {
  if (canUseDOM) {
    return window.location.pathname === '/'
  }
}

export function goNativeHome (params = {}) {
  if (canUseDOM) {
    const { getNativeCommObject = null } = params
    const nativeComObj = getNativeCommObject && getNativeCommObject()
    nativeComObj.goHomeNative()
  }
}

export function goToRoute (router = {}, routePath = '') {
  if (canUseDOM) {
    if (routePath) {
      router.pushRoute(routePath)
    }
  }
}

export function getCurrentPathDetails () {
  if (!canUseDOM) {
    return {}
  }
  return {
    path: fetchCurrentPage(),
    step: fetchCurrentStep(),
    base: window.location.origin,
    relativeFullPath: window.location.pathname,
    absoluteFullPath: window.location.href,
    hashPath: trimFirstChar(window.location.hash),
    queryParams: parseQueryString()
  }
}

export function redirectToURL (url = '') {
  if (canUseDOM) {
    window.location.href = url
  }
}

export function removeQueryStringWOReload (queryStringKeys = []) {
  if (canUseDOM) {
    let queryStringHash = parseQueryString()
    queryStringKeys.forEach((keyName) => {
      delete queryStringHash[keyName]
    })
    let search = buildQueryString(queryStringHash)
    const ogUrl = `${window.location.pathname} ${window.location.search}`
    const newUrl = `${window.location.pathname}${search}`
    window.history.replaceState({}, ogUrl, newUrl)
  }
  return true
}

export function parseQueryString (queryString = undefined, separator = '&') {
  try {
    if (!queryString && canUseDOM) {
      queryString = window.location.search.substring(1, window.location.search.length)
    }
    if (!queryString) {
      return {}
    }
    let splits = queryString.replace('?', '').split(separator)
    let parsed = splits.reduce(function (prev, cur) {
      // TODO : Need to patch decodeURIComponent for server
      prev[cur.split('=')[0]] = decodeURIComponent(cur.split('=')[1])
      return prev
    }, {})

    return parsed
  } catch (e) {
    // to handle URIError in case of special characters like %
    console.warn(e)
    return []
  }
}

/**
 * [buildQueryString description]
 * @param  {[type]} params object [description]
 * @return {[type]} query string to be appended [description]
 */
function buildQueryString (params = undefined) {
  let queryString = ''
  if (params) {
    for (let key in params) {
      queryString += key + '=' + encodeURIComponent(params[key]) + '&'
    }
  }
  queryString = queryString.substring(0, queryString.length - 1)
  return queryString ? `?${queryString}` : ''
}

function fetchCurrentPage () {
  if (!canUseDOM) return ''
  let path = window.location.pathname
  if (isLastChar(path, '/')) {
    path = trimLastChar(path)
  }
  const arrPath = path.split('/')
  const arrLen = arrPath.length
  return arrPath.slice(arrLen - 1, arrLen)[0] || ''
}

function fetchCurrentStep () {
  if (!canUseDOM) return ''
  const hashPath = window.location.hash
  return (hashPath.substring(1, hashPath.length) || '')
}

function getCurrentSubModule (pathname = undefined) {
  let currentPath = pathname
  if (isLastChar(currentPath, '/')) {
    currentPath = trimLastChar(currentPath)
  }

  if (isFirstChar(currentPath, '/')) {
    currentPath = trimFirstChar(currentPath)
  }

  let moduleList = currentPath.split('/')
  return dropQueryStringFromPath(moduleList[moduleList.length - 1]) || ''
}

export function dropQueryStringFromPath (input = '') {
  return input.split('?')[0]
}

export function isSubModule () {
  if (!canUseDOM) return ''
  const pathname = trimLastChar(trimFirstChar(window.location.pathname))
  return (pathname.split('/').length > 1)
}

function getCurrentParentModule (pathname = undefined) {
  let currentPath = pathname
  if (canUseDOM) {
    currentPath = currentPath || window.location.pathname
  }
  if (isLastChar(currentPath, '/')) {
    currentPath = trimLastChar(trimFirstChar(currentPath))
  }
  currentPath = trimFirstChar(currentPath)
  let moduleList = currentPath.split('/')
  return moduleList[0]
}
