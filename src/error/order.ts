//errors for incorrect ordering of method calls 
export class OrderError extends Error {
    constructor(className:string, dependant: string, requirement: string) {
        super(`Before calling ${dependant} on ${className} call ${requirement}`);
    }
}