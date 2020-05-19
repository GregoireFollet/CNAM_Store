export class AuthService{
  isAuth = false;

  sigIn(){
    this.isAuth = true;
  }

  signOut(){
    this.isAuth = false;
  }
}
