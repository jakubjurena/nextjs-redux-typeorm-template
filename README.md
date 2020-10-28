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

## Created by
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
