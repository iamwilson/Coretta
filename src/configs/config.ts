// date format
export const DATE_FORMAT = 'YYYY-MM-DD';

// endpoints
export const OFFLINE_URL = '';
export const ONLINE_URL = '';
export const TEST_URL = 'http://localhost:50523';

// language
export const ENG = 'en';
export const SWE = 'sw';

// mode
export const OFFLINE = 'offline';
export const ONLINE = 'online';
export const TEST = 'test';

export const config = {
    dateFormat: DATE_FORMAT,
    delay: 250,
    domain: '',
    language: ENG,
    mode: ONLINE,
    rowCount: 1000
};

config.domain = config.mode === ONLINE ? ONLINE_URL : (config.mode === TEST ? TEST_URL : OFFLINE_URL);
