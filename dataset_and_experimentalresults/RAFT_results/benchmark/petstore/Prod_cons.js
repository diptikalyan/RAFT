groups = {
  "name": "api",
  "id": 1350,
  "children": [
    {
      "name": "root.pet",
      "id": 1351,
      "children": [
        {
          "name": "findPetsByStatus",
          "id": 1352,
          "children": [
            {
              "name": "findPetsByStatus.query.status.array_item",
              "id": 1387
            }
          ]
        },
        {
          "name": "getPetById",
          "id": 1353,
          "children": [
            {
              "name": "getPetById.path.petId",
              "id": 1379
            }
          ]
        },
        {
          "name": "updatePetWithForm",
          "id": 1354,
          "children": [
            {
              "name": "updatePetWithForm.path.petId",
              "id": 1382
            },
            {
              "name": "updatePetWithForm.formData.name",
              "id": 1385
            },
            {
              "name": "updatePetWithForm.formData.status",
              "id": 1388
            }
          ]
        },
        {
          "name": "deletePet",
          "id": 1355,
          "children": [
            {
              "name": "deletePet.path.petId",
              "id": 1378
            }
          ]
        },
        {
          "name": "updatePet",
          "id": 1356,
          "children": [
            {
              "name": "updatePet.request-body.body.id",
              "id": 1381
            }
          ]
        },
        {
          "name": "uploadFile",
          "id": 1357,
          "children": [
            {
              "name": "uploadFile.path.petId",
              "id": 1383
            }
          ]
        },
        {
          "name": "findPetsByTags",
          "id": 1358,
          "children": [
            {
              "name": "findPetsByTags.query.tags.array_item",
              "id": 1390
            }
          ]
        },
        {
          "name": "addPet",
          "id": 1359,
          "children": [
            {
              "name": "addPet.200.id",
              "id": 1377
            },
            {
              "name": "addPet.200.name",
              "id": 1384
            },
            {
              "name": "addPet.200.status",
              "id": 1386
            },
            {
              "name": "addPet.200.tags.array_item.name",
              "id": 1389
            }
          ]
        }
      ]
    },
    {
      "name": "root.store.order",
      "id": 1360,
      "children": [
        {
          "name": "getOrderById",
          "id": 1361,
          "children": [
            {
              "name": "getOrderById.path.orderId",
              "id": 1408
            }
          ]
        },
        {
          "name": "deleteOrder",
          "id": 1362,
          "children": [
            {
              "name": "deleteOrder.path.orderId",
              "id": 1407
            }
          ]
        },
        {
          "name": "placeOrder",
          "id": 1363,
          "children": [
            {
              "name": "placeOrder.request-body.body.petId",
              "id": 1380
            },
            {
              "name": "placeOrder.200.id",
              "id": 1406
            }
          ]
        }
      ]
    },
    {
      "name": "root.store.inventory",
      "id": 1364,
      "children": [
        {
          "name": "getInventory",
          "id": 1365
        }
      ]
    },
    {
      "name": "root.user",
      "id": 1366,
      "children": [
        {
          "name": "updateUser",
          "id": 1367,
          "children": [
            {
              "name": "updateUser.request-body.body.id",
              "id": 1392
            },
            {
              "name": "updateUser.path.username",
              "id": 1399
            }
          ]
        },
        {
          "name": "createUsersWithArrayInput",
          "id": 1368,
          "children": [
            {
              "name": "createUsersWithArrayInput.request-body.body.array_item.id",
              "id": 1400
            },
            {
              "name": "createUsersWithArrayInput.request-body.body.array_item.password",
              "id": 1401
            },
            {
              "name": "createUsersWithArrayInput.request-body.body.array_item.username",
              "id": 1402
            }
          ]
        },
        {
          "name": "createUsersWithListInput",
          "id": 1369,
          "children": [
            {
              "name": "createUsersWithListInput.request-body.body.array_item.id",
              "id": 1403
            },
            {
              "name": "createUsersWithListInput.request-body.body.array_item.password",
              "id": 1404
            },
            {
              "name": "createUsersWithListInput.request-body.body.array_item.username",
              "id": 1405
            }
          ]
        },
        {
          "name": "deleteUser",
          "id": 1370,
          "children": [
            {
              "name": "deleteUser.path.username",
              "id": 1396
            }
          ]
        },
        {
          "name": "getUserByName",
          "id": 1371,
          "children": [
            {
              "name": "getUserByName.path.username",
              "id": 1397
            }
          ]
        },
        {
          "name": "createUser",
          "id": 1372,
          "children": [
            {
              "name": "createUser.request-body.body.id",
              "id": 1391
            },
            {
              "name": "createUser.request-body.body.password",
              "id": 1393
            },
            {
              "name": "createUser.request-body.body.username",
              "id": 1395
            }
          ]
        }
      ]
    },
    {
      "name": "root.user.login",
      "id": 1373,
      "children": [
        {
          "name": "loginUser",
          "id": 1374,
          "children": [
            {
              "name": "loginUser.query.password",
              "id": 1394
            },
            {
              "name": "loginUser.query.username",
              "id": 1398
            }
          ]
        }
      ]
    },
    {
      "name": "root.user.logout",
      "id": 1375,
      "children": [
        {
          "name": "logoutUser",
          "id": 1376
        }
      ]
    }
  ]
};
 pc = [
  {
    "source": "addPet.200.id",
    "target": "deletePet.path.petId"
  },
  {
    "source": "addPet.200.id",
    "target": "getPetById.path.petId"
  },
  {
    "source": "addPet.200.id",
    "target": "placeOrder.request-body.body.petId"
  },
  {
    "source": "addPet.200.id",
    "target": "updatePet.request-body.body.id"
  },
  {
    "source": "addPet.200.id",
    "target": "updatePetWithForm.path.petId"
  },
  {
    "source": "addPet.200.id",
    "target": "uploadFile.path.petId"
  },
  {
    "source": "addPet.200.name",
    "target": "updatePetWithForm.formData.name"
  },
  {
    "source": "addPet.200.status",
    "target": "findPetsByStatus.query.status.array_item"
  },
  {
    "source": "addPet.200.status",
    "target": "updatePetWithForm.formData.status"
  },
  {
    "source": "addPet.200.tags.array_item.name",
    "target": "findPetsByTags.query.tags.array_item"
  },
  {
    "source": "createUser.request-body.body.id",
    "target": "updateUser.request-body.body.id"
  },
  {
    "source": "createUser.request-body.body.password",
    "target": "loginUser.query.password"
  },
  {
    "source": "createUser.request-body.body.username",
    "target": "deleteUser.path.username"
  },
  {
    "source": "createUser.request-body.body.username",
    "target": "getUserByName.path.username"
  },
  {
    "source": "createUser.request-body.body.username",
    "target": "loginUser.query.username"
  },
  {
    "source": "createUser.request-body.body.username",
    "target": "updateUser.path.username"
  },
  {
    "source": "createUsersWithArrayInput.request-body.body.array_item.id",
    "target": "updateUser.request-body.body.id"
  },
  {
    "source": "createUsersWithArrayInput.request-body.body.array_item.password",
    "target": "loginUser.query.password"
  },
  {
    "source": "createUsersWithArrayInput.request-body.body.array_item.username",
    "target": "deleteUser.path.username"
  },
  {
    "source": "createUsersWithArrayInput.request-body.body.array_item.username",
    "target": "getUserByName.path.username"
  },
  {
    "source": "createUsersWithArrayInput.request-body.body.array_item.username",
    "target": "loginUser.query.username"
  },
  {
    "source": "createUsersWithArrayInput.request-body.body.array_item.username",
    "target": "updateUser.path.username"
  },
  {
    "source": "createUsersWithListInput.request-body.body.array_item.id",
    "target": "updateUser.request-body.body.id"
  },
  {
    "source": "createUsersWithListInput.request-body.body.array_item.password",
    "target": "loginUser.query.password"
  },
  {
    "source": "createUsersWithListInput.request-body.body.array_item.username",
    "target": "deleteUser.path.username"
  },
  {
    "source": "createUsersWithListInput.request-body.body.array_item.username",
    "target": "getUserByName.path.username"
  },
  {
    "source": "createUsersWithListInput.request-body.body.array_item.username",
    "target": "loginUser.query.username"
  },
  {
    "source": "createUsersWithListInput.request-body.body.array_item.username",
    "target": "updateUser.path.username"
  },
  {
    "source": "placeOrder.200.id",
    "target": "deleteOrder.path.orderId"
  },
  {
    "source": "placeOrder.200.id",
    "target": "getOrderById.path.orderId"
  }
];
 scenarios={
  "name": "Scenarios",
  "id": 1409,
  "children": [
    {
      "name": "op_addPet",
      "id": 1410,
      "children": [
        {
          "name": "addPet",
          "id": 1411
        }
      ]
    },
    {
      "name": "op_deletePet",
      "id": 1412,
      "children": [
        {
          "name": "deletePet",
          "id": 1413,
          "children": [
            {
              "name": "deletePet.path.petId",
              "id": 1416
            }
          ]
        },
        {
          "name": "addPet",
          "id": 1414,
          "children": [
            {
              "name": "addPet.200.id",
              "id": 1415
            }
          ]
        }
      ]
    },
    {
      "name": "op_findPetsByStatus",
      "id": 1417,
      "children": [
        {
          "name": "findPetsByStatus",
          "id": 1418,
          "children": [
            {
              "name": "findPetsByStatus.query.status.array_item",
              "id": 1421
            }
          ]
        },
        {
          "name": "addPet",
          "id": 1419,
          "children": [
            {
              "name": "addPet.200.status",
              "id": 1420
            }
          ]
        }
      ]
    },
    {
      "name": "op_findPetsByTags",
      "id": 1422,
      "children": [
        {
          "name": "findPetsByTags",
          "id": 1423,
          "children": [
            {
              "name": "findPetsByTags.query.tags.array_item",
              "id": 1426
            }
          ]
        },
        {
          "name": "addPet",
          "id": 1424,
          "children": [
            {
              "name": "addPet.200.tags.array_item.name",
              "id": 1425
            }
          ]
        }
      ]
    },
    {
      "name": "op_getPetById",
      "id": 1427,
      "children": [
        {
          "name": "getPetById",
          "id": 1428,
          "children": [
            {
              "name": "getPetById.path.petId",
              "id": 1431
            }
          ]
        },
        {
          "name": "addPet",
          "id": 1429,
          "children": [
            {
              "name": "addPet.200.id",
              "id": 1430
            }
          ]
        }
      ]
    },
    {
      "name": "op_placeOrder",
      "id": 1432,
      "children": [
        {
          "name": "placeOrder",
          "id": 1433,
          "children": [
            {
              "name": "placeOrder.request-body.body.petId",
              "id": 1436
            }
          ]
        },
        {
          "name": "addPet",
          "id": 1434,
          "children": [
            {
              "name": "addPet.200.id",
              "id": 1435
            }
          ]
        }
      ]
    },
    {
      "name": "op_deleteOrder",
      "id": 1437,
      "children": [
        {
          "name": "deleteOrder",
          "id": 1438,
          "children": [
            {
              "name": "deleteOrder.path.orderId",
              "id": 1444
            }
          ]
        },
        {
          "name": "addPet",
          "id": 1439,
          "children": [
            {
              "name": "addPet.200.id",
              "id": 1441
            }
          ]
        },
        {
          "name": "placeOrder",
          "id": 1440,
          "children": [
            {
              "name": "placeOrder.request-body.body.petId",
              "id": 1442
            },
            {
              "name": "placeOrder.200.id",
              "id": 1443
            }
          ]
        }
      ]
    },
    {
      "name": "op_getOrderById",
      "id": 1445,
      "children": [
        {
          "name": "getOrderById",
          "id": 1446,
          "children": [
            {
              "name": "getOrderById.path.orderId",
              "id": 1452
            }
          ]
        },
        {
          "name": "addPet",
          "id": 1447,
          "children": [
            {
              "name": "addPet.200.id",
              "id": 1449
            }
          ]
        },
        {
          "name": "placeOrder",
          "id": 1448,
          "children": [
            {
              "name": "placeOrder.request-body.body.petId",
              "id": 1450
            },
            {
              "name": "placeOrder.200.id",
              "id": 1451
            }
          ]
        }
      ]
    },
    {
      "name": "op_updatePet",
      "id": 1453,
      "children": [
        {
          "name": "updatePet",
          "id": 1454,
          "children": [
            {
              "name": "updatePet.request-body.body.id",
              "id": 1457
            }
          ]
        },
        {
          "name": "addPet",
          "id": 1455,
          "children": [
            {
              "name": "addPet.200.id",
              "id": 1456
            }
          ]
        }
      ]
    },
    {
      "name": "op_updatePetWithForm",
      "id": 1458,
      "children": [
        {
          "name": "updatePetWithForm",
          "id": 1459,
          "children": [
            {
              "name": "updatePetWithForm.path.petId",
              "id": 1462
            },
            {
              "name": "updatePetWithForm.formData.name",
              "id": 1464
            },
            {
              "name": "updatePetWithForm.formData.status",
              "id": 1466
            }
          ]
        },
        {
          "name": "addPet",
          "id": 1460,
          "children": [
            {
              "name": "addPet.200.id",
              "id": 1461
            },
            {
              "name": "addPet.200.name",
              "id": 1463
            },
            {
              "name": "addPet.200.status",
              "id": 1465
            }
          ]
        }
      ]
    },
    {
      "name": "op_uploadFile",
      "id": 1467,
      "children": [
        {
          "name": "uploadFile",
          "id": 1468,
          "children": [
            {
              "name": "uploadFile.path.petId",
              "id": 1471
            }
          ]
        },
        {
          "name": "addPet",
          "id": 1469,
          "children": [
            {
              "name": "addPet.200.id",
              "id": 1470
            }
          ]
        }
      ]
    },
    {
      "name": "op_createUser",
      "id": 1472,
      "children": [
        {
          "name": "createUser",
          "id": 1473
        }
      ]
    },
    {
      "name": "op_deleteUser",
      "id": 1474,
      "children": [
        {
          "name": "deleteUser",
          "id": 1475,
          "children": [
            {
              "name": "deleteUser.path.username",
              "id": 1478
            }
          ]
        },
        {
          "name": "createUser",
          "id": 1476,
          "children": [
            {
              "name": "createUser.request-body.body.username",
              "id": 1477
            }
          ]
        }
      ]
    },
    {
      "name": "op_getUserByName",
      "id": 1479,
      "children": [
        {
          "name": "getUserByName",
          "id": 1480,
          "children": [
            {
              "name": "getUserByName.path.username",
              "id": 1483
            }
          ]
        },
        {
          "name": "createUser",
          "id": 1481,
          "children": [
            {
              "name": "createUser.request-body.body.username",
              "id": 1482
            }
          ]
        }
      ]
    },
    {
      "name": "op_loginUser",
      "id": 1484,
      "children": [
        {
          "name": "loginUser",
          "id": 1485,
          "children": [
            {
              "name": "loginUser.query.password",
              "id": 1488
            },
            {
              "name": "loginUser.query.username",
              "id": 1490
            }
          ]
        },
        {
          "name": "createUser",
          "id": 1486,
          "children": [
            {
              "name": "createUser.request-body.body.password",
              "id": 1487
            },
            {
              "name": "createUser.request-body.body.username",
              "id": 1489
            }
          ]
        }
      ]
    },
    {
      "name": "op_updateUser",
      "id": 1491,
      "children": [
        {
          "name": "updateUser",
          "id": 1492,
          "children": [
            {
              "name": "updateUser.request-body.body.id",
              "id": 1495
            },
            {
              "name": "updateUser.path.username",
              "id": 1497
            }
          ]
        },
        {
          "name": "createUser",
          "id": 1493,
          "children": [
            {
              "name": "createUser.request-body.body.id",
              "id": 1494
            },
            {
              "name": "createUser.request-body.body.username",
              "id": 1496
            }
          ]
        }
      ]
    },
    {
      "name": "op_createUsersWithArrayInput",
      "id": 1498,
      "children": [
        {
          "name": "createUsersWithArrayInput",
          "id": 1499
        }
      ]
    },
    {
      "name": "op_createUsersWithListInput",
      "id": 1500,
      "children": [
        {
          "name": "createUsersWithListInput",
          "id": 1501
        }
      ]
    },
    {
      "name": "op_getInventory",
      "id": 1502,
      "children": [
        {
          "name": "getInventory",
          "id": 1503
        }
      ]
    },
    {
      "name": "op_logoutUser",
      "id": 1504,
      "children": [
        {
          "name": "logoutUser",
          "id": 1505
        }
      ]
    },
    {
      "name": "rest_pet_1",
      "id": 1506,
      "children": [
        {
          "name": "addPet",
          "id": 1507,
          "children": [
            {
              "name": "addPet.200.id",
              "id": 1513
            },
            {
              "name": "addPet.200.name",
              "id": 1519
            },
            {
              "name": "addPet.200.status",
              "id": 1521
            }
          ]
        },
        {
          "name": "uploadFile",
          "id": 1508,
          "children": [
            {
              "name": "uploadFile.path.petId",
              "id": 1518
            }
          ]
        },
        {
          "name": "updatePetWithForm",
          "id": 1509,
          "children": [
            {
              "name": "updatePetWithForm.path.petId",
              "id": 1517
            },
            {
              "name": "updatePetWithForm.formData.name",
              "id": 1520
            },
            {
              "name": "updatePetWithForm.formData.status",
              "id": 1522
            }
          ]
        },
        {
          "name": "getPetById",
          "id": 1510,
          "children": [
            {
              "name": "getPetById.path.petId",
              "id": 1515
            }
          ]
        },
        {
          "name": "updatePet",
          "id": 1511,
          "children": [
            {
              "name": "updatePet.request-body.body.id",
              "id": 1516
            }
          ]
        },
        {
          "name": "deletePet",
          "id": 1512,
          "children": [
            {
              "name": "deletePet.path.petId",
              "id": 1514
            }
          ]
        }
      ]
    },
    {
      "name": "rest_pet_2",
      "id": 1523,
      "children": [
        {
          "name": "addPet",
          "id": 1524,
          "children": [
            {
              "name": "addPet.200.id",
              "id": 1529
            },
            {
              "name": "addPet.200.name",
              "id": 1532
            },
            {
              "name": "addPet.200.status",
              "id": 1534
            },
            {
              "name": "addPet.200.tags.array_item.name",
              "id": 1537
            }
          ]
        },
        {
          "name": "uploadFile",
          "id": 1525,
          "children": [
            {
              "name": "uploadFile.path.petId",
              "id": 1531
            }
          ]
        },
        {
          "name": "updatePetWithForm",
          "id": 1526,
          "children": [
            {
              "name": "updatePetWithForm.path.petId",
              "id": 1530
            },
            {
              "name": "updatePetWithForm.formData.name",
              "id": 1533
            },
            {
              "name": "updatePetWithForm.formData.status",
              "id": 1536
            }
          ]
        },
        {
          "name": "findPetsByStatus",
          "id": 1527,
          "children": [
            {
              "name": "findPetsByStatus.query.status.array_item",
              "id": 1535
            }
          ]
        },
        {
          "name": "findPetsByTags",
          "id": 1528,
          "children": [
            {
              "name": "findPetsByTags.query.tags.array_item",
              "id": 1538
            }
          ]
        }
      ]
    },
    {
      "name": "rest_store_order_3",
      "id": 1539,
      "children": [
        {
          "name": "addPet",
          "id": 1540,
          "children": [
            {
              "name": "addPet.200.id",
              "id": 1546
            },
            {
              "name": "addPet.200.name",
              "id": 1550
            },
            {
              "name": "addPet.200.status",
              "id": 1552
            }
          ]
        },
        {
          "name": "uploadFile",
          "id": 1541,
          "children": [
            {
              "name": "uploadFile.path.petId",
              "id": 1549
            }
          ]
        },
        {
          "name": "updatePetWithForm",
          "id": 1542,
          "children": [
            {
              "name": "updatePetWithForm.path.petId",
              "id": 1548
            },
            {
              "name": "updatePetWithForm.formData.name",
              "id": 1551
            },
            {
              "name": "updatePetWithForm.formData.status",
              "id": 1553
            }
          ]
        },
        {
          "name": "placeOrder",
          "id": 1543,
          "children": [
            {
              "name": "placeOrder.request-body.body.petId",
              "id": 1547
            },
            {
              "name": "placeOrder.200.id",
              "id": 1554
            }
          ]
        },
        {
          "name": "getOrderById",
          "id": 1544,
          "children": [
            {
              "name": "getOrderById.path.orderId",
              "id": 1556
            }
          ]
        },
        {
          "name": "deleteOrder",
          "id": 1545,
          "children": [
            {
              "name": "deleteOrder.path.orderId",
              "id": 1555
            }
          ]
        }
      ]
    },
    {
      "name": "rest_user_4",
      "id": 1557,
      "children": [
        {
          "name": "createUser",
          "id": 1558,
          "children": [
            {
              "name": "createUser.request-body.body.id",
              "id": 1562
            },
            {
              "name": "createUser.request-body.body.username",
              "id": 1564
            }
          ]
        },
        {
          "name": "getUserByName",
          "id": 1559,
          "children": [
            {
              "name": "getUserByName.path.username",
              "id": 1566
            }
          ]
        },
        {
          "name": "updateUser",
          "id": 1560,
          "children": [
            {
              "name": "updateUser.request-body.body.id",
              "id": 1563
            },
            {
              "name": "updateUser.path.username",
              "id": 1567
            }
          ]
        },
        {
          "name": "deleteUser",
          "id": 1561,
          "children": [
            {
              "name": "deleteUser.path.username",
              "id": 1565
            }
          ]
        }
      ]
    },
    {
      "name": "rest_root_user_login_7",
      "id": 1568,
      "children": [
        {
          "name": "createUser",
          "id": 1569,
          "children": [
            {
              "name": "createUser.request-body.body.password",
              "id": 1571
            },
            {
              "name": "createUser.request-body.body.username",
              "id": 1573
            }
          ]
        },
        {
          "name": "loginUser",
          "id": 1570,
          "children": [
            {
              "name": "loginUser.query.password",
              "id": 1572
            },
            {
              "name": "loginUser.query.username",
              "id": 1574
            }
          ]
        }
      ]
    }
  ]
};
pcseq = [
  {
    "source": 1415,
    "target": 1416
  },
  {
    "source": 1420,
    "target": 1421
  },
  {
    "source": 1425,
    "target": 1426
  },
  {
    "source": 1430,
    "target": 1431
  },
  {
    "source": 1435,
    "target": 1436
  },
  {
    "source": 1441,
    "target": 1442
  },
  {
    "source": 1443,
    "target": 1444
  },
  {
    "source": 1449,
    "target": 1450
  },
  {
    "source": 1451,
    "target": 1452
  },
  {
    "source": 1456,
    "target": 1457
  },
  {
    "source": 1461,
    "target": 1462
  },
  {
    "source": 1463,
    "target": 1464
  },
  {
    "source": 1465,
    "target": 1466
  },
  {
    "source": 1470,
    "target": 1471
  },
  {
    "source": 1477,
    "target": 1478
  },
  {
    "source": 1482,
    "target": 1483
  },
  {
    "source": 1487,
    "target": 1488
  },
  {
    "source": 1489,
    "target": 1490
  },
  {
    "source": 1494,
    "target": 1495
  },
  {
    "source": 1496,
    "target": 1497
  },
  {
    "source": 1513,
    "target": 1514
  },
  {
    "source": 1513,
    "target": 1515
  },
  {
    "source": 1513,
    "target": 1516
  },
  {
    "source": 1513,
    "target": 1517
  },
  {
    "source": 1513,
    "target": 1518
  },
  {
    "source": 1519,
    "target": 1520
  },
  {
    "source": 1521,
    "target": 1522
  },
  {
    "source": 1529,
    "target": 1530
  },
  {
    "source": 1529,
    "target": 1531
  },
  {
    "source": 1532,
    "target": 1533
  },
  {
    "source": 1534,
    "target": 1535
  },
  {
    "source": 1534,
    "target": 1536
  },
  {
    "source": 1537,
    "target": 1538
  },
  {
    "source": 1546,
    "target": 1547
  },
  {
    "source": 1546,
    "target": 1548
  },
  {
    "source": 1546,
    "target": 1549
  },
  {
    "source": 1550,
    "target": 1551
  },
  {
    "source": 1552,
    "target": 1553
  },
  {
    "source": 1554,
    "target": 1555
  },
  {
    "source": 1554,
    "target": 1556
  },
  {
    "source": 1562,
    "target": 1563
  },
  {
    "source": 1564,
    "target": 1565
  },
  {
    "source": 1564,
    "target": 1566
  },
  {
    "source": 1564,
    "target": 1567
  },
  {
    "source": 1571,
    "target": 1572
  },
  {
    "source": 1573,
    "target": 1574
  }
];