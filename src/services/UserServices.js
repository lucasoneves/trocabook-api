const Services = require('./Services.js');

class UserServices extends Services {
  constructor() {
    super('User');
  }

  async getUsersByScope() {
    const usersList = await super.getRegistersByScope('allRegisters')
    return usersList;
  }
}

module.exports = UserServices;