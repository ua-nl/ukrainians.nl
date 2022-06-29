export const getImageURl = (image?: string) => {
  console.log(`${process.env.NEXT_PUBLIC_API_URL}${image}`);

  return `${process.env.NEXT_PUBLIC_API_URL}${image}`;
};
