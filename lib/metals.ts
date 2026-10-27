const OZ_G = 31.1035;
const TOLA_G = 11.6638;

// Calibrate these so output matches the FENEGOSIDA board (duty + dealer margin)
const GOLD_PREMIUM = 1.0;
const SILVER_PREMIUM = 1.0;

async function getJson(url: string, revalidate: number) {
  const res = await fetch(url, { next: { revalidate } });
  if (!res.ok) throw new Error(`Failed: ${url} (${res.status})`);
  return res.json();
}

export async function getMetalRates() {
  const [gold, silver, fx] = await Promise.all([
    getJson("https://api.gold-api.com/price/XAU", 300),
    getJson("https://api.gold-api.com/price/XAG", 300),
    getJson("https://open.er-api.com/v6/latest/USD", 3600),
  ]);

  const npr: number = fx.rates.NPR;
  const goldGram = (gold.price / OZ_G) * npr * GOLD_PREMIUM;
  const silverGram = (silver.price / OZ_G) * npr * SILVER_PREMIUM;

  return {
    updatedAt: new Date().toISOString(),
    usdNpr: npr,
    goldPerTola: goldGram * TOLA_G,
    silverPerTola: silverGram * TOLA_G,
    goldPer10g: goldGram * 10,
    silverPer10g: silverGram * 10,
  };
}
