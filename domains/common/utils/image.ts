export const getImageUrl = (path: string | null | undefined) => {
  if (!path) return '/fallback.png';
  const baseUrl = process.env.NEXT_PUBLIC_IMAGE_BASE_URL;
  return `${baseUrl}/${path}`;
};
