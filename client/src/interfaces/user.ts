export interface IUserLogin {
  email: string;
  password:string;
}

export interface IUserForm extends IUserLogin {
  username: string;
}