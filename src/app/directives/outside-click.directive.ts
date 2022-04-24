import { Directive, ElementRef, EventEmitter, HostListener, Output } from "@angular/core";

@Directive({
  selector: "[appOutsideClick]",
})
export class OutsideClickDirective {
  @Output()
  public outsideClick: EventEmitter<MouseEvent> = new EventEmitter();

  @HostListener("document:mousedown", ["$event"])
  public onClick(event: MouseEvent): void {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.outsideClick.emit(event);
    }
  }

  constructor(private readonly elementRef: ElementRef) {}
}