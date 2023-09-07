import PrismaService from "./PrismaService";
import bcrypt from "bcrypt";
export class UserService {
  constructor() {}
  async isUserExist(email: string) {
    return await PrismaService.user.findUnique({
      where: {
        email: email,
      },
    });
  }
  async createUser({
    email,
    password,
    name,
  }: {
    email: string;
    password: string;
    name: string;
  }) {
    const isUserExist = await this.isUserExist(email);
    if (isUserExist) {
      return {
        error: "User already exist",
      };
    }
    const hashedPassword = await bcrypt.hash(password, 12);
    const user = await PrismaService.user.create({
      data: {
        email: email,
        name: name,
        hashedPassword,
        emailVerified: new Date(),
      },
    });
    return {
      user: user,
    };
  }
  async verifyUser({ email, password }: { email: string; password: string }) {
    const isUserExist = await this.isUserExist(email);
    if (!isUserExist) {
      return {
        error: "User not found",
      };
    }
    const isPasswordMatch = await bcrypt.compare(
      password,
      isUserExist?.hashedPassword as string
    );
    if (!isPasswordMatch) {
        return {
            error: "Password is incorrect",
        };
    }
    return {
        user: isUserExist,
    }
  }
}
