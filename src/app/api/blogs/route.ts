import { NextRequest, NextResponse } from 'next/server';

async function GET(req: NextRequest, res: NextResponse) {
    const token = req.cookies.getAll();
    console.log('token >>', token);
}

export { GET };
