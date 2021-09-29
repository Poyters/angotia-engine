/*
NOTE: Its a one interface for all type of users (tenant and landlord) cuz a lack of knowledge relation between API and SSO.
So we cannot at this point connect API account to SSO account type (tenant | landlord). Also, this approach decreases number
of MongoDB documents.
*/

export interface IUser {
  id: number;
  created: number;
  ssoId: string;
}
