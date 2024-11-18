import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export const getDomainData = (data, country, domainCode, year) => {
  // suffixes = ["e-TWh", "elc-TWh", "e-3-%", "elc-3-%", "e-chng-%", "e-%", "e-use-pp-gdp-pc"]

  data = country ? data.filter((d) => d.Country == country) : data
  data = year ? data.filter((d) => d.Year == year) : data
  data = domainCode ? data.map(({ Country, Year, ...rest }) => ({
    Country,
    Year,
    ...Object.fromEntries(
      Object.entries(rest)
        .filter(([key]) => key.includes(domainCode))
        .map(([key, value]) => [key.replace(new RegExp(`\\s*\\(?\\s*${domainCode}\\s*\\)?\\s*`), ""), value])
    )
  })) : data

  return data
}

export const removeNAN = (data) => {
  return data.filter(item => 
    Object.values(item).every(value => value !== null && value !== undefined && value !== "")
  )
}

export function saveAsJSON(data, name, fs) {
  const jsonData = JSON.stringify(data, null, 2);
  fs.writeFile(name, jsonData, 'utf-8');
}

export function sortData(data, type="alpha", value) {

  data = data.filter(item => {
    const val = item[value];
    return val !== undefined && val !== "" && !Number.isNaN(val);
  })

  return type === "asc" ? data.sort((a, b) => a[value] - b[value]) : type === "desc" ? data.sort((a, b) => b[value] - a[value]) : type === "alpha" ? data.sort((a, b) => {
    if (a.Country < b.Country) return -1;
    if (a.Country > b.Country) return 1;
    if (a.Year < b.Year) return -1;
    if (a.Year > b.Year) return 1;
    return 0;
  }) : data

}

export function mergeDatasets(datasets, countries, suffixes) {
  const merged = {};

  datasets.forEach((dataset, index) => {
    dataset.forEach(entry => {
      if (!countries.includes(entry.Country)) return;

      const key = `${entry.Country}-${entry.Year}`;
      if (!merged[key]) merged[key] = { Country: entry.Country, Year: entry.Year };

      Object.keys(entry).forEach(k => {
        if (k !== "Country" && k !== "Year" && !k.includes("Code") && !k.includes("Continent")) {
          merged[key][`${k}${suffixes[index]}`] = entry[k];
        }
      });
    });
  });

  return Object.values(merged);
}

export const leaderboardDomains = {
  "Energy consumption": {"Code": "e-TWh", "Unit": "TWh", "Keys": []},
  "Electricity production": {"Code": "elc-TWh", "Unit": "TWh", "Keys": []},
  "Energy use per person": {"Code": "e-use-pp-gdp-pc", "Unit": "KWh", "Keys": ["GDP per capita, PPP (constant 2017 international $)"]},
  "GDP per capita" : {"Code": "e-use-pp-gdp-pc", "Unit": "$", "Keys": ["Primary energy consumption per capita (kWh/person)"]},
  "Renewables %": {"Code": "elc-3-%", "Unit": "%", "Keys": ["Nuclear", "Fossil fuels"]},
  "Solar %": {"Code": "e-%", "Unit": "%", "Keys": ["Oil", "Gas", "Coal", "Nuclear", "Wind", "Hydro", "Other renewables"]},
  "Wind %": {"Code": "e-%", "Unit": "%", "Keys": ["Oil", "Gas", "Coal", "Nuclear", "Solar", "Hydro", "Other renewables"]},
  "Nuclear %": {"Code": "e-%", "Unit": "%", "Keys": ["Oil", "Gas", "Coal", "Solar", "Wind", "Hydro", "Other renewables"]},
  "Hydro %": {"Code": "e-%", "Unit": "%", "Keys": ["Oil", "Gas", "Coal", "Nuclear", "Wind", "Solar", "Other renewables"]},
  "Solar capacity" : {"Code": false, "Unit": "GW", "Keys": []},
  "Wind capacity" : {"Code": false, "Unit": "GW", "Keys": []},
  "Nuclear capacity" : {"Code": false, "Unit": "GW", "Keys": []},
  "Hydro capacity" : {"Code": false, "Unit": "GW", "Keys": []},
  "Bioenergy capacity" : {"Code": false, "Unit": "GW", "Keys": []},
}