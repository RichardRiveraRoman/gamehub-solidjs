import useData from "./useData";
import type { Platform } from "./useGames";

function usePlatforms() {
  return useData<Platform>("/platforms");
}

export default usePlatforms;
