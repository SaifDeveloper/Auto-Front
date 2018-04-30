import { Injectable } from '@angular/core';
                                 import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
                                 import {DialogOverviewComponent} from './dialog-overview.component';

                                    @Injectable()
                                    export class DialogService {
                                    
                                      constructor(public dialog: MatDialog) { }
                                    
                                      openDialog(): void {
                                        let dialogRef = this.dialog.open(DialogOverviewComponent, {
                                          width: '250px'
                                        });
                                      }
                                    
                                    }