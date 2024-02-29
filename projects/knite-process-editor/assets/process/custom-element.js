const template = document.createElement('template');
template.innerHTML = `
   
    <div ng-app="flowableModeler" ng-cloak>
        <div class="navbar navbar-fixed-top navbar-inverse" role="navigation" id="main-header">
            <div class="fixed-container">
                <div class="navbar-header">
                    <a ng-click="backToLanding()" class="landing-logo" ng-if="account != null && account != undefined" title="{{'GENERAL.MAIN-TITLE' | translate}}">
                        <img ng-src="images/flowable-logo.png" ng-srcset="images/flowable-logo.png 1x, images/flowable-logo@2x.png 2x">
                    </a>
                    <ul class="nav navbar-nav" id="main-nav" ng-show="authenticated">
                        <li ng-class="{'active' : item.id == mainPage.id}" ng-repeat="item in mainNavigation">
                            <a ng-click="setMainPage(item)">{{item.title | translate}}</a>
                        </li>
                    </ul>
                </div>
                <div class="pull-right {{currentAppDefinition.definition.theme}}"
                    ng-class="{'app-indicator': currentAppDefinition}" ng-if="authenticated" ng-cloack>
                    <span ng-if="currentAppDefinition.definition.theme">
                        {{currentAppDefinition.name}}
                    </span>
                    <i class="glyphicon {{currentAppDefinition.definition.icon}}"></i>

                    <div class="dropdown btn-group btn-group-sm" activiti-fix-dropdown-bug>
                        <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">
                            {{account.firstName && account.firstName != 'null' ? account.firstName : ''}} {{account.lastName && account.lastName != 'null' ? account.lastName : ''}}
                            <span class="glyphicon glyphicon-chevron-down" style="font-size: 10px" aria-hidden="true"></span>
                        </button>
                        <ul class="dropdown-menu pull-right">
                            <li><a href="" ng-click="backToLanding()" translate>GENERAL.ACTION.DASHBOARD</a></li>
                            <li><a href="" ng-click="logout()" translate>GENERAL.ACTION.LOGOUT</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <!--[if lt IE 9]>
        <div class="unsupported-browser">
            <p class="alert error">You are using an unsupported browser. Please upgrade your browser in order to use the
                editor.</p>
        </div>
        <![endif]-->
        <!--[if IE 9]>
        <div id="no-flash-message" class="unsupported-browser" style="display: none">
            <p class="alert error">No Adobe Flash installed. Please install Adobe Flash in order to use the file upload capabilities on this version of Internet Explorer.</p>
        </div>
        <script>
            var hasFlash = false;
            try {
                hasFlash = Boolean(new ActiveXObject('ShockwaveFlash.ShockwaveFlash'));
            } catch(exception) {
                hasFlash = ('undefined' != typeof navigator.mimeTypes['application/x-shockwave-flash']);
            }
            if (!hasFlash) {
                var showNoFlashMessage = function () {
                    var element = document.getElementById('no-flash-message');
                    element.style.display="block";
                };
                showNoFlashMessage();
            }
        </script>
        <![endif]-->
        <div class="alert-wrapper" ng-cloak>
            <div class="alert fadein {{alerts.current.type}}" ng-if="alerts.current" ng-click="dismissAlert()">
                <i class="glyphicon"
                ng-class="{'glyphicon-ok': alerts.current.type == 'info', 'glyphicon-remove': alerts.current.type == 'error'}"></i>
                <span>{{alerts.current.message}}</span>

                <div class="pull-right" ng-show="alerts.queue.length > 0">
                    <span class="badge">{{alerts.queue.length + 1}}</span>
                </div>
            </div>
        </div>

        <div id="main" class="wrapper full clearfix" ng-view="" ng-cloak ng-style="{height: window.height + 'px'}">
        </div>
    
    </div>

`;


// Create a class for the element
class MyCustomElement extends HTMLElement {
    static observedAttributes = ["color", "size"];

    constructor() {
        // Always call super first in constructor
        super();
    }

    connectedCallback() {
        // shadow dom
       this.innerHTML = `
       <div ng-app="flowableModeler" ng-cloak>
        <div class="navbar navbar-fixed-top navbar-inverse" role="navigation" id="main-header">
            <div class="fixed-container">
                <div class="navbar-header">
                    <a ng-click="backToLanding()" class="landing-logo" ng-if="account != null && account != undefined"
                        title="{{'GENERAL.MAIN-TITLE' | translate}}">
                        <img ng-src="images/flowable-logo.png"
                            ng-srcset="images/flowable-logo.png 1x, images/flowable-logo@2x.png 2x">
                    </a>
                    <ul class="nav navbar-nav" id="main-nav" ng-show="authenticated">
                        <li ng-class="{'active' : item.id == mainPage.id}" ng-repeat="item in mainNavigation">
                            <a ng-click="setMainPage(item)">{{item.title | translate}}</a>
                        </li>
                    </ul>
                </div>
                <div class="pull-right {{currentAppDefinition.definition.theme}}"
                    ng-class="{'app-indicator': currentAppDefinition}" ng-if="authenticated" ng-cloack>
                    <span ng-if="currentAppDefinition.definition.theme">
                        {{currentAppDefinition.name}}
                    </span>
                    <i class="glyphicon {{currentAppDefinition.definition.icon}}"></i>

                    <div class="dropdown btn-group btn-group-sm" activiti-fix-dropdown-bug>
                        <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">
                            {{account.firstName && account.firstName != 'null' ? account.firstName : ''}}
                            {{account.lastName && account.lastName != 'null' ? account.lastName : ''}}
                            <span class="glyphicon glyphicon-chevron-down" style="font-size: 10px"
                                aria-hidden="true"></span>
                        </button>
                        <ul class="dropdown-menu pull-right">
                            <li><a href="" ng-click="backToLanding()" translate>GENERAL.ACTION.DASHBOARD</a></li>
                            <li><a href="" ng-click="logout()" translate>GENERAL.ACTION.LOGOUT</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>


        <div class="alert-wrapper" ng-cloak>
            <div class="alert fadein {{alerts.current.type}}" ng-if="alerts.current" ng-click="dismissAlert()">
                <i class="glyphicon"
                    ng-class="{'glyphicon-ok': alerts.current.type == 'info', 'glyphicon-remove': alerts.current.type == 'error'}"></i>
                <span>{{alerts.current.message}}</span>

                <div class="pull-right" ng-show="alerts.queue.length > 0">
                    <span class="badge">{{alerts.queue.length + 1}}</span>
                </div>
            </div>
        </div>

        <div id="main" class="wrapper full clearfix" ng-view="" ng-cloak ng-style="{height: window.height + 'px'}">
        </div>
    </div>
       `;
    }

    disconnectedCallback() {
        console.log("Custom element removed from page.");
    }

    adoptedCallback() {
        console.log("Custom element moved to new page.");
    }

    attributeChangedCallback(name, oldValue, newValue) {
        console.log(`Attribute ${name} has changed.`);
    }
}

customElements.define("my-custom-element", MyCustomElement);
