const index = async () => {
  try {
    const res = await fetch("https://swapi.info/api/starships");
    if (!res.ok) {
      throw new Error("Failed to fetch starships.");
    }
    const data = await res.json();
    console.log("Data:", data);
    return data;
  } catch (err) {
    console.log(err);
  }
};

export { index };
