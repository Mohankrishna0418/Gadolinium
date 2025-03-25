import type { user } from "@prisma/client"

export type SignUpWithUsernameAndPasswordResponseResult = {
    token: string;
    user: user;
};

export enum SignupError {
    CONFLICTING_USERNAME = "CONFLICTING_USERNAME",
    UNKNOWN = "UNKNOWN",
};

export type LoginWithUsernameAndPassword = {
    token: string;
    user: user;
};

export enum LoginWithUsernameAndPasswordError {
    INCORRECT_USERNAME_OR_PASSWORD = "INCORRECT_USERNAME_OR_PASSWORD",
    UNKNOWN = "UNKNOWN", 
};