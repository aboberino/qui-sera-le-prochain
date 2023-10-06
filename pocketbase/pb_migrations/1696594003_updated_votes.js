/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xiekc1tqypxvsox")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "9ivh4hjj",
    "name": "cote",
    "type": "number",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "min": 1,
      "max": null,
      "noDecimal": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xiekc1tqypxvsox")

  // remove
  collection.schema.removeField("9ivh4hjj")

  return dao.saveCollection(collection)
})
