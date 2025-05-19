"use client";
import { firstTopics, secondTopics } from "./lib/util";
import { useRouter } from "next/navigation";

export default function Home() {
    const router = useRouter();

    const handleConfirmClick = (id: string) => {
        const result = confirm(`Are you sure you want to take the ${id} test?`);
        if (result) {
            router.push(`/test/${id}`);
        } else {
            alert(`You have cancelled the ${id} test`);
        }
    };

    return (
        <main className='w-full min-h-screen flex flex-col items-center justify-center'>
            <h2 className='text-4xl font-bold text-blue-600'>Take Tests</h2>
            <p className='text-lg text-gray-500 mb-5'>
                Select a topic, take tests and get your results instantly
            </p>
            <div className='px-4'>
                <section className='w-full flex items-center space-x-5 mb-4'>
                    {firstTopics.map((topic) => (
                        <button
                            key={topic.id}
                            className={`bg-blue-500 text-white px-5 py-3 text-xl rounded-md`}
                            onClick={() => handleConfirmClick(topic.id)}
                        >
                            {topic.name}
                        </button>
                    ))}
                </section>

                <section className='w-full flex items-center space-x-5'>
                    {secondTopics.map((topic) => (
                        <button
                            key={topic.id}
                            className={`bg-blue-500 text-white px-5 py-3 text-xl rounded-md`}
                            onClick={() => handleConfirmClick(topic.id)}
                        >
                            {topic.name}
                        </button>
                    ))}
                </section>
            </div>
        </main>
    );
}
