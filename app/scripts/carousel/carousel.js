'use strict';

// issue with 'ngAnimate', for some reason
var app = angular.module('carousel', ['ngTouch'])
    .controller('CarouselCtrl', ['$log', '$scope',
        function($log, $scope) {
            $log.info(':-( CarouselCtrl');
            $scope.slides = [
                {image: 'images/1154_test_review_2.800x520.fw.png', description: 'Videotel Marine International - AS3 e-learning applications for the shipping industry.'},
                {image: 'images/1154_video_3.800x520.png', description: 'Videotel Marine International - CBT - Video player with multilingual support'},
                {image: 'images/pontoon_game_over.fw.800x520.fw.png', description: 'Proof of concept for an online multilayer game written in Angular.js using the Shephertz cloud based API. Also, this project incorporated a Javascript Finite State Machine, used extensive Angular Service injection, implemented Angular promises for API Service calls and built on my knowledge of Twitter Bootstrap.'},
                {image: 'images/focus_1.800x520.fw.png', description: 'Actionscript 2.0 coding for ‘Ford Ezine’. Including using complex and dynamic interactive control of streaming FLV Video content. I successful created a seamless and harmonious video interface which formed part of a successful campaign for Ford.'},
                {image: 'images/arial.880x520.fw.png', description: 'Creating a set of Flash banners for Indesit/Ariel French advertising campaign, for Outsideline Agency. Uses the Greensock animation library as used by this carousel'},
                {image: 'images/anchor_close_up_1.800x520.png', description: 'Interactive game for Anchor Butter. Using an AS3 MVC framework, extensive use of dynamic xml data and dynamically loading MP3 sound effects.'},
                {image: 'images/pta_social_3.png', description: 'Updating of social media website for parent teacher associations which uses the Play Framework to incorporate an `up to date` modular Angular structure. Tasks have so far included: organising the package structure by feature, implementing a `HAL` compliant model, creating Grunt tasks to run unit tests and create minified production file, and integrated unit tests using Jasmine.'},
                {image: 'images/pta_social_2.png', description: 'PTAsocial - Screenshot of an Event Page.'},
                {image: 'images/pta_social_4.png', description: 'PTAsocial - Screenshot of an Event Page in `Edit Mode`'},
                {image: 'images/multiple_choice.800x520.png', description: 'Multiple Choice - Proof of concept `mobile first` app made in PhoneGap.'},
                {image: 'images/bin_weevil_airfix_game.png', description: 'Bin Weevils - Airfix Flash game.'},
                {image: 'images/pets_in_spanish.png', description: 'Proof of concept e-learning application - written in Objective-C.'},
                {image: 'images/tmsw_projects_880x600.png', description: 'Scheduling app for McDonalds using Angular and Firebase. A view of searchable Projects'},
                {image: 'images/tmsw_project_day_parts_800x600.png', description: 'Scheduling app for McDonalds. A view which allows the user to assign artwork to an in-strore screen.'}
            ];


            //
            $scope.direction = 'left';

            $scope.currentIndex = 0;

            $scope.setCurrentSlideIndex = function(index) {

                $log.info('select: ', index);
                $scope.currentIndex = index;
            };

            $scope.isCurrentSlideIndex = function(index) {
                return $scope.currentIndex === index;
            };

            $scope.prevSlide = function() {
                $scope.direction = 'left';
                $scope.currentIndex = ($scope.currentIndex < $scope.slides.length - 1) ? ++$scope.currentIndex : 0;
            };

            $scope.nextSlide = function() {
                $scope.direction = 'right';
                $scope.currentIndex = ($scope.currentIndex > 0) ? --$scope.currentIndex : $scope.slides.length - 1;
            };
        }
    ]);