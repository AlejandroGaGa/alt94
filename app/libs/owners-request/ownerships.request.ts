
export default {
    getOwnerships: async (page: number, limit: number) => {
        const response = await fetch(`${process.env.BASE_URL}/api/ownerships?page=${page}&limit=${limit}`);
        if (!response.ok) {
            throw new Error('Failed to fetch ownerships');
        }
        const data = await response.json();
        return data;
    },
    getOwnershipsBy: async (tipo: string, ciudad: string) => {
       
        const response = await fetch(`${process.env.BASE_URL}/api/ownerships/by?type=${tipo}&city=${ciudad}`);
        if (!response.ok) {
            throw new Error('Failed to fetch ownerships');
        }
        const data = await response.json();
        return data;
    },
    getRecommendedOwnerships: async (type: string, city: string, price: string, useVector: boolean, limit: number) => {
        const response = await fetch(`${process.env.BASE_URL}/api/ownerships/recommended?type=${type}&city=${city}&price=${price}&useVector=${useVector}&limit=${limit}`);
        if (!response.ok) {
            throw new Error('Failed to fetch recommended ownerships');
        }
        const data = await response.json();
        return data;
    }
};
