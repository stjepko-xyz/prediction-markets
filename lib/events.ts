import { Event, Events } from "./types";

const EVENTS_PER_PAGE = 20;

const getEvents = async (cursor: number = 0): Promise<Events> => {
  try {
    // Fetch events with nested markets included
    const response = await fetch(
      `${process.env.DFLOW_API_BASE_URL}/api/v1/events?withNestedMarkets=true&status=active&sort=volume&limit=${EVENTS_PER_PAGE}&cursor=${cursor}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        next: {
          revalidate: 60,
        },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch events");
    }

    const data = await response.json();

    return {
      events: data?.events ?? [],
      cursor: data?.cursor ?? 0,
    };
  } catch (error) {
    console.error("Error fetching events:", error);
    return { events: [], cursor: 0 };
  }
};

const getEventById = async (
  id: string,
  withNestedMarkets: boolean = false
): Promise<Event | null> => {
  try {
    // Fetch single event by id (ticker) with nested markets included
    const response = await fetch(
      `${process.env.DFLOW_API_BASE_URL}/api/v1/event/${id}?withNestedMarkets=${withNestedMarkets}`,
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

    const data: Event = await response.json();

    return data;
  } catch (error) {
    console.error("Error fetching events:", error);
    return null;
  }
};

export { getEvents, getEventById };
