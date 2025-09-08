import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { config } from './app/app.config.server';
import { AboutUs } from './components/about-us/about-us';


//const bootstrap = () => bootstrapApplication(App, config);
const bootstrap = () => bootstrapApplication(AboutUs, config);

export default bootstrap;
