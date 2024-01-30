groups = {
  "name": "api",
  "id": 118,
  "children": [
    {
      "name": "root.api.problem",
      "id": 119,
      "children": [
        {
          "name": "getProblemByCodeUsingGET",
          "id": 120,
          "children": [
            {
              "name": "getProblemByCodeUsingGET.path.code",
              "id": 140
            }
          ]
        },
        {
          "name": "deleteAllProblemUsingDELETE",
          "id": 121,
          "children": [
            {
              "name": "deleteAllProblemUsingDELETE.path.code",
              "id": 139
            }
          ]
        },
        {
          "name": "saveProblemUsingPOST",
          "id": 122,
          "children": [
            {
              "name": "saveProblemUsingPOST.path.code",
              "id": 135
            },
            {
              "name": "saveProblemUsingPOST.request-body.problem.problemCode",
              "id": 136
            },
            {
              "name": "saveProblemUsingPOST.request-body.problem.project.problem.array_item.problemCode",
              "id": 141
            }
          ]
        }
      ]
    },
    {
      "name": "root.api.project",
      "id": 123,
      "children": [
        {
          "name": "createProjectUsingPOST",
          "id": 124,
          "children": [
            {
              "name": "createProjectUsingPOST.request-body.project.code",
              "id": 130
            },
            {
              "name": "createProjectUsingPOST.request-body.project.problem.array_item.problemCode",
              "id": 134
            },
            {
              "name": "createProjectUsingPOST.request-body.project.problem.array_item.project.problem.array_item.problemCode",
              "id": 138
            }
          ]
        },
        {
          "name": "getProjectUsingGET",
          "id": 125,
          "children": [
            {
              "name": "getProjectUsingGET.path.code",
              "id": 132
            }
          ]
        },
        {
          "name": "updateProjectUsingPUT",
          "id": 126,
          "children": [
            {
              "name": "updateProjectUsingPUT.path.code",
              "id": 133
            },
            {
              "name": "updateProjectUsingPUT.request-body.project.problem.array_item.problemCode",
              "id": 137
            }
          ]
        },
        {
          "name": "deleteProjectUsingDELETE",
          "id": 127,
          "children": [
            {
              "name": "deleteProjectUsingDELETE.path.code",
              "id": 131
            }
          ]
        }
      ]
    },
    {
      "name": "root.api.subproblem",
      "id": 128,
      "children": [
        {
          "name": "saveSubProblemUsingPOST",
          "id": 129
        }
      ]
    }
  ]
};
 pc = [
  {
    "source": "createProjectUsingPOST.request-body.project.code",
    "target": "deleteProjectUsingDELETE.path.code"
  },
  {
    "source": "createProjectUsingPOST.request-body.project.code",
    "target": "getProjectUsingGET.path.code"
  },
  {
    "source": "createProjectUsingPOST.request-body.project.code",
    "target": "updateProjectUsingPUT.path.code"
  },
  {
    "source": "createProjectUsingPOST.request-body.project.problem.array_item.problemCode",
    "target": "saveProblemUsingPOST.path.code"
  },
  {
    "source": "createProjectUsingPOST.request-body.project.problem.array_item.problemCode",
    "target": "saveProblemUsingPOST.request-body.problem.problemCode"
  },
  {
    "source": "createProjectUsingPOST.request-body.project.problem.array_item.problemCode",
    "target": "updateProjectUsingPUT.request-body.project.problem.array_item.problemCode"
  },
  {
    "source": "createProjectUsingPOST.request-body.project.problem.array_item.project.problem.array_item.problemCode",
    "target": "updateProjectUsingPUT.request-body.project.problem.array_item.problemCode"
  },
  {
    "source": "saveProblemUsingPOST.request-body.problem.problemCode",
    "target": "deleteAllProblemUsingDELETE.path.code"
  },
  {
    "source": "saveProblemUsingPOST.request-body.problem.problemCode",
    "target": "getProblemByCodeUsingGET.path.code"
  },
  {
    "source": "saveProblemUsingPOST.request-body.problem.project.problem.array_item.problemCode",
    "target": "createProjectUsingPOST.request-body.project.problem.array_item.problemCode"
  },
  {
    "source": "saveProblemUsingPOST.request-body.problem.project.problem.array_item.problemCode",
    "target": "updateProjectUsingPUT.request-body.project.problem.array_item.problemCode"
  }
];
 scenarios={
  "name": "Scenarios",
  "id": 142,
  "children": [
    {
      "name": "op_saveProblemUsingPOST",
      "id": 143,
      "children": [
        {
          "name": "saveProblemUsingPOST",
          "id": 144,
          "children": [
            {
              "name": "saveProblemUsingPOST.path.code",
              "id": 147
            },
            {
              "name": "saveProblemUsingPOST.request-body.problem.problemCode",
              "id": 148
            },
            {
              "name": "saveProblemUsingPOST.request-body.problem.project.problem.array_item.problemCode",
              "id": 149
            }
          ]
        },
        {
          "name": "createProjectUsingPOST",
          "id": 145,
          "children": [
            {
              "name": "createProjectUsingPOST.request-body.project.problem.array_item.problemCode",
              "id": 146
            }
          ]
        }
      ]
    },
    {
      "name": "op_deleteAllProblemUsingDELETE",
      "id": 150,
      "children": [
        {
          "name": "deleteAllProblemUsingDELETE",
          "id": 151,
          "children": [
            {
              "name": "deleteAllProblemUsingDELETE.path.code",
              "id": 157
            }
          ]
        },
        {
          "name": "createProjectUsingPOST",
          "id": 152,
          "children": [
            {
              "name": "createProjectUsingPOST.request-body.project.problem.array_item.problemCode",
              "id": 154
            }
          ]
        },
        {
          "name": "saveProblemUsingPOST",
          "id": 153,
          "children": [
            {
              "name": "saveProblemUsingPOST.path.code",
              "id": 155
            },
            {
              "name": "saveProblemUsingPOST.request-body.problem.problemCode",
              "id": 156
            },
            {
              "name": "saveProblemUsingPOST.request-body.problem.project.problem.array_item.problemCode",
              "id": 158
            }
          ]
        }
      ]
    },
    {
      "name": "op_getProblemByCodeUsingGET",
      "id": 159,
      "children": [
        {
          "name": "getProblemByCodeUsingGET",
          "id": 160,
          "children": [
            {
              "name": "getProblemByCodeUsingGET.path.code",
              "id": 166
            }
          ]
        },
        {
          "name": "createProjectUsingPOST",
          "id": 161,
          "children": [
            {
              "name": "createProjectUsingPOST.request-body.project.problem.array_item.problemCode",
              "id": 163
            }
          ]
        },
        {
          "name": "saveProblemUsingPOST",
          "id": 162,
          "children": [
            {
              "name": "saveProblemUsingPOST.path.code",
              "id": 164
            },
            {
              "name": "saveProblemUsingPOST.request-body.problem.problemCode",
              "id": 165
            },
            {
              "name": "saveProblemUsingPOST.request-body.problem.project.problem.array_item.problemCode",
              "id": 167
            }
          ]
        }
      ]
    },
    {
      "name": "op_createProjectUsingPOST",
      "id": 168,
      "children": [
        {
          "name": "createProjectUsingPOST",
          "id": 169,
          "children": [
            {
              "name": "createProjectUsingPOST.request-body.project.problem.array_item.problemCode",
              "id": 171
            }
          ]
        },
        {
          "name": "saveProblemUsingPOST",
          "id": 170,
          "children": [
            {
              "name": "saveProblemUsingPOST.path.code",
              "id": 172
            },
            {
              "name": "saveProblemUsingPOST.request-body.problem.problemCode",
              "id": 173
            },
            {
              "name": "saveProblemUsingPOST.request-body.problem.project.problem.array_item.problemCode",
              "id": 174
            }
          ]
        }
      ]
    },
    {
      "name": "op_deleteProjectUsingDELETE",
      "id": 175,
      "children": [
        {
          "name": "deleteProjectUsingDELETE",
          "id": 176,
          "children": [
            {
              "name": "deleteProjectUsingDELETE.path.code",
              "id": 180
            }
          ]
        },
        {
          "name": "saveProblemUsingPOST",
          "id": 177,
          "children": [
            {
              "name": "saveProblemUsingPOST.path.code",
              "id": 182
            },
            {
              "name": "saveProblemUsingPOST.request-body.problem.problemCode",
              "id": 183
            },
            {
              "name": "saveProblemUsingPOST.request-body.problem.project.problem.array_item.problemCode",
              "id": 184
            }
          ]
        },
        {
          "name": "createProjectUsingPOST",
          "id": 178,
          "children": [
            {
              "name": "createProjectUsingPOST.request-body.project.code",
              "id": 179
            },
            {
              "name": "createProjectUsingPOST.request-body.project.problem.array_item.problemCode",
              "id": 181
            }
          ]
        }
      ]
    },
    {
      "name": "op_getProjectUsingGET",
      "id": 185,
      "children": [
        {
          "name": "getProjectUsingGET",
          "id": 186,
          "children": [
            {
              "name": "getProjectUsingGET.path.code",
              "id": 190
            }
          ]
        },
        {
          "name": "saveProblemUsingPOST",
          "id": 187,
          "children": [
            {
              "name": "saveProblemUsingPOST.path.code",
              "id": 192
            },
            {
              "name": "saveProblemUsingPOST.request-body.problem.problemCode",
              "id": 193
            },
            {
              "name": "saveProblemUsingPOST.request-body.problem.project.problem.array_item.problemCode",
              "id": 194
            }
          ]
        },
        {
          "name": "createProjectUsingPOST",
          "id": 188,
          "children": [
            {
              "name": "createProjectUsingPOST.request-body.project.code",
              "id": 189
            },
            {
              "name": "createProjectUsingPOST.request-body.project.problem.array_item.problemCode",
              "id": 191
            }
          ]
        }
      ]
    },
    {
      "name": "op_updateProjectUsingPUT",
      "id": 195,
      "children": [
        {
          "name": "updateProjectUsingPUT",
          "id": 196,
          "children": [
            {
              "name": "updateProjectUsingPUT.path.code",
              "id": 200
            },
            {
              "name": "updateProjectUsingPUT.request-body.project.problem.array_item.problemCode",
              "id": 204
            }
          ]
        },
        {
          "name": "saveProblemUsingPOST",
          "id": 197,
          "children": [
            {
              "name": "saveProblemUsingPOST.path.code",
              "id": 202
            },
            {
              "name": "saveProblemUsingPOST.request-body.problem.problemCode",
              "id": 203
            },
            {
              "name": "saveProblemUsingPOST.request-body.problem.project.problem.array_item.problemCode",
              "id": 206
            }
          ]
        },
        {
          "name": "createProjectUsingPOST",
          "id": 198,
          "children": [
            {
              "name": "createProjectUsingPOST.request-body.project.code",
              "id": 199
            },
            {
              "name": "createProjectUsingPOST.request-body.project.problem.array_item.problemCode",
              "id": 201
            },
            {
              "name": "createProjectUsingPOST.request-body.project.problem.array_item.project.problem.array_item.problemCode",
              "id": 205
            }
          ]
        }
      ]
    },
    {
      "name": "op_saveSubProblemUsingPOST",
      "id": 207,
      "children": [
        {
          "name": "saveSubProblemUsingPOST",
          "id": 208
        }
      ]
    },
    {
      "name": "rest_api_problem_1",
      "id": 209,
      "children": [
        {
          "name": "createProjectUsingPOST",
          "id": 210,
          "children": [
            {
              "name": "createProjectUsingPOST.request-body.project.problem.array_item.problemCode",
              "id": 214
            }
          ]
        },
        {
          "name": "saveProblemUsingPOST",
          "id": 211,
          "children": [
            {
              "name": "saveProblemUsingPOST.path.code",
              "id": 215
            },
            {
              "name": "saveProblemUsingPOST.request-body.problem.problemCode",
              "id": 216
            },
            {
              "name": "saveProblemUsingPOST.request-body.problem.project.problem.array_item.problemCode",
              "id": 219
            }
          ]
        },
        {
          "name": "getProblemByCodeUsingGET",
          "id": 212,
          "children": [
            {
              "name": "getProblemByCodeUsingGET.path.code",
              "id": 218
            }
          ]
        },
        {
          "name": "deleteAllProblemUsingDELETE",
          "id": 213,
          "children": [
            {
              "name": "deleteAllProblemUsingDELETE.path.code",
              "id": 217
            }
          ]
        }
      ]
    },
    {
      "name": "rest_api_project_2",
      "id": 220,
      "children": [
        {
          "name": "saveProblemUsingPOST",
          "id": 221,
          "children": [
            {
              "name": "saveProblemUsingPOST.path.code",
              "id": 231
            },
            {
              "name": "saveProblemUsingPOST.request-body.problem.problemCode",
              "id": 232
            },
            {
              "name": "saveProblemUsingPOST.request-body.problem.project.problem.array_item.problemCode",
              "id": 235
            }
          ]
        },
        {
          "name": "createProjectUsingPOST",
          "id": 222,
          "children": [
            {
              "name": "createProjectUsingPOST.request-body.project.code",
              "id": 226
            },
            {
              "name": "createProjectUsingPOST.request-body.project.problem.array_item.problemCode",
              "id": 230
            },
            {
              "name": "createProjectUsingPOST.request-body.project.problem.array_item.project.problem.array_item.problemCode",
              "id": 234
            }
          ]
        },
        {
          "name": "getProjectUsingGET",
          "id": 223,
          "children": [
            {
              "name": "getProjectUsingGET.path.code",
              "id": 228
            }
          ]
        },
        {
          "name": "updateProjectUsingPUT",
          "id": 224,
          "children": [
            {
              "name": "updateProjectUsingPUT.path.code",
              "id": 229
            },
            {
              "name": "updateProjectUsingPUT.request-body.project.problem.array_item.problemCode",
              "id": 233
            }
          ]
        },
        {
          "name": "deleteProjectUsingDELETE",
          "id": 225,
          "children": [
            {
              "name": "deleteProjectUsingDELETE.path.code",
              "id": 227
            }
          ]
        }
      ]
    }
  ]
};
pcseq = [
  {
    "source": 146,
    "target": 147
  },
  {
    "source": 146,
    "target": 148
  },
  {
    "source": 149,
    "target": 146
  },
  {
    "source": 154,
    "target": 155
  },
  {
    "source": 154,
    "target": 156
  },
  {
    "source": 156,
    "target": 157
  },
  {
    "source": 158,
    "target": 154
  },
  {
    "source": 163,
    "target": 164
  },
  {
    "source": 163,
    "target": 165
  },
  {
    "source": 165,
    "target": 166
  },
  {
    "source": 167,
    "target": 163
  },
  {
    "source": 171,
    "target": 172
  },
  {
    "source": 171,
    "target": 173
  },
  {
    "source": 174,
    "target": 171
  },
  {
    "source": 179,
    "target": 180
  },
  {
    "source": 181,
    "target": 182
  },
  {
    "source": 181,
    "target": 183
  },
  {
    "source": 184,
    "target": 181
  },
  {
    "source": 189,
    "target": 190
  },
  {
    "source": 191,
    "target": 192
  },
  {
    "source": 191,
    "target": 193
  },
  {
    "source": 194,
    "target": 191
  },
  {
    "source": 199,
    "target": 200
  },
  {
    "source": 201,
    "target": 202
  },
  {
    "source": 201,
    "target": 203
  },
  {
    "source": 201,
    "target": 204
  },
  {
    "source": 205,
    "target": 204
  },
  {
    "source": 206,
    "target": 201
  },
  {
    "source": 206,
    "target": 204
  },
  {
    "source": 214,
    "target": 215
  },
  {
    "source": 214,
    "target": 216
  },
  {
    "source": 216,
    "target": 217
  },
  {
    "source": 216,
    "target": 218
  },
  {
    "source": 219,
    "target": 214
  },
  {
    "source": 226,
    "target": 227
  },
  {
    "source": 226,
    "target": 228
  },
  {
    "source": 226,
    "target": 229
  },
  {
    "source": 230,
    "target": 231
  },
  {
    "source": 230,
    "target": 232
  },
  {
    "source": 230,
    "target": 233
  },
  {
    "source": 234,
    "target": 233
  },
  {
    "source": 235,
    "target": 230
  },
  {
    "source": 235,
    "target": 233
  }
];