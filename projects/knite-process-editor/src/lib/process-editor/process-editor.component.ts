import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';

@Component({
  selector: 'lib-process-editor',
  standalone: true,
  imports: [],
  templateUrl: './process-editor.component.html',
  styleUrl: './process-editor.component.css'
})
export class ProcessEditorComponent {

  constructor(@Inject(DOCUMENT) private document: Document){}

  ngOnInit() {

    const window = this.document.defaultView;
    if(window) {
      window.sessionStorage.setItem("editorJson1", "abc");
    }

    const scriptSrcArr = [
       "./assets/process/libs/jquery_1.11.0/jquery.min.js"
      , "./assets/process/libs/jquery_1.11.0/jquery.min.js"
      , "./assets/process/libs/jquery-ui-1.10.3.min.js"
      , "./assets/process/libs/jquery-ui-1.10.3.custom.min.js"
      , "./assets/process/libs/angular_1.3.13/angular.js"
      , "./assets/process/libs/angular_1.3.13/angular-resource.min.js"
      , "./assets/process/libs/angular-animate_1.3.13/angular-animate.min.js"
      , "./assets/process/libs/bootstrap_3.1.1/js/bootstrap.min.js"
      , "./assets/process/libs/angular-cookies_1.3.13/angular-cookies.min.js"
      , "./assets/process/libs/angular-sanitize_1.3.13/angular-sanitize.min.js"
      , "./assets/process/libs/angular-route_1.3.13/angular-route.min.js"
      , "./assets/process/libs/angular-translate_2.15.1/angular-translate.min.js"
      , "./assets/process/libs/angular-translate-storage-cookie/angular-translate-storage-cookie.js"
      , "./assets/process/libs/angular-translate-loader-static-files/angular-translate-loader-static-files.js"
      , "./assets/process/libs/angular-strap_2.1.6/angular-strap.min.js"
      , "./assets/process/libs/angular-strap_2.1.6/angular-strap.tpl.min.js"
      , "./assets/process/libs/momentjs_2.18.1/momentjs.min.js"
      , "./assets/process/libs/bootstrap-tour_0.9.1/bootstrap-tour.min.js"
      , "./assets/process/libs/ng-file-upload/ng-file-upload-shim.min.js"
      , "./assets/process/libs/ng-file-upload/ng-file-upload.min.js"
      , "./assets/process/editor-app/libs/ui-utils.min-0.2.1.js"
      , "./assets/process/libs/ui-grid_3.0.0/ui-grid.js"
      , "./assets/process/libs/angular-dragdrop_1.0.11/angular-dragdrop.min.js"
      , "./assets/process/editor-app/libs/mousetrap/1.6.0/mousetrap.min.js"
      , "./assets/process/editor-app/libs/jquery.autogrow-textarea.js"
      , "./assets/process/libs/handsontable_0.31.2/handsontable.full.min.js"
      , "./assets/process/libs/ng-handsontable_0.13/ngHandsontable.js"
      , "./assets/process/editor-app/libs/prototype-1.7.3.js"
      , "./assets/process/editor-app/libs/path_parser.js"
      , "./assets/process/libs/angular-spectrum-colorpicker_1.0.13/spectrum.js"
      , "./assets/process/libs/angular-spectrum-colorpicker_1.0.13/angular-spectrum-colorpicker.min.js"
      , "./assets/process/libs/angular-scroll_0.5.7/angular-scroll.min.js"
      , "./assets/process/libs/angular-drag-and-drop-lists_1.2.0/angular-drag-and-drop-lists.js"
      , "./assets/process/libs/html2canvas_0.4.1/html2canvas.js"
      , "./assets/process/scripts/app-cfg.js?v=2"
      , "./assets/process/editor-app/editor/i18n/translation_en_us.js"
      , "./assets/process/editor-app/editor/i18n/translation_signavio_en_us.js"
      , "./assets/process/editor-app/editor/oryx.debug.js"
      , "./assets/process/scripts/app.js"
      , "./assets/process/scripts/configuration/url-config.js"
      , "./assets/process/scripts/editor-directives.js"
      , "./assets/process/scripts/controllers/processes.js"
      , "./assets/process/scripts/controllers/process.js"
      , "./assets/process/scripts/controllers/casemodels.js"
      , "./assets/process/scripts/controllers/casemodel.js"
      , "./assets/process/scripts/controllers/forms.js"
      , "./assets/process/scripts/controllers/form.js"
      , "./assets/process/scripts/controllers/decisions.js"
      , "./assets/process/scripts/controllers/decision-table.js"
      , "./assets/process/scripts/controllers/decision-service.js"
      , "./assets/process/scripts/controllers/app-definitions.js"
      , "./assets/process/scripts/controllers/app-definition.js"
      , "./assets/process/scripts/controllers/model-common-actions.js"
      , "./assets/process/scripts/services/util-services.js"
      , "./assets/process/scripts/services/identity-services.js"
      , "./assets/process/scripts/services/form-services.js"
      , "./assets/process/scripts/controllers/form-builder.js"
      , "./assets/process/scripts/configuration/form-builder-toolbar-default-actions.js"
      , "./assets/process/scripts/configuration/form-builder-toolbar.js"
      , "./assets/process/scripts/controllers/form-toolbar-controller.js"
      , "./assets/process/scripts/controllers/form-readonly-view.js"
      , "./assets/process/scripts/services/decision-table-service.js"
      , "./assets/process/scripts/controllers/decision-table-editor.js"
      , "./assets/process/scripts/configuration/decision-table-toolbar-default-actions.js"
      , "./assets/process/scripts/configuration/decision-table-toolbar.js"
      , "./assets/process/scripts/controllers/decision-table-toolbar-controller.js"
      , "./assets/process/scripts/controllers/app-definition-builder.js"
      , "./assets/process/scripts/configuration/app-definition-toolbar-default-actions.js"
      , "./assets/process/scripts/configuration/app-definition-toolbar.js"
      , "./assets/process/scripts/controllers/app-definition-toolbar-controller.js"
      , "./assets/process/editor-app/eventbus.js"
      , "./assets/process/editor-app/editor-controller.js"
      , "./assets/process/editor-app/stencil-controller.js"
      , "./assets/process/editor-app/toolbar-controller.js"
      , "./assets/process/editor-app/header-controller.js"
      , "./assets/process/editor-app/select-shape-controller.js"
      , "./assets/process/editor-app/define-data-controller.js"
      , "./assets/process/editor-app/process-navigator-controller.js"
      , "./assets/process/editor-app/editormanager.js"
      , "./assets/process/editor-app/tour.js"
      , "./assets/process/editor-app/editor-utils.js"
      , "./assets/process/editor-app/configuration/toolbar-default-actions.js"
      , "./assets/process/editor-app/configuration/properties-data-properties-controller.js"
      , "./assets/process/editor-app/configuration/properties-default-controllers.js"
      , "./assets/process/editor-app/configuration/properties-execution-listeners-controller.js"
      , "./assets/process/editor-app/configuration/properties-event-listeners-controller.js"
      , "./assets/process/editor-app/configuration/properties-assignment-controller.js"
      , "./assets/process/editor-app/configuration/properties-fields-controller.js"
      , "./assets/process/editor-app/configuration/properties-exceptions-controller.js"
      , "./assets/process/editor-app/configuration/properties-form-properties-controller.js"
      , "./assets/process/editor-app/configuration/properties-in-parameters-controller.js"
      , "./assets/process/editor-app/configuration/properties-calledelementtype-controller.js"
      , "./assets/process/editor-app/configuration/properties-multiinstance-controller.js"
      , "./assets/process/editor-app/configuration/properties-process-historylevel-controller.js"
      , "./assets/process/editor-app/configuration/properties-ordering-controller.js"
      , "./assets/process/editor-app/configuration/properties-out-parameters-controller.js"
      , "./assets/process/editor-app/configuration/properties-task-listeners-controller.js"
      , "./assets/process/editor-app/configuration/properties-form-reference-controller.js"
      , "./assets/process/editor-app/configuration/properties-sequenceflow-order-controller.js"
      , "./assets/process/editor-app/configuration/properties-condition-expression-controller.js"
      , "./assets/process/editor-app/configuration/properties-signal-definitions-controller.js"
      , "./assets/process/editor-app/configuration/properties-signal-scope-controller.js"
      , "./assets/process/editor-app/configuration/properties-message-definitions-controller.js"
      , "./assets/process/editor-app/configuration/properties-message-scope-controller.js"
      , "./assets/process/editor-app/configuration/properties-escalation-definitions-controller.js"
      , "./assets/process/editor-app/configuration/properties-escalation-scope-controller.js"
      , "./assets/process/editor-app/configuration/properties-duedate-controller.js"
      , "./assets/process/editor-app/configuration/properties-decisiontable-reference-controller.js"
      , "./assets/process/editor-app/configuration/properties-decisionservice-reference-controller.js"
      , "./assets/process/editor-app/configuration/properties-case-reference-controller.js"
      , "./assets/process/editor-app/configuration/properties-process-reference-controller.js"
      , "./assets/process/editor-app/configuration/properties-transition-event-controller.js"
      , "./assets/process/editor-app/configuration/properties-trigger-mode-controller.js"
      , "./assets/process/editor-app/configuration/properties-planitem-dropdown-controller.js"
      , "./assets/process/editor-app/configuration/properties-plan-item-lifecycle-listeners-controller.js"
      , "./assets/process/editor-app/configuration/properties-httprequest-controller.js"
      , "./assets/process/editor-app/configuration/properties-event-in-parameters-controller.js"
      , "./assets/process/editor-app/configuration/properties-event-out-parameters-controller.js"
      , "./assets/process/editor-app/configuration/properties-event-correlation-parameters-controller.js"
      , "./assets/process/editor-app/configuration/properties-event-channel-type-controller.js"
      , "./assets/process/editor-app/editor-config.js"
      , "./assets/process/editor-app/configuration/url-config.js"
      , "./assets/process/editor-app/configuration/toolbar.js"
      , "./assets/process/editor-app/configuration/toolbar-custom-actions.js"
      , "./assets/process/editor-app/configuration/properties.js"
      , "./assets/process/editor-app/configuration/properties-custom-controllers.js"
      , "./assets/process/editor-app/configuration/flowable-header-custom.js"
      , "./assets/process/editor-app/configuration/flowable-toolbar-custom-actions.js"
      , "./assets/process/scripts/common/directives.js"
      , "./assets/process/scripts/common/providers-config.js"
      , "./assets/process/scripts/common/services/resource-service.js"
      , "./assets/process/scripts/common/services/recursion-helper.js"
      , "./assets/process/scripts/common/controllers/about.js"
      , "./assets/process/scripts/resource-loader.js?v=2"
    ];

    let sctr = 0;
    const doScript = () => {
      if (sctr++ >= scriptSrcArr.length) {
        console.log('all scripts loaded syncronously');
        return;
      }
      const scriptPromise = new Promise((resolve, reject) => {

        let body = <HTMLDivElement>this.document.body;
        let script = this.document.createElement('script');
        script.innerHTML = '';
        script.src = scriptSrcArr[sctr];
        script.type = "text/javascript";
        script.onload = resolve;
        script.onerror = reject;
        body.appendChild(script);
      });

      scriptPromise.then(() => {
        console.log(scriptSrcArr[sctr], 'loaded');
        doScript();
      },
        (err) => {
          console.error(scriptSrcArr[sctr], 'failed', err);
          // halting
        });
    }

    doScript();
  }
}
