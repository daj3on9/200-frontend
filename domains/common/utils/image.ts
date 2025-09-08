export const getImageUrl = (path: string | null | undefined) => {
  if (!path) return '/fallback.png';
  const baseUrl = process.env.NEXT_PUBLIC_IMAGE_BASE_URL;
  if (!baseUrl) {
    console.warn('NEXT_PUBLIC_IMAGE_URL is not set');
    return '/fallback.png';
  }
  return `${baseUrl}/${path}`;
};
