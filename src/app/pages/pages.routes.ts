import { RouterModule, Routes } from "../../../node_modules/@angular/router";
import { Graficas1Component } from "./graficas1/graficas1.component";
import { ProgressComponent } from "./progress/progress.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { PagesComponent } from "./pages.component";
import { AccoutSettingsComponent } from "./accout-settings/accout-settings.component";
import { PromesasComponent } from "./promesas/promesas.component";

const pagesRoutes: Routes = [

    {
        path: '', component: PagesComponent,
        children: [
        { path: 'dashboard', component: DashboardComponent },
        { path: 'progress', component: ProgressComponent},
        { path: 'account-settings', component: AccoutSettingsComponent },
        { path: 'graficas1', component: Graficas1Component },  
        { path: 'promesas', component: PromesasComponent },
        { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
        ]
    }
];

export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);