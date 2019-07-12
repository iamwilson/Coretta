export interface IRequest {
    id: string;
    payload: string;
    status: string;
    createdTime: Date;
    executionStartTime: Date;
    sender: string;
    completionTime: Date;
    scheduleTime: Date;
    isRecurring: boolean;
    daysInterval: number;
    recurringCount: number;
}
