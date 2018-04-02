import {Routes} from '@angular/router'

import {HomeComponent} from './home/home.component'

import {AboutComponent} from './about/about.component'

import {RestaurantsComponent} from './restaurants/restaurants.component'

import {CasaComponent} from './casa/casa.component'


export const ROUTES: Routes =[

    {path: '', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'restaurants', component: RestaurantsComponent},
    {path: 'casa', component: CasaComponent}
]
