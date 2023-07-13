import {Injectable} from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {LoaderComponent} from '@view/widget/loader/loader.component';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  loading: boolean;
  dialogRef: MatDialogRef<LoaderComponent>;

  constructor(private dialog: MatDialog) {
  //  console.log('!_________LoaderService - constructor');
  }

  show(message: string = 'Please wait...'): void {
    setTimeout(() => {
      this.loading = true;
      this.dialogRef = this.dialog.open(LoaderComponent, {
        width: 'auto',
        data: {message},
        panelClass: 'loaderService',
        disableClose: true
      });
    });
  }

  hide() {
    if (this.dialogRef) {
      this.dialogRef.close();
      this.loading = false;
    }
  }
}
