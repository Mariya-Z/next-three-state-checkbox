(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(module,__webpack_exports__,__webpack_require__){"use strict";var ThreeStateCheckboxStatesEnum,tslib=__webpack_require__(16),core_umd=__webpack_require__(6),forms_umd=__webpack_require__(149),counter=0;!function(ThreeStateCheckboxStatesEnum){ThreeStateCheckboxStatesEnum[ThreeStateCheckboxStatesEnum.OFF=0]="OFF",ThreeStateCheckboxStatesEnum[ThreeStateCheckboxStatesEnum.INDETERMINATE=1]="INDETERMINATE",ThreeStateCheckboxStatesEnum[ThreeStateCheckboxStatesEnum.ON=2]="ON"}(ThreeStateCheckboxStatesEnum||(ThreeStateCheckboxStatesEnum={}));var next_three_state_checkbox_component_NextThreeStateCheckboxComponent=function(){function NextThreeStateCheckboxComponent(changeDetectorRef,render,el){this.changeDetectorRef=changeDetectorRef,this.render=render,this.el=el,this.id="next-three-state-checkbox-"+ ++counter,this.indeterminate=!1,this.isChecked=0,this.controlValueAccessorChangeFn=function(){return null},this.onTouched=function(){return null}}var NextThreeStateCheckboxComponent_1,_a,_b,_c,_d;return NextThreeStateCheckboxComponent_1=NextThreeStateCheckboxComponent,Object.defineProperty(NextThreeStateCheckboxComponent.prototype,"inputId",{get:function(){return this.id},enumerable:!0,configurable:!0}),Object.defineProperty(NextThreeStateCheckboxComponent.prototype,"checked",{get:function(){return this.isChecked},set:function(checked){checked!==this.checked&&(this.isChecked=checked,this.indeterminate=checked===ThreeStateCheckboxStatesEnum.INDETERMINATE,this.renderCheckbox())},enumerable:!0,configurable:!0}),NextThreeStateCheckboxComponent.prototype.ngAfterViewInit=function(){this.render.removeAttribute(this.el.nativeElement,"id")},NextThreeStateCheckboxComponent.prototype.writeValue=function(value){this.checked=value},NextThreeStateCheckboxComponent.prototype.registerOnChange=function(fn){this.controlValueAccessorChangeFn=fn},NextThreeStateCheckboxComponent.prototype.registerOnTouched=function(fn){this.onTouched=fn},NextThreeStateCheckboxComponent.prototype.setDisabledState=function(isDisabled){this.disabled=isDisabled,this.changeDetectorRef.markForCheck()},NextThreeStateCheckboxComponent.prototype.onChange=function(){this.setState((this.checked+1)%3),this.controlValueAccessorChangeFn(this.checked)},NextThreeStateCheckboxComponent.prototype.renderCheckbox=function(){this.inputCheckbox.nativeElement.indeterminate=this.indeterminate,this.inputCheckbox.nativeElement.checked=this.checked===ThreeStateCheckboxStatesEnum.ON,this.inputCheckbox.nativeElement.value=this.checked===ThreeStateCheckboxStatesEnum.ON},NextThreeStateCheckboxComponent.prototype.setState=function(value){this.checked=value},tslib.__decorate([Object(core_umd.Input)(),tslib.__metadata("design:type",Boolean)],NextThreeStateCheckboxComponent.prototype,"disabled",void 0),tslib.__decorate([Object(core_umd.Input)(),tslib.__metadata("design:type",Boolean)],NextThreeStateCheckboxComponent.prototype,"required",void 0),tslib.__decorate([Object(core_umd.Input)(),tslib.__metadata("design:type",Number)],NextThreeStateCheckboxComponent.prototype,"tabIndex",void 0),tslib.__decorate([Object(core_umd.Input)(),tslib.__metadata("design:type",Object)],NextThreeStateCheckboxComponent.prototype,"id",void 0),tslib.__decorate([Object(core_umd.ViewChild)("input"),tslib.__metadata("design:type","function"==typeof(_a=void 0!==core_umd.ElementRef&&core_umd.ElementRef)?_a:Object)],NextThreeStateCheckboxComponent.prototype,"inputCheckbox",void 0),NextThreeStateCheckboxComponent=NextThreeStateCheckboxComponent_1=tslib.__decorate([Object(core_umd.Component)({selector:"next-three-state-checkbox",template:__webpack_require__(526),styles:[__webpack_require__(527)],providers:[{provide:forms_umd.NG_VALUE_ACCESSOR,useExisting:Object(core_umd.forwardRef)(function(){return NextThreeStateCheckboxComponent_1}),multi:!0}]}),tslib.__metadata("design:paramtypes",["function"==typeof(_b=void 0!==core_umd.ChangeDetectorRef&&core_umd.ChangeDetectorRef)?_b:Object,"function"==typeof(_c=void 0!==core_umd.Renderer2&&core_umd.Renderer2)?_c:Object,"function"==typeof(_d=void 0!==core_umd.ElementRef&&core_umd.ElementRef)?_d:Object])],NextThreeStateCheckboxComponent)}();!function(){function NextThreeStateCheckboxModule(){}NextThreeStateCheckboxModule=tslib.__decorate([Object(core_umd.NgModule)({declarations:[next_three_state_checkbox_component_NextThreeStateCheckboxComponent],exports:[next_three_state_checkbox_component_NextThreeStateCheckboxComponent]})],NextThreeStateCheckboxModule)}();__webpack_require__.d(__webpack_exports__,"b",function(){return ThreeStateCheckboxStatesEnum}),__webpack_require__.d(__webpack_exports__,"a",function(){return next_three_state_checkbox_component_NextThreeStateCheckboxComponent})},229:function(module,exports){function webpackEmptyAsyncContext(req){return Promise.resolve().then(function(){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e})}webpackEmptyAsyncContext.keys=function(){return[]},webpackEmptyAsyncContext.resolve=webpackEmptyAsyncContext,module.exports=webpackEmptyAsyncContext,webpackEmptyAsyncContext.id=229},233:function(module,exports){module.exports='## Project setup\r\n\r\n```\r\nnpm i next-three-state-checkbox\r\n```\r\n\r\n### Three-state-checkbox is defined through FormControl element or ngModel binding\r\n\r\n### Three-state-checkbox has 4 input parametrs\r\n\r\n- disabled: boolean\r\n- required: boolean\r\n- tabIndex: number\r\n- id: string\r\n\r\nid is optional, if you don\'t pass it, id will be added automatically. In this case it\'s impossible to add lable for toggle\r\n\r\nThis checkbox has three states:\r\n\r\n- unchecked (off)\r\n- indeterminate\r\n- checked (on)\r\n\r\nState of checkbox defines as Enum in library\r\n\r\n```\r\nexport const enum ThreeStateCheckboxStatesEnum {\r\n  OFF,\r\n  INDETERMINATE,\r\n  ON,\r\n}\r\n```\r\n\r\nTo define checkbox state you should import ThreeStateCheckboxStatesEnum and then use ThreeStateCheckboxStates.ON, ThreeStateCheckboxStates.OFF and ThreeStateCheckboxStates.INDETERMINATE\r\n\r\n## Basic usage example with NgModel\r\n\r\n### Add module into your app\r\n\r\n```\r\nimport {NextThreestateCheckboxModule} from \'next-three-state-checkbox\';\r\nimport {FormsModule} from \'@angular/forms\';\r\n\r\n@NgModule({\r\n  declarations: [AppComponent],\r\n  imports: [\r\n    BrowserModule,\r\n    NextThreeStateCheckboxModule,\r\n    FormsModule,\r\n  ],\r\n  bootstrap: [AppComponent]\r\n})\r\nexport class AppModule {\r\n}\r\n\r\n```\r\n\r\n### Add code to the component file\r\n\r\n```\r\nimport {ThreeStateCheckboxStatesEnum} from \'next-three-state-checkbox\';\r\n\r\nexport class AppComponent {\r\n  ...\r\n  public ThreeStateCheckboxStatesEnum = ThreeStateCheckboxStatesEnum;\r\n  public isChecked = ThreeStateCheckboxStatesEnum.ON;\r\n\r\n}\r\n```\r\n\r\n### Add murkup to the template file\r\n\r\n```\r\n<form>\r\n    <next-three-state-checkbox\r\n        [disabled]="false"\r\n        [required]="true"\r\n        [tabIndex]="1"\r\n        [id]="\'1\'"\r\n        [(ngModel)]="isChecked"\r\n        name="checkbox"\r\n    ></next-three-state-checkbox>\r\n    <label for="1">Label for checkbox</label>\r\n</form>\r\n\r\n```\r\n\r\n## Basic usage example with ReactiveForms\r\n\r\n### Add module into your app\r\n\r\n```\r\nimport {NextThreeStateCheckboxModule} from \'next-three-state-checkbox\';\r\nimport {ReactiveFormsModule} from \'@angular/forms\';\r\n\r\n@NgModule({\r\n  declarations: [AppComponent],\r\n  imports: [\r\n    BrowserModule,\r\n    NextThreeStateCheckboxModule,\r\n    ReactiveFormsModule,\r\n  ],\r\n  bootstrap: [AppComponent]\r\n})\r\nexport class AppModule {\r\n}\r\n```\r\n\r\n### Add code to the component file\r\n\r\n```\r\nimport {ThreeStateCheckboxStatesEnum} from \'next-three-state-checkbox\';\r\n\r\nexport class AppComponent {\r\n  ...\r\n  public ThreeStateCheckboxStatesEnum = ThreeStateCheckboxStatesEnum;\r\n  public isCheckedReactiveForm = ThreeStateCheckboxStatesEnum.OFF;\r\n  \r\n  reactiveForm = new FormGroup({\r\n    threeStateCheckboxControl: new FormControl({value: isCheckedReactiveForm, disabled: false}),\r\n  });\r\n}\r\n```\r\n\r\n### Add murkup to the template file\r\n\r\n```\r\n<form [formGroup]="reactiveForm">\r\n    <next-three-state-checkbox\r\n        [required]="true"\r\n        [tabIndex]="1"\r\n        [id]="\'0\'"\r\n        formControlName="threeStateCheckboxControl"\r\n    ></next-three-state-checkboxe>\r\n    <label for="0">reactive form</label>\r\n</form>\r\n```\r\n\r\n### Template for this example looks like code below\r\n\r\n```\r\n<style>\r\n  .container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    font-size: 30px;\r\n  }\r\n  .checkbox-layout {\r\n    position: relative;\r\n    font-weight: 600;\r\n    margin: 0;\r\n  }\r\n  .container__row {\r\n    display: flex;\r\n    flex-direction: row;\r\n  }\r\n</style>\r\n\r\n<form class="container">\r\n    <div class="container__row">\r\n        <next-three-state-checkbox\r\n            [disabled]="false"\r\n            [required]="true"\r\n            [tabIndex]="1"\r\n            [id]="1"\r\n            [(ngModel)]="isChecked"\r\n            name="checkbox"\r\n        ></next-three-state-checkbox>\r\n        <label for="1" class="checkbox-layout">Label for three-state-checkbox</label>\r\n    </div>\r\n</form>\r\n```\r\n'},234:function(module,exports){module.exports='## Required checkbox\r\n\r\nIf checkbox is necessary / checkbox has to be checked, you have to pass true for required\r\n\r\n### Tempalte for this example looks like code below\r\n\r\n```\r\n<style>\r\n  .container {\r\n    display: flex;\r\n    flex-direction: column;\r\n  }\r\n  .checkbox-layout {\r\n    position: relative;\r\n    color: #9D9D9D;\r\n    font-weight: 600;\r\n    margin: 0;\r\n    display: flex;\r\n    align-items: center;\r\n    text-overflow: ellipsis;\r\n  }\r\n  .container__row {\r\n    display: flex;\r\n    flex-direction: row;\r\n  }\r\n  .submit-btn {\r\n    background-color: #0460a9;\r\n    border: none;\r\n    color: white;\r\n    padding: 15px 32px;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    display: block;\r\n    margin: 20px 0;\r\n    font-size: 16px;\r\n    cursor: pointer;\r\n  }\r\n</style>\r\n\r\n <form class="container" ngNativeValidate>\r\n  <div class="container__row">\r\n      <next-three-state-checkbox\r\n          [disabled]="false"\r\n          [required]="true"\r\n          [tabIndex]="1"\r\n          [id]="1"\r\n          [(ngModel)]="isChecked"\r\n          name="checkbox"\r\n      ></next-three-state-checkbox>\r\n      <label for="1" class="checkbox-layout">Required</label>\r\n  </div>\r\n  <div>\r\n    <input class="submit-btn" type="submit" />\r\n  </div>\r\n</form>\r\n```\r\n'},235:function(module,exports){module.exports='## Disabled checkbox\r\n\r\nIf user shouldn\'t have possibility to change checkbox mode, you have to pass true for disabled\r\n\r\n### Tempalte for this example looks like code below\r\n\r\n```\r\n<style>\r\n  .container {\r\n    display: flex;\r\n    flex-direction: column;\r\n  }\r\n  .checkbox-layout {\r\n    position: relative;\r\n    font-weight: 600;\r\n    margin: 0;\r\n  }\r\n  .container__row {\r\n    display: flex;\r\n    flex-direction: row;\r\n  }\r\n</style>\r\n\r\n<form class="container">\r\n\r\n  <div class="container__row">\r\n    <next-three-state-checkbox\r\n      [disabled]="false"\r\n      [required]="true"\r\n      [tabIndex]="1"\r\n      [id]="1"\r\n      [(ngModel)]="isFirstChecked"\r\n      name="checkbox1"\r\n    ></next-three-state-checkbox>\r\n    <label for="1" class="checkbox-layout">Checked</label>\r\n  </div>\r\n\r\n  <div class="container__row">\r\n    <next-three-state-checkbox\r\n      [disabled]="false"\r\n      [required]="true"\r\n      [tabIndex]="2"\r\n      [id]="2"\r\n      [(ngModel)]="isFirstInDetChecked"\r\n      name="checkbox2"\r\n    ></next-three-state-checkbox>\r\n    <label for="2" class="checkbox-layout">Indeterminate</label>\r\n  </div>\r\n\r\n  <div class="container__row">\r\n    <next-three-state-checkbox\r\n      [disabled]="false"\r\n      [required]="true"\r\n      [tabIndex]="3"\r\n      [id]="3"\r\n      [(ngModel)]="isFirstUnChecked"\r\n      name="checkbox3"\r\n    ></next-three-state-checkbox>\r\n    <label for="3" class="checkbox-layout">Unchecked</label>\r\n  </div>\r\n\r\n  <div class="container__row">\r\n    <next-three-state-checkbox\r\n      [disabled]="true"\r\n      [required]="true"\r\n      [tabIndex]="4"\r\n      [id]="4"\r\n      [(ngModel)]="isSecondCheckedDisabled"\r\n      name="checkbox4"\r\n    ></next-three-state-checkbox>\r\n    <label for="4" class="checkbox-layout">Checked disabled</label>\r\n  </div>\r\n\r\n  <div class="container__row">\r\n    <next-three-state-checkbox\r\n      [disabled]="true"\r\n      [required]="true"\r\n      [tabIndex]="5"\r\n      [id]="5"\r\n      [(ngModel)]="isSecondIndetCheckedDisabled"\r\n      name="checkbox5"\r\n    ></next-three-state-checkbox>\r\n    <label for="5" class="checkbox-layout">Indeterminate disabled</label>\r\n  </div>\r\n\r\n  <div class="container__row">\r\n    <next-three-state-checkbox\r\n      [disabled]="true"\r\n      [required]="true"\r\n      [tabIndex]="6"\r\n      [id]="6"\r\n      [(ngModel)]="isSecondUnCheckedDisabled"\r\n      name="checkbox6"\r\n    ></next-three-state-checkbox>\r\n    <label for="6" class="checkbox-layout">Indeterminate disabled</label>\r\n  </div>\r\n\r\n</form>\r\n```\r\n'},236:function(module,exports){module.exports='## Three state checkbox size\r\n\r\nCheckbox size depends on font size, developer should change just font size, checkbox size will be changed automatically\r\n\r\n### Tempalte for this example looks like code below\r\n\r\n```\r\n<style>\r\n  .container {\r\n    display: flex;\r\n    flex-direction: column;\r\n  }\r\n  .checkbox-layout {\r\n    position: relative;\r\n    font-weight: 600;\r\n    margin: 0;\r\n  }\r\n  .container__row {\r\n    display: flex;\r\n    flex-direction: row;\r\n  }\r\n  .small {\r\n      font-size: 10px;\r\n  }\r\n  .medium {\r\n    font-size: 16px;\r\n  }\r\n  .big {\r\n    font-size: 26px;\r\n  }\r\n</style>\r\n\r\n<form class="container">\r\n\r\n  <div class="container__row">\r\n    <next-three-state-checkbox class="small"\r\n      [disabled]="false"\r\n      [required]="true"\r\n      [tabIndex]="1"\r\n      [id]="1"\r\n      [(ngModel)]="isFirstChecked"\r\n      name="checkbox1"\r\n    ></next-three-state-checkbox>\r\n    <label for="1" class="small checkbox-layout">10px</label>\r\n  </div>\r\n\r\n  <div class="container__row">\r\n    <next-three-state-checkbox class="medium"\r\n      [disabled]="false"\r\n      [required]="true"\r\n      [tabIndex]="2"\r\n      [id]="2"\r\n      [(ngModel)]="isSecondChecked"\r\n      name="checkbox2"\r\n    ></next-three-state-checkbox>\r\n    <label for="2" class="medium checkbox-layout">16px</label>\r\n  </div>\r\n\r\n  <div class="container__row">\r\n    <next-three-state-checkbox class="big"\r\n      [disabled]="false"\r\n      [required]="true"\r\n      [tabIndex]="3"\r\n      [id]="3"\r\n      [(ngModel)]="isThirdChecked"\r\n      name="checkbox3"\r\n    ></next-three-state-checkbox>\r\n    <label for="3" class="big checkbox-layout">26px</label>\r\n  </div>\r\n</form>\r\n```\r\n'},237:function(module,exports){module.exports='## Element order\r\n\r\nCheckbox has input tabIndex parameter that\'s why it\'s possible to change elements order on page manually\r\n\r\n### Tempalte for this example looks like code below\r\n\r\n```\r\n<style>\r\n  .container {\r\n    display: flex;\r\n    flex-direction: column;\r\n  }\r\n  .checkbox-layout {\r\n    position: relative;\r\n    font-weight: 600;\r\n    margin: 0;\r\n  }\r\n  .container__row {\r\n    display: flex;\r\n    flex-direction: row;\r\n  }\r\n</style>\r\n\r\n\r\n<form class="container">\r\n\r\n  <div class="container__row">\r\n    <next-three-state-checkbox\r\n      [disabled]="false"\r\n      [required]="true"\r\n      [tabIndex]="2"\r\n      [id]="1"\r\n      [(ngModel)]="isFirstChecked"\r\n      name="checkbox1"\r\n    ></next-three-state-checkbox>\r\n    <label for="1" class="checkbox-layout">Second</label>\r\n  </div>\r\n\r\n  <div class="container__row">\r\n    <next-three-state-checkbox\r\n      [disabled]="false"\r\n      [required]="true"\r\n      [tabIndex]="4"\r\n      [id]="2"\r\n      [(ngModel)]="isSecondChecked"\r\n      name="checkbox2"\r\n    ></next-three-state-checkbox>\r\n    <label for="2" class="checkbox-layout">Fourth</label>\r\n  </div>\r\n\r\n  <div class="container__row">\r\n    <next-three-state-checkbox\r\n      [disabled]="false"\r\n      [required]="true"\r\n      [tabIndex]="1"\r\n      [id]="3"\r\n      [(ngModel)]="isThirdChecked"\r\n      name="checkbox3"\r\n    ></next-three-state-checkbox>\r\n    <label for="3" class="checkbox-layout">First</label>\r\n  </div>\r\n\r\n  <div class="container__row">\r\n    <next-three-state-checkbox\r\n      [disabled]="false"\r\n      [required]="true"\r\n      [tabIndex]="3"\r\n      [id]="4"\r\n      [(ngModel)]="isFourthCheked"\r\n      name="checkbox4"\r\n    ></next-three-state-checkbox>\r\n    <label for="4" class="checkbox-layout">Third</label>\r\n  </div>\r\n\r\n</form>\r\n\r\n```\r\n'},238:function(module,exports,__webpack_require__){__webpack_require__(239),__webpack_require__(320),__webpack_require__(321),module.exports=__webpack_require__(528)},321:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){__webpack_require__(23),__webpack_require__(24),__webpack_require__(25);var _storybook_angular__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(59),_storybook_addon_options__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(232);Object(_storybook_angular__WEBPACK_IMPORTED_MODULE_3__.addDecorator)(Object(_storybook_addon_options__WEBPACK_IMPORTED_MODULE_4__.withOptions)({name:"Storybook",url:"#",goFullScreen:!1,showStoriesPanel:!0,showAddonPanel:!0,showSearchBox:!1,addonPanelInRight:!0,sortStoriesByKind:!1,hierarchySeparator:null,hierarchyRootSeparator:null,sidebarAnimations:!0,selectedAddonPanel:void 0,enableShortcuts:!1}));var req=__webpack_require__(523);Object(_storybook_angular__WEBPACK_IMPORTED_MODULE_3__.configure)(function(){req.keys().forEach(function(filename){return req(filename)})},module)}.call(this,__webpack_require__(170)(module))},523:function(module,exports,__webpack_require__){var map={"./index.stories.ts":524};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){var id=map[req];if(!(id+1)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return id}webpackContext.keys=function(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=523},524:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){__webpack_require__.d(__webpack_exports__,"checkedState",function(){return checkedState}),__webpack_require__.d(__webpack_exports__,"checkedStatesForDifferentSize",function(){return checkedStatesForDifferentSize}),__webpack_require__.d(__webpack_exports__,"checkedStateforDisabled",function(){return checkedStateforDisabled}),__webpack_require__.d(__webpack_exports__,"checkedStatesForDiffTabIndex",function(){return checkedStatesForDiffTabIndex}),__webpack_require__.d(__webpack_exports__,"checkedRequired",function(){return checkedRequired});var _storybook_angular__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(59),_storybook_addon_notes__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(60),marked__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(61),_default_md__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(233),_required_md__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(234),_disabled_md__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(235),_sizes_md__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(236),_order_md__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(237),projects_next_three_state_checkbox_src_public_api__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(13),checkedState={isFirstChecked:projects_next_three_state_checkbox_src_public_api__WEBPACK_IMPORTED_MODULE_8__.b.ON},checkedStatesForDifferentSize={isFirstChecked:projects_next_three_state_checkbox_src_public_api__WEBPACK_IMPORTED_MODULE_8__.b.INDETERMINATE,isSecondChecked:projects_next_three_state_checkbox_src_public_api__WEBPACK_IMPORTED_MODULE_8__.b.OFF,isThirdChecked:projects_next_three_state_checkbox_src_public_api__WEBPACK_IMPORTED_MODULE_8__.b.ON},checkedStateforDisabled={isFirstChecked:projects_next_three_state_checkbox_src_public_api__WEBPACK_IMPORTED_MODULE_8__.b.ON,isFirstInDetChecked:projects_next_three_state_checkbox_src_public_api__WEBPACK_IMPORTED_MODULE_8__.b.INDETERMINATE,isFirstUnChecked:projects_next_three_state_checkbox_src_public_api__WEBPACK_IMPORTED_MODULE_8__.b.OFF,isSecondCheckedDisabled:projects_next_three_state_checkbox_src_public_api__WEBPACK_IMPORTED_MODULE_8__.b.ON,isSecondIndetCheckedDisabled:projects_next_three_state_checkbox_src_public_api__WEBPACK_IMPORTED_MODULE_8__.b.INDETERMINATE,isSecondUnCheckedDisabled:projects_next_three_state_checkbox_src_public_api__WEBPACK_IMPORTED_MODULE_8__.b.OFF},checkedStatesForDiffTabIndex={isFirstChecked:projects_next_three_state_checkbox_src_public_api__WEBPACK_IMPORTED_MODULE_8__.b.INDETERMINATE,isSecondChecked:projects_next_three_state_checkbox_src_public_api__WEBPACK_IMPORTED_MODULE_8__.b.OFF,isThirdChecked:projects_next_three_state_checkbox_src_public_api__WEBPACK_IMPORTED_MODULE_8__.b.ON,isFourthCheked:projects_next_three_state_checkbox_src_public_api__WEBPACK_IMPORTED_MODULE_8__.b.OFF},checkedRequired={isChecked:projects_next_three_state_checkbox_src_public_api__WEBPACK_IMPORTED_MODULE_8__.b.OFF},styles="\n  <style>\n  .container {\n    display: flex;\n    flex-direction: column;\n    font-size: 30px;\n    align-items: baseline;\n  }\n  .checkbox-layout {\n    position: relative;\n    font-weight: 600;\n    margin: 0;\n  }\n  .container__row {\n    display: flex;\n    flex-direction: row;\n  }\n  .small {\n    font-size: 10px;\n  }\n  .medium {\n    font-size: 16px;\n  }\n  .big {\n    font-size: 26px;\n  }\n  .submit-btn {\n    background-color: #0460a9;\n    border: none;\n    color: white;\n    padding: 15px 32px;\n    text-align: center;\n    text-decoration: none;\n    display: block;\n    margin: 20px 0;\n    font-size: 16px;\n    cursor: pointer;\n  }\n  </style>\n";Object(_storybook_angular__WEBPACK_IMPORTED_MODULE_0__.storiesOf)("Next-three-state-checkbox",module).addDecorator(Object(_storybook_angular__WEBPACK_IMPORTED_MODULE_0__.moduleMetadata)({declarations:[projects_next_three_state_checkbox_src_public_api__WEBPACK_IMPORTED_MODULE_8__.a]})).add("Install",Object(_storybook_addon_notes__WEBPACK_IMPORTED_MODULE_1__.withNotes)({text:marked__WEBPACK_IMPORTED_MODULE_2__(_default_md__WEBPACK_IMPORTED_MODULE_3__)})(function(){return{template:"\n      "+styles+'\n      <form class="container">\n        <div class="container__row">\n            <next-three-state-checkbox\n                [disabled]="false"\n                [required]="true"\n                [tabIndex]="1"\n                [id]="1"\n                [(ngModel)]="checkedState.isFirstChecked"\n                name="checkbox"\n            ></next-three-state-checkbox>\n            <label for="1" class="checkbox-layout">Label for three-state-checkbox</label>\n        </div>\n      </form>\n    ',props:{checkedState:checkedState}}})).add("With different font-sizes",Object(_storybook_addon_notes__WEBPACK_IMPORTED_MODULE_1__.withNotes)({text:marked__WEBPACK_IMPORTED_MODULE_2__(_sizes_md__WEBPACK_IMPORTED_MODULE_6__)})(function(){return{template:"\n        "+styles+'\n        <form class="container">\n\n          <div class="container__row">\n            <next-three-state-checkbox class="small"\n              [disabled]="false"\n              [required]="true"\n              [tabIndex]="1"\n              [id]="1"\n              [(ngModel)]="checkedStatesForDifferentSize.isFirstChecked"\n              name="checkbox1"\n            ></next-three-state-checkbox>\n            <label for="1" class="small checkbox-layout">10px</label>\n          </div>\n\n          <div class="container__row">\n            <next-three-state-checkbox class="medium"\n              [disabled]="false"\n              [required]="true"\n              [tabIndex]="2"\n              [id]="2"\n              [(ngModel)]="checkedStatesForDifferentSize.isSecondChecked"\n              name="checkbox2"\n            ></next-three-state-checkbox>\n            <label for="2" class="medium checkbox-layout">16px</label>\n          </div>\n\n          <div class="container__row">\n            <next-three-state-checkbox class="big"\n              [disabled]="false"\n              [required]="true"\n              [tabIndex]="3"\n              [id]="3"\n              [(ngModel)]="checkedStatesForDifferentSize.isThirdChecked"\n              name="checkbox3"\n            ></next-three-state-checkbox>\n            <label for="3" class="big checkbox-layout">26px</label>\n          </div>\n        </form>\n        ',props:{checkedStatesForDifferentSize:checkedStatesForDifferentSize}}})).add("With disabled checkbox",Object(_storybook_addon_notes__WEBPACK_IMPORTED_MODULE_1__.withNotes)({text:marked__WEBPACK_IMPORTED_MODULE_2__(_disabled_md__WEBPACK_IMPORTED_MODULE_5__)})(function(){return{template:"\n        "+styles+'\n        <form class="container">\n\n          <div class="container__row">\n            <next-three-state-checkbox\n              [disabled]="false"\n              [required]="true"\n              [tabIndex]="1"\n              [id]="1"\n              [(ngModel)]="checkedStateforDisabled.isFirstChecked"\n              name="checkbox1"\n            ></next-three-state-checkbox>\n            <label for="1" class="checkbox-layout">Checked</label>\n          </div>\n\n          <div class="container__row">\n            <next-three-state-checkbox\n              [disabled]="false"\n              [required]="true"\n              [tabIndex]="2"\n              [id]="2"\n              [(ngModel)]="checkedStateforDisabled.isFirstInDetChecked"\n              name="checkbox2"\n            ></next-three-state-checkbox>\n            <label for="2" class="checkbox-layout">Indeterminate</label>\n          </div>\n\n          <div class="container__row">\n            <next-three-state-checkbox\n              [disabled]="false"\n              [required]="true"\n              [tabIndex]="3"\n              [id]="3"\n              [(ngModel)]="checkedStateforDisabled.isFirstUnChecked"\n              name="checkbox3"\n            ></next-three-state-checkbox>\n            <label for="3" class="checkbox-layout">Unchecked</label>\n          </div>\n\n          <div class="container__row">\n            <next-three-state-checkbox\n              [disabled]="true"\n              [required]="true"\n              [tabIndex]="4"\n              [id]="4"\n              [(ngModel)]="checkedStateforDisabled.isSecondCheckedDisabled"\n              name="checkbox4"\n            ></next-three-state-checkbox>\n            <label for="4" class="checkbox-layout">Checked disabled</label>\n          </div>\n\n          <div class="container__row">\n            <next-three-state-checkbox\n              [disabled]="true"\n              [required]="true"\n              [tabIndex]="5"\n              [id]="5"\n              [(ngModel)]="checkedStateforDisabled.isSecondIndetCheckedDisabled"\n              name="checkbox5"\n            ></next-three-state-checkbox>\n            <label for="5" class="checkbox-layout">Indeterminate disabled</label>\n          </div>\n\n          <div class="container__row">\n            <next-three-state-checkbox\n              [disabled]="true"\n              [required]="true"\n              [tabIndex]="6"\n              [id]="6"\n              [(ngModel)]="checkedStateforDisabled.isSecondUnCheckedDisabled"\n              name="checkbox6"\n            ></next-three-state-checkbox>\n            <label for="6" class="checkbox-layout">Unchecked disabled</label>\n          </div>\n\n        </form>\n        ',props:{checkedStateforDisabled:checkedStateforDisabled}}})).add("With different tab indexes",Object(_storybook_addon_notes__WEBPACK_IMPORTED_MODULE_1__.withNotes)({text:marked__WEBPACK_IMPORTED_MODULE_2__(_order_md__WEBPACK_IMPORTED_MODULE_7__)})(function(){return{template:"\n        "+styles+'\n        <form class="container">\n\n          <div class="container__row">\n            <next-three-state-checkbox\n              [disabled]="false"\n              [required]="true"\n              [tabIndex]="2"\n              [id]="1"\n              [(ngModel)]="checkedStatesForDiffTabIndex.isFirstChecked"\n              name="checkbox1"\n            ></next-three-state-checkbox>\n            <label for="1" class="checkbox-layout">Second</label>\n          </div>\n\n          <div class="container__row">\n            <next-three-state-checkbox\n              [disabled]="false"\n              [required]="true"\n              [tabIndex]="4"\n              [id]="2"\n              [(ngModel)]="checkedStatesForDiffTabIndex.isSecondChecked"\n              name="checkbox2"\n            ></next-three-state-checkbox>\n            <label for="2" class="checkbox-layout">Fourth</label>\n          </div>\n\n          <div class="container__row">\n            <next-three-state-checkbox\n              [disabled]="false"\n              [required]="true"\n              [tabIndex]="1"\n              [id]="3"\n              [(ngModel)]="checkedStatesForDiffTabIndex.isThirdChecked"\n              name="checkbox3"\n            ></next-three-state-checkbox>\n            <label for="3" class="checkbox-layout">First</label>\n          </div>\n\n          <div class="container__row">\n            <next-three-state-checkbox\n              [disabled]="false"\n              [required]="true"\n              [tabIndex]="3"\n              [id]="4"\n              [(ngModel)]="checkedStatesForDiffTabIndex.isFourthCheked"\n              name="checkbox4"\n            ></next-three-state-checkbox>\n            <label for="4" class="checkbox-layout">Third</label>\n          </div>\n\n        </form>\n        ',props:{checkedStatesForDiffTabIndex:checkedStatesForDiffTabIndex}}})).add("With required attribute",Object(_storybook_addon_notes__WEBPACK_IMPORTED_MODULE_1__.withNotes)({text:marked__WEBPACK_IMPORTED_MODULE_2__(_required_md__WEBPACK_IMPORTED_MODULE_4__)})(function(){return{template:"\n      "+styles+'\n      <form class="container" ngNativeValidate>\n        <div class="container__row">\n            <next-three-state-checkbox\n                [disabled]="false"\n                [required]="true"\n                [tabIndex]="1"\n                [id]="1"\n                [(ngModel)]="checkedRequired.isChecked"\n                name="checkbox"\n            ></next-three-state-checkbox>\n            <label for="1" class="checkbox-layout">Required</label>\n        </div>\n        <div>\n          <input class="submit-btn" type="submit" />\n        </div>\n      </form>\n    ',props:{checkedRequired:checkedRequired}}}))}.call(this,__webpack_require__(170)(module))},526:function(module,exports){module.exports='<label class="checkbox-inner-container">\r\n  <input\r\n    type="checkbox"\r\n    #input\r\n    class="checkbox-input cdk-visually-hidden"\r\n    [class.indeterminate]="indeterminate"\r\n    [checked]="checked"\r\n    [disabled]="disabled"\r\n    [required]="required"\r\n    [tabIndex]="tabIndex"\r\n    [id]="inputId"\r\n    (click)="onChange()"\r\n  />\r\n  <i class="checkbox__icon">\r\n    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">\r\n      <path fill="currentColor" d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z" />\r\n    </svg>\r\n  </i>\r\n  <i class="checkbox__icon checkbox__icon--ind">\r\n    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">\r\n      <path fill="currentColor" d="M22 15 l-20 0 l0 -6 l20 0 z" />\r\n    </svg>\r\n  </i>\r\n</label>\r\n'},527:function(module,exports){module.exports=".cdk-visually-hidden {\n  border: 0;\n  clip: rect(0 0 0 0);\n  height: 1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  text-transform: none;\n  width: 1px;\n  bottom: 0;\n  left: 0;\n  margin-left: 33%; }\n\n.checkbox-inner-container {\n  white-space: nowrap;\n  padding: 0 0 0 1.5em;\n  position: relative;\n  cursor: pointer; }\n\n.checkbox input {\n  cursor: pointer;\n  height: 1px;\n  left: 1.25em;\n  margin: 0;\n  opacity: 0;\n  position: absolute;\n  bottom: 0;\n  width: 1px; }\n\n.checkbox__icon {\n  background-color: #fff;\n  background-color: var(--next-checkbox-white, #fff);\n  color: #fff;\n  color: var(--next-checkbox-white, #fff);\n  border: 2px solid #0460a9;\n  border: 2px solid var(--next-checkbox-blue, #0460a9);\n  height: 1em;\n  width: 1em;\n  position: absolute;\n  top: 50%;\n  left: 0;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n  box-sizing: border-box;\n  overflow: hidden;\n  background-image: none;\n  transition: background-color linear 0.1s; }\n\n.checkbox__icon svg {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%; }\n\ninput:focus ~ .checkbox__icon,\ninput:active ~ .checkbox__icon {\n  outline: -webkit-focus-ring-color auto 5px; }\n\ninput.indeterminate ~ .checkbox__icon--ind {\n  background-color: #0460a9;\n  background-color: var(--next-checkbox-blur, #0460a9);\n  border-color: #0460a9;\n  border-color: var(--next-checkbox-blue, #0460a9); }\n\ninput:checked ~ .checkbox__icon--ind {\n  display: none; }\n\ninput.indeterminate:checked ~ .checkbox__icon--ind {\n  display: block; }\n\ninput:checked:enabled ~ .checkbox__icon {\n  background-color: #0460a9;\n  background-color: var(--next-checkbox-blue, #0460a9);\n  border-color: #0460a9;\n  border-color: var(--next-checkbox-blue, #0460a9); }\n\ninput:disabled ~ .checkbox__icon {\n  border-color: #888;\n  border-color: var(--next-checkbox-placeholder-gray, #888); }\n\ninput:checked:disabled ~ .checkbox__icon,\ninput.indeterminate:disabled ~ .checkbox__icon {\n  background-color: #c6c6c6;\n  background-color: var(--next-checkbox-gray-medium, #c6c6c6); }\n"},528:function(module,exports,__webpack_require__){var content=__webpack_require__(529);"string"==typeof content&&(content=[[module.i,content,""]]);var options={hmr:!0,transform:void 0,insertInto:void 0};__webpack_require__(530)(content,options);content.locals&&(module.exports=content.locals)},529:function(module,exports){module.exports=[[module.i,"/* You can add global styles to this file, and also import other style files */\n","",""]]}},[[238,1,2]]]);
//# sourceMappingURL=main.b3a52f30ba62f61095a7.bundle.js.map