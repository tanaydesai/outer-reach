import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export const getDomainData = (data, country, domainCode, normal=true) => {
  // suffixes = ["e-Twh", "elc-Twh", "e-3-%", "elc-3-%", "e-chng-%", "e-%", "e-use-pp-gdp-pc"]

  if (country) {
    return normal ? data.filter((d) => d.Country == country).map(({ Country, Year, ...rest }) => ({
      Country,
      Year,
      ...Object.fromEntries(
        Object.entries(rest)
          .filter(([key]) => key.includes(domainCode))
          .map(([key, value]) => [key.replace(new RegExp(`\\s*\\(?\\s*${domainCode}\\s*\\)?\\s*`), ""), value])
      )
    })) : data.filter((d) => d.Country == country)

  }
  else {
    return normal ? data.map(({ Country, Year, ...rest }) => ({
      Country,
      Year,
      ...Object.fromEntries(
        Object.entries(rest)
          .filter(([key]) => key.includes(domainCode))
          .map(([key, value]) => [key.replace(new RegExp(`\\s*\\(?\\s*${domainCode}\\s*\\)?\\s*`), ""), value])
      )
    })) : data
  }
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

export function sortData(data) {
  return data.sort((a, b) => {
    if (a.country < b.country) return -1;
    if (a.country > b.country) return 1;
    if (a.year < b.year) return -1;
    if (a.year > b.year) return 1;
    return 0;
  });
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