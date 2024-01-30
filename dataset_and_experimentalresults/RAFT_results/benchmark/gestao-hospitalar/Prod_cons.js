groups = {
  "name": "api",
  "id": 1761,
  "children": [
    {
      "name": "root.hospitais",
      "id": 1762,
      "children": [
        {
          "name": "deleteByIdUsingDELETE",
          "id": 1763,
          "children": [
            {
              "name": "deleteByIdUsingDELETE.path.hospital_id",
              "id": 1801
            }
          ]
        },
        {
          "name": "findByIdUsingGET",
          "id": 1764,
          "children": [
            {
              "name": "findByIdUsingGET.path.hospital_id",
              "id": 1804
            }
          ]
        },
        {
          "name": "insertUsingPOST",
          "id": 1765,
          "children": [
            {
              "name": "insertUsingPOST.200.id",
              "id": 1800
            }
          ]
        },
        {
          "name": "findAllUsingGET",
          "id": 1766
        },
        {
          "name": "updateUsingPUT",
          "id": 1767,
          "children": [
            {
              "name": "updateUsingPUT.path.hospital_id",
              "id": 1811
            },
            {
              "name": "updateUsingPUT.request-body.objDTO.id",
              "id": 1812
            }
          ]
        }
      ]
    },
    {
      "name": "root.hospitais.maisProximo",
      "id": 1768,
      "children": [
        {
          "name": "hospitalMaisProximoUsingGET",
          "id": 1769
        }
      ]
    },
    {
      "name": "root.hospitais.estoque",
      "id": 1770,
      "children": [
        {
          "name": "findAllProductByUsingGET",
          "id": 1771,
          "children": [
            {
              "name": "findAllProductByUsingGET.path.hospital_id",
              "id": 1803
            }
          ]
        },
        {
          "name": "insertUsingPOST_1",
          "id": 1772,
          "children": [
            {
              "name": "insertUsingPOST_1.path.hospital_id",
              "id": 1793
            },
            {
              "name": "insertUsingPOST_1.200.id",
              "id": 1814
            }
          ]
        },
        {
          "name": "findProductByUsingGET",
          "id": 1773,
          "children": [
            {
              "name": "findProductByUsingGET.path.hospital_id",
              "id": 1809
            },
            {
              "name": "findProductByUsingGET.path.produto_id",
              "id": 1817
            }
          ]
        },
        {
          "name": "updateUsingPUT_1",
          "id": 1774,
          "children": [
            {
              "name": "updateUsingPUT_1.path.hospital_id",
              "id": 1813
            },
            {
              "name": "updateUsingPUT_1.path.produto_id",
              "id": 1819
            },
            {
              "name": "updateUsingPUT_1.request-body.productDTO.id",
              "id": 1820
            }
          ]
        },
        {
          "name": "deleteUsingDELETE",
          "id": 1775,
          "children": [
            {
              "name": "deleteUsingDELETE.path.hospital_id",
              "id": 1802
            },
            {
              "name": "deleteUsingDELETE.path.produto_id",
              "id": 1816
            }
          ]
        }
      ]
    },
    {
      "name": "root.hospitais.hospitaisProximos",
      "id": 1776,
      "children": [
        {
          "name": "findHospitalNearHospitalByUsingGET",
          "id": 1777,
          "children": [
            {
              "name": "findHospitalNearHospitalByUsingGET.path.hospital_id",
              "id": 1805
            }
          ]
        }
      ]
    },
    {
      "name": "root.hospitais.pacientes",
      "id": 1778,
      "children": [
        {
          "name": "checkinPacientUsingPOST",
          "id": 1779,
          "children": [
            {
              "name": "checkinPacientUsingPOST.200.id",
              "id": 1791
            },
            {
              "name": "checkinPacientUsingPOST.path.hospital_id",
              "id": 1799
            }
          ]
        },
        {
          "name": "updatePatientUsingPUT",
          "id": 1780,
          "children": [
            {
              "name": "updatePatientUsingPUT.path.patientId",
              "id": 1795
            },
            {
              "name": "updatePatientUsingPUT.request-body.patient.id",
              "id": 1796
            },
            {
              "name": "updatePatientUsingPUT.path.hospital_id",
              "id": 1810
            }
          ]
        },
        {
          "name": "findPatientsUsingGET",
          "id": 1781,
          "children": [
            {
              "name": "findPatientsUsingGET.path.hospital_id",
              "id": 1808
            }
          ]
        },
        {
          "name": "findPatientByIdUsingGET",
          "id": 1782,
          "children": [
            {
              "name": "findPatientByIdUsingGET.path.patientId",
              "id": 1792
            },
            {
              "name": "findPatientByIdUsingGET.path.hospital_id",
              "id": 1807
            }
          ]
        }
      ]
    },
    {
      "name": "root.hospitais.pacientes.checkout",
      "id": 1783,
      "children": [
        {
          "name": "checkoutPacientUsingPOST",
          "id": 1784,
          "children": [
            {
              "name": "checkoutPacientUsingPOST.200.id",
              "id": 1798
            },
            {
              "name": "checkoutPacientUsingPOST.path.hospital_id",
              "id": 1815
            }
          ]
        }
      ]
    },
    {
      "name": "root.hospitais.proximidades",
      "id": 1785,
      "children": [
        {
          "name": "findLocationNearHospitalByUsingGET",
          "id": 1786,
          "children": [
            {
              "name": "findLocationNearHospitalByUsingGET.path.hospital_id",
              "id": 1806
            }
          ]
        }
      ]
    },
    {
      "name": "root.hospitais.leitos",
      "id": 1787,
      "children": [
        {
          "name": "verificaLeitosDisponiveisUsingGET",
          "id": 1788,
          "children": [
            {
              "name": "verificaLeitosDisponiveisUsingGET.path.id",
              "id": 1797
            }
          ]
        }
      ]
    },
    {
      "name": "root.hospitais.transferencia",
      "id": 1789,
      "children": [
        {
          "name": "transferenciaProdutoUsingPOST",
          "id": 1790,
          "children": [
            {
              "name": "transferenciaProdutoUsingPOST.path.id",
              "id": 1794
            },
            {
              "name": "transferenciaProdutoUsingPOST.path.productId",
              "id": 1818
            }
          ]
        }
      ]
    }
  ]
};
 pc = [
  {
    "source": "checkinPacientUsingPOST.200.id",
    "target": "findPatientByIdUsingGET.path.patientId"
  },
  {
    "source": "checkinPacientUsingPOST.200.id",
    "target": "insertUsingPOST_1.path.hospital_id"
  },
  {
    "source": "checkinPacientUsingPOST.200.id",
    "target": "transferenciaProdutoUsingPOST.path.id"
  },
  {
    "source": "checkinPacientUsingPOST.200.id",
    "target": "updatePatientUsingPUT.path.patientId"
  },
  {
    "source": "checkinPacientUsingPOST.200.id",
    "target": "updatePatientUsingPUT.request-body.patient.id"
  },
  {
    "source": "checkinPacientUsingPOST.200.id",
    "target": "verificaLeitosDisponiveisUsingGET.path.id"
  },
  {
    "source": "checkoutPacientUsingPOST.200.id",
    "target": "checkinPacientUsingPOST.path.hospital_id"
  },
  {
    "source": "checkoutPacientUsingPOST.200.id",
    "target": "insertUsingPOST_1.path.hospital_id"
  },
  {
    "source": "checkoutPacientUsingPOST.200.id",
    "target": "transferenciaProdutoUsingPOST.path.id"
  },
  {
    "source": "checkoutPacientUsingPOST.200.id",
    "target": "updatePatientUsingPUT.request-body.patient.id"
  },
  {
    "source": "checkoutPacientUsingPOST.200.id",
    "target": "verificaLeitosDisponiveisUsingGET.path.id"
  },
  {
    "source": "insertUsingPOST.200.id",
    "target": "deleteByIdUsingDELETE.path.hospital_id"
  },
  {
    "source": "insertUsingPOST.200.id",
    "target": "deleteUsingDELETE.path.hospital_id"
  },
  {
    "source": "insertUsingPOST.200.id",
    "target": "findAllProductByUsingGET.path.hospital_id"
  },
  {
    "source": "insertUsingPOST.200.id",
    "target": "findByIdUsingGET.path.hospital_id"
  },
  {
    "source": "insertUsingPOST.200.id",
    "target": "findHospitalNearHospitalByUsingGET.path.hospital_id"
  },
  {
    "source": "insertUsingPOST.200.id",
    "target": "findLocationNearHospitalByUsingGET.path.hospital_id"
  },
  {
    "source": "insertUsingPOST.200.id",
    "target": "findPatientByIdUsingGET.path.hospital_id"
  },
  {
    "source": "insertUsingPOST.200.id",
    "target": "findPatientsUsingGET.path.hospital_id"
  },
  {
    "source": "insertUsingPOST.200.id",
    "target": "findProductByUsingGET.path.hospital_id"
  },
  {
    "source": "insertUsingPOST.200.id",
    "target": "updatePatientUsingPUT.path.hospital_id"
  },
  {
    "source": "insertUsingPOST.200.id",
    "target": "updateUsingPUT.path.hospital_id"
  },
  {
    "source": "insertUsingPOST.200.id",
    "target": "updateUsingPUT.request-body.objDTO.id"
  },
  {
    "source": "insertUsingPOST.200.id",
    "target": "updateUsingPUT_1.path.hospital_id"
  },
  {
    "source": "insertUsingPOST.200.id",
    "target": "verificaLeitosDisponiveisUsingGET.path.id"
  },
  {
    "source": "insertUsingPOST_1.200.id",
    "target": "checkinPacientUsingPOST.path.hospital_id"
  },
  {
    "source": "insertUsingPOST_1.200.id",
    "target": "checkoutPacientUsingPOST.path.hospital_id"
  },
  {
    "source": "insertUsingPOST_1.200.id",
    "target": "deleteUsingDELETE.path.produto_id"
  },
  {
    "source": "insertUsingPOST_1.200.id",
    "target": "findProductByUsingGET.path.produto_id"
  },
  {
    "source": "insertUsingPOST_1.200.id",
    "target": "transferenciaProdutoUsingPOST.path.id"
  },
  {
    "source": "insertUsingPOST_1.200.id",
    "target": "transferenciaProdutoUsingPOST.path.productId"
  },
  {
    "source": "insertUsingPOST_1.200.id",
    "target": "updateUsingPUT_1.path.produto_id"
  },
  {
    "source": "insertUsingPOST_1.200.id",
    "target": "updateUsingPUT_1.request-body.productDTO.id"
  },
  {
    "source": "insertUsingPOST_1.200.id",
    "target": "verificaLeitosDisponiveisUsingGET.path.id"
  }
];
 scenarios={
  "name": "Scenarios",
  "id": 1821,
  "children": [
    {
      "name": "op_insertUsingPOST_1",
      "id": 1822,
      "children": [
        {
          "name": "insertUsingPOST_1",
          "id": 1823,
          "children": [
            {
              "name": "insertUsingPOST_1.path.hospital_id",
              "id": 1826
            },
            {
              "name": "insertUsingPOST_1.200.id",
              "id": 1827
            }
          ]
        },
        {
          "name": "checkinPacientUsingPOST",
          "id": 1824,
          "children": [
            {
              "name": "checkinPacientUsingPOST.200.id",
              "id": 1825
            },
            {
              "name": "checkinPacientUsingPOST.path.hospital_id",
              "id": 1828
            }
          ]
        }
      ]
    },
    {
      "name": "op_findAllUsingGET",
      "id": 1829,
      "children": [
        {
          "name": "findAllUsingGET",
          "id": 1830
        }
      ]
    },
    {
      "name": "op_hospitalMaisProximoUsingGET",
      "id": 1831,
      "children": [
        {
          "name": "hospitalMaisProximoUsingGET",
          "id": 1832
        }
      ]
    },
    {
      "name": "op_insertUsingPOST",
      "id": 1833,
      "children": [
        {
          "name": "insertUsingPOST",
          "id": 1834
        }
      ]
    },
    {
      "name": "op_deleteUsingDELETE",
      "id": 1835,
      "children": [
        {
          "name": "deleteUsingDELETE",
          "id": 1836,
          "children": [
            {
              "name": "deleteUsingDELETE.path.hospital_id",
              "id": 1843
            },
            {
              "name": "deleteUsingDELETE.path.produto_id",
              "id": 1846
            }
          ]
        },
        {
          "name": "insertUsingPOST",
          "id": 1837,
          "children": [
            {
              "name": "insertUsingPOST.200.id",
              "id": 1842
            }
          ]
        },
        {
          "name": "checkinPacientUsingPOST",
          "id": 1838,
          "children": [
            {
              "name": "checkinPacientUsingPOST.200.id",
              "id": 1840
            },
            {
              "name": "checkinPacientUsingPOST.path.hospital_id",
              "id": 1845
            }
          ]
        },
        {
          "name": "insertUsingPOST_1",
          "id": 1839,
          "children": [
            {
              "name": "insertUsingPOST_1.path.hospital_id",
              "id": 1841
            },
            {
              "name": "insertUsingPOST_1.200.id",
              "id": 1844
            }
          ]
        }
      ]
    },
    {
      "name": "op_findProductByUsingGET",
      "id": 1847,
      "children": [
        {
          "name": "findProductByUsingGET",
          "id": 1848,
          "children": [
            {
              "name": "findProductByUsingGET.path.hospital_id",
              "id": 1855
            },
            {
              "name": "findProductByUsingGET.path.produto_id",
              "id": 1858
            }
          ]
        },
        {
          "name": "insertUsingPOST",
          "id": 1849,
          "children": [
            {
              "name": "insertUsingPOST.200.id",
              "id": 1854
            }
          ]
        },
        {
          "name": "checkinPacientUsingPOST",
          "id": 1850,
          "children": [
            {
              "name": "checkinPacientUsingPOST.200.id",
              "id": 1852
            },
            {
              "name": "checkinPacientUsingPOST.path.hospital_id",
              "id": 1857
            }
          ]
        },
        {
          "name": "insertUsingPOST_1",
          "id": 1851,
          "children": [
            {
              "name": "insertUsingPOST_1.path.hospital_id",
              "id": 1853
            },
            {
              "name": "insertUsingPOST_1.200.id",
              "id": 1856
            }
          ]
        }
      ]
    },
    {
      "name": "op_updateUsingPUT_1",
      "id": 1859,
      "children": [
        {
          "name": "updateUsingPUT_1",
          "id": 1860,
          "children": [
            {
              "name": "updateUsingPUT_1.path.hospital_id",
              "id": 1867
            },
            {
              "name": "updateUsingPUT_1.path.produto_id",
              "id": 1870
            },
            {
              "name": "updateUsingPUT_1.request-body.productDTO.id",
              "id": 1871
            }
          ]
        },
        {
          "name": "insertUsingPOST",
          "id": 1861,
          "children": [
            {
              "name": "insertUsingPOST.200.id",
              "id": 1866
            }
          ]
        },
        {
          "name": "checkinPacientUsingPOST",
          "id": 1862,
          "children": [
            {
              "name": "checkinPacientUsingPOST.200.id",
              "id": 1864
            },
            {
              "name": "checkinPacientUsingPOST.path.hospital_id",
              "id": 1869
            }
          ]
        },
        {
          "name": "insertUsingPOST_1",
          "id": 1863,
          "children": [
            {
              "name": "insertUsingPOST_1.path.hospital_id",
              "id": 1865
            },
            {
              "name": "insertUsingPOST_1.200.id",
              "id": 1868
            }
          ]
        }
      ]
    },
    {
      "name": "op_deleteByIdUsingDELETE",
      "id": 1872,
      "children": [
        {
          "name": "deleteByIdUsingDELETE",
          "id": 1873,
          "children": [
            {
              "name": "deleteByIdUsingDELETE.path.hospital_id",
              "id": 1876
            }
          ]
        },
        {
          "name": "insertUsingPOST",
          "id": 1874,
          "children": [
            {
              "name": "insertUsingPOST.200.id",
              "id": 1875
            }
          ]
        }
      ]
    },
    {
      "name": "op_findAllProductByUsingGET",
      "id": 1877,
      "children": [
        {
          "name": "findAllProductByUsingGET",
          "id": 1878,
          "children": [
            {
              "name": "findAllProductByUsingGET.path.hospital_id",
              "id": 1881
            }
          ]
        },
        {
          "name": "insertUsingPOST",
          "id": 1879,
          "children": [
            {
              "name": "insertUsingPOST.200.id",
              "id": 1880
            }
          ]
        }
      ]
    },
    {
      "name": "op_findByIdUsingGET",
      "id": 1882,
      "children": [
        {
          "name": "findByIdUsingGET",
          "id": 1883,
          "children": [
            {
              "name": "findByIdUsingGET.path.hospital_id",
              "id": 1886
            }
          ]
        },
        {
          "name": "insertUsingPOST",
          "id": 1884,
          "children": [
            {
              "name": "insertUsingPOST.200.id",
              "id": 1885
            }
          ]
        }
      ]
    },
    {
      "name": "op_findHospitalNearHospitalByUsingGET",
      "id": 1887,
      "children": [
        {
          "name": "findHospitalNearHospitalByUsingGET",
          "id": 1888,
          "children": [
            {
              "name": "findHospitalNearHospitalByUsingGET.path.hospital_id",
              "id": 1891
            }
          ]
        },
        {
          "name": "insertUsingPOST",
          "id": 1889,
          "children": [
            {
              "name": "insertUsingPOST.200.id",
              "id": 1890
            }
          ]
        }
      ]
    },
    {
      "name": "op_findLocationNearHospitalByUsingGET",
      "id": 1892,
      "children": [
        {
          "name": "findLocationNearHospitalByUsingGET",
          "id": 1893,
          "children": [
            {
              "name": "findLocationNearHospitalByUsingGET.path.hospital_id",
              "id": 1896
            }
          ]
        },
        {
          "name": "insertUsingPOST",
          "id": 1894,
          "children": [
            {
              "name": "insertUsingPOST.200.id",
              "id": 1895
            }
          ]
        }
      ]
    },
    {
      "name": "op_findPatientsUsingGET",
      "id": 1897,
      "children": [
        {
          "name": "findPatientsUsingGET",
          "id": 1898,
          "children": [
            {
              "name": "findPatientsUsingGET.path.hospital_id",
              "id": 1901
            }
          ]
        },
        {
          "name": "insertUsingPOST",
          "id": 1899,
          "children": [
            {
              "name": "insertUsingPOST.200.id",
              "id": 1900
            }
          ]
        }
      ]
    },
    {
      "name": "op_updateUsingPUT",
      "id": 1902,
      "children": [
        {
          "name": "updateUsingPUT",
          "id": 1903,
          "children": [
            {
              "name": "updateUsingPUT.path.hospital_id",
              "id": 1906
            },
            {
              "name": "updateUsingPUT.request-body.objDTO.id",
              "id": 1907
            }
          ]
        },
        {
          "name": "insertUsingPOST",
          "id": 1904,
          "children": [
            {
              "name": "insertUsingPOST.200.id",
              "id": 1905
            }
          ]
        }
      ]
    },
    {
      "name": "op_checkoutPacientUsingPOST",
      "id": 1908,
      "children": [
        {
          "name": "checkoutPacientUsingPOST",
          "id": 1909,
          "children": [
            {
              "name": "checkoutPacientUsingPOST.200.id",
              "id": 1911
            },
            {
              "name": "checkoutPacientUsingPOST.path.hospital_id",
              "id": 1914
            }
          ]
        },
        {
          "name": "insertUsingPOST_1",
          "id": 1910,
          "children": [
            {
              "name": "insertUsingPOST_1.path.hospital_id",
              "id": 1912
            },
            {
              "name": "insertUsingPOST_1.200.id",
              "id": 1913
            }
          ]
        }
      ]
    },
    {
      "name": "op_checkinPacientUsingPOST",
      "id": 1915,
      "children": [
        {
          "name": "checkinPacientUsingPOST",
          "id": 1916,
          "children": [
            {
              "name": "checkinPacientUsingPOST.200.id",
              "id": 1919
            },
            {
              "name": "checkinPacientUsingPOST.path.hospital_id",
              "id": 1922
            }
          ]
        },
        {
          "name": "insertUsingPOST_1",
          "id": 1917,
          "children": [
            {
              "name": "insertUsingPOST_1.path.hospital_id",
              "id": 1920
            },
            {
              "name": "insertUsingPOST_1.200.id",
              "id": 1923
            }
          ]
        },
        {
          "name": "checkoutPacientUsingPOST",
          "id": 1918,
          "children": [
            {
              "name": "checkoutPacientUsingPOST.200.id",
              "id": 1921
            },
            {
              "name": "checkoutPacientUsingPOST.path.hospital_id",
              "id": 1924
            }
          ]
        }
      ]
    },
    {
      "name": "op_findPatientByIdUsingGET",
      "id": 1925,
      "children": [
        {
          "name": "findPatientByIdUsingGET",
          "id": 1926,
          "children": [
            {
              "name": "findPatientByIdUsingGET.path.patientId",
              "id": 1932
            },
            {
              "name": "findPatientByIdUsingGET.path.hospital_id",
              "id": 1937
            }
          ]
        },
        {
          "name": "insertUsingPOST_1",
          "id": 1927,
          "children": [
            {
              "name": "insertUsingPOST_1.path.hospital_id",
              "id": 1933
            },
            {
              "name": "insertUsingPOST_1.200.id",
              "id": 1938
            }
          ]
        },
        {
          "name": "checkoutPacientUsingPOST",
          "id": 1928,
          "children": [
            {
              "name": "checkoutPacientUsingPOST.200.id",
              "id": 1934
            },
            {
              "name": "checkoutPacientUsingPOST.path.hospital_id",
              "id": 1939
            }
          ]
        },
        {
          "name": "checkinPacientUsingPOST",
          "id": 1929,
          "children": [
            {
              "name": "checkinPacientUsingPOST.200.id",
              "id": 1931
            },
            {
              "name": "checkinPacientUsingPOST.path.hospital_id",
              "id": 1935
            }
          ]
        },
        {
          "name": "insertUsingPOST",
          "id": 1930,
          "children": [
            {
              "name": "insertUsingPOST.200.id",
              "id": 1936
            }
          ]
        }
      ]
    },
    {
      "name": "op_updatePatientUsingPUT",
      "id": 1940,
      "children": [
        {
          "name": "updatePatientUsingPUT",
          "id": 1941,
          "children": [
            {
              "name": "updatePatientUsingPUT.path.patientId",
              "id": 1948
            },
            {
              "name": "updatePatientUsingPUT.request-body.patient.id",
              "id": 1949
            },
            {
              "name": "updatePatientUsingPUT.path.hospital_id",
              "id": 1953
            }
          ]
        },
        {
          "name": "insertUsingPOST_1",
          "id": 1942,
          "children": [
            {
              "name": "insertUsingPOST_1.path.hospital_id",
              "id": 1947
            },
            {
              "name": "insertUsingPOST_1.200.id",
              "id": 1954
            }
          ]
        },
        {
          "name": "checkoutPacientUsingPOST",
          "id": 1943,
          "children": [
            {
              "name": "checkoutPacientUsingPOST.200.id",
              "id": 1950
            },
            {
              "name": "checkoutPacientUsingPOST.path.hospital_id",
              "id": 1955
            }
          ]
        },
        {
          "name": "checkinPacientUsingPOST",
          "id": 1944,
          "children": [
            {
              "name": "checkinPacientUsingPOST.200.id",
              "id": 1946
            },
            {
              "name": "checkinPacientUsingPOST.path.hospital_id",
              "id": 1951
            }
          ]
        },
        {
          "name": "insertUsingPOST",
          "id": 1945,
          "children": [
            {
              "name": "insertUsingPOST.200.id",
              "id": 1952
            }
          ]
        }
      ]
    },
    {
      "name": "op_transferenciaProdutoUsingPOST",
      "id": 1956,
      "children": [
        {
          "name": "transferenciaProdutoUsingPOST",
          "id": 1957,
          "children": [
            {
              "name": "transferenciaProdutoUsingPOST.path.id",
              "id": 1963
            },
            {
              "name": "transferenciaProdutoUsingPOST.path.productId",
              "id": 1968
            }
          ]
        },
        {
          "name": "insertUsingPOST_1",
          "id": 1958,
          "children": [
            {
              "name": "insertUsingPOST_1.path.hospital_id",
              "id": 1962
            },
            {
              "name": "insertUsingPOST_1.200.id",
              "id": 1966
            }
          ]
        },
        {
          "name": "checkoutPacientUsingPOST",
          "id": 1959,
          "children": [
            {
              "name": "checkoutPacientUsingPOST.200.id",
              "id": 1964
            },
            {
              "name": "checkoutPacientUsingPOST.path.hospital_id",
              "id": 1967
            }
          ]
        },
        {
          "name": "checkinPacientUsingPOST",
          "id": 1960,
          "children": [
            {
              "name": "checkinPacientUsingPOST.200.id",
              "id": 1961
            },
            {
              "name": "checkinPacientUsingPOST.path.hospital_id",
              "id": 1965
            }
          ]
        }
      ]
    },
    {
      "name": "op_verificaLeitosDisponiveisUsingGET",
      "id": 1969,
      "children": [
        {
          "name": "verificaLeitosDisponiveisUsingGET",
          "id": 1970,
          "children": [
            {
              "name": "verificaLeitosDisponiveisUsingGET.path.id",
              "id": 1976
            }
          ]
        },
        {
          "name": "insertUsingPOST_1",
          "id": 1971,
          "children": [
            {
              "name": "insertUsingPOST_1.path.hospital_id",
              "id": 1975
            },
            {
              "name": "insertUsingPOST_1.200.id",
              "id": 1979
            }
          ]
        },
        {
          "name": "checkoutPacientUsingPOST",
          "id": 1972,
          "children": [
            {
              "name": "checkoutPacientUsingPOST.200.id",
              "id": 1977
            },
            {
              "name": "checkoutPacientUsingPOST.path.hospital_id",
              "id": 1980
            }
          ]
        },
        {
          "name": "checkinPacientUsingPOST",
          "id": 1973,
          "children": [
            {
              "name": "checkinPacientUsingPOST.200.id",
              "id": 1974
            },
            {
              "name": "checkinPacientUsingPOST.path.hospital_id",
              "id": 1978
            }
          ]
        }
      ]
    },
    {
      "name": "rest_hospitais_1",
      "id": 1981,
      "children": [
        {
          "name": "insertUsingPOST",
          "id": 1982,
          "children": [
            {
              "name": "insertUsingPOST.200.id",
              "id": 1986
            }
          ]
        },
        {
          "name": "findByIdUsingGET",
          "id": 1983,
          "children": [
            {
              "name": "findByIdUsingGET.path.hospital_id",
              "id": 1988
            }
          ]
        },
        {
          "name": "updateUsingPUT",
          "id": 1984,
          "children": [
            {
              "name": "updateUsingPUT.path.hospital_id",
              "id": 1989
            },
            {
              "name": "updateUsingPUT.request-body.objDTO.id",
              "id": 1990
            }
          ]
        },
        {
          "name": "deleteByIdUsingDELETE",
          "id": 1985,
          "children": [
            {
              "name": "deleteByIdUsingDELETE.path.hospital_id",
              "id": 1987
            }
          ]
        }
      ]
    },
    {
      "name": "rest_hospitais_estoque_3",
      "id": 1991,
      "children": [
        {
          "name": "checkinPacientUsingPOST",
          "id": 1992,
          "children": [
            {
              "name": "checkinPacientUsingPOST.200.id",
              "id": 1998
            },
            {
              "name": "checkinPacientUsingPOST.path.hospital_id",
              "id": 2005
            }
          ]
        },
        {
          "name": "insertUsingPOST_1",
          "id": 1993,
          "children": [
            {
              "name": "insertUsingPOST_1.path.hospital_id",
              "id": 1999
            },
            {
              "name": "insertUsingPOST_1.200.id",
              "id": 2004
            }
          ]
        },
        {
          "name": "insertUsingPOST",
          "id": 1994,
          "children": [
            {
              "name": "insertUsingPOST.200.id",
              "id": 2000
            }
          ]
        },
        {
          "name": "findProductByUsingGET",
          "id": 1995,
          "children": [
            {
              "name": "findProductByUsingGET.path.hospital_id",
              "id": 2002
            },
            {
              "name": "findProductByUsingGET.path.produto_id",
              "id": 2007
            }
          ]
        },
        {
          "name": "updateUsingPUT_1",
          "id": 1996,
          "children": [
            {
              "name": "updateUsingPUT_1.path.hospital_id",
              "id": 2003
            },
            {
              "name": "updateUsingPUT_1.path.produto_id",
              "id": 2008
            },
            {
              "name": "updateUsingPUT_1.request-body.productDTO.id",
              "id": 2009
            }
          ]
        },
        {
          "name": "deleteUsingDELETE",
          "id": 1997,
          "children": [
            {
              "name": "deleteUsingDELETE.path.hospital_id",
              "id": 2001
            },
            {
              "name": "deleteUsingDELETE.path.produto_id",
              "id": 2006
            }
          ]
        }
      ]
    },
    {
      "name": "rest_hospitais_estoque_4",
      "id": 2010,
      "children": [
        {
          "name": "insertUsingPOST",
          "id": 2011,
          "children": [
            {
              "name": "insertUsingPOST.200.id",
              "id": 2013
            }
          ]
        },
        {
          "name": "findAllProductByUsingGET",
          "id": 2012,
          "children": [
            {
              "name": "findAllProductByUsingGET.path.hospital_id",
              "id": 2014
            }
          ]
        }
      ]
    },
    {
      "name": "rest_hospitais_hospitaisProximos_5",
      "id": 2015,
      "children": [
        {
          "name": "insertUsingPOST",
          "id": 2016,
          "children": [
            {
              "name": "insertUsingPOST.200.id",
              "id": 2018
            }
          ]
        },
        {
          "name": "findHospitalNearHospitalByUsingGET",
          "id": 2017,
          "children": [
            {
              "name": "findHospitalNearHospitalByUsingGET.path.hospital_id",
              "id": 2019
            }
          ]
        }
      ]
    },
    {
      "name": "rest_hospitais_pacientes_6",
      "id": 2020,
      "children": [
        {
          "name": "insertUsingPOST_1",
          "id": 2021,
          "children": [
            {
              "name": "insertUsingPOST_1.path.hospital_id",
              "id": 2029
            },
            {
              "name": "insertUsingPOST_1.200.id",
              "id": 2037
            }
          ]
        },
        {
          "name": "checkoutPacientUsingPOST",
          "id": 2022,
          "children": [
            {
              "name": "checkoutPacientUsingPOST.200.id",
              "id": 2032
            },
            {
              "name": "checkoutPacientUsingPOST.path.hospital_id",
              "id": 2038
            }
          ]
        },
        {
          "name": "checkinPacientUsingPOST",
          "id": 2023,
          "children": [
            {
              "name": "checkinPacientUsingPOST.200.id",
              "id": 2027
            },
            {
              "name": "checkinPacientUsingPOST.path.hospital_id",
              "id": 2033
            }
          ]
        },
        {
          "name": "insertUsingPOST",
          "id": 2024,
          "children": [
            {
              "name": "insertUsingPOST.200.id",
              "id": 2034
            }
          ]
        },
        {
          "name": "findPatientByIdUsingGET",
          "id": 2025,
          "children": [
            {
              "name": "findPatientByIdUsingGET.path.patientId",
              "id": 2028
            },
            {
              "name": "findPatientByIdUsingGET.path.hospital_id",
              "id": 2035
            }
          ]
        },
        {
          "name": "updatePatientUsingPUT",
          "id": 2026,
          "children": [
            {
              "name": "updatePatientUsingPUT.path.patientId",
              "id": 2030
            },
            {
              "name": "updatePatientUsingPUT.request-body.patient.id",
              "id": 2031
            },
            {
              "name": "updatePatientUsingPUT.path.hospital_id",
              "id": 2036
            }
          ]
        }
      ]
    },
    {
      "name": "rest_hospitais_pacientes_7",
      "id": 2039,
      "children": [
        {
          "name": "insertUsingPOST",
          "id": 2040,
          "children": [
            {
              "name": "insertUsingPOST.200.id",
              "id": 2042
            }
          ]
        },
        {
          "name": "findPatientsUsingGET",
          "id": 2041,
          "children": [
            {
              "name": "findPatientsUsingGET.path.hospital_id",
              "id": 2043
            }
          ]
        }
      ]
    },
    {
      "name": "rest_hospitais_proximidades_8",
      "id": 2044,
      "children": [
        {
          "name": "insertUsingPOST",
          "id": 2045,
          "children": [
            {
              "name": "insertUsingPOST.200.id",
              "id": 2047
            }
          ]
        },
        {
          "name": "findLocationNearHospitalByUsingGET",
          "id": 2046,
          "children": [
            {
              "name": "findLocationNearHospitalByUsingGET.path.hospital_id",
              "id": 2048
            }
          ]
        }
      ]
    },
    {
      "name": "rest_hospitais_leitos_9",
      "id": 2049,
      "children": [
        {
          "name": "insertUsingPOST_1",
          "id": 2050,
          "children": [
            {
              "name": "insertUsingPOST_1.path.hospital_id",
              "id": 2055
            },
            {
              "name": "insertUsingPOST_1.200.id",
              "id": 2059
            }
          ]
        },
        {
          "name": "checkoutPacientUsingPOST",
          "id": 2051,
          "children": [
            {
              "name": "checkoutPacientUsingPOST.200.id",
              "id": 2057
            },
            {
              "name": "checkoutPacientUsingPOST.path.hospital_id",
              "id": 2060
            }
          ]
        },
        {
          "name": "checkinPacientUsingPOST",
          "id": 2052,
          "children": [
            {
              "name": "checkinPacientUsingPOST.200.id",
              "id": 2054
            },
            {
              "name": "checkinPacientUsingPOST.path.hospital_id",
              "id": 2058
            }
          ]
        },
        {
          "name": "verificaLeitosDisponiveisUsingGET",
          "id": 2053,
          "children": [
            {
              "name": "verificaLeitosDisponiveisUsingGET.path.id",
              "id": 2056
            }
          ]
        }
      ]
    },
    {
      "name": "rest_hospitais_transferencia_10",
      "id": 2061,
      "children": [
        {
          "name": "insertUsingPOST_1",
          "id": 2062,
          "children": [
            {
              "name": "insertUsingPOST_1.path.hospital_id",
              "id": 2067
            },
            {
              "name": "insertUsingPOST_1.200.id",
              "id": 2071
            }
          ]
        },
        {
          "name": "checkoutPacientUsingPOST",
          "id": 2063,
          "children": [
            {
              "name": "checkoutPacientUsingPOST.200.id",
              "id": 2069
            },
            {
              "name": "checkoutPacientUsingPOST.path.hospital_id",
              "id": 2072
            }
          ]
        },
        {
          "name": "checkinPacientUsingPOST",
          "id": 2064,
          "children": [
            {
              "name": "checkinPacientUsingPOST.200.id",
              "id": 2066
            },
            {
              "name": "checkinPacientUsingPOST.path.hospital_id",
              "id": 2070
            }
          ]
        },
        {
          "name": "transferenciaProdutoUsingPOST",
          "id": 2065,
          "children": [
            {
              "name": "transferenciaProdutoUsingPOST.path.id",
              "id": 2068
            },
            {
              "name": "transferenciaProdutoUsingPOST.path.productId",
              "id": 2073
            }
          ]
        }
      ]
    }
  ]
};
pcseq = [
  {
    "source": 1825,
    "target": 1826
  },
  {
    "source": 1827,
    "target": 1828
  },
  {
    "source": 1840,
    "target": 1841
  },
  {
    "source": 1842,
    "target": 1843
  },
  {
    "source": 1844,
    "target": 1845
  },
  {
    "source": 1844,
    "target": 1846
  },
  {
    "source": 1852,
    "target": 1853
  },
  {
    "source": 1854,
    "target": 1855
  },
  {
    "source": 1856,
    "target": 1857
  },
  {
    "source": 1856,
    "target": 1858
  },
  {
    "source": 1864,
    "target": 1865
  },
  {
    "source": 1866,
    "target": 1867
  },
  {
    "source": 1868,
    "target": 1869
  },
  {
    "source": 1868,
    "target": 1870
  },
  {
    "source": 1868,
    "target": 1871
  },
  {
    "source": 1875,
    "target": 1876
  },
  {
    "source": 1880,
    "target": 1881
  },
  {
    "source": 1885,
    "target": 1886
  },
  {
    "source": 1890,
    "target": 1891
  },
  {
    "source": 1895,
    "target": 1896
  },
  {
    "source": 1900,
    "target": 1901
  },
  {
    "source": 1905,
    "target": 1906
  },
  {
    "source": 1905,
    "target": 1907
  },
  {
    "source": 1911,
    "target": 1912
  },
  {
    "source": 1913,
    "target": 1914
  },
  {
    "source": 1919,
    "target": 1920
  },
  {
    "source": 1921,
    "target": 1922
  },
  {
    "source": 1921,
    "target": 1920
  },
  {
    "source": 1923,
    "target": 1922
  },
  {
    "source": 1923,
    "target": 1924
  },
  {
    "source": 1931,
    "target": 1932
  },
  {
    "source": 1931,
    "target": 1933
  },
  {
    "source": 1934,
    "target": 1935
  },
  {
    "source": 1934,
    "target": 1933
  },
  {
    "source": 1936,
    "target": 1937
  },
  {
    "source": 1938,
    "target": 1935
  },
  {
    "source": 1938,
    "target": 1939
  },
  {
    "source": 1946,
    "target": 1947
  },
  {
    "source": 1946,
    "target": 1948
  },
  {
    "source": 1946,
    "target": 1949
  },
  {
    "source": 1950,
    "target": 1951
  },
  {
    "source": 1950,
    "target": 1947
  },
  {
    "source": 1950,
    "target": 1949
  },
  {
    "source": 1952,
    "target": 1953
  },
  {
    "source": 1954,
    "target": 1951
  },
  {
    "source": 1954,
    "target": 1955
  },
  {
    "source": 1961,
    "target": 1962
  },
  {
    "source": 1961,
    "target": 1963
  },
  {
    "source": 1964,
    "target": 1965
  },
  {
    "source": 1964,
    "target": 1962
  },
  {
    "source": 1964,
    "target": 1963
  },
  {
    "source": 1966,
    "target": 1965
  },
  {
    "source": 1966,
    "target": 1967
  },
  {
    "source": 1966,
    "target": 1963
  },
  {
    "source": 1966,
    "target": 1968
  },
  {
    "source": 1974,
    "target": 1975
  },
  {
    "source": 1974,
    "target": 1976
  },
  {
    "source": 1977,
    "target": 1978
  },
  {
    "source": 1977,
    "target": 1975
  },
  {
    "source": 1977,
    "target": 1976
  },
  {
    "source": 1979,
    "target": 1978
  },
  {
    "source": 1979,
    "target": 1980
  },
  {
    "source": 1979,
    "target": 1976
  },
  {
    "source": 1986,
    "target": 1987
  },
  {
    "source": 1986,
    "target": 1988
  },
  {
    "source": 1986,
    "target": 1989
  },
  {
    "source": 1986,
    "target": 1990
  },
  {
    "source": 1998,
    "target": 1999
  },
  {
    "source": 2000,
    "target": 2001
  },
  {
    "source": 2000,
    "target": 2002
  },
  {
    "source": 2000,
    "target": 2003
  },
  {
    "source": 2004,
    "target": 2005
  },
  {
    "source": 2004,
    "target": 2006
  },
  {
    "source": 2004,
    "target": 2007
  },
  {
    "source": 2004,
    "target": 2008
  },
  {
    "source": 2004,
    "target": 2009
  },
  {
    "source": 2013,
    "target": 2014
  },
  {
    "source": 2018,
    "target": 2019
  },
  {
    "source": 2027,
    "target": 2028
  },
  {
    "source": 2027,
    "target": 2029
  },
  {
    "source": 2027,
    "target": 2030
  },
  {
    "source": 2027,
    "target": 2031
  },
  {
    "source": 2032,
    "target": 2033
  },
  {
    "source": 2032,
    "target": 2029
  },
  {
    "source": 2032,
    "target": 2031
  },
  {
    "source": 2034,
    "target": 2035
  },
  {
    "source": 2034,
    "target": 2036
  },
  {
    "source": 2037,
    "target": 2033
  },
  {
    "source": 2037,
    "target": 2038
  },
  {
    "source": 2042,
    "target": 2043
  },
  {
    "source": 2047,
    "target": 2048
  },
  {
    "source": 2054,
    "target": 2055
  },
  {
    "source": 2054,
    "target": 2056
  },
  {
    "source": 2057,
    "target": 2058
  },
  {
    "source": 2057,
    "target": 2055
  },
  {
    "source": 2057,
    "target": 2056
  },
  {
    "source": 2059,
    "target": 2058
  },
  {
    "source": 2059,
    "target": 2060
  },
  {
    "source": 2059,
    "target": 2056
  },
  {
    "source": 2066,
    "target": 2067
  },
  {
    "source": 2066,
    "target": 2068
  },
  {
    "source": 2069,
    "target": 2070
  },
  {
    "source": 2069,
    "target": 2067
  },
  {
    "source": 2069,
    "target": 2068
  },
  {
    "source": 2071,
    "target": 2070
  },
  {
    "source": 2071,
    "target": 2072
  },
  {
    "source": 2071,
    "target": 2068
  },
  {
    "source": 2071,
    "target": 2073
  }
];