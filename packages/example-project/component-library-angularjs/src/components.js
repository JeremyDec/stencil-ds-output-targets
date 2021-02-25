/* eslint-disable */
import angular from 'angular';
import { applyPolyfills, defineCustomElements } from 'component-library/loader';
applyPolyfills().then(() => { defineCustomElements(); });
/* auto-generated angularJS component */
const ngMyButton = {
  bindings: {
    buttonType: '@',
		color: '@?',
		disabled: '<',
		download: '@',
		expand: '@?',
		fill: '@?',
		href: '@',
		rel: '@',
		shape: '@?',
		size: '@?',
		strong: '<',
		target: '@',
		type: '@',
    onMyFocus: '&',
		onMyBlur: '&',
  },
  controller: ['$element', class ngMyButtonController {
    constructor($element) {
      this.$element = $element;
    }
    $onInit() {
      this.angularComponent = this.$element[0];
      this.webComponent = this.angularComponent.firstChild;
      this.webComponent.addEventListener('myFocus', (event) => {
        this.onMyFocus({ event });
      });
      this.webComponent.addEventListener('myBlur', (event) => {
        this.onMyBlur({ event });
      });
    }
  }],
  template: '<my-button ng-attr-button-type="{{$ctrl.buttonType || undefined}}" ng-attr-color="{{$ctrl.color || undefined}}" ng-attr-disabled="{{$ctrl.disabled || undefined}}" ng-attr-download="{{$ctrl.download || undefined}}" ng-attr-expand="{{$ctrl.expand || undefined}}" ng-attr-fill="{{$ctrl.fill || undefined}}" ng-attr-href="{{$ctrl.href || undefined}}" ng-attr-rel="{{$ctrl.rel || undefined}}" ng-attr-shape="{{$ctrl.shape || undefined}}" ng-attr-size="{{$ctrl.size || undefined}}" ng-attr-strong="{{$ctrl.strong || undefined}}" ng-attr-target="{{$ctrl.target || undefined}}" ng-attr-type="{{$ctrl.type || undefined}}"></my-button>',
}
export const ngMyButtonModule = "ngMyButtonModule";
angular
  .module(ngMyButtonModule, [])
  .component("ngMyButton", ngMyButton);
/* auto-generated angularJS component */
const ngMyCheckbox = {
  bindings: {
    checked: '<',
		color: '@?',
		disabled: '<',
		indeterminate: '<',
		name: '@',
		value: '@',
    onMyChange: '&',
		onMyFocus: '&',
		onMyBlur: '&',
		onMyStyle: '&',
  },
  controller: ['$element', class ngMyCheckboxController {
    constructor($element) {
      this.$element = $element;
    }
    $onInit() {
      this.angularComponent = this.$element[0];
      this.webComponent = this.angularComponent.firstChild;
      this.webComponent.addEventListener('myChange', (event) => {
        this.onMyChange({ event });
      });
      this.webComponent.addEventListener('myFocus', (event) => {
        this.onMyFocus({ event });
      });
      this.webComponent.addEventListener('myBlur', (event) => {
        this.onMyBlur({ event });
      });
      this.webComponent.addEventListener('myStyle', (event) => {
        this.onMyStyle({ event });
      });
    }
  }],
  template: '<my-checkbox ng-attr-checked="{{$ctrl.checked || undefined}}" ng-attr-color="{{$ctrl.color || undefined}}" ng-attr-disabled="{{$ctrl.disabled || undefined}}" ng-attr-indeterminate="{{$ctrl.indeterminate || undefined}}" ng-attr-name="{{$ctrl.name || undefined}}" ng-attr-value="{{$ctrl.value || undefined}}"></my-checkbox>',
}
export const ngMyCheckboxModule = "ngMyCheckboxModule";
angular
  .module(ngMyCheckboxModule, [])
  .component("ngMyCheckbox", ngMyCheckbox);
