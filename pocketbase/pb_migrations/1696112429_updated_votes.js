/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xiekc1tqypxvsox")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "kafchbse",
    "name": "spentPoints",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": 0,
      "max": null,
      "noDecimal": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xiekc1tqypxvsox")

  // remove
  collection.schema.removeField("kafchbse")

  return dao.saveCollection(collection)
})
