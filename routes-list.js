const APP_ROUTES = [
    {
        name: 'index',
        page: 'index',
        pattern: '/',
        title: 'PlayO',
        'max-age': 7
    },
    {
        name: 'Login',
        page: 'login',
        pattern: '/login',
        title: 'Sign In'
    },
    {
        name: 'registration',
        page: 'registration',
        pattern: '/registration',
        title: 'Sign UP'
    }
]

module.exports = APP_ROUTES;