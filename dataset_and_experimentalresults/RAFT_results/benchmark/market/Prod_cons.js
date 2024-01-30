groups = {
  "name": "api",
  "id": 1539,
  "children": [
    {
      "name": "root.customer",
      "id": 1540,
      "children": [
        {
          "name": "getCustomerUsingGET",
          "id": 1541,
          "children": [
            {
              "name": "getCustomerUsingGET.query.name",
              "id": 1565
            }
          ]
        }
      ]
    },
    {
      "name": "root.customer.cart",
      "id": 1542,
      "children": [
        {
          "name": "getCartUsingGET",
          "id": 1543,
          "children": [
            {
              "name": "getCartUsingGET.query.name",
              "id": 1563
            }
          ]
        },
        {
          "name": "clearCartUsingDELETE",
          "id": 1544,
          "children": [
            {
              "name": "clearCartUsingDELETE.query.name",
              "id": 1562
            }
          ]
        },
        {
          "name": "payByCardUsingPOST",
          "id": 1545,
          "children": [
            {
              "name": "payByCardUsingPOST.query.name",
              "id": 1568
            },
            {
              "name": "payByCardUsingPOST.201.id",
              "id": 1577
            }
          ]
        },
        {
          "name": "addItemUsingPUT",
          "id": 1546,
          "children": [
            {
              "name": "addItemUsingPUT.query.name",
              "id": 1561
            },
            {
              "name": "addItemUsingPUT.request-body.item._links.array_item.name",
              "id": 1572
            },
            {
              "name": "addItemUsingPUT.request-body.item.productId",
              "id": 1575
            }
          ]
        }
      ]
    },
    {
      "name": "root.customer.cart.delivery",
      "id": 1547,
      "children": [
        {
          "name": "setDeliveryUsingPUT",
          "id": 1548,
          "children": [
            {
              "name": "setDeliveryUsingPUT.query.name",
              "id": 1569
            }
          ]
        }
      ]
    },
    {
      "name": "root.customer.contacts",
      "id": 1549,
      "children": [
        {
          "name": "updateContactsUsingPUT",
          "id": 1550,
          "children": [
            {
              "name": "updateContactsUsingPUT.query.name",
              "id": 1570
            },
            {
              "name": "updateContactsUsingPUT.request-body.contactsDto._links.array_item.name",
              "id": 1573
            }
          ]
        },
        {
          "name": "getContactsUsingGET",
          "id": 1551,
          "children": [
            {
              "name": "getContactsUsingGET.query.name",
              "id": 1564
            }
          ]
        }
      ]
    },
    {
      "name": "root.customer.orders",
      "id": 1552,
      "children": [
        {
          "name": "getOrderUsingGET",
          "id": 1553,
          "children": [
            {
              "name": "getOrderUsingGET.query.name",
              "id": 1566
            },
            {
              "name": "getOrderUsingGET.path.orderId",
              "id": 1578
            }
          ]
        },
        {
          "name": "getOrdersUsingGET",
          "id": 1554,
          "children": [
            {
              "name": "getOrdersUsingGET.query.name",
              "id": 1567
            }
          ]
        }
      ]
    },
    {
      "name": "root.products",
      "id": 1555,
      "children": [
        {
          "name": "getProductUsingGET",
          "id": 1556,
          "children": [
            {
              "name": "getProductUsingGET.path.productId",
              "id": 1576
            }
          ]
        },
        {
          "name": "getProductsUsingGET",
          "id": 1557,
          "children": [
            {
              "name": "getProductsUsingGET.200.array_item.productId",
              "id": 1574
            }
          ]
        }
      ]
    },
    {
      "name": "root.register",
      "id": 1558,
      "children": [
        {
          "name": "createCustomerUsingPOST",
          "id": 1559,
          "children": [
            {
              "name": "createCustomerUsingPOST.201.name",
              "id": 1560
            },
            {
              "name": "createCustomerUsingPOST.request-body.user._links.array_item.name",
              "id": 1571
            }
          ]
        }
      ]
    }
  ]
};
 pc = [
  {
    "source": "createCustomerUsingPOST.201.name",
    "target": "addItemUsingPUT.query.name"
  },
  {
    "source": "createCustomerUsingPOST.201.name",
    "target": "clearCartUsingDELETE.query.name"
  },
  {
    "source": "createCustomerUsingPOST.201.name",
    "target": "getCartUsingGET.query.name"
  },
  {
    "source": "createCustomerUsingPOST.201.name",
    "target": "getContactsUsingGET.query.name"
  },
  {
    "source": "createCustomerUsingPOST.201.name",
    "target": "getCustomerUsingGET.query.name"
  },
  {
    "source": "createCustomerUsingPOST.201.name",
    "target": "getOrderUsingGET.query.name"
  },
  {
    "source": "createCustomerUsingPOST.201.name",
    "target": "getOrdersUsingGET.query.name"
  },
  {
    "source": "createCustomerUsingPOST.201.name",
    "target": "payByCardUsingPOST.query.name"
  },
  {
    "source": "createCustomerUsingPOST.201.name",
    "target": "setDeliveryUsingPUT.query.name"
  },
  {
    "source": "createCustomerUsingPOST.201.name",
    "target": "updateContactsUsingPUT.query.name"
  },
  {
    "source": "createCustomerUsingPOST.request-body.user._links.array_item.name",
    "target": "addItemUsingPUT.request-body.item._links.array_item.name"
  },
  {
    "source": "createCustomerUsingPOST.request-body.user._links.array_item.name",
    "target": "updateContactsUsingPUT.request-body.contactsDto._links.array_item.name"
  },
  {
    "source": "getProductsUsingGET.200.array_item.productId",
    "target": "addItemUsingPUT.request-body.item.productId"
  },
  {
    "source": "getProductsUsingGET.200.array_item.productId",
    "target": "getProductUsingGET.path.productId"
  },
  {
    "source": "payByCardUsingPOST.201.id",
    "target": "getOrderUsingGET.path.orderId"
  }
];
 scenarios={
  "name": "Scenarios",
  "id": 1579,
  "children": [
    {
      "name": "op_createCustomerUsingPOST",
      "id": 1580,
      "children": [
        {
          "name": "createCustomerUsingPOST",
          "id": 1581
        }
      ]
    },
    {
      "name": "op_clearCartUsingDELETE",
      "id": 1582,
      "children": [
        {
          "name": "clearCartUsingDELETE",
          "id": 1583,
          "children": [
            {
              "name": "clearCartUsingDELETE.query.name",
              "id": 1586
            }
          ]
        },
        {
          "name": "createCustomerUsingPOST",
          "id": 1584,
          "children": [
            {
              "name": "createCustomerUsingPOST.201.name",
              "id": 1585
            }
          ]
        }
      ]
    },
    {
      "name": "op_getCartUsingGET",
      "id": 1587,
      "children": [
        {
          "name": "getCartUsingGET",
          "id": 1588,
          "children": [
            {
              "name": "getCartUsingGET.query.name",
              "id": 1591
            }
          ]
        },
        {
          "name": "createCustomerUsingPOST",
          "id": 1589,
          "children": [
            {
              "name": "createCustomerUsingPOST.201.name",
              "id": 1590
            }
          ]
        }
      ]
    },
    {
      "name": "op_getContactsUsingGET",
      "id": 1592,
      "children": [
        {
          "name": "getContactsUsingGET",
          "id": 1593,
          "children": [
            {
              "name": "getContactsUsingGET.query.name",
              "id": 1596
            }
          ]
        },
        {
          "name": "createCustomerUsingPOST",
          "id": 1594,
          "children": [
            {
              "name": "createCustomerUsingPOST.201.name",
              "id": 1595
            }
          ]
        }
      ]
    },
    {
      "name": "op_getCustomerUsingGET",
      "id": 1597,
      "children": [
        {
          "name": "getCustomerUsingGET",
          "id": 1598,
          "children": [
            {
              "name": "getCustomerUsingGET.query.name",
              "id": 1601
            }
          ]
        },
        {
          "name": "createCustomerUsingPOST",
          "id": 1599,
          "children": [
            {
              "name": "createCustomerUsingPOST.201.name",
              "id": 1600
            }
          ]
        }
      ]
    },
    {
      "name": "op_getOrdersUsingGET",
      "id": 1602,
      "children": [
        {
          "name": "getOrdersUsingGET",
          "id": 1603,
          "children": [
            {
              "name": "getOrdersUsingGET.query.name",
              "id": 1606
            }
          ]
        },
        {
          "name": "createCustomerUsingPOST",
          "id": 1604,
          "children": [
            {
              "name": "createCustomerUsingPOST.201.name",
              "id": 1605
            }
          ]
        }
      ]
    },
    {
      "name": "op_addItemUsingPUT",
      "id": 1607,
      "children": [
        {
          "name": "addItemUsingPUT",
          "id": 1608,
          "children": [
            {
              "name": "addItemUsingPUT.query.name",
              "id": 1612
            },
            {
              "name": "addItemUsingPUT.request-body.item._links.array_item.name",
              "id": 1614
            },
            {
              "name": "addItemUsingPUT.request-body.item.productId",
              "id": 1616
            }
          ]
        },
        {
          "name": "createCustomerUsingPOST",
          "id": 1609,
          "children": [
            {
              "name": "createCustomerUsingPOST.201.name",
              "id": 1611
            },
            {
              "name": "createCustomerUsingPOST.request-body.user._links.array_item.name",
              "id": 1613
            }
          ]
        },
        {
          "name": "getProductsUsingGET",
          "id": 1610,
          "children": [
            {
              "name": "getProductsUsingGET.200.array_item.productId",
              "id": 1615
            }
          ]
        }
      ]
    },
    {
      "name": "op_payByCardUsingPOST",
      "id": 1617,
      "children": [
        {
          "name": "payByCardUsingPOST",
          "id": 1618,
          "children": [
            {
              "name": "payByCardUsingPOST.query.name",
              "id": 1621
            }
          ]
        },
        {
          "name": "createCustomerUsingPOST",
          "id": 1619,
          "children": [
            {
              "name": "createCustomerUsingPOST.201.name",
              "id": 1620
            }
          ]
        }
      ]
    },
    {
      "name": "op_getOrderUsingGET",
      "id": 1622,
      "children": [
        {
          "name": "getOrderUsingGET",
          "id": 1623,
          "children": [
            {
              "name": "getOrderUsingGET.query.name",
              "id": 1627
            },
            {
              "name": "getOrderUsingGET.path.orderId",
              "id": 1630
            }
          ]
        },
        {
          "name": "createCustomerUsingPOST",
          "id": 1624,
          "children": [
            {
              "name": "createCustomerUsingPOST.201.name",
              "id": 1626
            }
          ]
        },
        {
          "name": "payByCardUsingPOST",
          "id": 1625,
          "children": [
            {
              "name": "payByCardUsingPOST.query.name",
              "id": 1628
            },
            {
              "name": "payByCardUsingPOST.201.id",
              "id": 1629
            }
          ]
        }
      ]
    },
    {
      "name": "op_setDeliveryUsingPUT",
      "id": 1631,
      "children": [
        {
          "name": "setDeliveryUsingPUT",
          "id": 1632,
          "children": [
            {
              "name": "setDeliveryUsingPUT.query.name",
              "id": 1635
            }
          ]
        },
        {
          "name": "createCustomerUsingPOST",
          "id": 1633,
          "children": [
            {
              "name": "createCustomerUsingPOST.201.name",
              "id": 1634
            }
          ]
        }
      ]
    },
    {
      "name": "op_updateContactsUsingPUT",
      "id": 1636,
      "children": [
        {
          "name": "updateContactsUsingPUT",
          "id": 1637,
          "children": [
            {
              "name": "updateContactsUsingPUT.query.name",
              "id": 1640
            },
            {
              "name": "updateContactsUsingPUT.request-body.contactsDto._links.array_item.name",
              "id": 1642
            }
          ]
        },
        {
          "name": "createCustomerUsingPOST",
          "id": 1638,
          "children": [
            {
              "name": "createCustomerUsingPOST.201.name",
              "id": 1639
            },
            {
              "name": "createCustomerUsingPOST.request-body.user._links.array_item.name",
              "id": 1641
            }
          ]
        }
      ]
    },
    {
      "name": "op_getProductsUsingGET",
      "id": 1643,
      "children": [
        {
          "name": "getProductsUsingGET",
          "id": 1644
        }
      ]
    },
    {
      "name": "op_getProductUsingGET",
      "id": 1645,
      "children": [
        {
          "name": "getProductUsingGET",
          "id": 1646,
          "children": [
            {
              "name": "getProductUsingGET.path.productId",
              "id": 1649
            }
          ]
        },
        {
          "name": "getProductsUsingGET",
          "id": 1647,
          "children": [
            {
              "name": "getProductsUsingGET.200.array_item.productId",
              "id": 1648
            }
          ]
        }
      ]
    },
    {
      "name": "rest_customer_1",
      "id": 1650,
      "children": [
        {
          "name": "createCustomerUsingPOST",
          "id": 1651,
          "children": [
            {
              "name": "createCustomerUsingPOST.201.name",
              "id": 1653
            }
          ]
        },
        {
          "name": "getCustomerUsingGET",
          "id": 1652,
          "children": [
            {
              "name": "getCustomerUsingGET.query.name",
              "id": 1654
            }
          ]
        }
      ]
    },
    {
      "name": "rest_customer_cart_2",
      "id": 1655,
      "children": [
        {
          "name": "createCustomerUsingPOST",
          "id": 1656,
          "children": [
            {
              "name": "createCustomerUsingPOST.201.name",
              "id": 1661
            },
            {
              "name": "createCustomerUsingPOST.request-body.user._links.array_item.name",
              "id": 1665
            }
          ]
        },
        {
          "name": "payByCardUsingPOST",
          "id": 1657,
          "children": [
            {
              "name": "payByCardUsingPOST.query.name",
              "id": 1664
            }
          ]
        },
        {
          "name": "getProductsUsingGET",
          "id": 1658,
          "children": [
            {
              "name": "getProductsUsingGET.200.array_item.productId",
              "id": 1667
            }
          ]
        },
        {
          "name": "addItemUsingPUT",
          "id": 1659,
          "children": [
            {
              "name": "addItemUsingPUT.query.name",
              "id": 1662
            },
            {
              "name": "addItemUsingPUT.request-body.item._links.array_item.name",
              "id": 1666
            },
            {
              "name": "addItemUsingPUT.request-body.item.productId",
              "id": 1668
            }
          ]
        },
        {
          "name": "clearCartUsingDELETE",
          "id": 1660,
          "children": [
            {
              "name": "clearCartUsingDELETE.query.name",
              "id": 1663
            }
          ]
        }
      ]
    },
    {
      "name": "rest_customer_cart_3",
      "id": 1669,
      "children": [
        {
          "name": "createCustomerUsingPOST",
          "id": 1670,
          "children": [
            {
              "name": "createCustomerUsingPOST.201.name",
              "id": 1672
            }
          ]
        },
        {
          "name": "getCartUsingGET",
          "id": 1671,
          "children": [
            {
              "name": "getCartUsingGET.query.name",
              "id": 1673
            }
          ]
        }
      ]
    },
    {
      "name": "rest_customer_cart_delivery_4",
      "id": 1674,
      "children": [
        {
          "name": "createCustomerUsingPOST",
          "id": 1675,
          "children": [
            {
              "name": "createCustomerUsingPOST.201.name",
              "id": 1677
            }
          ]
        },
        {
          "name": "setDeliveryUsingPUT",
          "id": 1676,
          "children": [
            {
              "name": "setDeliveryUsingPUT.query.name",
              "id": 1678
            }
          ]
        }
      ]
    },
    {
      "name": "rest_customer_contacts_5",
      "id": 1679,
      "children": [
        {
          "name": "createCustomerUsingPOST",
          "id": 1680,
          "children": [
            {
              "name": "createCustomerUsingPOST.201.name",
              "id": 1682
            },
            {
              "name": "createCustomerUsingPOST.request-body.user._links.array_item.name",
              "id": 1684
            }
          ]
        },
        {
          "name": "updateContactsUsingPUT",
          "id": 1681,
          "children": [
            {
              "name": "updateContactsUsingPUT.query.name",
              "id": 1683
            },
            {
              "name": "updateContactsUsingPUT.request-body.contactsDto._links.array_item.name",
              "id": 1685
            }
          ]
        }
      ]
    },
    {
      "name": "rest_customer_contacts_6",
      "id": 1686,
      "children": [
        {
          "name": "createCustomerUsingPOST",
          "id": 1687,
          "children": [
            {
              "name": "createCustomerUsingPOST.201.name",
              "id": 1689
            }
          ]
        },
        {
          "name": "getContactsUsingGET",
          "id": 1688,
          "children": [
            {
              "name": "getContactsUsingGET.query.name",
              "id": 1690
            }
          ]
        }
      ]
    },
    {
      "name": "rest_customer_orders_7",
      "id": 1691,
      "children": [
        {
          "name": "createCustomerUsingPOST",
          "id": 1692,
          "children": [
            {
              "name": "createCustomerUsingPOST.201.name",
              "id": 1695
            }
          ]
        },
        {
          "name": "payByCardUsingPOST",
          "id": 1693,
          "children": [
            {
              "name": "payByCardUsingPOST.query.name",
              "id": 1697
            },
            {
              "name": "payByCardUsingPOST.201.id",
              "id": 1698
            }
          ]
        },
        {
          "name": "getOrderUsingGET",
          "id": 1694,
          "children": [
            {
              "name": "getOrderUsingGET.query.name",
              "id": 1696
            },
            {
              "name": "getOrderUsingGET.path.orderId",
              "id": 1699
            }
          ]
        }
      ]
    },
    {
      "name": "rest_customer_orders_8",
      "id": 1700,
      "children": [
        {
          "name": "createCustomerUsingPOST",
          "id": 1701,
          "children": [
            {
              "name": "createCustomerUsingPOST.201.name",
              "id": 1703
            }
          ]
        },
        {
          "name": "getOrdersUsingGET",
          "id": 1702,
          "children": [
            {
              "name": "getOrdersUsingGET.query.name",
              "id": 1704
            }
          ]
        }
      ]
    },
    {
      "name": "rest_products_9",
      "id": 1705,
      "children": [
        {
          "name": "getProductsUsingGET",
          "id": 1706,
          "children": [
            {
              "name": "getProductsUsingGET.200.array_item.productId",
              "id": 1708
            }
          ]
        },
        {
          "name": "getProductUsingGET",
          "id": 1707,
          "children": [
            {
              "name": "getProductUsingGET.path.productId",
              "id": 1709
            }
          ]
        }
      ]
    }
  ]
};
pcseq = [
  {
    "source": 1585,
    "target": 1586
  },
  {
    "source": 1590,
    "target": 1591
  },
  {
    "source": 1595,
    "target": 1596
  },
  {
    "source": 1600,
    "target": 1601
  },
  {
    "source": 1605,
    "target": 1606
  },
  {
    "source": 1611,
    "target": 1612
  },
  {
    "source": 1613,
    "target": 1614
  },
  {
    "source": 1615,
    "target": 1616
  },
  {
    "source": 1620,
    "target": 1621
  },
  {
    "source": 1626,
    "target": 1627
  },
  {
    "source": 1626,
    "target": 1628
  },
  {
    "source": 1629,
    "target": 1630
  },
  {
    "source": 1634,
    "target": 1635
  },
  {
    "source": 1639,
    "target": 1640
  },
  {
    "source": 1641,
    "target": 1642
  },
  {
    "source": 1648,
    "target": 1649
  },
  {
    "source": 1653,
    "target": 1654
  },
  {
    "source": 1661,
    "target": 1662
  },
  {
    "source": 1661,
    "target": 1663
  },
  {
    "source": 1661,
    "target": 1664
  },
  {
    "source": 1665,
    "target": 1666
  },
  {
    "source": 1667,
    "target": 1668
  },
  {
    "source": 1672,
    "target": 1673
  },
  {
    "source": 1677,
    "target": 1678
  },
  {
    "source": 1682,
    "target": 1683
  },
  {
    "source": 1684,
    "target": 1685
  },
  {
    "source": 1689,
    "target": 1690
  },
  {
    "source": 1695,
    "target": 1696
  },
  {
    "source": 1695,
    "target": 1697
  },
  {
    "source": 1698,
    "target": 1699
  },
  {
    "source": 1703,
    "target": 1704
  },
  {
    "source": 1708,
    "target": 1709
  }
];