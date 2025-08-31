import NextAuth from "next-auth";
import { JWT as DefaultJWT } from "next-auth/jwt";

declare module "next-auth/jwt" {
  interface JWT extends DefaultJWT {
    access_token?: string;
    expires_at?: number;
    refresh_token?: string;
    error?: string;
  }
}

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      name?: string | null;
      email?: string | null;
      image?: string | null;
      firstName?: string | null;
    };
  }

  interface Profile {
    sub?: string;
    name?: string;
    email?: string;
    image?: string;
    family_name: string;
    given_name: string;
  }
}
