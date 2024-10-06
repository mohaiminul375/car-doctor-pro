import { connectDB } from "@/lib/connectDB";
import { NextRequest, NextResponse } from 'next/server';
import { Collection } from 'mongodb';

interface User {
    name: string;
    email: string;
    password: string;
}

export const POST = async (request: NextRequest) => {
    try {
        const newUser: User = await request.json();
        const db = await connectDB();
        const userCollection: Collection<User> = db.collection('users');

        // Check if user already exists
        const existed = await userCollection.findOne({ email: newUser.email });
        if (existed) {
            return NextResponse.json({ message: 'User Existed' }, { status: 303 });
        }

        // Insert new user
        const res = await userCollection.insertOne(newUser);
        return NextResponse.json({ message: 'User Created' }, { status: 200 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: 'Something went wrong', error }, { status: 500 });
    }
};
