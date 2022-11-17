'use strict';

/**
 * giving service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::giving.giving');
