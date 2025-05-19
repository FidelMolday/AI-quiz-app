"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function Score() {
    const searchParams = useSearchParams();
    const score = searchParams.get("score");

    if (!score) {
        return (
            <main className='p-4 min-h-screen w-full flex flex-col items-center justify-center'>
                <h2 className='text-2xl font-semibold'>Score</h2>
                <Link href='/' className='bg-blue-500 p-4 text-blue-50 rounded '>
                    Go Home
                </Link>
            </main>
        );
    }

    return (
        <main className='p-4 min-h-screen w-full flex flex-col items-center justify-center'>
            <h2 className='text-2xl font-semibold'>Score</h2>

            <p className='text-lg text-center mb-4'>
                You got {score} out of 10 questions correct.
            </p>

            <h1 className='font-extrabold text-5xl text-blue-500 mb-3'>
                {Number(score) * 10}%
            </h1>

            <Link href='/' className='bg-blue-500 p-4 text-blue-50 rounded '>
                Go Home
            </Link>
        </main>
    );
}
