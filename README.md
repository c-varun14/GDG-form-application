I have build this project with Next js, tailwindcss, shadcn(ui library), auto-animate (for animations when the component mounts and unmounts), react-hook-form and zod(For validation and error handling).

This is a fully typesafe form with proper error handling. You can test it by trying to submit the form without entering any data.

I know next js was not very useful for this case as it is just a client side form I could have just gone with react js but I just went with next js as I am really used to it now. I used a ui library(shadcn) to save time and write better code. The ui library had a Form component built on react-hook-form and zod, and I generally use these packages for my applicatons so I ended up using the Form component of shadcn. The advantage if zod is the schemas defined by zod can be used even in the backend to make sure the data is validated. For hosting I have used vercel.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
