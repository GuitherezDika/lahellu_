import { paramTrailer, trailerResponse } from '../types';
import axiosInstance from './axiosInstance';

interface ApiRespons {
    id: number;
    results: trailerResponse[];
}

export const getTrailer = async (params: paramTrailer): Promise<trailerResponse[]> => {
    try {
        const response = await axiosInstance.get<ApiRespons>('movie/533535/videos', {params});
        return response.data.results;
    } catch (error: any) {
        throw new Error(`Failed to fetch data: ${error}`);
    }
};
