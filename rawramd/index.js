// Configuration Object for Dojo Loader:
dojoConfig = {
  baseUrl: __dirname, // Where we will put our packages
  async: 1, // We want to make sure we are using the "modern" loader
  hasCache: {
    "host-node": 1, // Ensure we "force" the loader into NodeJS mode
    "dom": 0 // Ensure that none of the code assumes we have a DOM
  },
  // While it is possible to use config-tlmSiblingOfDojo to tell the
  // loader that your packages share the same root path as the loader,
  // this really isn't always a good idea and it is better to be
  // explicit about our package map.
  packages: [
    {
      name: "dojo",
      location: "public/js/dojo"
    },
    {
      name: "app",
      location: "public/js/app"
    },
    {
      name: "rawr",
      location: "public/js/rawr"
    },
    {
      name: 'meld',
      location: 'public/js',
      main: 'meld'
    },
    {
      name: 'when',
      location: 'public/js',
      main: 'when'
    },
    {
      name: 'nodefn',
      location: 'public/js/nodefn',
      main: 'function'
    },
    {
      name: 'server',
      location: './'
    }
  ],
  deps: [ 'server' ] // And array of modules to load on "boot"
};

// Now load the Dojo loader
require("./public/js/dojo/dojo.js");