var dojoConfig = {
  baseUrl: '/javascripts',
  packages: [
    {
      name: 'dojo',
      location: 'dojo-release-1.7.2/dojo'
    },
    {
      name: 'dojox',
      location: 'dojo-release-1.7.2/dojox'
    },
    {
      name: 'app',
      location: 'app',
      main: 'main'
    }
  ],
  deps: ['app'],
  async: true
};