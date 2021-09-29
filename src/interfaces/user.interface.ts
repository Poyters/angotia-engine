/*
NOTE: Its a one interface for all type of users (tenant and landlord) cuz a lack of knowledge relation between API and SSO.
So we cannot at this point connect API account to SSO account type (tenant | landlord). Also, this approach decreases number
of MongoDB documents.
*/

export interface IUserProfile {
  firstName: string;
  lastName: string;
  description: string;
  avatar: string;
  backgroundPicture: string;

  // Landlord
  companyName?: string;
  phone?: string;

  // User
  gender?: string;
  age?: number;
  pet?: IPetType;
  keywords?: string[];
}

interface IPetType {
  types: string[];
  description?: string;
}

export interface IUserPublic {
  _id: string;
  created: number;
  profile: IUserProfile;
}

export interface INewUserDTO {
  firstName: string;
  lastName: string;
}
