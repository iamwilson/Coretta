export const enum CommandStatus {
    Pending = 0,
    Succeeded = 2,
    Failed = 3,
}

export const enum RequestStatus {
    Pending = 0,
    Processing = 1,
    Succeeded = 2,
    Failed = 3,
    Queued = 4,
    Scheduled = 5
}

export const enum TransactionState {
    Open = 0,
    Close = 1
}

export const enum TransactionStatus {
    Pending = 0,
    Processing = 1,
    Succeeded = 2,
    Failed = 3,
    Investigation = 4,
}

export const enum HttpStatus {
    Success = 200,
    Created = 201,
    BadRequest = 400,
    Unauthorized = 401,
    Forbidden = 403,
    NotFound = 404,
    ServerError = 500,
}
