import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'agl-button-dropdown',
    templateUrl: './buttonDropdown.component.html',
    styleUrls: ['./buttonDropdown.component.scss']
})
export class ButtonDropdownComponent implements OnInit {
    @Input() public list: Array<{ value: string, name: string }>;
    @Input() public name: string = 'list';
    @Output() public onSelect = new EventEmitter<string>();

    public selectedName: string = '';

    constructor(
        ) {
    }

    public selectButton(item: { value: string, name: string }) {
        this.selectedName = item.name;
        this.onSelect.emit(item.value);
    }

    public changeSelection() {
        this.selectedName = '';
        this.onSelect.emit(null);
    }

    public ngOnInit() {

    }
}