/* auto-generated angularJS component */
const ngMyComponent = {
  bindings: {
    age: '<',
		first: '@',
		kidsNames: '<',
		last: '@',
		middle: '@',
    onMyCustomEvent: '&',
  },
  controller: ['$element', class ngMyComponentController {
    constructor($element) {
      this.$element = $element;
    }
    $onInit() {
      this.angularComponent = this.$element[0];
      this.webComponent = this.angularComponent.firstChild;
      this.webComponent.kidsNames = this.kidsNames;
      this.webComponent.addEventListener('myCustomEvent', (event) => {
        this.onMyCustomEvent({ event });
      });
    }
    $onChanges(changes) {
      if (this.webComponent) {
          if(changes.kidsNames !== undefined && !angular.equals(changes.kidsNames.previousValue, changes.kidsNames.currentValue)) {
            this.webComponent.kidsNames = this.kidsNames;
          }
      }
    }
  }],
  template: '<my-component ng-attr-age="{{$ctrl.age || undefined}}" ng-attr-first="{{$ctrl.first || undefined}}" ng-attr-last="{{$ctrl.last || undefined}}" ng-attr-middle="{{$ctrl.middle || undefined}}"></my-component>',
}
export const ngMyComponentModule = "ngMyComponentModule";
angular
  .module(ngMyComponentModule, [])
  .component("ngMyComponent", ngMyComponent);
/* auto-generated angularJS component */
const ngMyInput = {
  bindings: {
    accept: '@?',
		autocapitalize: '@',
		autocomplete: '@',
		autocorrect: '@',
		autofocus: '<',
		clearInput: '<',
		clearOnEdit: '<?',
		color: '@?',
		disabled: '<',
		enterkeyhint: '@?',
		inputmode: '@?',
		max: '@?',
		maxlength: '<?',
		min: '@?',
		minlength: '<?',
		multiple: '<?',
		name: '@',
		pattern: '@?',
		placeholder: '@?',
		readonly: '<',
		required: '<',
		size: '<?',
		spellcheck: '<',
		step: '@?',
		type: '@',
		value: '<?',
    setFocus: '=?',
		getInputElement: '=?',
    onMyInput: '&',
		onMyChange: '&',
		onMyBlur: '&',
		onMyFocus: '&',
  },
  controller: ['$element', class ngMyInputController {
    constructor($element) {
      this.$element = $element;
    }
    $onInit() {
      this.angularComponent = this.$element[0];
      this.webComponent = this.angularComponent.firstChild;
      this.webComponent.value = this.value;
      this.webComponent.addEventListener('myInput', (event) => {
        this.onMyInput({ event });
      });
      this.webComponent.addEventListener('myChange', (event) => {
        this.onMyChange({ event });
      });
      this.webComponent.addEventListener('myBlur', (event) => {
        this.onMyBlur({ event });
      });
      this.webComponent.addEventListener('myFocus', (event) => {
        this.onMyFocus({ event });
      });
			this.setFocus = () => this.webComponent.setFocus();
			this.getInputElement = () => this.webComponent.getInputElement();
    }
    $onChanges(changes) {
      if (this.webComponent) {
          if(changes.value !== undefined && !angular.equals(changes.value.previousValue, changes.value.currentValue)) {
            this.webComponent.value = this.value;
          }
      }
    }
  }],
  template: '<my-input ng-attr-accept="{{$ctrl.accept || undefined}}" ng-attr-autocapitalize="{{$ctrl.autocapitalize || undefined}}" ng-attr-autocomplete="{{$ctrl.autocomplete || undefined}}" ng-attr-autocorrect="{{$ctrl.autocorrect || undefined}}" ng-attr-autofocus="{{$ctrl.autofocus || undefined}}" ng-attr-clear-input="{{$ctrl.clearInput || undefined}}" ng-attr-clear-on-edit="{{$ctrl.clearOnEdit || undefined}}" ng-attr-color="{{$ctrl.color || undefined}}" ng-attr-disabled="{{$ctrl.disabled || undefined}}" ng-attr-enterkeyhint="{{$ctrl.enterkeyhint || undefined}}" ng-attr-inputmode="{{$ctrl.inputmode || undefined}}" ng-attr-max="{{$ctrl.max || undefined}}" ng-attr-maxlength="{{$ctrl.maxlength || undefined}}" ng-attr-min="{{$ctrl.min || undefined}}" ng-attr-minlength="{{$ctrl.minlength || undefined}}" ng-attr-multiple="{{$ctrl.multiple || undefined}}" ng-attr-name="{{$ctrl.name || undefined}}" ng-attr-pattern="{{$ctrl.pattern || undefined}}" ng-attr-placeholder="{{$ctrl.placeholder || undefined}}" ng-attr-readonly="{{$ctrl.readonly || undefined}}" ng-attr-required="{{$ctrl.required || undefined}}" ng-attr-size="{{$ctrl.size || undefined}}" ng-attr-spellcheck="{{$ctrl.spellcheck || undefined}}" ng-attr-step="{{$ctrl.step || undefined}}" ng-attr-type="{{$ctrl.type || undefined}}"></my-input>',
}
export const ngMyInputModule = "ngMyInputModule";
angular
  .module(ngMyInputModule, [])
  .component("ngMyInput", ngMyInput);
