export const environment = {
  production: true,
  serviceWorker: false,
  baseHref: '/',
  language: {id: '3', name: 'English', tiny: 'en', full: 'en_US'},
  confirm: {
    email: '',
    password: ''
  },
  hosts: {
    'emirates-wealth.com': {
      mailTo: 'admin',
      apiUrl: 'https://api.emirates-wealth.com',
      pcUrl: ''
    },
    default: {
      mailTo: 'admin',
      apiUrl: 'https://api.test.com',
      pcUrl: ''
    }
  }
};
