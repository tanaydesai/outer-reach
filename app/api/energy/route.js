import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

export async function GET() {
    const filePath = path.join(process.cwd(), 'public', 'data', 'energy-consumption-by-source-country.json');
    const filePath2 = path.join(process.cwd(), 'public', 'data', 'annual-change-energy-consumption.json');
    const filePath3 = path.join(process.cwd(), 'public', 'data', 'annual-change-electricity-renewable-nuclear-ff.json');
    const filePath4 = path.join(process.cwd(), 'public', 'data', 'energy-use-pp-gdp-pc.json');
    const filePath5 = path.join(process.cwd(), 'public', 'data', 'installed-capacity.json');
    const filePath6 = path.join(process.cwd(), 'public', 'data', 'electricy-production-by-source-country.json');
    
    const energyMixData = JSON.parse(await fs.readFile(filePath, 'utf8')).sort((a, b) => a.Year - b.Year)
    const annualChange = JSON.parse(await fs.readFile(filePath2, 'utf8')).sort((a, b) => a.Year - b.Year)
    const annualChange2 = JSON.parse(await fs.readFile(filePath3, 'utf8')).sort((a, b) => a.Year - b.Year)
    const energyGDPPC = JSON.parse(await fs.readFile(filePath4, 'utf8')).sort((a, b) => a.Year - b.Year)
    const energyCapacities = JSON.parse(await fs.readFile(filePath5, 'utf8')).sort((a, b) => a.Year - b.Year)
    const electricityMixData = JSON.parse(await fs.readFile(filePath6, 'utf8')).sort((a, b) => a.Year - b.Year)
    
    const countries = [...new Set(energyMixData.map((item) => item.Country))];
  
    return NextResponse.json({ energyMixData, countries, annualChange, annualChange2, energyGDPPC, energyCapacities, electricityMixData });
    
}
