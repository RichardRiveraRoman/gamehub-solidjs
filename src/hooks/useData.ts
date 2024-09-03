import { createEffect, createSignal } from 'solid-js';
import apiClient from '../services/apiClient';
import { CanceledError } from 'axios';

interface FetchResponse<T> {
  count: number;
  results: T[];
}

function useData<T>(endpoint: string) {
  const [data, setData] = createSignal<T[]>([]);
  const [error, setError] = createSignal('');
  const [isLoading, setLoading] = createSignal(false);

  createEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    apiClient
      .get<FetchResponse<T>>(endpoint, { signal: controller.signal })
      .then((res) => setData(res.data.results))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      })
      .finally(() => setLoading(false));

    return () => controller.abort();
  }, [data()]);

  return { data, error, isLoading };
}

export default useData;
