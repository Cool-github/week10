import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { features } from 'process';
import { FeaturesComponent } from './features/features.component';

export const routes: Routes = [
    {
        path:'',
        component:HomeComponent,
        title:"Home"
    },
    {
        path:'profile',
        component:ProfileComponent,
        title:"Profile"
    },
    {
        path:'features',
        component:FeaturesComponent,
        title:"features"

    }
   
];
