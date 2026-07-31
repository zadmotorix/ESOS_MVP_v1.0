export class BookingService {
  async list() { return []; }
  async create(data:any) {
    return { id: Date.now(), status: 'created', ...data };
  }
}
