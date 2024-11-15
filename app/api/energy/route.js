import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

export async function GET() {
    const filePath = path.join(process.cwd(), 'public', 'data', 'energy-consumption-by-source-country.json');
    const filePath2 = path.join(process.cwd(), 'public', 'data', 'annual-change-energy-consumption.json');
    const filePath3 = path.join(process.cwd(), 'public', 'data', 'share-electricity-renewable-nuclear-ff.json');
    const filePath4 = path.join(process.cwd(), 'public', 'data', 'energy-use-pp-gdp-pc.json');
    const filePath5 = path.join(process.cwd(), 'public', 'data', 'installed-capacity.json');
    const filePath6 = path.join(process.cwd(), 'public', 'data', 'electricy-production-by-source-country.json');
    const filePath7 = path.join(process.cwd(), 'public', 'data', 'energy-consumption-by-source-country-share.json');
    const filePath8 = path.join(process.cwd(), 'public', 'data', 'share-energy-renewable-nuclear-ff.json');
    const filePath9 = path.join(process.cwd(), 'public', 'data', 'annual-capacity-additions.json');

    const energyMixData = JSON.parse(await fs.readFile(filePath, 'utf8')).sort((a, b) => a.Year - b.Year)
    const shareEnergyMix = JSON.parse(await fs.readFile(filePath7, 'utf8')).sort((a, b) => a.Year - b.Year)
    const electricityMixData = JSON.parse(await fs.readFile(filePath6, 'utf8')).sort((a, b) => a.Year - b.Year)
    const energyChange = JSON.parse(await fs.readFile(filePath2, 'utf8')).sort((a, b) => a.Year - b.Year)
    const electricity3Change = JSON.parse(await fs.readFile(filePath3, 'utf8')).sort((a, b) => a.Year - b.Year)
    const energyy3Change = JSON.parse(await fs.readFile(filePath8, 'utf8')).sort((a, b) => a.Year - b.Year)
    const energyCapacities = JSON.parse(await fs.readFile(filePath5, 'utf8')).sort((a, b) => a.Year - b.Year).map(({ "Fossil Fuels": _, ...rest }) => rest)
    const capaictyAdditions = JSON.parse(await fs.readFile(filePath9, 'utf8')).sort((a, b) => a.Year - b.Year).map(entry => {
        return Object.fromEntries(
          Object.entries(entry).map(([key, value]) => 
            (key === "Country" || key === "Year") ? [key, value] : [key, value / 1000]
          )
        );
      })
    const energyGDPPC = JSON.parse(await fs.readFile(filePath4, 'utf8')).sort((a, b) => a.Year - b.Year)
    
    // const countries = [...new Set(capaictyAdditions.map((item) => item.Country))];
    const findCommonCountries = (...arrays) => {
        const countries = arrays.map(arr => new Set(arr.map(item => item.Country)));
        return [...countries.reduce((acc, curr) => new Set([...acc].filter(country => curr.has(country))))];
      }

    const countries = findCommonCountries(energyMixData, energyChange, energyy3Change, electricity3Change, energyGDPPC, energyCapacities, electricityMixData, shareEnergyMix, capaictyAdditions)
  
    return NextResponse.json({ energyMixData, countries, energyChange, energyy3Change, electricity3Change, energyGDPPC, energyCapacities, electricityMixData, shareEnergyMix, capaictyAdditions });
    
}
