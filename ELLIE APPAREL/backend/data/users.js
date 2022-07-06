import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('12345', 10),
    isAdmin: true,
  },
  {
    name: 'Rimya F',
    email: 'rimya@example.com',
    password: bcrypt.hashSync('12345', 10),
  },
  {
    name: 'Rida A',
    email: 'rida@example.com',
    password: bcrypt.hashSync('12345', 10),
  },
]

export default users
