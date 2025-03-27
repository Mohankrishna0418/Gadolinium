import type { user } from "@prisma/client";

export type GetMeResult = {
  user: user;
};

export enum GetMeError {
    UNKNOWN = "UNKNOWN",
    USER_NOT_FOUND = "USER_NOT_FOUND",
}

export type GetAllUsersResult = {
    users: user[];
}

export enum GetAllUsersError {
    NO_USERS_FOUND = "NO_USERS_FOUND",
    UNKNOWN = "UNKNOWN",
}