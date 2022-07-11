export const getImageURl = (image?: string) => {
  return `${process.env.NEXT_PUBLIC_API_URL}${image}`;
};
