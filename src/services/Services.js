const dataSource = require('../models');

class Services {
  constructor(modelName) {
    this.model = modelName;
  }

  async getAllRegisters() {
    return dataSource[this.model].findAll();
  }

  async updateRegister(updated, itemId) {
    const updatedRegisterList = dataSource[this.model].update(updated, {
      where: {
        id: itemId
      }
    });

    if (updatedRegisterList[0] === 0) {
      return false;
    }

    return true
  }
}

module.exports = Services;