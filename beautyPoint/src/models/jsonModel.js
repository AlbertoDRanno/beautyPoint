const fs = require('fs');
const path = require('path');

class JsonModel {
  constructor(name) {
    this.name = name;
    this.dataDir = '../data/';
    this.dataPath = path.resolve(__dirname, this.dataDir, this.name + '.json');
  }

  /** Lee el archivo JSON */
  readJsonFile() {
    let fileContents = fs.readFileSync(this.dataPath, 'utf-8');
    if (fileContents) {
      return JSON.parse(fileContents);
    }
    return [];
  }

  /** Escribe el archivo JSON */
  writeJsonFile(data) {
    let jsonData = JSON.stringify(data, null, ' ');
    fs.writeFileSync(this.dataPath, jsonData);
  }

  /** Genera el próximo valor para la pk */
  generatePk() {
    let items = this.readJsonFile();
    let lastItem = items.pop();

    if (lastItem) {
      return ++lastItem.id;
    }

    return 1;
  }

  /** Trae todos los registros */
  all() {
    return this.readJsonFile();
  }

  /** Trae un registro por su valor de pk */
  buscar(id) {
    let items = this.readJsonFile();
    return items.find((item) => item.id == id);
  }

  /** Filtra registros por su clave y valor */
  filtrarPorCampoValor(campo, valor) {
    let items = this.readJsonFile();
    return items.filter((item) => item[campo] == valor);
  }

  /** Guarda el registro en la colección */
  save(item) {
    let items = this.readJsonFile();
    item.id = this.generatePk();
    items.push(item);

    this.writeJsonFile(items);

    return item.id;
  }

  /** Actualiza el registro de la colección */
  update(item) {
    let items = this.readJsonFile();

    let updatedItems = items.map((currentItem) => {
      if (currentItem.id == item.id) {
        return (currentItem = item);
      }
      return currentItem;
    });

    updatedItems = updatedItems.map((currentItem) => {
      currentItem.id = parseInt(currentItem.id);
      return currentItem;
    });

    this.writeJsonFile(updatedItems);

    return item.id;
  }

  /** Elimina el registro de la colección */
  destroy(id) {
    let items = this.readJsonFile();

    let filteredItems = items.filter((currentItem) => currentItem.id != id);

    this.writeJsonFile(filteredItems);
  }
}

module.exports = JsonModel;
