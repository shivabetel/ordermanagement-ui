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
    },
    {
        name: 'products',
        page: 'products',
        pattern: '/products',
        title: 'Products'
    },
    {
        name: 'orders',
        page: 'orders',
        pattern: '/orders',
        title: 'Orders'
    },
    {
        name: 'address',
        page: 'address',
        pattern: '/address',
        title: 'Shipping Address'
    }
]

module.exports = APP_ROUTES;