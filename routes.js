const nextRouter = require('next-routes')
const APP_ROUTES = require('./routes-list')

console.log("nextRouter",nextRouter);
const routes = nextRouter();
console.log(routes)

APP_ROUTES.forEach(route => routes.add(route))

module.exports = routes