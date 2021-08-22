import {
  AfterViewInit,
  Directive,
  ElementRef,
  Renderer2,
  HostListener,
} from '@angular/core';

@Directive({
  selector: '[dropdown]',
})
export class DropdownDirective implements AfterViewInit {
  private isTriggered: boolean;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    this.isTriggered = false;
  }

  @HostListener('document:click', ['$event.target'])
  public onOutsideClick(targetElement: Element): void {
    if (
      !this.elementRef.nativeElement.contains(targetElement) &&
      this.isTriggered
    ) {
      this.close();
    }
  }

  public ngAfterViewInit(): void {
    this.renderer.listen(
      this.elementRef.nativeElement,
      'click',
      this.toggle.bind(this)
    );
  }

  toggle(): void {
    if (this.isTriggered) {
      this.close();
    } else {
      this.open();
    }
  }

  open(): void {
    this.isTriggered = true;
    this.renderer.addClass(this.elementRef.nativeElement, 'dropdown-open');
  }

  close(): void {
    this.isTriggered = false;
    this.renderer.removeClass(this.elementRef.nativeElement, 'dropdown-open');
  }
}
