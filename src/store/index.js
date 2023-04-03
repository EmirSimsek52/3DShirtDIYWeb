import { proxy } from 'valtio';

const state = proxy({
  intro: true,
  color: '#2026CD',
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: './lightning.png',
  fullDecal: './lightning.png',

});

export default state;