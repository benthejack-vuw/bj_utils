// Errors for converting from object data to explicit class objects.
export class DataError extends Error {
    constructor(className: string, message: string) {
        super(`Cannot convert from object to ${className}: ${message}`);
    }
}
