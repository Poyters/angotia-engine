export declare const createNewUser: (ssoId: string, firstName: string, lastName: string) => {
    ssoId: string;
    created: number;
    profile: {
        firstName: string;
        lastName: string;
        description: string;
        avatar: any;
        backgroundPicture: any;
        companyName: any;
        phone: any;
        gender: any;
        age: any;
        pet: {
            types: any[];
            description: any;
        };
        keywords: any[];
    };
};
