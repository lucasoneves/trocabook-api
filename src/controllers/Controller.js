class Controller {
  constructor(serviceEntity) {
    this.serviceEntity = serviceEntity;
  }

  async getAll(req, res) {
    try {
      const resultList = await this.serviceEntity.getAllRegisters();
      console.log(resultList);
      return res.status(200).json(resultList);
    } catch (error) {
      return res.status(500).json({ error: error.message })
    }
  }

  async createData(req, res) {
    const data = req.body;

    try {
      const dataCreated = await this.serviceEntity.createRegister(data);

      if (dataCreated) {
        return res.status(200).json({ message: "Data created successfully" });
      }

      return res.status(404).json({ message: "Data not created!" });

    } catch (error) {
      return res.status(500).json({ error: error.message })
    }
  }

  async getSingle(req, res) {
    const { id } = req.params;
    try {
      const resultList = await this.serviceEntity.getSingleRegister(id);
      return res.status(200).json(resultList);
    } catch (error) {
      return res.status(500).json({ error: error.message })
    }
  }

  async updateData(req, res) {
    const { id } = req.params;
    const updated = req.body;

    try {
      const isUpdated = await this.serviceEntity.updateRegister(
        updated,
        Number(id)
      );

      if (!isUpdated) {
        return res.status(400).json({ message: `Not updated!` });
      }
      return res.status(200).json({ message: `Updated successfully!` });
    } catch (error) {
      return res.status(500).json({ error: error.message })
    }
  }

  async deleteData(req, res) {
    const { id } = req.params;

    try {
      const itemDeleted = await this.serviceEntity.deleteRegister(id);

      if (!itemDeleted) {
        return res.status(404).json({ message: `Not deleted!` });
      }

      return res.status(200).json({ message: "Deleted successfully!" });
    } catch (error) {
      return res.status(500).json({ error: error.message })
    }
  }
}

module.exports = Controller;
