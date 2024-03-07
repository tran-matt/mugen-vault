import React, { useEffect, useState } from 'react';
/* global ShopifyBuy */

function Shop() {
  const [hasItems, setHasItems] = useState(false);

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
      options: {
        product: {
          events: {
            afterRender: function() {
              // Check if the product component has any children (i.e., if there are items)
              const hasItems = document.getElementById('shopify-buy-button').children.length > 0;
              setHasItems(hasItems);
            },
          },
        },
      },
    });
  }, []);

  return (
    <div className="shop-container">
      <h1 className="text-3xl font-bold mb-4">Shop</h1>
      {hasItems ? (
        <div id="shopify-buy-button"></div>
      ) : (
        <p>No items available at this time.</p>
      )}
    </div>
  );
}

export default Shop;
