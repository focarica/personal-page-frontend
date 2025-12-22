import { Routes } from '@angular/router';
import { HomePageComponent } from './features/home/home.component';
import { PostPageComponent } from './features/post/post.component';
import { FindMeComponent } from './features/find-me/find-me.component';
import { AboutPageComponent } from './features/about/about.component';
import { CurriculumPageComponent } from './features/cv/curriculum.component';

export const routes: Routes = [
    {path: '', component: HomePageComponent},
    {path: 'posts/:id', component: PostPageComponent},
    {path: 'curriculum', component: CurriculumPageComponent},
    {path: 'find-me', component: FindMeComponent},
    {path: 'about', component: AboutPageComponent}
];
