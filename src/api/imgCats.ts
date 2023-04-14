import { axiosInstance } from './axiosInstance';

interface GetImgCatsProps{
  url: 'string';
}

export async function getImgCats() {
  const { data } = await axiosInstance.get<GetImgCatsProps>('/cat?json=true');

  return data;
}
