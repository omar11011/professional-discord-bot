'use strict';

const models = require('../models')
const types = require('../data/types')
const nameTypes = Object.keys(types)

module.exports = {
  async up (queryInterface, Sequelize) {
    const data = { file: [], db: await models.type.findAll(), new: [] }
    
    for (let i = 0; i < nameTypes.length; i++) data.file.push(types[nameTypes[i]])
    
    if (data.db.length > 0) {
      for (let i = 0; i < data.file.length; i++) {
        let e = data.file[i]
        let result = data.db.find(p => p.uuid == e.uuid)
        
        if (result) {
          result = result.dataValues
          const update_data = {}

          if (result.name !== e.name) update_data.name = e.name
          if (Object.keys(update_data).length > 0) await queryInterface.bulkUpdate("types", update_data, { id: result.id })
        }
        else data.new.push(e)
      }

      if (data.new.length > 0) await queryInterface.bulkInsert("types", data.new)
    } 
    else await queryInterface.bulkInsert("types", data.file)
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
