const config = {
  DEFAULTLENGTH: 500,
  DEFAULTARRAY: null,
  HTTPENDPOINT: 'http://theAPI.link',
  WSENDPOINT: 'ws://theAPI.link/socket',
  ID: 0 //preassigned group ids
}

config.DEFAULTARRAY = new Uint8ClampedArray(Math.pow(config.DEFAULTLENGTH, 2) * 4).fill('33')
