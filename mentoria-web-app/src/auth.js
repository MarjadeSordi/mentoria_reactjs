export const isAuthenticated = () => {
  if (localStorage.getItem('isAuth') !== 'true') {
    return true;
  }
};
