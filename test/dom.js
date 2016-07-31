import jsdom from 'jsdom';
import defaults from 'lodash.defaults';

const document = jsdom.jsdom('<!doctype html><html><body></body></html>');
const window = document.defaultView;
global.document = document;
global.window = window;
defaults(global, window);