/* auto-generated angularJS component */
const ngMyPopover = {
  bindings: {
    animated: '<',
		backdropDismiss: '<',
		component: '@',
		componentProps: '<?',
		cssClass: '@?',
		event: '<',
		keyboardClose: '<',
		showBackdrop: '<',
		translucent: '<',
    present: '=?',
		dismiss: '=?',
		onDidDismiss: '=?',
		onWillDismiss: '=?',
    onMyPopoverDidPresent: '&',
		onMyPopoverWillPresent: '&',
		onMyPopoverWillDismiss: '&',
		onMyPopoverDidDismiss: '&',
  },
  controller: ['$element', class ngMyPopoverController {
    constructor($element) {
      this.$element = $element;
    }
    $onInit() {
      this.angularComponent = this.$element[0];
      this.webComponent = this.angularComponent.firstChild;
      this.webComponent.componentProps = this.componentProps;
			this.webComponent.event = this.event;
      this.webComponent.addEventListener('myPopoverDidPresent', (event) => {
        this.onMyPopoverDidPresent({ event });
      });
      this.webComponent.addEventListener('myPopoverWillPresent', (event) => {
        this.onMyPopoverWillPresent({ event });
      });
      this.webComponent.addEventListener('myPopoverWillDismiss', (event) => {
        this.onMyPopoverWillDismiss({ event });
      });
      this.webComponent.addEventListener('myPopoverDidDismiss', (event) => {
        this.onMyPopoverDidDismiss({ event });
      });
			this.present = () => this.webComponent.present();
			this.dismiss = (_data,  _role) => this.webComponent.dismiss(_data,  _role);
			this.onDidDismiss = () => this.webComponent.onDidDismiss();
			this.onWillDismiss = () => this.webComponent.onWillDismiss();
    }
    $onChanges(changes) {
      if (this.webComponent) {
          if(changes.componentProps !== undefined && !angular.equals(changes.componentProps.previousValue, changes.componentProps.currentValue)) {
            this.webComponent.componentProps = this.componentProps;
          }
          if(changes.event !== undefined && !angular.equals(changes.event.previousValue, changes.event.currentValue)) {
            this.webComponent.event = this.event;
          }
      }
    }
  }],
  template: '<my-popover ng-attr-animated="{{$ctrl.animated || undefined}}" ng-attr-backdrop-dismiss="{{$ctrl.backdropDismiss || undefined}}" ng-attr-component="{{$ctrl.component || undefined}}" ng-attr-css-class="{{$ctrl.cssClass || undefined}}" ng-attr-keyboard-close="{{$ctrl.keyboardClose || undefined}}" ng-attr-show-backdrop="{{$ctrl.showBackdrop || undefined}}" ng-attr-translucent="{{$ctrl.translucent || undefined}}"></my-popover>',
}
export const ngMyPopoverModule = "ngMyPopoverModule";
angular
  .module(ngMyPopoverModule, [])
  .component("ngMyPopover", ngMyPopover);
/* auto-generated angularJS component */
const ngMyRadio = {
  bindings: {
    color: '@?',
		disabled: '<',
		name: '@',
		value: '<?',
    onMyStyle: '&',
		onMyFocus: '&',
		onMyBlur: '&',
		onMySelect: '&',
  },
  controller: ['$element', class ngMyRadioController {
    constructor($element) {
      this.$element = $element;
    }
    $onInit() {
      this.angularComponent = this.$element[0];
      this.webComponent = this.angularComponent.firstChild;
      this.webComponent.value = this.value;
      this.webComponent.addEventListener('myStyle', (event) => {
        this.onMyStyle({ event });
      });
      this.webComponent.addEventListener('myFocus', (event) => {
        this.onMyFocus({ event });
      });
      this.webComponent.addEventListener('myBlur', (event) => {
        this.onMyBlur({ event });
      });
      this.webComponent.addEventListener('mySelect', (event) => {
        this.onMySelect({ event });
      });
    }
    $onChanges(changes) {
      if (this.webComponent) {
          if(changes.value !== undefined && !angular.equals(changes.value.previousValue, changes.value.currentValue)) {
            this.webComponent.value = this.value;
          }
      }
    }
  }],
  template: '<my-radio ng-attr-color="{{$ctrl.color || undefined}}" ng-attr-disabled="{{$ctrl.disabled || undefined}}" ng-attr-name="{{$ctrl.name || undefined}}"></my-radio>',
}
export const ngMyRadioModule = "ngMyRadioModule";
angular
  .module(ngMyRadioModule, [])
  .component("ngMyRadio", ngMyRadio);
