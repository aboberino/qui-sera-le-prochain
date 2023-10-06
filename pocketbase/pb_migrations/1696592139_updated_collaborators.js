/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("2nhpohbdetib3r0")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "rsuugdwc",
    "name": "isLeft",
    "type": "bool",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("2nhpohbdetib3r0")

  // remove
  collection.schema.removeField("rsuugdwc")

  return dao.saveCollection(collection)
})
