export declare class AuthenticationError extends Error {
}
export declare class AuthenticationService {
    authenticate(token: string): Promise<string | null>;
}
