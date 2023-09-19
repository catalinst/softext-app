export interface User {
  firstName: string,
  lastName: string,
  email: string
  password: string
}

export interface AuthenticationSchema {
  email: string,
  password: string,
}

export interface LoginPayloadRequest extends AuthenticationSchema {}

export interface RegisterSchema extends User {}

export interface RegisterPayloadRequest extends User {}


export interface UserSlice extends User {
  authenticated: boolean
}

