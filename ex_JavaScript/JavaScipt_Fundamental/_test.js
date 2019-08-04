const json_to_csv = (arr, columns, delimiter = ',') => [
  columns.join(delimiter),
  ...arr.map(obj => 
    columns.reduce(
      (acc, key) => `${acc}${!acc.length ? '' : delimiter}'${!obj[key] ? '' : obj[key]}'`,
      ''
    ))
].join('\n');