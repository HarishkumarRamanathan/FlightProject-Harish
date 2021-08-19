export class UserRole {

      public userName: string;
      public email: string;
      public valid:boolean;
      public role:string;
      public token:string;

      constructor( userName: string,email:string,valid:boolean,role:string,token:string) { 
          this.userName=userName;
          this.email=email;
          this.valid=valid;
          this.role=role;
          this.token=token;
       }
  
  }