import { test as base, APIRequestContext, expect } from "@playwright/test";
import { BookingService } from "../services/BookingService";
import { TestConfig } from "../test.config";
import { SchemaService } from "../services/SchemaService";
import fs from "fs";

type MyApiFixtures = {
  bookingService: BookingService;
  testData: (filePath: string) => any;
  schemaService: SchemaService;
  config: TestConfig;
};

export const test = base.extend<MyApiFixtures>({
  bookingService: async ({ request }, use) => {
    await use(new BookingService(request));
  },
  testData: async ({}, use) => {
    await use((filePath: string) => JSON.parse(fs.readFileSync(filePath, "utf-8")));
  },
  config: async ({}, use) => {
    await use(new TestConfig());
  },
  schemaService: async ({}, use) => {
    await use(new SchemaService());
  },
});

export { expect };
