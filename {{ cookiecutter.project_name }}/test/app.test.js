const app = require('../app');
const request = require("supertest")(app);
const expect = require("chai").expect;

describe("GET /", function () {
  it("Get Home", async function () {
    const response = await request.get("/");

    expect(response.status).to.eql(200);
    
  });
});

describe("GET /health", function () {
  it("healthcheck", async function () {
    const response = await request.get("/api/health");

    expect(response.status).to.eql(200);
    
  });
});

describe("GET /list-users", function () {
  it("Get list-users", async function () {
    const response = await request.get("/api/list-users");

    expect(response.status).to.eql(200);
    
  });
});


