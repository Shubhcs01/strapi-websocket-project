const websocket = require("../extensions/websocket");

module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', 'f6a7a810fddb7c17665fe09335097d4d'),
    },
  },

  settings: {
    websocket: {
      enabled: true,
      debug: true,
    },
  },
});
