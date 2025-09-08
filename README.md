# 📄 JSON Product Data Structure

> ### This JSON file contains a list of electronic products (drones, laptops, smartphones, smartwatches, etc.) that can be displayed in a frontend application such as an online store or product catalog.

## Structure Overview

```json
{
  "products": [
    {
      "id": 1,
      "productName": "Phantom 4 Pro",
      "brand": "DJI",
      "category": "Drone",
      "description": "Professional drone with 4K camera and obstacle sensing.",
      "quantity": 20,
      "price": 1499.99,
      "image": ""
    }
  ]
}
```

<br>

## 🔹 Field Descriptions

# Product JSON Structure

| Field         | Type   | Description                                                                 |
| ------------- | ------ | --------------------------------------------------------------------------- |
| `id`          | Number | Unique identifier for each product.                                         |
| `productName` | String | Name of the product.                                                        |
| `brand`       | String | Manufacturer or brand name.                                                 |
| `category`    | String | Category of the product (e.g., Smartphone, Laptop, Drone, Smartwatch, etc.) |
| `description` | String | Short description of the product features.                                  |
| `quantity`    | Number | Number of units available (stock count).                                    |
| `price`       | Number | Price of the product in USD.                                                |
| `image`       | String | URL of the product image (empty by default, can be placeholder or real).    |

<br>

## 🔹 Example Usage (Frontend Loop)

### JavaScript (Vanilla)

```js
fetch("products.json")
  .then((response) => response.json())
  .then((data) => {
    data.products.forEach((product) => {
      console.log(product.productName, product.price);
      // Example: render each product in a card
      document.body.innerHTML += `
        <div class="card">
          <h2>${product.productName}</h2>
          <p>${product.brand} - ${product.category}</p>
          <p>$${product.price}</p>
          <img
            src="${product.image || "placeholder.png"}"
            alt="${product.productName}">
        </div>
      `;
    });
  });
```

<br>

### React Example

```js
function ProductList({ products }) {
  return (
    <div className="grid">
      {products.map((product) => (
        <div key={product.id} className="card">
          <h2>{product.productName}</h2>
          <p>
            {product.brand} - {product.category}
          </p>
          <p>${product.price}</p>
          <img
            src={product.image || "placeholder.png"}
            alt={product.productName}
          />
        </div>
      ))}
    </div>
  );
}
```

<br>

## 🔹 Notes

- "image" is currently an empty string. Replace with real image URLs or use a default placeholder in the frontend.

- "quantity" can be used to show stock availability (e.g., In Stock / Out of Stock).

- "id" must remain unique for each product.
