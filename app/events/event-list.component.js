System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var EventListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            EventListComponent = (function () {
                function EventListComponent() {
                    this.pageTitle = 'Event List';
                    this.imageWidth = 50;
                    this.imageMargin = 2;
                    this.showImage = false;
                    this.events = [
                        {
                            'name': 'Event 1',
                            'code': 'Evt100',
                            'description': 'The first event',
                            'date': '2016.01.01',
                            'time': '1:00 PM',
                            'duration': '1 Hour',
                            'fee': 1,
                            'rating': 1,
                            'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/193230/Tux-at-the-Beach-by-Merlin2525.png',
                            'location': {
                                'streetAddr': '101 Main St.',
                                'city': 'Los Angeles',
                                'state': 'CA',
                                'zip': '87885',
                                'lon': 0,
                                'lat': 0
                            },
                            'capacity': 100
                        },
                        {
                            'name': 'Event 2',
                            'code': 'Evt200',
                            'description': 'The second event',
                            'date': '2016.02.02',
                            'time': '2:00 PM',
                            'duration': '2 Hours',
                            'fee': 2,
                            'rating': 2,
                            'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/221228/Ice-Cream-Beach.png',
                            'location': {
                                'streetAddr': '202 Main St.',
                                'city': 'Los Angeles',
                                'state': 'CA',
                                'zip': '87885',
                                'lon': 0,
                                'lat': 0
                            },
                            'capacity': 200
                        },
                        {
                            'name': 'Event 3',
                            'code': 'Evt300',
                            'description': 'The third event',
                            'date': '2016.03.03',
                            'time': '3:00 PM',
                            'duration': '3 Hours',
                            'fee': 3,
                            'rating': 3,
                            'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/216716/plage-1-REMIX.png',
                            'location': {
                                'streetAddr': '303 Main St.',
                                'city': 'Los Angeles',
                                'state': 'CA',
                                'zip': '87885',
                                'lon': 0,
                                'lat': 0
                            },
                            'capacity': 300
                        },
                        {
                            'name': 'Event 4',
                            'code': 'Evt400',
                            'description': 'The fourth event',
                            'date': '2016.04.04',
                            'time': '4:00 PM',
                            'duration': '4 Hours',
                            'fee': 4,
                            'rating': 4,
                            'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/5351/addon-sandcastle-2.png',
                            'location': {
                                'streetAddr': '404 Main St.',
                                'city': 'Los Angeles',
                                'state': 'CA',
                                'zip': '87885',
                                'lon': 0,
                                'lat': 0
                            },
                            'capacity': 400
                        }
                    ];
                }
                EventListComponent.prototype.toggleImage = function () {
                    this.showImage = !this.showImage;
                };
                EventListComponent = __decorate([
                    core_1.Component({
                        selector: 'el-events',
                        templateUrl: 'app/events/event-list.component.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], EventListComponent);
                return EventListComponent;
            }());
            exports_1("EventListComponent", EventListComponent);
        }
    }
});

//# sourceMappingURL=event-list.component.js.map
