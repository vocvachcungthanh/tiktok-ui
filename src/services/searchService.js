import * as axios from '~/utils/axios';

export const getSearch = async (params) => {
    try {
        const res = await axios.get('users/search', {
            params: { ...params },
        });

        return res.data;
    } catch (error) {
        console.log(error);
    }
};
