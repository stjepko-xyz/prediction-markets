const getEvents = async () => {
  try {
    /// Fetch events with nested markets included
    const response = await fetch(
      `${process.env.DFLOW_API_BASE_URL}/api/v1/events?withNestedMarkets=true&limit=50`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch events");
    }

    const data = await response.json();

    return data?.events;
  } catch (error) {
    console.error("Error fetching events:", error);
    return [];
  }
};

export { getEvents };
