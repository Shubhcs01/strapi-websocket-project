'use strict';

/**
 * An asynchronous bootstrap function that runs before
 * your application gets started.
 *
 * This gives you an opportunity to set up your data model,
 * run jobs, or perform some special logic.
 *
 * See more details here: https://strapi.io/documentation/developer-docs/latest/setup-deployment-guides/configurations.html#bootstrap
 */

// module.exports = () => {};

// config/functions/bootstrap.js

module.exports = () => {
    // Enable WebSocket extension
    strapi.websocket = require('/home/shubham/Downloads/crm/my-crm-project/extensions/websocket')(strapi);
  };
  