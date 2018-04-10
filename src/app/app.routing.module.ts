//import { EditarPostComponent } from './editar-post/editar-post.component';
import { PaginaComponent } from './pagina/pagina.component';
import { LinhaDoTempoComponent } from './linha-do-tempo/linha-do-tempo.component';
import {RouterModule, Routes} from '@angular/router';

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/',
        pathMatch: 'full'
    },
    {
        path: '',
        component: LinhaDoTempoComponent
    },
    {
        path: 'post',
        component: PaginaComponent
    }
//    {
//        path: 'post/:id',
//        component: EditarPostComponent
//    }
];

export const routing = RouterModule.forRoot(appRoutes);