import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { ImageModule } from 'primeng/image';
import { DataViewModule } from 'primeng/dataview';
import { PanelModule } from 'primeng/panel';
import { DialogModule } from 'primeng/dialog';
import { RatingModule } from 'primeng/rating';
import { RippleModule } from 'primeng/ripple';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { TreeSelectModule } from 'primeng/treeselect';
import { CheckboxModule } from 'primeng/checkbox';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { DividerModule } from 'primeng/divider';
import { FormsModule } from '@angular/forms';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { ToastModule } from 'primeng/toast';
import { SplitterModule } from 'primeng/splitter';
import {FileUploadModule} from 'primeng/fileupload';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { ToolbarModule } from 'primeng/toolbar';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { MultiSelectModule } from 'primeng/multiselect';
import { ContextMenuModule } from 'primeng/contextmenu';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { RadioButtonModule } from 'primeng/radiobutton';
import { AccordionModule } from 'primeng/accordion';

// import {MenuItem} from 'primeng/api';

@NgModule({
  exports: [
    ButtonModule,
    RadioButtonModule,
    InputNumberModule,
    MenubarModule,
    ContextMenuModule,
    InputTextModule,
    ImageModule,
    CardModule,
    DataViewModule,
    PanelModule,
    DialogModule,
    RatingModule,
    RippleModule,
    DropdownModule,
    CalendarModule,
    TreeSelectModule,
    CheckboxModule,
    CardModule,
    TableModule,
    DividerModule,
    FormsModule,
    DynamicDialogModule,
    ToastModule,
    SplitterModule,
    MessageModule,
    MessagesModule,
    ProgressSpinnerModule,
    ToolbarModule,
    ConfirmDialogModule,
    InputTextareaModule,
    MultiSelectModule,
    AccordionModule,
    FileUploadModule
  ],
  providers: [MessageService, ConfirmationService],
})
export class PrimeNgModule {}
