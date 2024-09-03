import useData from './useData';

export type Genre = {
  id: number;
  name: string;
};

function useGenres() {
  return useData<Genre>('/genres');
}

export default useGenres;
