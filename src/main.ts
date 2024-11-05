import { bootstrapApplication } from '@angular/platform-browser';
import { provideAuth0 } from '@auth0/auth0-angular';
import { AppComponent } from './app/component/app/app.component';


bootstrapApplication(AppComponent, {
  providers: [
    provideAuth0({
      domain: 'dev-c-czgryl.us.auth0.com',
      clientId: '2mWrkgbZQP3GWrSCV2DCjUlmX8f5W8zZ',
      authorizationParams: {
        redirect_uri: window.location.origin
      }
    }),
  ]
});
