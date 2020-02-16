import XLSX from 'xlsx';
/* generate an array of column objects */
export const make_cols = refstr => {
  let s = []
  let o = [],
    C = XLSX.utils.decode_range(refstr).e.c + 1;
  for (var i = 0; i < C; ++i) o[i] = { name: XLSX.utils.encode_col(i), key: i  };
  
  console.log(o.length) ;
  console.log(toString(o.key)) ;

  return o;
};
