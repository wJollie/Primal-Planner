const { User } = require('../models');

const userData = [
  {
    username: 'user1',
    password: 'password1',
  },
  {
    username: 'user2',
    password: 'password2',
  },
  {
    username: 'user3',
    password: 'password3',
  },
  {
    username: 'user4',
    password: 'password4',
  },
  {
    username: 'user5',
    password: 'password5',
  },
  {
    username: 'user6',
    password: 'password6',
  },
];

const seedUsers = async () => {
  try {
    for (const user of userData) {
      await User.create(user);
    }
    console.log('Users seeded successfully');
  } catch (err) {
    console.error('Error seeding users:', err);
  }
};

module.exports = seedUsers;