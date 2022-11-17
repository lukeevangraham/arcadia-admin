'use strict';

/**
 *  giving controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::giving.giving');
