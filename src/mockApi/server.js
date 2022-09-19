import { rest, setupWorker } from 'msw'
import db from './db'
// import { nanoid } from '@reduxjs/toolkit'
import { Server as MockSocketServer } from 'mock-socket'
import { setRandom } from 'txtgen'
import { LoremIpsum } from "lorem-ipsum";
import { parseISO } from 'date-fns'// Probably don't need this

const NUM_USERS = 3 // don't change - limited amount to 3 check usersSeed to add more if neccesary
const POSTS_PER_USER = 2

// Add an extra delay to all endpoints, so loading spinners show up.
const ARTIFICIAL_DELAY_MS = 2000

// Routes

/*resources :superusers
resources :like_views
resources :posts
resources :users (edited)*/

// Handlers
import { rest } from 'msw'

export const handlers = [
  rest.post('/signup', (req, res, ctx) => {

    return res(ctx("hello User"))

  }),

  rest.get('/user', (req, res, ctx) => {

    return res(ctx("hello User"))
  }),
  rest.get('/posts', (req, res, ctx) => {

    return res(ctx("hello Post"))
  }),
  rest.post('/login', (req, res, ctx) => {

    return res(ctx("hello User"))

  }),

]