/* auto-generated angularJS component */
const ngMyRadioGroup = {
  bindings: {
    allowEmptySelection: '<',
		name: '@',
		value: '<?',
    onMyChange: '&',
  },
  controller: ['$element', class ngMyRadioGroupController {
    constructor($element) {
      this.$element = $element;
    }
    $onInit() {
      this.angularComponent = this.$element[0];
      this.webComponent = this.angularComponent.firstChild;
      this.webComponent.value = this.value;
      this.webComponent.addEventListener('myChange', (event) => {
        this.onMyChange({ event });
      });
    }
    $onChanges(changes) {
      if (this.webComponent) {
          if(changes.value !== undefined && !angular.equals(changes.value.previousValue, changes.value.currentValue)) {
            this.webComponent.value = this.value;
          }
      }
    }
  }],
  template: '<my-radio-group ng-attr-allow-empty-selection="{{$ctrl.allowEmptySelection || undefined}}" ng-attr-name="{{$ctrl.name || undefined}}"></my-radio-group>',
}
export const ngMyRadioGroupModule = "ngMyRadioGroupModule";
angular
  .module(ngMyRadioGroupModule, [])
  .component("ngMyRadioGroup", ngMyRadioGroup);
/* auto-generated angularJS component */
const ngMyRange = {
  bindings: {
    color: '@?',
		debounce: '<',
		disabled: '<',
		dualKnobs: '<',
		max: '<',
		min: '<',
		name: '@',
		pin: '<',
		snaps: '<',
		step: '<',
		ticks: '<',
		value: '<',
    onMyChange: '&',
		onMyStyle: '&',
		onMyFocus: '&',
		onMyBlur: '&',
  },
  controller: ['$element', class ngMyRangeController {
    constructor($element) {
      this.$element = $element;
    }
    $onInit() {
      this.angularComponent = this.$element[0];
      this.webComponent = this.angularComponent.firstChild;
      this.webComponent.addEventListener('myChange', (event) => {
        this.onMyChange({ event });
      });
      this.webComponent.addEventListener('myStyle', (event) => {
        this.onMyStyle({ event });
      });
      this.webComponent.addEventListener('myFocus', (event) => {
        this.onMyFocus({ event });
      });
      this.webComponent.addEventListener('myBlur', (event) => {
        this.onMyBlur({ event });
      });
    }
  }],
  template: '<my-range ng-attr-color="{{$ctrl.color || undefined}}" ng-attr-debounce="{{$ctrl.debounce || undefined}}" ng-attr-disabled="{{$ctrl.disabled || undefined}}" ng-attr-dual-knobs="{{$ctrl.dualKnobs || undefined}}" ng-attr-max="{{$ctrl.max || undefined}}" ng-attr-min="{{$ctrl.min || undefined}}" ng-attr-name="{{$ctrl.name || undefined}}" ng-attr-pin="{{$ctrl.pin || undefined}}" ng-attr-snaps="{{$ctrl.snaps || undefined}}" ng-attr-step="{{$ctrl.step || undefined}}" ng-attr-ticks="{{$ctrl.ticks || undefined}}" ng-attr-value="{{$ctrl.value || undefined}}"></my-range>',
}
export const ngMyRangeModule = "ngMyRangeModule";
angular
  .module(ngMyRangeModule, [])
  .component("ngMyRange", ngMyRange);
export default {
  ngMyButtonModule, ngMyCheckboxModule, ngMyComponentModule, ngMyInputModule, ngMyPopoverModule, ngMyRadioModule, ngMyRadioGroupModule, ngMyRangeModule
}
  