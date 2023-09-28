/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "xiekc1tqypxvsox",
    "created": "2023-09-28 22:01:51.269Z",
    "updated": "2023-09-28 22:01:51.269Z",
    "name": "votes",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "5tghabzl",
        "name": "user_voting",
        "type": "relation",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "_pb_users_auth_",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
        }
      },
      {
        "system": false,
        "id": "w9seb90w",
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
  const collection = dao.findCollectionByNameOrId("xiekc1tqypxvsox");

  return dao.deleteCollection(collection);
})
