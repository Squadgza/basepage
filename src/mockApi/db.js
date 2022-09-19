import { factory, oneOf, manyOf, primaryKey } from '@mswjs/data'

/* MSW Data Model Setup */
const db = factory({
  user: {
    // pk: primaryKey(nanoid),
    id: primaryKey(String),
    firstName: String,
    name: String,
    password: String,
    posts: manyOf('post'),
  },
  post: {
    id: primaryKey(nanoid),
    title: String,
    img: String,
    description: String,
    price: String,
    date: String,
    // reactions: oneOf('reaction'),
    likes_views: manyOf('comment'),
    user: oneOf('user'),
  },
  likes_views: {
    id: primaryKey(String),
    like: Number,
    views: Number,
    post: oneOf('post'),
  },
  // reaction: {
  //   id: primaryKey(nanoid),
  //   thumbsUp: Number,
  //   hooray: Number,
  //   heart: Number,
  //   rocket: Number,
  //   eyes: Number,
  //   post: oneOf('post'),
  // },
})

export default db;