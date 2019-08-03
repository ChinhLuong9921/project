const csv_to_array = (data, delimiter = ',', omitFirstRow = false) =>
  data
    .slice(omitFirstRow ? data.indexOf('\n') + 1 : 0)
    .split('\n')
    .map(v => v.split(delimiter));

const csv_to_json = (data, delimiter = ',') => {
  const titles = data.slice(0, data.indexOf('\n')).split(delimiter);
  return data
           .slice(data.indexOf('\n') + 1)
           .split('\n')
           .map(v => {
             const values = v.split(delimiter);
             return titles.reduce((obj, titles, idx) => ((obj[titles] = values[idx]), obj), {});
           });
};