import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { PageNotFoundComponent } from "./components/page-not-found.component";
import { PageNOtFoundRoutingModule } from "./page-not-found-routing.module";

@NgModule({
    declarations: [
        PageNotFoundComponent
    ],
    imports: [CommonModule,PageNOtFoundRoutingModule
    ]
})

export class PageNotFoundModule {

}