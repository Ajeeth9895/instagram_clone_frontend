
export const isAuthenticated = () => {
    if (sessionStorage.getItem('token')) {
      return true;
    } else {
      return false;
    }
  };

  export const profilePic = () => {
    let pic = sessionStorage.getItem('photo')
    return pic
  };