import { AxiosInstance, AxiosResponse } from 'axios';

export type THttpClient = AxiosInstance;
export type IResponse<TData, TConfig = unknown> = AxiosResponse<TData, TConfig>
