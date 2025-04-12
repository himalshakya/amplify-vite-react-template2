type CSVOptions = {
    delimiter?: string;
    skipEmptyLines?: boolean;
  };
  
  export function parseCSV(csv: string, options: CSVOptions = {}): Record<string, string>[] {
    const delimiter = options.delimiter || ',';
    const skipEmptyLines = options.skipEmptyLines ?? true;
  
    const lines = csv.split('\n');
    const headers = lines[0].split(delimiter).map(h => h.trim());
  
    const rows: Record<string, string>[] = [];
  
    for (let i = 1; i < lines.length; i++) {
      const line = lines[i].trim();
      if (skipEmptyLines && line === '') continue;
  
      const values = line.split(delimiter).map(value => value.trim());
      const row: Record<string, string> = {};
  
      headers.forEach((header, index) => {
        row[header] = values[index] || '';
      });
  
      rows.push(row);
    }
  
    return rows;
  }

export const handler = async (event: unknown) => {
    return "Hello from my first function! " + JSON.stringify(event);
  };