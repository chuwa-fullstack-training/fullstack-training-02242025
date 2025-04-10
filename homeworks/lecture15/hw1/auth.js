export const fakeAuthProvider = {
    isAuthenticated: false,
    signin(callback) {
      fakeAuthProvider.isAuthenticated = true;
      setTimeout(callback, 300); 
    },
    signout(callback) {
      fakeAuthProvider.isAuthenticated = false;
      setTimeout(callback, 300);
    }
  };
  