export const getTokenizedRoute = (path: string) => {
    const authToken = localStorage.getItem('authToken');
    return `${path}?token=${authToken}`;
  };