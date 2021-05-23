import { AxiosRequestConfig, AxiosResponse } from 'axios'
import axios, { Axios } from 'axios-observable'
import { map } from 'rxjs/operators'


let instance: Axios | null = null

export interface RequestConfig extends AxiosRequestConfig {
  context?: {
    noBasicHeaders?: boolean
  },
  params: any,
  headers: any,
}

export const http = (): Axios => {
  if (!instance) {
    instance = axios.create({})
  }

  return instance
}

export const getHTTPData = <T>() => map((response: AxiosResponse<T>) => response.data)
