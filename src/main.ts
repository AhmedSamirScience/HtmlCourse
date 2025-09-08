import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { AboutUs } from './components/about-us/about-us';

// bootstrapApplication(App, appConfig)
bootstrapApplication(AboutUs, appConfig)
  .catch((err) => console.error(err));
