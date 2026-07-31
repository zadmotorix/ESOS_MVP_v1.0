export class ApiResponse{
  static success(data:any,message='OK'){
    return {success:true,message,data};
  }
  static failure(message:string){
    return {success:false,message};
  }
}
