
export const getTopCripto = async () => {
  const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';
  const resp = await fetch(url);
  const respJson = await resp.json();
  return respJson.Data;
}

export const getCriptoPrecio = async ({criptomoneda, moneda}) => {
  const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;
  const resp = await fetch(url);
  const { DISPLAY } = await resp.json();
  return DISPLAY[criptomoneda][moneda];
}