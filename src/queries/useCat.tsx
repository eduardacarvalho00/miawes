import { useQuery } from '@tanstack/react-query';
import { getImgCats } from '../api/imgCats';

export const useCats = () => {
  return useQuery(
    ['imgCats'],
    async () => {
      const imgCats = await getImgCats();

      return imgCats;
    },
  );
};
