'use strict';

/**
 * humanitarian-aid service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::humanitarian-aid.humanitarian-aid');
