import type { user } from "@prisma/client";
import { SignupError, type SignUpWithUsernameAndPasswordResponseResult } from "./+type";
import jwt from "jsonwebtoken";
import { prisma } from "../extras/prisma";
import { createHash } from "crypto";    
import { seckey } from "../environment";



export const signUpWithUsernameAndPasswordResponseResult = async (parameters: {
    username: string,
    password: string
}): Promise<SignUpWithUsernameAndPasswordResponseResult> => {
    try{
        const existingUser = await prisma.user.findUnique({
            where: {
                username: parameters.username,
            },
        });

        if (existingUser) {
            throw SignupError.CONFLICTING_USERNAME;
        }

        const passwordHash = createHash("sha256").update(parameters.password).digest("hex");
        const user = await prisma.user.create({
            data: {
                username: parameters.username,
                password: passwordHash,
            },
        });

        const jwtPayload = {
            iss: "https://purpleshoy.co.in",
            sub: user.id,
            username: user.username,
        };

        const token = jwt.sign(jwtPayload, seckey, {
            expiresIn: "30d",
        });

        const result: SignUpWithUsernameAndPasswordResponseResult = {
            token,
            user,
        };
        return result;
    } catch (e) {
        console.error(e);
        throw SignupError.UNKNOWN;
    }
}
