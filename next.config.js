/* eslint-disable no-undef */
const path = require('path');
const withSourceMaps = require('@zeit/next-source-maps')();

const env = {
    googleAnalyticsId: process.env.GOOGLE_ANALYTICS_ID,
};

module.exports = withSourceMaps({
    webpack: (config, options) => {
        config.resolve.modules.push(path.resolve(__dirname, 'src'));

        const { isServer } = options;
        if (isServer) {
            config.devtool = 'source-map';
        }

        return config;
    },
    target: 'serverless',
    env,
});
