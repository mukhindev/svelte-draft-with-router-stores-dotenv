import dotenv from 'dotenv'

const production = !process.env.ROLLUP_WATCH

if (production) dotenv.config({ path: '.env.production' })
else dotenv.config({ path: '.env.development' })

const __API__ = process.env.API

export {
  __API__
}
