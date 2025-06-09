export const routes = {
    LOGIN: '/login',
    REGISTER: '/register',
    FORGOT_PASSWORD: '/forgot-password',
    RESET_PASSWORD: '/reset-password',

    DEFAULT: '/',

    CREATE_HABIT: '/create-habit',
    HABITS: '/habits',
    HABIT: '/habit',
}

export const publicRoutes: string[] = [
    routes.LOGIN, routes.REGISTER, routes.FORGOT_PASSWORD, routes.RESET_PASSWORD
]

export const privateRoutes: string[] = [
    routes.DEFAULT, routes.CREATE_HABIT, routes.HABIT
]