## GraphQL
A simple document to explain how works GraphQL.

---

Its a modern new way to build an API, that replaces the Express and his problem of routes.

GraphQL sends information according on necessities of who is consuming the api, without a specific route.

Its eliminate the Overfetching (Send more data than whats client really needs).

---

`yarn init -y`

`yarn add apollo-server graphql`

> +src/index.js

`yarn add @babel/core @babel/node @babel/plugin-transform-async-to-generator @babel/plugin-transform-runtime @babel/preset-env`

> * package.json

```javascript
  "scripts": {
      "dev": "yarn nodemon --exec babel-node src/index.js -e js,gql"
    },
```

`yarn add merge-graphql-schemas`







  
