const dataSource = require('../database/models');

class Services {
  constructor(modelName) {
    this.model = modelName;
  }

  async createRegister(data) {
    return await dataSource[this.model].create(data);
  }

  async getAllRegisters(where = {}) {
    return await dataSource[this.model].findAndCountAll({ where: {...where}});
  }

  async getRegistersByScope(scope) {
    return dataSource[this.model].scope(scope).findAll();
  }

  async getSingleRegister(itemId) {
    const result = await dataSource[this.model].findOne({
      where: {
        id: itemId
      }
    });

    return result;
  }
  
  async getRegisterByName(registerName) {
    return dataSource[this.model].findAll({
      where: {
        name: registerName
      }
    })
  }

  async updateRegister(updated, itemId) {
    const updatedRegisterList = await dataSource[this.model].update(updated, {
      where: {
        id: itemId
      }
    });

    if (updatedRegisterList[0] === 0) {
      return false;
    }

    return true
  }

  async deleteRegister(itemId) {
    const deletedItem = await dataSource[this.model].destroy({
      where: {
        id: itemId
      }
    });

    if (!deletedItem) {
      return false;
    }

    return true
  }
}

module.exports = Services;