import { Component, ContentChild, Directive, HostBinding, HostListener, Input, OnInit, TemplateRef } from '@angular/core';


@Directive({
  selector: 'button[appExampleZippyToggle]',
})
export class ZippyToggleDirective1 {
  @HostBinding('attr.aria-expanded') ariaExpanded = this.zippy.expanded;
  @HostBinding('attr.aria-controls') ariaControls = this.zippy.contentId;
  @HostListener('click') toggleZippy() {
    this.zippy.expanded = !this.zippy.expanded;
  }
  constructor(public zippy: ZippyComponent1) {}
}

let nextId = 0;

@Directive({
  selector: '[appExampleZippyContent1]'
})
export class ZippyContentDirective1 {
  constructor(public templateRef: TemplateRef<unknown>) {}
}

@Component({
  selector: 'app-example-zippy1',
  templateUrl: 'example-zippy.template.html',
})
export class ZippyComponent1 {
  contentId = `zippy-${nextId++}`;
  @Input() expanded = true;
  @ContentChild(ZippyContentDirective1) content!: ZippyContentDirective1;
  constructor() { console.error("Instantiated1.")}
}


