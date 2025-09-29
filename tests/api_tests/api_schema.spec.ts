import { test, expect } from "../../fixtures/api-fixtures";

test("validate API response against schema", { tag: "@api" }, async ({ request, schemaService, testData }) => {
  const response = await request.get("https://mocktarget.apigee.net/json");
  const responseBody = await response.json();

  // Get schema from test data utility
  const schema = testData("testdata/jsonschema.json");

  // Validate using the SchemaService
  const isValid = schemaService.validateSchema(schema, responseBody);

  console.log("API Response:", responseBody);
  expect(isValid).toBeTruthy();
});
