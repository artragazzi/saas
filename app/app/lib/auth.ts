import NextAuth from "next-auth";
import {FirestoreAdapter} from "@auth/firebase-adapter";
import Google  from "next-auth/providers/google";
import {firebaseCert} from './firebase';
const {auth, handlers, signIn, signOut} = NextAuth({
    adapter: FirestoreAdapter({
        credential: firebaseCert
    }),
    providers:[Google],
})