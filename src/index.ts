import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [CommonModule],
})
export class NgxConfirmationModule {
    static forRoot(): any {
        return {
            ngModule: NgxConfirmationModule,
        };
    }
}
