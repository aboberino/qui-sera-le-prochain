/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xiekc1tqypxvsox")

  collection.viewRule = ""
  collection.deleteRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xiekc1tqypxvsox")

  collection.viewRule = null
  collection.deleteRule = null

  return dao.saveCollection(collection)
})
