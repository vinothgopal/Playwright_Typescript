import { test, expect } from "../../fixtures/api-fixtures";

test("Update booking", { tag: "@api" }, async ({ bookingService, testData }) => {
  // 1. Create Booking
  const createBookingData = testData("testdata/post_request_body.json");
  const createBookingResp = await bookingService.createBooking(createBookingData);
  const bookingId = createBookingResp.bookingid;

  // 2. Create Auth Token
  const tokenData = testData("testdata/token.json");
  const token = await bookingService.createToken(tokenData);

  // 3. Update Booking
  const updateBookingData = testData("testdata/put_request_body.json");
  const updatedBooking = await bookingService.updateBooking(bookingId, token, updateBookingData);

  // 4. Assertions or Logging as needed
  console.log("Updated Booking:", updatedBooking);
  expect(updatedBooking).toBeDefined();
});
