
export default {
    getOwnerships: async () => {
        const response = await fetch(`${process.env.BASE_URL}/api/ownerships`);
        if (!response.ok) {
            throw new Error('Failed to fetch ownerships');
        }
        const data = await response.json();
        return data;
    }
};
