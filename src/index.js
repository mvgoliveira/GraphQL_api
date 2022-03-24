import { ApolloServer, gql } from "apollo-server";

// Toda request é POST
// Toda request bate no mesmo endpoint (/graphql)

// Query -> Obter informações (GET)
// Mutation -> Manipular dados (POST/PUT/PATCH/DELETE)

// Scalar Types -> String, Int, Boolean, Float e ID. 

const typeDefs = gql`
  type User {
    _id: ID!
    name: String!
    email: String!
    admin: Boolean!
  }

  type Post {
    _id: ID!
    title: String!
    content: String!
    author: User!
  }

  type Query {
    hello: String
    users: [User!]!
    getUserByEmail(email: String!): User!
  }

  type Mutation {
    createUser(name: String!, email: String!): User!
  }
`;

const users = [
  { _id: String(Math.random()), name: "Marcus", email: "markusvi17@gmail.com", admin: true},
  { _id: String(Math.random()), name: "Vinicius", email: "markusvi18@gmail.com", admin: false},
  { _id: String(Math.random()), name: "Gomes", email: "markusvi19@gmail.com", admin: true}
]

const resolvers = {
  Query: {
    hello: () => 'Hello World',
    users: () => users,
    getUserByEmail: (_, args) => {
      return users.find((user) => user.email === args.email)
    }
  },

  Mutation: {
    createUser: (_, args) => {
      const newUser = {
        _id: String(Math.random()),
        name: args.name,
        email: args.email,
        admin: true
      }
      
      users.push(newUser);

      return newUser
    },
  }
};

const server = new ApolloServer({ typeDefs, resolvers });
server.listen().then(({ url }) => console.log(`🚀 Server is running in URL ${url}`))