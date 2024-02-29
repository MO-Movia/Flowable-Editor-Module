/* Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 *      http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
'use strict';

var FLOWABLE = FLOWABLE || {};
FLOWABLE.PROPERTY_CONFIG =
{
    "string": {
        "templateUrl": "./assets/process/editor-app/configuration/properties/default-value-display-template.html",
        "readModeTemplateUrl": "./assets/process/editor-app/configuration/properties/default-value-display-template.html",
        "writeModeTemplateUrl": "./assets/process/editor-app/configuration/properties/string-property-write-mode-template.html"
    },
    "boolean": {
        "readModeTemplateUrl": "./assets/process/editor-app/configuration/properties/boolean-property-template.html",
        "writeModeTemplateUrl": "./assets/process/editor-app/configuration/properties/boolean-property-template.html"
    },
    "text" : {
        "readModeTemplateUrl": "./assets/process/editor-app/configuration/properties/default-value-display-template.html",
        "writeModeTemplateUrl": "./assets/process/editor-app/configuration/properties/text-property-write-template.html"
    },
    "flowable-calledelementtype" : {
        "readModeTemplateUrl": "./assets/process/editor-app/configuration/properties/default-value-display-template.html",
        "writeModeTemplateUrl": "./assets/process/editor-app/configuration/properties/calledelementtype-property-write-template.html"
    },
    "flowable-multiinstance" : {
        "readModeTemplateUrl": "./assets/process/editor-app/configuration/properties/default-value-display-template.html",
        "writeModeTemplateUrl": "./assets/process/editor-app/configuration/properties/multiinstance-property-write-template.html"
    },
    "flowable-processhistorylevel" : {
        "readModeTemplateUrl": "./assets/process/editor-app/configuration/properties/default-value-display-template.html",
        "writeModeTemplateUrl": "./assets/process/editor-app/configuration/properties/process-historylevel-property-write-template.html"
    },
    "flowable-ordering" : {
        "readModeTemplateUrl": "./assets/process/editor-app/configuration/properties/default-value-display-template.html",
        "writeModeTemplateUrl": "./assets/process/editor-app/configuration/properties/ordering-property-write-template.html"
    },
    "oryx-dataproperties-complex": {
        "readModeTemplateUrl": "./assets/process/editor-app/configuration/properties/data-properties-display-template.html",
        "writeModeTemplateUrl": "./assets/process/editor-app/configuration/properties/data-properties-write-template.html"
    },
    "oryx-formproperties-complex": {
        "readModeTemplateUrl": "./assets/process/editor-app/configuration/properties/form-properties-display-template.html",
        "writeModeTemplateUrl": "./assets/process/editor-app/configuration/properties/form-properties-write-template.html"
    },
    "oryx-executionlisteners-multiplecomplex": {
        "readModeTemplateUrl": "./assets/process/editor-app/configuration/properties/execution-listeners-display-template.html",
        "writeModeTemplateUrl": "./assets/process/editor-app/configuration/properties/execution-listeners-write-template.html"
    },
    "oryx-tasklisteners-multiplecomplex": {
        "readModeTemplateUrl": "./assets/process/editor-app/configuration/properties/task-listeners-display-template.html",
        "writeModeTemplateUrl": "./assets/process/editor-app/configuration/properties/task-listeners-write-template.html"
    },
    "oryx-eventlisteners-multiplecomplex": {
        "readModeTemplateUrl": "./assets/process/editor-app/configuration/properties/event-listeners-display-template.html",
        "writeModeTemplateUrl": "./assets/process/editor-app/configuration/properties/event-listeners-write-template.html"
    },
    "oryx-usertaskassignment-complex": {
        "readModeTemplateUrl": "./assets/process/editor-app/configuration/properties/assignment-display-template.html",
        "writeModeTemplateUrl": "./assets/process/editor-app/configuration/properties/assignment-write-template.html"
    },
    "oryx-servicetaskfields-complex": {
        "readModeTemplateUrl": "./assets/process/editor-app/configuration/properties/fields-display-template.html",
        "writeModeTemplateUrl": "./assets/process/editor-app/configuration/properties/fields-write-template.html"
    },
    "oryx-servicetaskexceptions-complex": {
        "readModeTemplateUrl": "./assets/process/editor-app/configuration/properties/exceptions-display-template.html",
        "writeModeTemplateUrl": "./assets/process/editor-app/configuration/properties/exceptions-write-template.html"
    },
    "oryx-callactivityinparameters-complex": {
        "readModeTemplateUrl": "./assets/process/editor-app/configuration/properties/in-parameters-display-template.html",
        "writeModeTemplateUrl": "./assets/process/editor-app/configuration/properties/in-parameters-write-template.html"
    },
    "oryx-callactivityoutparameters-complex": {
        "readModeTemplateUrl": "./assets/process/editor-app/configuration/properties/out-parameters-display-template.html",
        "writeModeTemplateUrl": "./assets/process/editor-app/configuration/properties/out-parameters-write-template.html"
    },
    "oryx-subprocessreference-subprocess-link": {
        "readModeTemplateUrl": "./assets/process/editor-app/configuration/properties/subprocess-reference-display-template.html",
        "writeModeTemplateUrl": "./assets/process/editor-app/configuration/properties/subprocess-reference-write-template.html"
    },
    "oryx-formreference-complex": {
        "readModeTemplateUrl": "./assets/process/editor-app/configuration/properties/form-reference-display-template.html",
        "writeModeTemplateUrl": "./assets/process/editor-app/configuration/properties/form-reference-write-template.html"
    },
    "oryx-sequencefloworder-complex" : {
        "readModeTemplateUrl": "./assets/process/editor-app/configuration/properties/sequenceflow-order-display-template.html",
        "writeModeTemplateUrl": "./assets/process/editor-app/configuration/properties/sequenceflow-order-write-template.html"
    },
    "oryx-conditionsequenceflow-complex" : {
        "readModeTemplateUrl": "./assets/process/editor-app/configuration/properties/condition-expression-display-template.html",
        "writeModeTemplateUrl": "./assets/process/editor-app/configuration/properties/condition-expression-write-template.html"
    },
    "oryx-signaldefinitions-multiplecomplex" : {
        "readModeTemplateUrl": "./assets/process/editor-app/configuration/properties/signal-definitions-display-template.html",
        "writeModeTemplateUrl": "./assets/process/editor-app/configuration/properties/signal-definitions-write-template.html"
    },
    "oryx-signalref-string" : {
        "readModeTemplateUrl": "./assets/process/editor-app/configuration/properties/default-value-display-template.html",
        "writeModeTemplateUrl": "./assets/process/editor-app/configuration/properties/signal-property-write-template.html"
    },
    "oryx-messagedefinitions-multiplecomplex" : {
        "readModeTemplateUrl": "./assets/process/editor-app/configuration/properties/message-definitions-display-template.html",
        "writeModeTemplateUrl": "./assets/process/editor-app/configuration/properties/message-definitions-write-template.html"
    },
    "oryx-messageref-string" : {
        "readModeTemplateUrl": "./assets/process/editor-app/configuration/properties/default-value-display-template.html",
        "writeModeTemplateUrl": "./assets/process/editor-app/configuration/properties/message-property-write-template.html"
    },
    "oryx-escalationdefinitions-multiplecomplex" : {
        "readModeTemplateUrl": "./assets/process/editor-app/configuration/properties/escalation-definitions-display-template.html",
        "writeModeTemplateUrl": "./assets/process/editor-app/configuration/properties/escalation-definitions-write-template.html"
    },
    "oryx-escalationref-string" : {
        "readModeTemplateUrl": "./assets/process/editor-app/configuration/properties/default-value-display-template.html",
        "writeModeTemplateUrl": "./assets/process/editor-app/configuration/properties/escalation-property-write-template.html"
    },
    "oryx-duedatedefinition-complex": {
        "readModeTemplateUrl": "./assets/process/editor-app/configuration/properties/duedate-display-template.html",
        "writeModeTemplateUrl": "./assets/process/editor-app/configuration/properties/duedate-write-template.html"
    },
    "oryx-decisiontaskdecisiontablereference-complex": {
        "readModeTemplateUrl": "./assets/process/editor-app/configuration/properties/decisiontable-reference-display-template.html",
        "writeModeTemplateUrl": "./assets/process/editor-app/configuration/properties/decisiontable-reference-write-template.html"
    },
    "oryx-decisiontaskdecisionservicereference-complex": {
        "readModeTemplateUrl": "./assets/process/editor-app/configuration/properties/decisionservice-reference-display-template.html",
        "writeModeTemplateUrl": "./assets/process/editor-app/configuration/properties/decisionservice-reference-write-template.html"
    },
    "oryx-decisiondecisiontablereference-complex": {
        "readModeTemplateUrl": "./assets/process/editor-app/configuration/properties/decisiontable-reference-display-template.html",
        "writeModeTemplateUrl": "./assets/process/editor-app/configuration/properties/decisiontable-reference-write-template.html"
    },
    "oryx-casetaskcasereference-complex": {
        "readModeTemplateUrl": "./assets/process/editor-app/configuration/properties/case-reference-display-template.html",
        "writeModeTemplateUrl": "./assets/process/editor-app/configuration/properties/case-reference-write-template.html"
    },
    "oryx-processtaskprocessreference-complex": {
        "readModeTemplateUrl": "./assets/process/editor-app/configuration/properties/process-reference-display-template.html",
        "writeModeTemplateUrl": "./assets/process/editor-app/configuration/properties/process-reference-write-template.html"
    },
    "oryx-processtaskinparameters-complex": {
        "readModeTemplateUrl": "./assets/process/editor-app/configuration/properties/in-parameters-display-template.html",
        "writeModeTemplateUrl": "./assets/process/editor-app/configuration/properties/in-parameters-write-template.html"
    },
    "oryx-processtaskoutparameters-complex": {
        "readModeTemplateUrl": "./assets/process/editor-app/configuration/properties/out-parameters-display-template.html",
        "writeModeTemplateUrl": "./assets/process/editor-app/configuration/properties/out-parameters-write-template.html"
    },
    "oryx-casetaskinparameters-complex": {
        "readModeTemplateUrl": "./assets/process/editor-app/configuration/properties/in-parameters-display-template.html",
        "writeModeTemplateUrl": "./assets/process/editor-app/configuration/properties/in-parameters-write-template.html"
    },
    "oryx-casetaskoutparameters-complex": {
        "readModeTemplateUrl": "./assets/process/editor-app/configuration/properties/out-parameters-display-template.html",
        "writeModeTemplateUrl": "./assets/process/editor-app/configuration/properties/out-parameters-write-template.html"
    },
    "oryx-planitemlifecyclelisteners-multiplecomplex": {
        "readModeTemplateUrl": "./assets/process/editor-app/configuration/properties/plan-item-lifecycle-listeners-display-template.html",
        "writeModeTemplateUrl": "./assets/process/editor-app/configuration/properties/plan-item-lifecycle-listeners-write-template.html"
     },
    "flowable-transitionevent" : {
        "readModeTemplateUrl": "./assets/process/editor-app/configuration/properties/default-value-display-template.html",
        "writeModeTemplateUrl": "./assets/process/editor-app/configuration/properties/transition-event-write-template.html"
    },
    "flowable-planitem-dropdown" : {
        "readModeTemplateUrl": "./assets/process/editor-app/configuration/properties/planitem-dropdown-read-template.html",
        "writeModeTemplateUrl": "./assets/process/editor-app/configuration/properties/planitem-dropdown-write-template.html"
    },
    "flowable-http-request-method" : {
        "readModeTemplateUrl": "./assets/process/editor-app/configuration/properties/http-request-method-display-template.html",
        "writeModeTemplateUrl": "./assets/process/editor-app/configuration/properties/http-request-method-property-write-template.html"
    },
    "flowable-triggermode" : {
        "readModeTemplateUrl": "./assets/process/editor-app/configuration/properties/trigger-mode-read-template.html",
        "writeModeTemplateUrl": "./assets/process/editor-app/configuration/properties/trigger-mode-write-template.html"
    },
    "oryx-eventinparameters-complex": {
        "readModeTemplateUrl": "./assets/process/editor-app/configuration/properties/event-in-parameters-display-template.html",
        "writeModeTemplateUrl": "./assets/process/editor-app/configuration/properties/event-in-parameters-write-template.html"
    },
    "oryx-eventoutparameters-complex": {
        "readModeTemplateUrl": "./assets/process/editor-app/configuration/properties/event-out-parameters-display-template.html",
        "writeModeTemplateUrl": "./assets/process/editor-app/configuration/properties/event-out-parameters-write-template.html"
    },
    "oryx-eventcorrelationparameters-complex": {
        "readModeTemplateUrl": "./assets/process/editor-app/configuration/properties/event-correlation-parameters-display-template.html",
        "writeModeTemplateUrl": "./assets/process/editor-app/configuration/properties/event-correlation-parameters-write-template.html"
    },
    "flowable-channeltype" : {
        "readModeTemplateUrl": "./assets/process/editor-app/configuration/properties/default-value-display-template.html",
        "writeModeTemplateUrl": "./assets/process/editor-app/configuration/properties/event-channel-type-property-write-template.html"
    }
};
