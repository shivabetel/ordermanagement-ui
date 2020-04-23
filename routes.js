const nextRouter = require('next-routes')
const APP_ROUTES = require('./routes-list')

console.log("nextRouter",nextRouter);
const routes = nextRouter();

APP_ROUTES.forEach(route => routes.add(route))

export default routes
