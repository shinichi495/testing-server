'use strict';

var _templateObject = _taggedTemplateLiteral(['\n  query myLaunches($pageSize: Int, $after: String) {\n    launches(pageSize: $pageSize, after: $after) {\n      cursor\n      launches {\n        mission {\n          name\n          missionPatch\n        }\n      }\n    }\n  }\n'], ['\n  query myLaunches($pageSize: Int, $after: String) {\n    launches(pageSize: $pageSize, after: $after) {\n      cursor\n      launches {\n        mission {\n          name\n          missionPatch\n        }\n      }\n    }\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  query launch($id: ID!) {\n    launch(id: $id) {\n      id\n      isBooked\n      rocket {\n        type\n      }\n      mission {\n        name\n      }\n    }\n  }\n'], ['\n  query launch($id: ID!) {\n    launch(id: $id) {\n      id\n      isBooked\n      rocket {\n        type\n      }\n      mission {\n        name\n      }\n    }\n  }\n']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

// import our production apollo-server instance
var _require = require('../'),
    server = _require.server;

var gql = require('graphql-tag');

var _require2 = require('./__utils'),
    startTestServer = _require2.startTestServer,
    toPromise = _require2.toPromise;

var LAUNCH_LIST_QUERY = gql(_templateObject);

var GET_LAUNCH = gql(_templateObject2);

describe('Server - e2e', function () {
  var stop = void 0,
      graphql = void 0;

  beforeEach(async function () {
    var testServer = await startTestServer(server);
    stop = testServer.stop;
    graphql = testServer.graphql;
  });

  afterEach(function () {
    return stop();
  });

  it('gets list of launches', async function () {
    var res = await toPromise(graphql({
      query: LAUNCH_LIST_QUERY,
      variables: { pageSize: 1, after: '1517949900' }
    }));

    expect(res).toMatchSnapshot();
  });

  it('gets a single launch', async function () {
    var res = await toPromise(graphql({ query: GET_LAUNCH, variables: { id: 30 } }));

    expect(res).toMatchSnapshot();
  });
});