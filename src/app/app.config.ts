import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),
    provideHttpClient(), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"frstprojectmkt","appId":"1:891388999542:web:d3866373ba591ee330ac57","storageBucket":"frstprojectmkt.appspot.com","apiKey":"AIzaSyC3ifEhqNFbgdJPisbgQ-l1yFPhQZfBW0w","authDomain":"frstprojectmkt.firebaseapp.com","messagingSenderId":"891388999542","measurementId":"G-FX21GM47P2"}))), importProvidersFrom(provideFirestore(() => getFirestore()))
  ]

};
