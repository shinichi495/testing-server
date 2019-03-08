'use strict';

var _require = require('apollo-link-http'),
    HttpLink = _require.HttpLink;

var fetch = require('node-fetch');

var _require2 = require('apollo-link'),
    execute = _require2.execute,
    toPromise = _require2.toPromise;

module.exports.toPromise = toPromise;

var _require3 = require('../'),
    dataSources = _require3.dataSources,
    defaultContext = _require3.context,
    typeDefs = _require3.typeDefs,
    resolvers = _require3.resolvers,
    ApolloServer = _require3.ApolloServer,
    LaunchAPI = _require3.LaunchAPI,
    UserAPI = _require3.UserAPI,
    store = _require3.store;

/**
 * Integration testing utils
 */


var constructTestServer = function constructTestServer() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$context = _ref.context,
      context = _ref$context === undefined ? defaultContext : _ref$context;

  var userAPI = new UserAPI({ store: store });
  var launchAPI = new LaunchAPI();

  var server = new ApolloServer({
    typeDefs: typeDefs,
    resolvers: resolvers,
    dataSources: function dataSources() {
      return { userAPI: userAPI, launchAPI: launchAPI };
    },
    context: context
  });

  return { server: server, userAPI: userAPI, launchAPI: launchAPI };
};

module.exports.constructTestServer = constructTestServer;

/**
 * e2e Testing Utils
 */

var startTestServer = async function startTestServer(server) {
  // if using apollo-server-express...
  // const app = express();
  // server.applyMiddleware({ app });
  // const httpServer = await app.listen(0);

  var httpServer = await server.listen({ port: 0 });

  var link = new HttpLink({
    uri: 'http://localhost:' + httpServer.port,
    fetch: fetch
  });

  var executeOperation = function executeOperation(_ref2) {
    var query = _ref2.query,
        _ref2$variables = _ref2.variables,
        variables = _ref2$variables === undefined ? {} : _ref2$variables;
    return execute(link, { query: query, variables: variables });
  };

  return {
    link: link,
    stop: function stop() {
      return httpServer.server.close();
    },
    graphql: executeOperation
  };
};

module.exports.startTestServer = startTestServer;