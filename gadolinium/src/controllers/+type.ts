import type { user } from "@prisma/client"

export enum SignupError {
    CONFLICTING_USERNAME = "CONFLICTING_USERNAME",
    UNKNOWN = "UNKNOWN",
}

export type SignUpWithUsernameAndPasswordResponseResult = {
    token: string;
    user: user;
}