export const idrFormat = (money) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  }).format(money);
};

export const getMoviePrice = (rate) => {
  if (rate >= 1 && rate < 3) {
    return 3500;
  } else if (rate >= 3 && rate < 6) {
    return 8250;
  } else if (rate >= 6 && rate < 8) {
    return 16350;
  } else if (rate >= 8 && rate <= 10) {
    return 21250;
  } /* else which is no rated yet set lower price */ else {
    return 3500;
  }
};
