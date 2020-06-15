export const LOGIN_URI = `https://${process.env.auth0Domain}/authorize?client_id=${process.env.auth0ClientId}&response_type=code&redirect_uri=${process.env.auth0Redirect}&scope=openid%20offline_access`;

export const ROUTES = {
    HOME: {
        to: '/',
        name: 'Home',
        external: false,
    },
};

export const NAV_LINKS = [
    ROUTES.HOME,
];
