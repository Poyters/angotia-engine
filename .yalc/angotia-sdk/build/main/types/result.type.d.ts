export declare type Result<Type> = [Error | null, Type | null];
export declare type Error = {
    statusCode: number;
    message: string;
};
