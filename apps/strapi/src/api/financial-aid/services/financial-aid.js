'use strict';

/**
 * financial-aid service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::financial-aid.financial-aid');
