import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

export async function GET() {
  const mixFile = path.join(process.cwd(), 'public', 'data', 'mix.json');
  const capacityFile = path.join(process.cwd(), 'public', 'data', 'capacity.json');
  const countriesFile = path.join(process.cwd(), 'public', 'data', 'countries.json');

  const mix = JSON.parse(await fs.readFile(mixFile, 'utf8'));
  const capacity = JSON.parse(await fs.readFile(capacityFile, 'utf8'))
  const countries = JSON.parse(await fs.readFile(countriesFile, 'utf8'))

  return NextResponse.json({ mix, countries, capacity });  
}