export interface CreateBookingRequest{
  customerName:string;
  pickup:string;
  destination:string;
}

export interface BookingResponse{
  id:string;
  status:string;
}
