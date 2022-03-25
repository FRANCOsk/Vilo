import { Component, Inject, OnInit } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
  selector: "app-open-dialog",
  templateUrl: "./open-dialog.component.html",
  styleUrls: ["./open-dialog.component.css"],
})
export class OpenDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<OpenDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string
  ) {}

  ngOnInit() {}

  close(): void {
    this.dialogRef.close();
  }
}
