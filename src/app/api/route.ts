import { NextRequest, NextResponse } from "next/server";
import sampleQuestions from "@/app/lib/sample.json"
import OpenAI from "openai";

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: NextRequest) {
    //👇🏻 User's selected topic
    const { topic } = await req.json();

    //👇🏻 AI prompt
        const prompt = `Generate 10 distinct questions on ${topic} and ensure they are in JSON format containing an id, topic which is ${topic}, a question attribute containing the question, an options array of 3 options, and an answer property. Please ensure that the options array is shuffled to ensure that the answer does not retain a single position.
    - Please don't make the answers too obvious and lengthy.
    - Ensure the questions are unique and not repetitive.
    - The questions should not be too simple but intermediate level.
    - Return only the JSON object containing the questions.
    You can use this as a sample: ${JSON.stringify(sampleQuestions)}
    `;

    //👇🏻 Generates the questions
    const completion = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
            {
                role: "user",
                content: prompt,
            },
        ],
    });

  //👇🏻 Questions result
    const aiQuestions = completion.choices[0].message.content;
    const questions = JSON.parse(aiQuestions!);

    if (questions.questions.length < 10) {
        return NextResponse.json(
            { message: "Error generating questions", questions },
            { status: 400 }
        );
    }
    //👇🏻 Returns the list of questions
    return NextResponse.json(
        { message: "Fetch complete", questions: questions.questions },
        { status: 200 }
    );
}
