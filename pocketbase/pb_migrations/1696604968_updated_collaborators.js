/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("2nhpohbdetib3r0")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "5xavifxw",
    "name": "startMissionDate",
    "type": "date",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("2nhpohbdetib3r0")

  // remove
  collection.schema.removeField("5xavifxw")

  return dao.saveCollection(collection)
})
