'use strict';

/**
 * giving router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::giving.giving');
