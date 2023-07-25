
export const convertVND = (x) =>  {
  return  x.toLocaleString('it-IT', {style : 'currency', currency : 'VND'});
}
