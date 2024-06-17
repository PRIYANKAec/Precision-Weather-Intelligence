import axios from "axios";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
    try{
        const apiKey = process.env.OPENWEATHERMAP_API_KEY;
        const lat = 40.4165;
        const lon = -3.7026;
        
        const url = `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${apiKey}`

        const res = await axios.get(url);

        return NextResponse.json(res.data);
    } catch(error) {
        console.log("Error in getting pollution data", error);
        return NextResponse.json({error});
    }
}
