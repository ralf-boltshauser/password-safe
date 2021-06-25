import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { AddPasswordComponent } from '../add-password/add-password.component';
import { Password } from '../password';
import { PasswordService } from '../services/password.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']

})

export class DashboardComponent implements OnInit {

  private password: Password = {};

  constructor(private passwordService: PasswordService, private changeDetectorRefs: ChangeDetectorRef, public dialog: MatDialog, private userService: UserService) {}

  dataSource = new MatTableDataSource<Password>();

  displayedColumns: string[] = ['passwordId', 'name', 'password', 'actions'];

  ngOnInit(): void {
    this.refresh();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddPasswordComponent, {
      width: '250px',
      data: this.password,
    });

    dialogRef.afterClosed().subscribe(result => {
      this.password = result;
      this.create();
    });
  }

  create() {
    this.passwordService.createPassword(this.password).subscribe(data => {
      this.refresh();
    })
  }



  delete(id: number) {
    this.passwordService.deletePassword(id).subscribe((data) => {
      this.refresh();
    })
  }

  refresh() {
    this.passwordService.getAll().subscribe((data: any) => {
      this.dataSource.data = data;
      this.changeDetectorRefs.detectChanges();
    });
  }

}
