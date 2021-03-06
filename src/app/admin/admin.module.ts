import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { Routes, RouterModule } from '@angular/router';
import { StudentsComponent } from './students/students.component';
import { StudentsService } from './students/services/students.service';
import { FacultiesComponent } from './faculties/faculties.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GroupComponent } from './group/group.component';
import { GroupAddEditDialogComponent } from './group/group-add-edit-dialog/group-add-edit-dialog.component';
import { GroupViewDialogComponent } from './group/group-view-dialog/group-view-dialog.component';
import { AdminUserService } from './admin-user/admin-user.service';
import { CreateUpdateUserComponent } from './admin-user/create-update-user/create-update-user.component';
import { AdminUserComponent } from './admin-user/admin-user.component';
import { SharedModule } from '../shared/shared.module';
import { SpecialityListComponent } from './speciality/speciality-list/speciality-list.component';
import { DialogFormComponent } from './speciality/dialog-form/dialog-form.component';
import { NavbarComponent } from './sidenav/sidenav.component';
import { CreateEditComponent } from './faculties/create-edit/create-edit.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { SubjectsCreateModalComponent } from './subjects/subjects-create-modal/subjects-create-modal.component';
import { MatDialogModule } from '@angular/material';
import { SubjectsService } from './subjects/subjects.service';


const routes: Routes = [
  {
    path: '', component: AdminComponent,
    children: [
      { path: 'Students/:id', component: StudentsComponent },
      { path: 'admin-user', component: AdminUserComponent},
      { path: 'faculties', component: FacultiesComponent},
      { path: 'group', component: GroupComponent },
      { path: 'subjects', component: SubjectsComponent },
      { path: 'speciality', component: SpecialityListComponent }
    ]}
];
@NgModule({
  declarations: [
    AdminComponent,
    StudentsComponent,
    FacultiesComponent,
    GroupComponent,
    GroupAddEditDialogComponent,
    GroupViewDialogComponent,
    StudentsComponent,
    AdminUserComponent,
    CreateUpdateUserComponent,
    SpecialityListComponent,
    DialogFormComponent,
    NavbarComponent,
    CreateEditComponent,
    SubjectsComponent,
    SubjectsCreateModalComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    MatDialogModule,
  ],
  providers: [
    AdminUserService,
    SubjectsService,
    StudentsService
  ],
  entryComponents: [
    NavbarComponent,
    CreateUpdateUserComponent,
    DialogFormComponent,
    GroupAddEditDialogComponent,
    CreateEditComponent,
    GroupViewDialogComponent,
    SubjectsCreateModalComponent,
  ]
})
export class AdminModule { }
