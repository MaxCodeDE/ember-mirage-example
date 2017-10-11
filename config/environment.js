/* eslint-env node */
'use strict';

module.exports = function (environment) {
    let ENV = {
        modulePrefix: 'ember-mirage-example',
        podModulePrefix: '',
        environment,
        rootURL: '/',
        locationType: 'auto',
        EmberENV: {
            FEATURES: {
                // Here you can enable experimental features on an ember canary build
                // e.g. 'with-controller': true
            },
            EXTEND_PROTOTYPES: {
                // Prevent Ember Data from overriding Date.parse.
                Date: false
            }
        },

        DS: {
            host: 'localhost',
            port: '4200',
            namespace: 'api'
        },

        APP: {

        }
    };

    if (environment === 'development') {
        ENV.DS.httpEndpoint = 'http://' + ENV.DS.host + ':' + ENV.DS.port;
    }

    if (environment === 'production') {
        ENV.DS.httpEndpoint = 'http://' + ENV.DS.host + ':' + ENV.DS.port;
    }

    return ENV;
};
