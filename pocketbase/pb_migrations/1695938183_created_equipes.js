/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "v6vueimpjxrru7q",
    "created": "2023-09-28 21:56:23.096Z",
    "updated": "2023-09-28 21:56:23.096Z",
    "name": "equipes",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "xo6wmokr",
        "name": "name",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("v6vueimpjxrru7q");

  return dao.deleteCollection(collection);
})
