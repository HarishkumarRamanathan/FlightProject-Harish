export class User {

      public userName: string;
      public email: string;
      public password: string;
      public valid:boolean;
      public role:string;

      constructor( userName: string,email:string,password:string,valid:boolean,role:string) { 
          this.userName=userName;
          this.email=email;
          this.password=password;
          this.valid=valid;
          this.role=role;
       }
  
  }
  
  