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

var flowableModeler = angular.module('flowableModeler', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'ngDragDrop',
    'mgcrea.ngStrap',
    'mgcrea.ngStrap.helpers.dimensions', // Needed for tooltips
    'ui.grid',
    'ui.grid.edit',
    'ui.grid.selection',
    'ui.grid.autoResize',
    'ui.grid.moveColumns',
    'ui.grid.cellNav',
    'ngAnimate',
    'pascalprecht.translate',
    'ngFileUpload',
    'angularSpectrumColorpicker',
    'duScroll',
    'dndLists',
    'ngHandsontable'
]);

var flowableModule = flowableModeler;
var flowableApp = flowableModeler;

flowableModeler
    // Initialize routes
    .config(['$provide', '$routeProvider', '$selectProvider', '$translateProvider', function ($provide, $routeProvider, $selectProvider, $translateProvider) {

        // Override caret for bs-select directive
        angular.extend($selectProvider.defaults, {
            caretHtml: '&nbsp;<i class="icon icon-caret-down"></i>'
        });

        $routeProvider
            .when('/processes', {
                templateUrl: './assets/process/views/processes.html',
                controller: 'ProcessesCtrl'
            })
            .when('/processes/:modelId', {
                templateUrl: './assets/process/views/process.html',
                controller: 'ProcessCtrl'
            })
            .when('/processes/:modelId/history/:modelHistoryId', {
                templateUrl: './assets/process/views/process.html',
                controller: 'ProcessCtrl'
            })
            .when('/casemodels', {
                templateUrl: './assets/process/views/casemodels.html',
                controller: 'CaseModelsCtrl'
            })
            .when('/casemodels/:modelId', {
                templateUrl: './assets/process/views/casemodel.html',
                controller: 'CaseModelCtrl'
            })
            .when('/forms', {
                templateUrl: './assets/process/views/forms.html',
                controller: 'FormsCtrl'
            })
            .when('/forms/:modelId', {
                templateUrl: './assets/process/views/form.html',
                controller: 'FormCtrl'
            })
            .when('/forms/:modelId/history/:modelHistoryId', {
                templateUrl: './assets/process/views/form.html',
                controller: 'FormCtrl'
            })
            .when('/decisions', {
                templateUrl: './assets/process/views/decisions.html',
                controller: 'DecisionsController',
                resolve: {
                    modelType: () => 4
                }
            })
            .when('/decision-tables', {
                templateUrl: './assets/process/views/decisions.html',
                controller: 'DecisionsController',
                resolve: {
                    modelType: () => 4
                }
            })
            .when('/decision-services', {
                templateUrl: './assets/process/views/decisions.html',
                controller: 'DecisionsController',
                resolve: {
                    modelType: () => 6
                }
            })
            .when('/decision-tables/:modelId', {
                templateUrl: './assets/process/views/decision-table.html',
                controller: 'DecisionTableDetailsCtrl'
            })
            .when('/decision-tables/:modelId/history/:modelHistoryId', {
                templateUrl: './assets/process/views/decision-table.html',
                controller: 'DecisionTableDetailsCtrl'
            })
            .when('/apps', {
                templateUrl: './assets/process/views/app-definitions.html',
                controller: 'AppDefinitionsCtrl'
            })
            .when('/apps/:modelId', {
                templateUrl: './assets/process/views/app-definition.html',
                controller: 'AppDefinitionCtrl'
            })
            .when('/apps/:modelId/history/:modelHistoryId', {
                templateUrl: './assets/process/views/app-definition.html',
                controller: 'AppDefinitionCtrl'
            })
            .when('/editor/:modelId', {
                templateUrl: './assets/process/editor-app/editor.html',
                controller: 'EditorController'
            })
            .when('/form-editor/:modelId', {
                templateUrl: './assets/process/views/form-builder.html',
                controller: 'FormBuilderController'
            })
            .when('/case-editor/:modelId', {
                templateUrl: './assets/process/editor-app/editor.html',
                controller: 'EditorController'
            })
            .when('/decision-table-editor/:modelId', {
                templateUrl: './assets/process/views/decision-table-editor.html',
                controller: 'DecisionTableEditorController'
            })
            .when('/app-editor/:modelId', {
                templateUrl: './assets/process/views/app-definition-builder.html',
                controller: 'AppDefinitionBuilderController'
            })
            .when('/decision-service-editor/:modelId', {
                templateUrl: './assets/process/editor-app/editor.html',
                controller: 'EditorController'
            })
            .when('/decision-services/:modelId', {
                templateUrl: './assets/process/views/decision-service.html',
                controller: 'DecisionServiceDetailsCtrl'
            })
            .when('/decision-services/:modelId/history/:modelHistoryId', {
                templateUrl: './assets/process/views/decision-service.html',
                controller: 'DecisionServiceDetailsCtrl'
            });

        if (FLOWABLE.CONFIG.appDefaultRoute) {
            $routeProvider.when('/', {
                redirectTo: FLOWABLE.CONFIG.appDefaultRoute
            });

        } else {
            var modelId = window.sessionStorage.getItem("model-id");
            $routeProvider.when('/', {
                redirectTo: '/editor/' + modelId
            });
            // $routeProvider.when('/', {
            //     redirectTo: '/processes'
            // });

            //processes
        }

        // Initialize angular-translate
        $translateProvider.useStaticFilesLoader({
            prefix: './assets/process/i18n/',
            suffix: '.json'
        })
            /*
            This can be used to map multiple browser language keys to a
            angular translate language key.
            */
            // .registerAvailableLanguageKeys(['en'], {
            //     'en-*': 'en'
            // })
            .useSanitizeValueStrategy('escapeParameters')
            .uniformLanguageTag('bcp47')
            .determinePreferredLanguage();

    }])
    .run(['$rootScope', '$timeout', '$modal', '$translate', '$location', '$http', '$window',
        function ($rootScope, $timeout, $modal, $translate, $location, $http, $window) {

            // set angular translate fallback language
            $translate.fallbackLanguage(['en']);

            // setting Moment-JS (global) locale
            if (FLOWABLE.CONFIG.datesLocalization) {
                moment.locale($translate.proposedLanguage());
            }

            $rootScope.restRootUrl = function () {
                return FLOWABLE.CONFIG.contextRoot;
            };

            $rootScope.window = {};
            var updateWindowSize = function () {
                $rootScope.window.width = $window.innerWidth;
                $rootScope.window.height = $window.innerHeight;
            };

            // Window resize hook
            angular.element($window).bind('resize', function () {
                $rootScope.safeApply(updateWindowSize());
            });

            $rootScope.$watch('window.forceRefresh', function (newValue) {
                if (newValue) {
                    $timeout(function () {
                        updateWindowSize();
                        $rootScope.window.forceRefresh = false;
                    });
                }
            });

            updateWindowSize();

            // Main navigation
            $rootScope.mainNavigation = [
                {
                    'id': 'processes',
                    'title': 'GENERAL.NAVIGATION.PROCESSES',
                    'path': '/processes'
                }
                //                {
                //                    'id': 'casemodels',
                //                    'title': 'GENERAL.NAVIGATION.CASEMODELS',
                //                    'path': '/casemodels'
                //                },
                //                {
                //                    'id': 'forms',
                //                    'title': 'GENERAL.NAVIGATION.FORMS',
                //                    'path': '/forms'
                //                },
                //                {
                //                    'id': 'decisions',
                //                    'title': 'GENERAL.NAVIGATION.DECISIONS',
                //                    'path': '/decisions'
                //                },
                //                {
                //                    'id': 'apps',
                //                    'title': 'GENERAL.NAVIGATION.APPS',
                //                    'path': '/apps'
                //                }
            ];

            $rootScope.config = FLOWABLE.CONFIG;

            $rootScope.mainPage = $rootScope.mainNavigation[0];

            // Add url helpers to root scope:
            $rootScope.getModelThumbnailUrl = FLOWABLE.APP_URL.getModelThumbnailUrl;
            $rootScope.getImageUrl = FLOWABLE.APP_URL.getImageUrl;

            /*
             * History of process and form pages accessed by the editor.
             * This is needed because you can navigate to sub processes and forms
             */
            $rootScope.editorHistory = [];

            /*
             * Set the current main page, using the page object. If the page is already active,
             * this is a no-op.
             */
            $rootScope.setMainPage = function (mainPage) {
                $rootScope.mainPage = mainPage;
                $location.path($rootScope.mainPage.path);
            };

            /*
             * Set the current main page, using the page ID. If the page is already active,
             * this is a no-op.
             */
            $rootScope.setMainPageById = function (mainPageId) {
                for (var i = 0; i < $rootScope.mainNavigation.length; i++) {
                    if (mainPageId == $rootScope.mainNavigation[i].id) {
                        $rootScope.mainPage = $rootScope.mainNavigation[i];
                        break;
                    }
                }
            };

            /**
             * A 'safer' apply that avoids concurrent updates (which $apply allows).
             */
            $rootScope.safeApply = function (fn) {
                var phase = this.$root.$$phase;
                if (phase == '$apply' || phase == '$digest') {
                    if (fn && (typeof (fn) === 'function')) {
                        fn();
                    }
                } else {
                    this.$apply(fn);
                }
            };

            // Alerts
            $rootScope.alerts = {
                queue: []
            };

            $rootScope.showAlert = function (alert) {
                if (alert.queue.length > 0) {
                    alert.current = alert.queue.shift();
                    // Start timout for message-pruning
                    alert.timeout = $timeout(function () {
                        if (alert.queue.length == 0) {
                            alert.current = undefined;
                            alert.timeout = undefined;
                        } else {
                            $rootScope.showAlert(alert);
                        }
                    }, (alert.current.type == 'error' ? 5000 : 1000));
                } else {
                    $rootScope.alerts.current = undefined;
                }
            };

            $rootScope.addAlert = function (message, type) {
                var newAlert = { message: message, type: type };
                if (!$rootScope.alerts.timeout) {
                    // Timeout for message queue is not running, start one
                    $rootScope.alerts.queue.push(newAlert);
                    $rootScope.showAlert($rootScope.alerts);
                } else {
                    $rootScope.alerts.queue.push(newAlert);
                }
            };

            $rootScope.dismissAlert = function () {
                if (!$rootScope.alerts.timeout) {
                    $rootScope.alerts.current = undefined;
                } else {
                    $timeout.cancel($rootScope.alerts.timeout);
                    $rootScope.alerts.timeout = undefined;
                    $rootScope.showAlert($rootScope.alerts);
                }
            };

            $rootScope.addAlertPromise = function (promise, type) {
                if (promise) {
                    promise.then(function (data) {
                        $rootScope.addAlert(data, type);
                    });
                }
            };



            // {
            //     "size": 5,
            //     "total": 5,
            //     "start": 0,
            //     "data": [
            //         {
            //             "defaultAppId": "tasks",
            //             "name": null,
            //             "description": null,
            //             "theme": null,
            //             "icon": null,
            //             "appDefinitionId": null,
            //             "appDefinitionKey": null,
            //             "tenantId": null,
            //             "usersAccess": null,
            //             "groupsAccess": null
            //         },
            //         {
            //             "defaultAppId": "modeler",
            //             "name": null,
            //             "description": null,
            //             "theme": null,
            //             "icon": null,
            //             "appDefinitionId": null,
            //             "appDefinitionKey": null,
            //             "tenantId": null,
            //             "usersAccess": null,
            //             "groupsAccess": null
            //         },
            //         {
            //             "defaultAppId": "admin",
            //             "name": null,
            //             "description": null,
            //             "theme": null,
            //             "icon": null,
            //             "appDefinitionId": null,
            //             "appDefinitionKey": null,
            //             "tenantId": null,
            //             "usersAccess": null,
            //             "groupsAccess": null
            //         },
            //         {
            //             "defaultAppId": "idm",
            //             "name": null,
            //             "description": null,
            //             "theme": null,
            //             "icon": null,
            //             "appDefinitionId": null,
            //             "appDefinitionKey": null,
            //             "tenantId": null,
            //             "usersAccess": null,
            //             "groupsAccess": null
            //         },
            //         {
            //             "defaultAppId": null,
            //             "name": "test app",
            //             "description": "",
            //             "theme": "theme-1",
            //             "icon": "glyphicon-asterisk",
            //             "appDefinitionId": "a4aca83e-c04c-11ee-a447-00ff00ab054b",
            //             "appDefinitionKey": "testapp",
            //             "tenantId": "",
            //             "usersAccess": null,
            //             "groupsAccess": null
            //         }
            //     ]
            // }

            $rootScope.account = {
                "id": "admin",
                "firstName": "Test",
                "lastName": "Administrator",
                "email": "test-admin@example-domain.tld",
                "fullName": "Test Administrator",
                "tenantId": null,
                "groups": [],
                "privileges": [
                    "access-idm",
                    "access-admin",
                    "access-modeler",
                    "access-task",
                    "access-rest-api"
                ]
            }
            $rootScope.invalidCredentials = false;
            $rootScope.authenticated = true;

            // $http.get(FLOWABLE.APP_URL.getAccountUrl())
            // 	.success(function (data, status, headers, config) {
            //       	$rootScope.account = data;
            //         $rootScope.invalidCredentials = false;
            //         $rootScope.authenticated = true;
            //   	});

            $rootScope.logout = function () {
                $rootScope.authenticated = false;
                $rootScope.authenticationError = false;
                // Changing the href causes a reload, so no need to do a new reload again
                $window.location.href = FLOWABLE.CONFIG.contextRoot + '/app/logout';
            };
        }
    ])
    .run(['$rootScope', '$location', '$translate', '$window', '$modal',
        function ($rootScope, $location, $translate, $window, $modal) {

            var fixedUrlPart = '/editor/';

            $rootScope.backToLanding = function () {
                $window.location.href = FLOWABLE.CONFIG.contextRoot;
            };
        }])

    // Moment-JS date-formatting filter
    .filter('dateformat', function () {
        return function (date, format) {
            if (date) {
                if (format) {
                    return moment(date).format(format);
                } else {
                    return moment(date).calendar();
                }
            }
            return '';
        };
    });
