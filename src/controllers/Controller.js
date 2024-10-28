

class Controller {
  constructor(serviceEntity) {
    this.serviceEntity = serviceEntity;
  }

  async getAll(req, res) {
    try {
      const resultList = await this.serviceEntity.getAllRegisters();
      console.log(resultList)
      return res.status(200).json(resultList)
    } catch (error) {
      console.error(error)
    }
  }

  async updateData(req, res) {
    const { id } = req.params;
    const updated = req.body;

    try {
      const isUpdated = await this.serviceEntity.updateRegister(updated, Number(id));

      if (!isUpdated) {
        return res.status(400).json({ message: `Not updated!`})
      }
      return res.status(200).json({ message: `Updated successfully!`})

    } catch (error) {
      console.error(error)
    }
  }
}

module.exports = Controller;