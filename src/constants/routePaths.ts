export const enum AppRoutes {
    Root = '/',
    Home = '/home',
    Login = '/login',
    NotFound = '*'
}

export const enum HomeRoutes {
    Create = AppRoutes.Home + '/create',
    Dashboard = AppRoutes.Home + '/dashboard',
    Manage = AppRoutes.Home + '/manage',
    Simulate = AppRoutes.Home + '/simulate'
}
