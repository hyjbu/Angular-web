import { Routes } from '@angular/router';
import { ButtonComponent } from './components/page/button-component/button';
import { SelectComponent } from './components/page/select-component/select';
import { InputComponent } from './components/page/input-component/input';
import { MarginComponent } from './components/page/margin-component/margin';
import { PaddingComponent } from './components/page/padding-component/padding';
import { DisplayComponent } from './components/page/display-component/display';
import { PositionComponent } from './components/page/position-component/position';

export const routes: Routes = [
    {path: '', component: ButtonComponent},
    {path: 'select', component: SelectComponent},
    {path: 'input', component: InputComponent},
    {path: 'margin', component: MarginComponent},
    {path: 'padding', component: PaddingComponent},
    {path: 'display', component: DisplayComponent},
    {path: 'position', component: PositionComponent}
];
