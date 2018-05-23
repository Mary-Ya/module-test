(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
	typeof define === 'function' && define.amd ? define('test-modles', ['exports', '@angular/core'], factory) :
	(factory((global['test-modles'] = {}),global.ng.core));
}(this, (function (exports,core) { 'use strict';

var TestModule = /** @class */ (function () {
    function TestModule() {
        console.log('TEST IS INSTALLED');
    }
    return TestModule;
}());
TestModule.decorators = [
    { type: core.NgModule, args: [{},] },
];
TestModule.ctorParameters = function () { return []; };

exports.TestModule = TestModule;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=test-modles.umd.js.map
