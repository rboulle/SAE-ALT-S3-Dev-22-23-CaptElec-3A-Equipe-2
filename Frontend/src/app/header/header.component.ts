import { Component } from "@angular/core";
import { ViewService } from "../view.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent {
  constructor(public viewService: ViewService) {}

  public changeView(viewName: string) {
    this.viewService.resetDashboardId();
    this.viewService.setView(viewName);
    console.log(this.viewService.getIsDashboardActive());
    console.log(this.viewService.getView());
  }
}
