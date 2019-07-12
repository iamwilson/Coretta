export function responseInterceptor(
    response: any,
    success: (data: any, statusCode?: number) => void,
    failed: (response: any, statusCode?: number) => void,
    history?: any
): void {
    if (
        response &&
        response.status &&
        [200, 201, 204].indexOf(response.status) !== -1
    ) {
        if (response.data) {
            success(response.data, response.status);
        } else {
            success(response, response.status);
        }
    } else if (response && response.status && response.status === 401) {
        if (history) {
            history.push('/login');
        } else {
            failed(response, response.status);
        }
    } else {
        failed(response, response && response.status);
    }
}
