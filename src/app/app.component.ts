import { Component } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
// let Imag
export class AppComponent {
  // results = {};
  public show: boolean = false;
  public buttonName: any = 'Show';
  title = 'Gateway Group Of Company';
  imgUrl = '../assets/image/1.png';
  imageSource: string | undefined;
  text = '';
  openPrediction() {
    this.text = '...';
  }
  lifeCycleHooks = [
    {
      HookMethod: 'ngOnChanges()',
      Purpose:
        'Respond when Angular sets or resets data-bound input properties. The method receives a SimpleChanges object of current and previous property valuesNote that this happens very frequently, so any operation you perform here impacts performance significantly. See details in Using change detection hooks in this document.',
      Timing:
        'Called before ngOnInit() (if the component has bound inputs) and whenever one or more data-bound input properties change.',
    },
    {
      HookMethod: 'ngOnInit()',
      Purpose:
        'Initialize the directive or component after Angular first displays the data-bound properties and sets the directive or components input properties. See details in Initializing a component or directive in this document.',
      Timing:
        'Called once, after the first ngOnChanges(). ngOnInit() is still called even when ngOnChanges() is not (which is the case when there are no template-bound inputs).',
    },
    {
      HookMethod: 'ngDoCheck()',
      Purpose:
        'Detect and act upon changes that Angular cant or wont detect on its own. See details and example in Defining custom change detection in this document.',
      Timing:
        'Called immediately after ngOnChanges() on every change detection run, and immediately after ngOnInit() on the first run.',
    },
    {
      HookMethod: 'ngAfterContentInit()',
      Purpose:
        'Respond after Angular projects external content into the components view, or into the view that a directive is in.',
      Timing: 'Called once after the first ngDoCheck().',
    },
    {
      HookMethod: 'ngAfterContentChecked()',
      Purpose:
        'Respond after Angular checks the content projected into the directive or component.See details and example in Responding to projected content changes in this document.',
      Timing:
        'Called after ngAfterContentInit() and every subsequent ngDoCheck().',
    },
    {
      HookMethod: 'ngAfterViewInit()',
      Purpose:
        'Respond after Angular initializes the components views and child views, or the view that contains the directive. See details and example in Responding to view changes in this document. ',
      Timing: 'Called once after the first ngAfterContentChecked().',
    },
    {
      HookMethod: 'ngAfterViewChecked()',
      Purpose:
        'Respond after Angular checks the components views and child views, or the view that contains the directive.',
      Timing:
        'Called after the ngAfterViewInit() and every subsequent ngAfterContentChecked().',
    },
    {
      HookMethod: 'ngOnDestroy()',
      Purpose:
        'Cleanup just before Angular destroys the directive or component. Unsubscribe Observables and detach event handlers to avoid memory leaks. See details in Cleaning up on instance destruction in this document.',
      Timing:
        'Called immediately before Angular destroys the directive or component.',
    },
  ];

  ngOnInit(): void {
    console.log(this.lifeCycleHooks);
  }
  toggle() {
    this.show = !this.show;

    // CHANGE THE NAME OF THE BUTTON.
    if (this.show) this.buttonName = 'Hide Image';
    else this.buttonName = 'Show Image';
  }
}
