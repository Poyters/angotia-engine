export declare const createBlankUser: (ssoId: string) => {
    ssoId: string;
    created: number;
    profile: {
        description: string;
        avatar: any;
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
