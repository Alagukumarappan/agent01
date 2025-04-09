import {NgModule} from '@angular/core';
import {AccordionModule} from 'primeng/accordion';
import {MenubarModule} from 'primeng/menubar';
import {DropdownModule} from 'primeng/dropdown';
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {SplitterModule} from 'primeng/splitter';
import {TableModule} from 'primeng/table';
import {SkeletonModule} from 'primeng/skeleton';
import {SplitButtonModule} from 'primeng/splitbutton';
import {MessageService} from 'primeng/api';
import {PanelModule} from 'primeng/panel';
import {ToastModule} from 'primeng/toast';
import {SpeedDialModule} from 'primeng/speeddial';
import {DividerModule} from 'primeng/divider';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService} from 'primeng/api';
import {ScrollTopModule} from 'primeng/scrolltop';
import {AvatarModule} from 'primeng/avatar';
import {AvatarGroupModule} from 'primeng/avatargroup';
import {ChipModule} from 'primeng/chip';
import {FieldsetModule} from 'primeng/fieldset';
import {ConfirmPopupModule} from 'primeng/confirmpopup';
import {DynamicDialogModule} from 'primeng/dynamicdialog';
import {SidebarModule} from 'primeng/sidebar';
import {OverlayPanelModule} from 'primeng/overlaypanel';
import {RippleModule} from 'primeng/ripple';
import {ProgressBarModule} from 'primeng/progressbar';
import {InputTextModule} from 'primeng/inputtext';
import {ChartModule} from 'primeng/chart';
import {MultiSelectModule} from 'primeng/multiselect';
import {CheckboxModule} from 'primeng/checkbox';
import {KnobModule} from "primeng/knob";
import {TooltipModule} from 'primeng/tooltip';
import {DialogService} from 'primeng/dynamicdialog';
import {DynamicDialogRef} from 'primeng/dynamicdialog';
import {MenuModule} from 'primeng/menu';
import {ToggleButtonModule} from 'primeng/togglebutton';
import {InputNumberModule} from 'primeng/inputnumber';
import {TimelineModule} from 'primeng/timeline';
import {CalendarModule} from 'primeng/calendar';
import {DialogModule} from 'primeng/dialog';
import {PanelMenuModule} from 'primeng/panelmenu';
import {RadioButtonModule} from 'primeng/radiobutton';
import {KeyFilterModule} from 'primeng/keyfilter';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import { TabViewModule } from 'primeng/tabview';
import {TerminalModule} from 'primeng/terminal';
import {SelectButtonModule} from 'primeng/selectbutton';
import { MessagesModule } from 'primeng/messages';
import {TreeModule} from 'primeng/tree';
import {ContextMenuModule} from 'primeng/contextmenu';
import {BreadcrumbModule} from 'primeng/breadcrumb';
import {OrderListModule} from 'primeng/orderlist';
import { TagModule } from "primeng/tag";
import {PaginatorModule} from 'primeng/paginator';
import { BadgeModule } from "primeng/badge";
import {TreeTableModule} from 'primeng/treetable';

@NgModule({
  exports: [
    AccordionModule,
    MenubarModule,
    DropdownModule,
    ButtonModule,
    CardModule,
    SplitterModule,
    TableModule,
    SkeletonModule,
    SplitButtonModule,
    PanelModule,
    ToastModule,
    SpeedDialModule,
    DividerModule,
    ConfirmDialogModule,
    ScrollTopModule,
    AvatarModule,
    AvatarGroupModule,
    ChipModule,
    FieldsetModule,
    ConfirmPopupModule,
    DynamicDialogModule,
    SidebarModule,
    OverlayPanelModule,
    RippleModule,
    ProgressBarModule,
    InputTextModule,
    ChartModule,
    MultiSelectModule,
    CheckboxModule,
    KnobModule,
    TooltipModule,
    MenuModule,
    ToggleButtonModule,
    InputNumberModule,
    TimelineModule,
    CalendarModule,
    DialogModule,
    PanelMenuModule,
    RadioButtonModule,
    KeyFilterModule,
    ProgressSpinnerModule,
    TabViewModule,
    TerminalModule,
    SelectButtonModule,
    MessagesModule,
    TreeModule,
    ContextMenuModule,
    BreadcrumbModule,
    OrderListModule,
    TagModule,
    PaginatorModule,
    BadgeModule,
    TreeTableModule,
  ],

  providers: [MessageService, ConfirmationService, DialogService, DynamicDialogRef],
})
export class PrimeNgModule {}
