groups = {
  "name": "api",
  "id": 266,
  "children": [
    {
      "name": "root.error",
      "id": 267,
      "children": [
        {
          "name": "errorUsingGET",
          "id": 268
        },
        {
          "name": "errorUsingDELETE",
          "id": 269
        },
        {
          "name": "errorUsingPUT",
          "id": 270
        },
        {
          "name": "errorUsingPOST",
          "id": 271
        },
        {
          "name": "errorUsingOPTIONS",
          "id": 272
        },
        {
          "name": "errorUsingPATCH",
          "id": 273
        },
        {
          "name": "errorUsingHEAD",
          "id": 274
        }
      ]
    },
    {
      "name": "root.login",
      "id": 275,
      "children": [
        {
          "name": "loginUsingPOST",
          "id": 276
        }
      ]
    },
    {
      "name": "root.users",
      "id": 277,
      "children": [
        {
          "name": "getUserByIdUsingGET",
          "id": 278,
          "children": [
            {
              "name": "getUserByIdUsingGET.path.id",
              "id": 311
            }
          ]
        },
        {
          "name": "deleteByIdUsingDELETE",
          "id": 279,
          "children": [
            {
              "name": "deleteByIdUsingDELETE.path.id",
              "id": 310
            }
          ]
        },
        {
          "name": "updateUserUsingPUT",
          "id": 280,
          "children": [
            {
              "name": "updateUserUsingPUT.path.id",
              "id": 313
            },
            {
              "name": "updateUserUsingPUT.request-body.name",
              "id": 315
            }
          ]
        },
        {
          "name": "createUserUsingPOST",
          "id": 281,
          "children": [
            {
              "name": "createUserUsingPOST.200.id",
              "id": 308
            },
            {
              "name": "createUserUsingPOST.request-body.name",
              "id": 314
            }
          ]
        },
        {
          "name": "getUserPresentationListUsingGET",
          "id": 282,
          "children": [
            {
              "name": "getUserPresentationListUsingGET.200.userList.array_item.id",
              "id": 319
            }
          ]
        }
      ]
    },
    {
      "name": "root.users.rbac.permissions",
      "id": 283,
      "children": [
        {
          "name": "getPermissionPresentationListUsingGET",
          "id": 284,
          "children": [
            {
              "name": "getPermissionPresentationListUsingGET.200.array_item.permission",
              "id": 316
            }
          ]
        }
      ]
    },
    {
      "name": "root.users.rbac.roles",
      "id": 285,
      "children": [
        {
          "name": "getRolePresentationListUsingGET",
          "id": 286,
          "children": [
            {
              "name": "getRolePresentationListUsingGET.200.array_item.id",
              "id": 318
            }
          ]
        },
        {
          "name": "getRoleByIdUsingGET",
          "id": 287,
          "children": [
            {
              "name": "getRoleByIdUsingGET.path.roleId",
              "id": 306
            }
          ]
        },
        {
          "name": "deleteRoleByIdUsingDELETE",
          "id": 288,
          "children": [
            {
              "name": "deleteRoleByIdUsingDELETE.path.roleId",
              "id": 305
            }
          ]
        },
        {
          "name": "createRoleUsingPOST",
          "id": 289,
          "children": [
            {
              "name": "createRoleUsingPOST.201.id",
              "id": 302
            }
          ]
        }
      ]
    },
    {
      "name": "root.users.rbac.roles.permissions",
      "id": 290,
      "children": [
        {
          "name": "addPermissionOnRoleUsingPOST",
          "id": 291,
          "children": [
            {
              "name": "addPermissionOnRoleUsingPOST.200.permissions.array_item.permission",
              "id": 298
            },
            {
              "name": "addPermissionOnRoleUsingPOST.path.roleId",
              "id": 303
            },
            {
              "name": "addPermissionOnRoleUsingPOST.path.permissionKey",
              "id": 317
            }
          ]
        },
        {
          "name": "removePermissionOnRoleUsingDELETE",
          "id": 292,
          "children": [
            {
              "name": "removePermissionOnRoleUsingDELETE.path.permissionKey",
              "id": 299
            },
            {
              "name": "removePermissionOnRoleUsingDELETE.path.roleId",
              "id": 307
            }
          ]
        }
      ]
    },
    {
      "name": "root.users.register",
      "id": 293,
      "children": [
        {
          "name": "registerNewUserAccountUsingPOST",
          "id": 294
        }
      ]
    },
    {
      "name": "root.users.roles",
      "id": 295,
      "children": [
        {
          "name": "removeRoleUsingDELETE",
          "id": 296,
          "children": [
            {
              "name": "removeRoleUsingDELETE.path.roleId",
              "id": 301
            },
            {
              "name": "removeRoleUsingDELETE.path.id",
              "id": 312
            }
          ]
        },
        {
          "name": "addRoleUsingPOST",
          "id": 297,
          "children": [
            {
              "name": "addRoleUsingPOST.200.id",
              "id": 300
            },
            {
              "name": "addRoleUsingPOST.path.roleId",
              "id": 304
            },
            {
              "name": "addRoleUsingPOST.path.id",
              "id": 309
            }
          ]
        }
      ]
    }
  ]
};
 pc = [
  {
    "source": "addPermissionOnRoleUsingPOST.200.permissions.array_item.permission",
    "target": "removePermissionOnRoleUsingDELETE.path.permissionKey"
  },
  {
    "source": "addRoleUsingPOST.200.id",
    "target": "removeRoleUsingDELETE.path.roleId"
  },
  {
    "source": "createRoleUsingPOST.201.id",
    "target": "addPermissionOnRoleUsingPOST.path.roleId"
  },
  {
    "source": "createRoleUsingPOST.201.id",
    "target": "addRoleUsingPOST.path.roleId"
  },
  {
    "source": "createRoleUsingPOST.201.id",
    "target": "deleteRoleByIdUsingDELETE.path.roleId"
  },
  {
    "source": "createRoleUsingPOST.201.id",
    "target": "getRoleByIdUsingGET.path.roleId"
  },
  {
    "source": "createRoleUsingPOST.201.id",
    "target": "removePermissionOnRoleUsingDELETE.path.roleId"
  },
  {
    "source": "createUserUsingPOST.200.id",
    "target": "addRoleUsingPOST.path.id"
  },
  {
    "source": "createUserUsingPOST.200.id",
    "target": "deleteByIdUsingDELETE.path.id"
  },
  {
    "source": "createUserUsingPOST.200.id",
    "target": "getUserByIdUsingGET.path.id"
  },
  {
    "source": "createUserUsingPOST.200.id",
    "target": "removeRoleUsingDELETE.path.id"
  },
  {
    "source": "createUserUsingPOST.200.id",
    "target": "updateUserUsingPUT.path.id"
  },
  {
    "source": "createUserUsingPOST.request-body.name",
    "target": "updateUserUsingPUT.request-body.name"
  },
  {
    "source": "getPermissionPresentationListUsingGET.200.array_item.permission",
    "target": "addPermissionOnRoleUsingPOST.path.permissionKey"
  },
  {
    "source": "getRolePresentationListUsingGET.200.array_item.id",
    "target": "addPermissionOnRoleUsingPOST.path.roleId"
  },
  {
    "source": "getRolePresentationListUsingGET.200.array_item.id",
    "target": "addRoleUsingPOST.path.roleId"
  },
  {
    "source": "getRolePresentationListUsingGET.200.array_item.id",
    "target": "deleteRoleByIdUsingDELETE.path.roleId"
  },
  {
    "source": "getRolePresentationListUsingGET.200.array_item.id",
    "target": "getRoleByIdUsingGET.path.roleId"
  },
  {
    "source": "getRolePresentationListUsingGET.200.array_item.id",
    "target": "removePermissionOnRoleUsingDELETE.path.roleId"
  },
  {
    "source": "getUserPresentationListUsingGET.200.userList.array_item.id",
    "target": "addRoleUsingPOST.path.id"
  },
  {
    "source": "getUserPresentationListUsingGET.200.userList.array_item.id",
    "target": "deleteByIdUsingDELETE.path.id"
  },
  {
    "source": "getUserPresentationListUsingGET.200.userList.array_item.id",
    "target": "getUserByIdUsingGET.path.id"
  },
  {
    "source": "getUserPresentationListUsingGET.200.userList.array_item.id",
    "target": "removeRoleUsingDELETE.path.id"
  },
  {
    "source": "getUserPresentationListUsingGET.200.userList.array_item.id",
    "target": "updateUserUsingPUT.path.id"
  }
];
 scenarios={
  "name": "Scenarios",
  "id": 320,
  "children": [
    {
      "name": "op_createRoleUsingPOST",
      "id": 321,
      "children": [
        {
          "name": "createRoleUsingPOST",
          "id": 322
        }
      ]
    },
    {
      "name": "op_addRoleUsingPOST",
      "id": 323,
      "children": [
        {
          "name": "addRoleUsingPOST",
          "id": 324,
          "children": [
            {
              "name": "addRoleUsingPOST.path.roleId",
              "id": 328
            },
            {
              "name": "addRoleUsingPOST.path.id",
              "id": 330
            }
          ]
        },
        {
          "name": "createRoleUsingPOST",
          "id": 325,
          "children": [
            {
              "name": "createRoleUsingPOST.201.id",
              "id": 327
            }
          ]
        },
        {
          "name": "createUserUsingPOST",
          "id": 326,
          "children": [
            {
              "name": "createUserUsingPOST.200.id",
              "id": 329
            }
          ]
        }
      ]
    },
    {
      "name": "op_removeRoleUsingDELETE",
      "id": 331,
      "children": [
        {
          "name": "removeRoleUsingDELETE",
          "id": 332,
          "children": [
            {
              "name": "removeRoleUsingDELETE.path.roleId",
              "id": 337
            },
            {
              "name": "removeRoleUsingDELETE.path.id",
              "id": 342
            }
          ]
        },
        {
          "name": "createRoleUsingPOST",
          "id": 333,
          "children": [
            {
              "name": "createRoleUsingPOST.201.id",
              "id": 338
            }
          ]
        },
        {
          "name": "createUserUsingPOST",
          "id": 334,
          "children": [
            {
              "name": "createUserUsingPOST.200.id",
              "id": 340
            }
          ]
        },
        {
          "name": "addRoleUsingPOST",
          "id": 335,
          "children": [
            {
              "name": "addRoleUsingPOST.200.id",
              "id": 336
            },
            {
              "name": "addRoleUsingPOST.path.roleId",
              "id": 339
            },
            {
              "name": "addRoleUsingPOST.path.id",
              "id": 341
            }
          ]
        }
      ]
    },
    {
      "name": "op_deleteRoleByIdUsingDELETE",
      "id": 343,
      "children": [
        {
          "name": "deleteRoleByIdUsingDELETE",
          "id": 344,
          "children": [
            {
              "name": "deleteRoleByIdUsingDELETE.path.roleId",
              "id": 347
            }
          ]
        },
        {
          "name": "createRoleUsingPOST",
          "id": 345,
          "children": [
            {
              "name": "createRoleUsingPOST.201.id",
              "id": 346
            }
          ]
        }
      ]
    },
    {
      "name": "op_addPermissionOnRoleUsingPOST",
      "id": 348,
      "children": [
        {
          "name": "addPermissionOnRoleUsingPOST",
          "id": 349,
          "children": [
            {
              "name": "addPermissionOnRoleUsingPOST.path.roleId",
              "id": 353
            },
            {
              "name": "addPermissionOnRoleUsingPOST.path.permissionKey",
              "id": 355
            }
          ]
        },
        {
          "name": "createRoleUsingPOST",
          "id": 350,
          "children": [
            {
              "name": "createRoleUsingPOST.201.id",
              "id": 352
            }
          ]
        },
        {
          "name": "getPermissionPresentationListUsingGET",
          "id": 351,
          "children": [
            {
              "name": "getPermissionPresentationListUsingGET.200.array_item.permission",
              "id": 354
            }
          ]
        }
      ]
    },
    {
      "name": "op_removePermissionOnRoleUsingDELETE",
      "id": 356,
      "children": [
        {
          "name": "removePermissionOnRoleUsingDELETE",
          "id": 357,
          "children": [
            {
              "name": "removePermissionOnRoleUsingDELETE.path.permissionKey",
              "id": 362
            },
            {
              "name": "removePermissionOnRoleUsingDELETE.path.roleId",
              "id": 365
            }
          ]
        },
        {
          "name": "createRoleUsingPOST",
          "id": 358,
          "children": [
            {
              "name": "createRoleUsingPOST.201.id",
              "id": 363
            }
          ]
        },
        {
          "name": "getPermissionPresentationListUsingGET",
          "id": 359,
          "children": [
            {
              "name": "getPermissionPresentationListUsingGET.200.array_item.permission",
              "id": 366
            }
          ]
        },
        {
          "name": "addPermissionOnRoleUsingPOST",
          "id": 360,
          "children": [
            {
              "name": "addPermissionOnRoleUsingPOST.200.permissions.array_item.permission",
              "id": 361
            },
            {
              "name": "addPermissionOnRoleUsingPOST.path.roleId",
              "id": 364
            },
            {
              "name": "addPermissionOnRoleUsingPOST.path.permissionKey",
              "id": 367
            }
          ]
        }
      ]
    },
    {
      "name": "op_getRoleByIdUsingGET",
      "id": 368,
      "children": [
        {
          "name": "getRoleByIdUsingGET",
          "id": 369,
          "children": [
            {
              "name": "getRoleByIdUsingGET.path.roleId",
              "id": 372
            }
          ]
        },
        {
          "name": "createRoleUsingPOST",
          "id": 370,
          "children": [
            {
              "name": "createRoleUsingPOST.201.id",
              "id": 371
            }
          ]
        }
      ]
    },
    {
      "name": "op_createUserUsingPOST",
      "id": 373,
      "children": [
        {
          "name": "createUserUsingPOST",
          "id": 374
        }
      ]
    },
    {
      "name": "op_deleteByIdUsingDELETE",
      "id": 375,
      "children": [
        {
          "name": "deleteByIdUsingDELETE",
          "id": 376,
          "children": [
            {
              "name": "deleteByIdUsingDELETE.path.id",
              "id": 379
            }
          ]
        },
        {
          "name": "createUserUsingPOST",
          "id": 377,
          "children": [
            {
              "name": "createUserUsingPOST.200.id",
              "id": 378
            }
          ]
        }
      ]
    },
    {
      "name": "op_getUserByIdUsingGET",
      "id": 380,
      "children": [
        {
          "name": "getUserByIdUsingGET",
          "id": 381,
          "children": [
            {
              "name": "getUserByIdUsingGET.path.id",
              "id": 384
            }
          ]
        },
        {
          "name": "createUserUsingPOST",
          "id": 382,
          "children": [
            {
              "name": "createUserUsingPOST.200.id",
              "id": 383
            }
          ]
        }
      ]
    },
    {
      "name": "op_updateUserUsingPUT",
      "id": 385,
      "children": [
        {
          "name": "updateUserUsingPUT",
          "id": 386,
          "children": [
            {
              "name": "updateUserUsingPUT.path.id",
              "id": 389
            },
            {
              "name": "updateUserUsingPUT.request-body.name",
              "id": 391
            }
          ]
        },
        {
          "name": "createUserUsingPOST",
          "id": 387,
          "children": [
            {
              "name": "createUserUsingPOST.200.id",
              "id": 388
            },
            {
              "name": "createUserUsingPOST.request-body.name",
              "id": 390
            }
          ]
        }
      ]
    },
    {
      "name": "op_errorUsingDELETE",
      "id": 392,
      "children": [
        {
          "name": "errorUsingDELETE",
          "id": 393
        }
      ]
    },
    {
      "name": "op_errorUsingGET",
      "id": 394,
      "children": [
        {
          "name": "errorUsingGET",
          "id": 395
        }
      ]
    },
    {
      "name": "op_errorUsingHEAD",
      "id": 396,
      "children": [
        {
          "name": "errorUsingHEAD",
          "id": 397
        }
      ]
    },
    {
      "name": "op_errorUsingOPTIONS",
      "id": 398,
      "children": [
        {
          "name": "errorUsingOPTIONS",
          "id": 399
        }
      ]
    },
    {
      "name": "op_errorUsingPATCH",
      "id": 400,
      "children": [
        {
          "name": "errorUsingPATCH",
          "id": 401
        }
      ]
    },
    {
      "name": "op_errorUsingPOST",
      "id": 402,
      "children": [
        {
          "name": "errorUsingPOST",
          "id": 403
        }
      ]
    },
    {
      "name": "op_errorUsingPUT",
      "id": 404,
      "children": [
        {
          "name": "errorUsingPUT",
          "id": 405
        }
      ]
    },
    {
      "name": "op_getPermissionPresentationListUsingGET",
      "id": 406,
      "children": [
        {
          "name": "getPermissionPresentationListUsingGET",
          "id": 407
        }
      ]
    },
    {
      "name": "op_getRolePresentationListUsingGET",
      "id": 408,
      "children": [
        {
          "name": "getRolePresentationListUsingGET",
          "id": 409
        }
      ]
    },
    {
      "name": "op_getUserPresentationListUsingGET",
      "id": 410,
      "children": [
        {
          "name": "getUserPresentationListUsingGET",
          "id": 411
        }
      ]
    },
    {
      "name": "op_loginUsingPOST",
      "id": 412,
      "children": [
        {
          "name": "loginUsingPOST",
          "id": 413
        }
      ]
    },
    {
      "name": "op_registerNewUserAccountUsingPOST",
      "id": 414,
      "children": [
        {
          "name": "registerNewUserAccountUsingPOST",
          "id": 415
        }
      ]
    },
    {
      "name": "rest_error_1",
      "id": 416,
      "children": [
        {
          "name": "errorUsingPOST",
          "id": 417
        },
        {
          "name": "errorUsingPUT",
          "id": 418
        },
        {
          "name": "errorUsingPATCH",
          "id": 419
        },
        {
          "name": "errorUsingDELETE",
          "id": 420
        }
      ]
    },
    {
      "name": "rest_users_3",
      "id": 421,
      "children": [
        {
          "name": "createUserUsingPOST",
          "id": 422,
          "children": [
            {
              "name": "createUserUsingPOST.200.id",
              "id": 426
            },
            {
              "name": "createUserUsingPOST.request-body.name",
              "id": 430
            }
          ]
        },
        {
          "name": "getUserByIdUsingGET",
          "id": 423,
          "children": [
            {
              "name": "getUserByIdUsingGET.path.id",
              "id": 428
            }
          ]
        },
        {
          "name": "updateUserUsingPUT",
          "id": 424,
          "children": [
            {
              "name": "updateUserUsingPUT.path.id",
              "id": 429
            },
            {
              "name": "updateUserUsingPUT.request-body.name",
              "id": 431
            }
          ]
        },
        {
          "name": "deleteByIdUsingDELETE",
          "id": 425,
          "children": [
            {
              "name": "deleteByIdUsingDELETE.path.id",
              "id": 427
            }
          ]
        }
      ]
    },
    {
      "name": "rest_users_rbac_roles_4",
      "id": 432,
      "children": [
        {
          "name": "createRoleUsingPOST",
          "id": 433,
          "children": [
            {
              "name": "createRoleUsingPOST.201.id",
              "id": 436
            }
          ]
        },
        {
          "name": "getRoleByIdUsingGET",
          "id": 434,
          "children": [
            {
              "name": "getRoleByIdUsingGET.path.roleId",
              "id": 438
            }
          ]
        },
        {
          "name": "deleteRoleByIdUsingDELETE",
          "id": 435,
          "children": [
            {
              "name": "deleteRoleByIdUsingDELETE.path.roleId",
              "id": 437
            }
          ]
        }
      ]
    },
    {
      "name": "rest_users_rbac_roles_permissions_5",
      "id": 439,
      "children": [
        {
          "name": "createRoleUsingPOST",
          "id": 440,
          "children": [
            {
              "name": "createRoleUsingPOST.201.id",
              "id": 446
            }
          ]
        },
        {
          "name": "getPermissionPresentationListUsingGET",
          "id": 441,
          "children": [
            {
              "name": "getPermissionPresentationListUsingGET.200.array_item.permission",
              "id": 449
            }
          ]
        },
        {
          "name": "addPermissionOnRoleUsingPOST",
          "id": 442,
          "children": [
            {
              "name": "addPermissionOnRoleUsingPOST.200.permissions.array_item.permission",
              "id": 444
            },
            {
              "name": "addPermissionOnRoleUsingPOST.path.roleId",
              "id": 447
            },
            {
              "name": "addPermissionOnRoleUsingPOST.path.permissionKey",
              "id": 450
            }
          ]
        },
        {
          "name": "removePermissionOnRoleUsingDELETE",
          "id": 443,
          "children": [
            {
              "name": "removePermissionOnRoleUsingDELETE.path.permissionKey",
              "id": 445
            },
            {
              "name": "removePermissionOnRoleUsingDELETE.path.roleId",
              "id": 448
            }
          ]
        }
      ]
    },
    {
      "name": "rest_users_roles_7",
      "id": 451,
      "children": [
        {
          "name": "createRoleUsingPOST",
          "id": 452,
          "children": [
            {
              "name": "createRoleUsingPOST.201.id",
              "id": 458
            }
          ]
        },
        {
          "name": "createUserUsingPOST",
          "id": 453,
          "children": [
            {
              "name": "createUserUsingPOST.200.id",
              "id": 460
            }
          ]
        },
        {
          "name": "addRoleUsingPOST",
          "id": 454,
          "children": [
            {
              "name": "addRoleUsingPOST.200.id",
              "id": 456
            },
            {
              "name": "addRoleUsingPOST.path.roleId",
              "id": 459
            },
            {
              "name": "addRoleUsingPOST.path.id",
              "id": 461
            }
          ]
        },
        {
          "name": "removeRoleUsingDELETE",
          "id": 455,
          "children": [
            {
              "name": "removeRoleUsingDELETE.path.roleId",
              "id": 457
            },
            {
              "name": "removeRoleUsingDELETE.path.id",
              "id": 462
            }
          ]
        }
      ]
    }
  ]
};
pcseq = [
  {
    "source": 327,
    "target": 328
  },
  {
    "source": 329,
    "target": 330
  },
  {
    "source": 336,
    "target": 337
  },
  {
    "source": 338,
    "target": 339
  },
  {
    "source": 340,
    "target": 341
  },
  {
    "source": 340,
    "target": 342
  },
  {
    "source": 346,
    "target": 347
  },
  {
    "source": 352,
    "target": 353
  },
  {
    "source": 354,
    "target": 355
  },
  {
    "source": 361,
    "target": 362
  },
  {
    "source": 363,
    "target": 364
  },
  {
    "source": 363,
    "target": 365
  },
  {
    "source": 366,
    "target": 367
  },
  {
    "source": 371,
    "target": 372
  },
  {
    "source": 378,
    "target": 379
  },
  {
    "source": 383,
    "target": 384
  },
  {
    "source": 388,
    "target": 389
  },
  {
    "source": 390,
    "target": 391
  },
  {
    "source": 426,
    "target": 427
  },
  {
    "source": 426,
    "target": 428
  },
  {
    "source": 426,
    "target": 429
  },
  {
    "source": 430,
    "target": 431
  },
  {
    "source": 436,
    "target": 437
  },
  {
    "source": 436,
    "target": 438
  },
  {
    "source": 444,
    "target": 445
  },
  {
    "source": 446,
    "target": 447
  },
  {
    "source": 446,
    "target": 448
  },
  {
    "source": 449,
    "target": 450
  },
  {
    "source": 456,
    "target": 457
  },
  {
    "source": 458,
    "target": 459
  },
  {
    "source": 460,
    "target": 461
  },
  {
    "source": 460,
    "target": 462
  }
];