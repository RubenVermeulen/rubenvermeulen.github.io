import {Directive, HostBinding} from "@angular/core";

@Directive({
  selector: 'a[appUnderline]'
})
export class UnderlineDirective {
  @HostBinding('class') private hostClass = 'border-b-2 border-indigo-500/30 hover:border-indigo-500 transition-colors'
}
