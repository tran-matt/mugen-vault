import React, { useEffect } from 'react';
/* global ShopifyBuy */

function Shop() {
  useEffect(() => {
    // Assuming ShopifyBuy is available globally
    var client = ShopifyBuy.buildClient({
      domain: 'your-shopify-domain.myshopify.com',
      storefrontAccessToken: 'your-storefront-access-token',
    });

    var ui = ShopifyBuy.UI.init(client);
    ui.createComponent('product', {
      id: 'your-product-id',
      node: document.getElementById('shopify-buy-button'),
    });
  }, []);

  return (
    <div className="shop-container">
      <h1 className="text-3xl font-bold mb-4">Shop</h1>
      <div id="shopify-buy-button"></div>
    </div>
  );
}

export default Shop;
