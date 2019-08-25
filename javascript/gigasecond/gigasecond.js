const gigasecond_in_ms = 1e12;
export const gigasecond = date => new Date(date.getTime() + gigasecond_in_ms);