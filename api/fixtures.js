const mongoose = require('mongoose');
const { nanoid } = require('nanoid');
const config = require('./config');
const Category = require("./models/Category");
const Product = require("./models/Product");
const User = require("./models/User");

const run = async () => {
  await mongoose.connect(config.db.url);

  const collections = await mongoose.connection.db.listCollections().toArray();

  for (const coll of collections) {
    await mongoose.connection.db.dropCollection(coll.name);
  }

  const [allCategory, tabletCategory, laptopCategory, smartphoneCategory] = await Category.create(
    {
      title: 'All items',
    },
    {
      title: 'Laptops',
    },
    {
      title: 'Tablets',
    },
    {
      title: 'Smartphones',
    }
  );

  await Product.create(
    {
      title: 'MacBook Pro 16',
      price: 120000,
      description: 'The most powerful MacBook Pro ever is here. With the blazing-fast M1 Pro or M1 Max chip — the first Apple silicon designed for pros — you get groundbreaking performance and amazing battery life.',
      category: laptopCategory,
      image: 'fixtures/Mb-pro.jpg'
    },
    {
      title: 'MacBook Pro 14',
      price: 100000,
      description: 'The most powerful MacBook Pro ever is here. With the blazing-fast M1 Pro or M1 Max chip — the first Apple silicon designed for pros — you get groundbreaking performance and amazing battery life.',
      category: laptopCategory,
      image: 'fixtures/Mb-pro.jpg'
    },
    {
      title: 'Ipad Pro 128Gb',
      price: 80000,
      description: 'Supercharged by the Apple M1 chip.',
      category: tabletCategory,
      image: 'fixtures/ipad-pro.jpg'
    },
    {
      title: 'Ipad Mini 64Gb',
      price: 50000,
      description: 'Mega power. Mini sized.',
      category: tabletCategory,
      image: 'fixtures/iPad_mini.webp'
    },
    {
      title: 'Iphone 13 Pro 256Gb',
      price: 100000,
      description: 'Oh. So. Pro.',
      category: smartphoneCategory,
      image: 'fixtures/iphone13-pro.png'
    },
    {
      title: 'Iphone 13 128Gb',
      price: 80000,
      description: 'Our most advanced dual‑camera system ever.',
      category: smartphoneCategory,
      image: 'fixtures/iphone13.jpg'
    },
  );

  await User.create({
    username: 'admin',
    password: 'qwerty347',
    token: nanoid(),
  }, {
    username: 'root',
    password: 'qwerty347',
    token: nanoid(),
  });

  await mongoose.connection.close();
};

run().catch(console.error);