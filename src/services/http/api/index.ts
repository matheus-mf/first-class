import axios from 'axios';

import { THttpClient } from './types';

const httpClient: THttpClient = axios.create({
  baseURL: 'https://catfact.ninja',
});

export { httpClient }
