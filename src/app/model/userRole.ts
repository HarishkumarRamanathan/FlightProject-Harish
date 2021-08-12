export class UserRole {

      public userName: string;
      public email: string;
      public valid:boolean;
      public role:string;

      constructor( userName: string,email:string,valid:boolean,role:string) { 
          this.userName=userName;
          this.email=email;
          this.valid=valid;
          this.role=role;
       }
  
  }