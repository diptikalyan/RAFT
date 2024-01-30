groups = {
  "name": "api",
  "id": 74,
  "children": [
    {
      "name": "root.api.person",
      "id": 75,
      "children": [
        {
          "name": "putPersonUsingPUT",
          "id": 76,
          "children": [
            {
              "name": "putPersonUsingPUT.request-body.person.id",
              "id": 90
            }
          ]
        },
        {
          "name": "deletePersonUsingDELETE",
          "id": 77
        },
        {
          "name": "postPersonUsingPOST",
          "id": 78,
          "children": [
            {
              "name": "postPersonUsingPOST.request-body.person.id",
              "id": 89
            }
          ]
        },
        {
          "name": "getPersonUsingGET",
          "id": 79
        }
      ]
    },
    {
      "name": "root.api.persons",
      "id": 80,
      "children": [
        {
          "name": "deletePersonsUsingDELETE_1",
          "id": 81
        },
        {
          "name": "getPersonsUsingGET",
          "id": 82
        },
        {
          "name": "getPersonsUsingGET_1",
          "id": 83
        },
        {
          "name": "getCountUsingGET",
          "id": 84
        },
        {
          "name": "deletePersonsUsingDELETE",
          "id": 85
        },
        {
          "name": "postPersonsUsingPOST",
          "id": 86,
          "children": [
            {
              "name": "postPersonsUsingPOST.request-body.persons",
              "id": 91
            }
          ]
        },
        {
          "name": "putPersonUsingPUT_1",
          "id": 87,
          "children": [
            {
              "name": "putPersonUsingPUT_1.request-body.persons",
              "id": 92
            }
          ]
        },
        {
          "name": "averageAgeUsingGET",
          "id": 88
        }
      ]
    }
  ]
};
 pc = [
  {
    "source": "postPersonUsingPOST.request-body.person.id",
    "target": "putPersonUsingPUT.request-body.person.id"
  },
  {
    "source": "postPersonsUsingPOST.request-body.persons",
    "target": "putPersonUsingPUT_1.request-body.persons"
  }
];
 scenarios={
  "name": "Scenarios",
  "id": 93,
  "children": [
    {
      "name": "op_averageAgeUsingGET",
      "id": 94,
      "children": [
        {
          "name": "averageAgeUsingGET",
          "id": 95
        }
      ]
    },
    {
      "name": "op_deletePersonUsingDELETE",
      "id": 96,
      "children": [
        {
          "name": "deletePersonUsingDELETE",
          "id": 97
        }
      ]
    },
    {
      "name": "op_deletePersonsUsingDELETE",
      "id": 98,
      "children": [
        {
          "name": "deletePersonsUsingDELETE",
          "id": 99
        }
      ]
    },
    {
      "name": "op_deletePersonsUsingDELETE_1",
      "id": 100,
      "children": [
        {
          "name": "deletePersonsUsingDELETE_1",
          "id": 101
        }
      ]
    },
    {
      "name": "op_getCountUsingGET",
      "id": 102,
      "children": [
        {
          "name": "getCountUsingGET",
          "id": 103
        }
      ]
    },
    {
      "name": "op_getPersonUsingGET",
      "id": 104,
      "children": [
        {
          "name": "getPersonUsingGET",
          "id": 105
        }
      ]
    },
    {
      "name": "op_getPersonsUsingGET",
      "id": 106,
      "children": [
        {
          "name": "getPersonsUsingGET",
          "id": 107
        }
      ]
    },
    {
      "name": "op_getPersonsUsingGET_1",
      "id": 108,
      "children": [
        {
          "name": "getPersonsUsingGET_1",
          "id": 109
        }
      ]
    },
    {
      "name": "op_postPersonUsingPOST",
      "id": 110,
      "children": [
        {
          "name": "postPersonUsingPOST",
          "id": 111
        }
      ]
    },
    {
      "name": "op_putPersonUsingPUT",
      "id": 112,
      "children": [
        {
          "name": "putPersonUsingPUT",
          "id": 113,
          "children": [
            {
              "name": "putPersonUsingPUT.request-body.person.id",
              "id": 116
            }
          ]
        },
        {
          "name": "postPersonUsingPOST",
          "id": 114,
          "children": [
            {
              "name": "postPersonUsingPOST.request-body.person.id",
              "id": 115
            }
          ]
        }
      ]
    },
    {
      "name": "op_postPersonsUsingPOST",
      "id": 117,
      "children": [
        {
          "name": "postPersonsUsingPOST",
          "id": 118
        }
      ]
    },
    {
      "name": "op_putPersonUsingPUT_1",
      "id": 119,
      "children": [
        {
          "name": "putPersonUsingPUT_1",
          "id": 120,
          "children": [
            {
              "name": "putPersonUsingPUT_1.request-body.persons",
              "id": 123
            }
          ]
        },
        {
          "name": "postPersonsUsingPOST",
          "id": 121,
          "children": [
            {
              "name": "postPersonsUsingPOST.request-body.persons",
              "id": 122
            }
          ]
        }
      ]
    },
    {
      "name": "rest_api_person_1",
      "id": 124,
      "children": [
        {
          "name": "postPersonUsingPOST",
          "id": 125,
          "children": [
            {
              "name": "postPersonUsingPOST.request-body.person.id",
              "id": 129
            }
          ]
        },
        {
          "name": "getPersonUsingGET",
          "id": 126
        },
        {
          "name": "putPersonUsingPUT",
          "id": 127,
          "children": [
            {
              "name": "putPersonUsingPUT.request-body.person.id",
              "id": 130
            }
          ]
        },
        {
          "name": "deletePersonUsingDELETE",
          "id": 128
        }
      ]
    },
    {
      "name": "rest_api_persons_2",
      "id": 131,
      "children": [
        {
          "name": "postPersonsUsingPOST",
          "id": 132,
          "children": [
            {
              "name": "postPersonsUsingPOST.request-body.persons",
              "id": 135
            }
          ]
        },
        {
          "name": "putPersonUsingPUT_1",
          "id": 133,
          "children": [
            {
              "name": "putPersonUsingPUT_1.request-body.persons",
              "id": 136
            }
          ]
        },
        {
          "name": "deletePersonsUsingDELETE_1",
          "id": 134
        }
      ]
    },
    {
      "name": "rest_api_persons_3",
      "id": 137,
      "children": [
        {
          "name": "postPersonsUsingPOST",
          "id": 138,
          "children": [
            {
              "name": "postPersonsUsingPOST.request-body.persons",
              "id": 141
            }
          ]
        },
        {
          "name": "putPersonUsingPUT_1",
          "id": 139,
          "children": [
            {
              "name": "putPersonUsingPUT_1.request-body.persons",
              "id": 142
            }
          ]
        },
        {
          "name": "deletePersonsUsingDELETE",
          "id": 140
        }
      ]
    },
    {
      "name": "rest_api_persons_4",
      "id": 143,
      "children": [
        {
          "name": "averageAgeUsingGET",
          "id": 144
        },
        {
          "name": "getCountUsingGET",
          "id": 145
        },
        {
          "name": "getPersonsUsingGET",
          "id": 146
        },
        {
          "name": "getPersonsUsingGET_1",
          "id": 147
        }
      ]
    }
  ]
};
pcseq = [
  {
    "source": 115,
    "target": 116
  },
  {
    "source": 122,
    "target": 123
  },
  {
    "source": 129,
    "target": 130
  },
  {
    "source": 135,
    "target": 136
  },
  {
    "source": 141,
    "target": 142
  }
];