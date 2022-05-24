import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-modal-login',
  templateUrl: './modal-login.component.html',
  styleUrls: ['./modal-login.component.css']
})
export class ModalLoginComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) { }
  datos: DialogData;

  ngOnInit(): void {
    this.datos = this.data
  }

}

export interface DialogData {
  /* animal: 'panda' | 'unicorn' | 'lion'; */
  animal: string;
}
