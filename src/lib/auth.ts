import { betterAuth, boolean } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { jwt } from "better-auth/plugins";

const client = new MongoClient(process.env.MONGODB_URL as string);
const db = client.db("StayFinder");

export const auth = betterAuth({
    database: mongodbAdapter(db, {
        client
    }),
    emailAndPassword: { 
        enabled: true, 
    },
    user: {
       additionalFields: {
          role: {
              type: "string",
              defaultValue: "customer"
            },
          plan: {
              type: "string",
              defaultValue: "free"
            },
          isBlock: {
              type: "boolean",
              defaultValue: false
            },
        }
    },
    socialProviders: {
        google: { 
            clientId: process.env.GOOGLE_CLIENT_ID as string, 
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string, 
        }, 
    },
    session:{
        cookieCache: {
            enabled: false,
            strategy: "jwt",
            maxAge: 60 * 60* 24 * 7
        }
    },
    plugins: [
        jwt(), 
    ]
});