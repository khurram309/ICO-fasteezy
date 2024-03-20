export const getAuthCart = () => {
  const cartdata = localStorage.getItem('authCart');
  if (cartdata != null) {
    let acart = JSON.parse(cartdata);
    return acart;
  } else return null;
};

export const updateAuthCart = (datacart) => {
  localStorage.setItem('authCart', JSON.stringify(datacart));
  return true;
};