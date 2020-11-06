# BlogApp

## Behaviour

- Home page
  - getStaticProps
    - revalidation 60 seconds
    - load lastPreviews - load last 3 previews
- Posts page
  - getStaticProps
    - revalidation 60 seconds
    - load previews - all (in future with pagination)
- Post detail
  - getStaticPaths
    - revalidation 60 seconds
    - all posts ids
  - getStaticProps
    - revalidation 60 seconds
    - load post detail


## Enviroment variables

Project has set default variables. You should override them for each enviroment.
For more info check `.env`.

You should have unique user and database for each enviroment. For more info check `.env.development`, `.env.production` and `.env.test`.


## Babel

I had to edit babel config because of decorators used in typeORM. Form more info check [this solution](https://github.com/typeorm/typeorm/issues/2897#issuecomment-476284154).


## Created by
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
