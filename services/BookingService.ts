import { APIRequestContext, expect } from "@playwright/test";

export class BookingService {
  private readonly request: APIRequestContext;

  constructor(request: APIRequestContext) {
    this.request = request;
  }

  async createBooking(data: any): Promise<any> {
    const res = await this.request.post("/booking", { data });
    expect(res.ok()).toBeTruthy();
    return res.json();
  }

  async createToken(data: any): Promise<string> {
    const res = await this.request.post("/auth", { data });
    expect(res.ok()).toBeTruthy();
    return (await res.json()).token;
  }

  async updateBooking(bookingId: string, token: string, data: any): Promise<any> {
    const res = await this.request.put(`/booking/${bookingId}`, { headers: { Cookie: `token=${token}` }, data });
    expect(res.ok()).toBeTruthy();
    return res.json();
  }
}
