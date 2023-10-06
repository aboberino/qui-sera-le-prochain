/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "7dpzx00n6xmlr68",
    "created": "2023-10-06 15:13:42.303Z",
    "updated": "2023-10-06 15:13:42.303Z",
    "name": "collaborator_humeur",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "wdda0idm",
        "name": "collaborator",
        "type": "relation",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "2nhpohbdetib3r0",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
        }
      },
      {
        "system": false,
        "id": "javk6n6p",
        "name": "humeur",
        "type": "number",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "noDecimal": false
        }
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("7dpzx00n6xmlr68");

  return dao.deleteCollection(collection);
})
