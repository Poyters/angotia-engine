export interface IUserProfile {
    firstName: string;
    lastName: string;
    description: string;
    avatar: string;
    backgroundPicture: string;
    companyName?: string;
    phone?: string;
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
export {};
