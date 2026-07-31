export class BookingRepository {
  async findAll(){ return []; }
  async create(data:any){ return {id:Date.now(),...data}; }
}
