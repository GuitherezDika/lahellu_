import { useEffect, useState } from 'react';
import { getTrailer } from '../api/videoApi';

type propsType = {
    page: number;
    limit: number;
}

export const useFetchData = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [number, setNumber] = useState<number>(1);

    const fetchData = async ({page, limit}: propsType) => {
        let api_key = 'f08d03b28302f2a0c858733c5b88060c';
        try {
            const tempData = await getTrailer({api_key});
            const start = (page - 1) * limit;
            const end = start + limit;
            const paginatedResults = tempData.slice(start, end);
            let newData2 = paginatedResults.filter(
                video => !data.some(existingVideo => existingVideo.id == video.id)
            );

            let newData = data.concat(newData2);
            setData(newData);
        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData({page: number, limit: 10});
    }, []);

    return { data, loading, error, number, setNumber, fetchData };
};
