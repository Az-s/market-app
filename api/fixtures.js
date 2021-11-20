const mongoose = require('mongoose');
const {nanoid} = require('nanoid');
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

  const [tabletCategory, laptopCategory , smartphoneCategory] = await Category.create({
    title: 'CPUs',
    description: 'Central Processor Units',
  }, {
    title: 'HDDs',
    description: 'Hard Disk Driver',
  });

  await Product.create({
    title: 'Intel core i7',
    price: 300,
    category: cpuCategory,
    image: 'fixtures/cpu.jpg'
  }, {
    title: 'Seagate BarraCuda 3TB',
    price: 100,
    category: hddCategory,
    image: 'fixtures/hdd.jpg'
  });

  await User.create({
    username: 'admin',
    password: '1qaz@WSX29',
    token: nanoid(),
  }, {
    username: 'root',
    password: '1qaz@WSX29',
    token: nanoid(),
  });

  await mongoose.connection.close();
};

run().catch(console.error);