export async function getForexRates() {
  try {
    // Fetching from Nepal Rastra Bank official JSON API endpoint
    const res = await fetch("https://www.nrb.org.np/api/forex/v1/rates", {
      next: { revalidate: 3600 }, // Revalidate every 1 hour
    });

    if (!res.ok) throw new Error("Failed to fetch forex data");

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching forex rates:", error);
    return null;
  }
}
