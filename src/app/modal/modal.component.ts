import { Component, OnInit, ViewChild, Input, Output, ElementRef, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

 @ViewChild('closeBtn') closeButton: ElementRef = new ElementRef('');
    @Input() title;
    @Output() modalClosed = new EventEmitter<boolean>();

    // A reference to the dialog where we want to restrict focus
    @ViewChild('ngxFocus') ngxFocus;

    focusTrapSet = false;

    constructor() { }

    ngOnInit() {
    }

    ngAfterViewInit() {
        // Set the focus on the "close" button
        setTimeout(() => {
            this.closeButton.nativeElement.focus();
        }, 100);
    }

    ngAfterViewChecked() {
        // If we have not already activated the focus-trap
        if (!this.focusTrapSet) {
            this.focusTrapSet = true;
            setTimeout(() => {
                //this.ngxFocus.activateFocusTrap();
            }, 500);
        }
    }

    ngOnDestroy() {
        //this.ngxFocus.deactivateFocusTrap();
        this.focusTrapSet = false;
    }

    onModalClose() {
        this.modalClosed.emit();
    }

}
