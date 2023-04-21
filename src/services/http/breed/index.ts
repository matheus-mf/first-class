import { THttpClient } from "../api/types";
import { GetByLimitProps,GetByLimitResponse } from "./types";

export default (httpClient: THttpClient) => ({
  getByLimit: async ({ limit }:GetByLimitProps) => {
    const { data } = await httpClient.get<GetByLimitResponse>('breeds', {
      params: {
        limit
      }
    })

    return { data: data.data }
  }
})