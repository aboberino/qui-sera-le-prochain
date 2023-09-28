/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xiekc1tqypxvsox")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "vfldfsso",
    "name": "session",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "fj7x73zkl9ylzgv",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xiekc1tqypxvsox")

  // remove
  collection.schema.removeField("vfldfsso")

  return dao.saveCollection(collection)
})
