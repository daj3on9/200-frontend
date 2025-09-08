import { jwtDecode } from 'jwt-decode';

interface JwtPayload {
  nickname?: string;
  email?: string;
  exp?: number;
}

export const decodeJwt = (accessToken: string | undefined) => {
  if (!accessToken) {
    console.warn('[디코딩 실패] : accessToken 없음');
    return null;
  }

  try {
    const decoded = jwtDecode<JwtPayload>(accessToken);

    const userData = {
      nickname: decoded.nickname ?? '',
      email: decoded.email ?? '',
    };

    // console.log('[디코딩 토큰] : ', decoded);

    return userData;
  } catch (error) {
    console.error('[디코딩 에러] : ', error);
    return null;
  }
};
