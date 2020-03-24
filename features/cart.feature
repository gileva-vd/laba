Feature: Cart

   Данный сценарий описывает работу корзины

Scenario Outline: Add to cart
    Given There were <start_price> products in the basket
    When Added a product to the cart for <price>
    Then The total amount in the bucket is <finish_price>

Examples:
    | start_price | price | finish_price |
    |   100       |    50 |      150     |
    |   0         |   350 |      350     |
    |   1000      |   200 |      1200    |
    |   0         |     0 |      0       |