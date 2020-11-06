import cookies, { CookieAttributes } from 'js-cookie';
import psl, { ParsedDomain } from 'psl';

export const hasWindow = () => typeof window !== 'undefined';

export const isProd = () => process.env.NODE_ENV === 'production';

const DO_NOT_TRACK_KEY = 'do-not-track';
const VISITOR_ID = 'visitor-id';

export const setDoNotTrack = (doNotTrack: boolean): void => {
  if (!hasWindow()) {
    return;
  }

  const opts: CookieAttributes = {};
  const { domain } = psl.parse(window.location.hostname) as ParsedDomain;
  if (domain) {
    opts.domain = domain;
  }

  cookies.set(DO_NOT_TRACK_KEY, JSON.stringify(doNotTrack), opts);

  if (doNotTrack) {
    // signOut from firebase
    // signOut()
  } else {
    // signIn to firebase
    // signInAnonymously()
  }
};

export const getDoNotTrack = (): boolean => {
  if (!hasWindow()) {
    return;
  }
  const doNotTrackCookie = cookies.get(DO_NOT_TRACK_KEY);
  if (!doNotTrackCookie) {
    const browserDoNotTrackSetting = navigator.doNotTrack === '1';
    setDoNotTrack(browserDoNotTrackSetting);
    return browserDoNotTrackSetting;
  }
  return JSON.parse(doNotTrackCookie);
};

export const setUserId = (uid: string | undefined): void => {
  if (!hasWindow()) {
    return;
  }

  if (!uid) {
    cookies.remove(VISITOR_ID);
    return;
  }

  const opts: CookieAttributes = {};
  const { domain } = psl.parse(window.location.hostname) as ParsedDomain;
  if (domain) {
    opts.domain = domain;
  }

  cookies.set(VISITOR_ID, JSON.stringify(uid), opts);
};

export const getUserId = (): string | undefined => {
  if (!hasWindow()) {
    return;
  }
  return cookies.get(VISITOR_ID);
};
