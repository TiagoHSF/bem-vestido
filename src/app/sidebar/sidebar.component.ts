import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"],
})
export class SidebarComponent implements OnInit {
  expanded: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  expand() {
    this.expanded = !this.expanded;
  }
}
