import { Component, HostListener, OnInit } from "@angular/core";
import Typed from "typed.js";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  title = "portfolio";
  cursor = document.querySelector(".cursor");
  transit = false;
  about: HTMLElement = null;
  portfolio: HTMLElement = null;
  contact: HTMLElement = null;
  tools: HTMLElement = null;
  topSection: HTMLElement = null;
  placeholder = "your name";
  placeholderSubject = "your subject";
  placeholderMessage = "write your message here";
  placeholderEmail = "your e-mail";

  ngOnInit(): void {
    new Typed("#typed", {
      stringsElement: "#typed-strings",
      typeSpeed: 80,
      loop: true,
    });
    this.portfolio = document.querySelector("#projects");
    this.about = document.querySelector(".skills");
    this.tools = document.querySelector(".tools");
    this.contact = document.querySelector(".contact-section");
    this.topSection = document.querySelector(".intro");
  }
  scrollToView() {
    document.querySelector(".projects").scrollIntoView({ behavior: "smooth" });
  }
  @HostListener("window:scroll", ["$event"])
  scrollDetect(event) {
    if (window.pageYOffset > 5) {
      this.transit = true;
    } else {
      this.transit = false;
    }
  }
}
