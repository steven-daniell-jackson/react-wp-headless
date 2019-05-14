// Strip HTML Elements from Content
export const stripHtml = param => {
  return param.replace(/<[^>]+>/g, '');
};
