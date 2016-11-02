/**
 * Created by asolovyev on 02/11/16.
 */
'use strict';

const Routing = [
    {
        stateName: 'app',
        params: {
            url: '/',
            template: require('./views/layout.pug'),
            controller: 'DocController as vm'
        }
    },
    {
        stateName: 'app.block',
        params: {
            url: 'doc/:block',
            template: require('./views/block.pug'),
            controller: 'DocBlockController as vm'
        }
    },
    {
        stateName: 'app.block.element',
        params: {
            url: 'doc/:element',
            template: require('./views/element.pug'),
            controller: 'DocElementController as vm'
        }
    }
];

export default Routing