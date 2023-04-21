export interface GetByLimitProps {
  limit: number
}

export interface GetByLimitResponse {
  data: Array<
  {
    breed: string;
    country: string;
    origin: string;
    coat: string;
    pattern: string;
  }
  >
}