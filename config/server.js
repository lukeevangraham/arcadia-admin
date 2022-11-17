module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 8921),
  url: 'https://admin.arcadia.church',
  app: {
    keys: env.array('APP_KEYS'),
  },
});
