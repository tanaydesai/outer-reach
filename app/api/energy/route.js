import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

export async function GET() {
  const mixFile = path.join(process.cwd(), 'public', 'data', 'mix.json');
  const capacityFile = path.join(process.cwd(), 'public', 'data', 'capacity.json');
  const countriesFile = path.join(process.cwd(), 'public', 'data', 'countries.json');

  const nuclearFile1 = path.join(process.cwd(), 'public', 'data', 'nuclear_year.json');
  const nuclearFile2 = path.join(process.cwd(), 'public', 'data', 'nuclear.json'); 

  const mix = JSON.parse(await fs.readFile(mixFile, 'utf8'));
  const capacity = JSON.parse(await fs.readFile(capacityFile, 'utf8'))
  const countries = JSON.parse(await fs.readFile(countriesFile, 'utf8'))

  const nuclearYear = JSON.parse(await fs.readFile(nuclearFile1, 'utf8'));
  const nuclearReactors = JSON.parse(await fs.readFile(nuclearFile2, 'utf8'));

  return NextResponse.json({ mix, countries, capacity, nuclearYear, nuclearReactors });  
}