import { products } from "../models/user_model.js";

async function create_products(req, res) {
  try {
    await products.deleteMany({});
    await products.create(
      {
        name: "Banana",
        category: "Fruits",
        price: 0.59,
        unit: "kg",
        stock: 120,
        description: "Fresh ripe bananas perfect for smoothies and snacks.",
        imageUrl: "https://example.com/images/banana.jpg",
        isAvailable: true,
      },
      {
        name: "Whole Milk",
        category: "Dairy",
        price: 3.49,
        unit: "liter",
        stock: 50,
        description: "Rich and creamy whole milk from local farms.",
        imageUrl: "https://example.com/images/whole-milk.jpg",
        isAvailable: true,
      },
      {
        name: "Brown Bread",
        category: "Bakery",
        price: 2.99,
        unit: "pack",
        stock: 30,
        description: "Healthy brown bread with whole grains.",
        imageUrl: "https://example.com/images/brown-bread.jpg",
        isAvailable: true,
      },
      {
        name: "Chicken Breast",
        category: "Meat",
        price: 6.99,
        unit: "lb",
        stock: 25,
        description: "Fresh and lean chicken breasts, antibiotic-free.",
        imageUrl: "https://example.com/images/chicken-breast.jpg",
        isAvailable: true,
      },
      {
        name: "Orange Juice",
        category: "Beverages",
        price: 4.49,
        unit: "liter",
        stock: 40,
        description: "Pure, fresh-squeezed orange juice with no added sugar.",
        imageUrl: "https://example.com/images/orange-juice.jpg",
        isAvailable: true,
      },
      {
        name: "Toothpaste",
        category: "Personal Care",
        price: 2.49,
        unit: "piece",
        stock: 80,
        description: "Whitening toothpaste with natural mint flavor.",
        imageUrl: "https://example.com/images/toothpaste.jpg",
        isAvailable: true,
      },
      {
        name: "Dish Soap",
        category: "Household",
        price: 3.25,
        unit: "liter",
        stock: 70,
        description: "Powerful dishwashing liquid with lemon fragrance.",
        imageUrl: "https://example.com/images/dish-soap.jpg",
        isAvailable: true,
      },
      {
        name: "Potato Chips",
        category: "Snacks",
        price: 1.99,
        unit: "pack",
        stock: 100,
        description:
          "Crunchy salted potato chips made with natural ingredients.",
        imageUrl: "https://example.com/images/potato-chips.jpg",
        isAvailable: true,
      }
    );
    req.status(201).redirect("/");
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
}

async function get_products(req, res) {
  try {
    const product = await products.find({});
    res.status(200).json(product);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
}

async function new_products(req, res) {
  try {
    const create_new_products = await products.create(req.body);
    console.log(create_new_products);
    res.status(201).json(create_new_products);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

async function registration(req, res) {
  try {
    res.render("../Products/products.ejs");
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

async function update_products(req, res) {
  try {
    const { id } = req.params;
    const updated_products = await products.findByIdAndUpdate(id, req.body, {
      new: true, // return the updated document
      runValidators: true, // to validate updated data
    });

    if (!updated_products) {
      return res.status(404).json({ error: "products not found" });
    }

    res.status(200).json(updated_products);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}
async function delete_products(req, res) {
  try {
    const { id } = req.params;
    const delete_products = await products.findByIdAndDelete(id);

    if (!delete_products) {
      return res.status(404).json({ error: "products not found" });
    }

    res.status(200).json({ message: "products deleted successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

async function patch_products(req, res) {
  try {
    const { id } = req.params;
    const patch_products = await products.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!patch_products) {
      return res.status(404).json({ error: "products not found" });
    }

    res.status(200).json(patch_products);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

async function get_productsById(req, res) {
  try {
    const { id } = req.params;

    const products = await products.findById(id); // Mongoose handles ObjectId conversion

    if (!products) {
      return res.status(404).json({ message: "products not found" });
    }

    res.status(200).json(products);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

export {
  create_products,
  get_products,
  new_products,
  registration,
  update_products,
  delete_products,
  get_productsById,
  patch_products,
};
