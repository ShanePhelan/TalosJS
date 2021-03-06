/**
 * Created with IntelliJ IDEA.
 * User: shanephelan
 * Date: 01/02/2014
 * Time: 15:16
 * To change this template use File | Settings | File Templates.
 */
(function(demo) {
    'use strict'

    var DemoMediator = function(target, dispatcher, mediators, timer) {
        var view;

        dispatcher.addEventListener('create', function(event) {

            // destroy previous clock
            if (view) {
                timer.remove(view.update);
                view.dispose();
            }

            // create clock
            view = mediators.create(event.params, target);

            // register clock with timer model
            timer.add(view.update);
            view.update(timer.time);
        });
    };

    demo.DemoMediator = DemoMediator;

})(window.demo = window.demo || {});
