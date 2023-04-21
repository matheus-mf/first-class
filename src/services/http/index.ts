import { httpClient } from "./api";
import BreedService from "./breed"

export default {
  breed: BreedService(httpClient)
}