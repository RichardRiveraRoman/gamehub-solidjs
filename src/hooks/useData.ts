import { createEffect, createSignal } from 'solid-js';
import apiClient from '../services/apiClient';
import { type AxiosRequestConfig, CanceledError } from 'axios';

interface FetchResponse<T> {
  count: number;
  results: T[];
}

function useData<T>(
  endpoint: string,
  requestConfig?: () => AxiosRequestConfig,
  deps?: unknown[],
) {
  const [data, setData] = createSignal<T[]>([]);
  const [error, setError] = createSignal('');
  const [isLoading, setLoading] = createSignal(false);

  createEffect(
    () => {
      const controller = new AbortController();

      setLoading(true);
      apiClient
        .get<FetchResponse<T>>(endpoint, {
          signal: controller.signal,
          ...(requestConfig?.()),
        })
        .then((res) => setData(res.data.results))
        .catch((err) => {
          if (err instanceof CanceledError) return;
          setError(err.message);
        })
        .finally(() => setLoading(false));

      return () => controller.abort();
    },
    deps ? [...deps] : [],
  );

  return { data, error, isLoading };
}

export default useData;
