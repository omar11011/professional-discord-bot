'use strict';

const models = require('../models')
const pets = require('../data/pets')

module.exports = {
  async up (queryInterface, Sequelize) {
    const data = { file: [], db: await models.pet.findAll(), new: [] }

    for (let i = 0; i < pets.length; i++) {
      data.file.push({
        uuid: pets[i].uuid,
        name: pets[i].name,
        male: pets[i].gender.male,
        female: pets[i].gender.female,
        hp: pets[i].stats.hp,
        attack: pets[i].stats.attack,
        defense: pets[i].stats.defense,
        speed: pets[i].stats.speed,
        spattack: pets[i].stats.hp,
        spdefense: pets[i].stats.hp,
      })
    }
    
    if (data.db.length > 0) {
      for (let i = 0; i < data.file.length; i++) {
        let e = data.file[i]
        let result = data.db.find(p => p.uuid == e.uuid)
        
        if (result) {
          result = result.dataValues
          const update_data = {}

          if (result.name !== e.name) update_data.name = e.name
          if (result.hp !== e.hp) update_data.hp = e.hp
          if (result.attack !== e.attack) update_data.attack = e.attack
          if (result.defense !== e.defense) update_data.defense = e.defense
          if (result.speed !== e.speed) update_data.speed = e.speed
          if (result.spattack !== e.spattack) update_data.spattack = e.spattack
          if (result.spdefense !== e.spdefense) update_data.spdefense = e.spdefense

          if (Object.keys(update_data).length > 0) await queryInterface.bulkUpdate("pets", update_data, { id: result.id })
        }
        else data.new.push(e)
      }

      if (data.new.length > 0) await queryInterface.bulkInsert("pets", data.new)
    } 
    else await queryInterface.bulkInsert("pets", data.file)
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
