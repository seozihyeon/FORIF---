import { NextResponse } from "next/server";

interface HelloResponseDto{
    message: string
}

export async function GET(): Promise<NextResponse<HelloResponseDto>> {
    
    //service 
    return NextResponse.json({
        message: "Hello!"
    })
}
