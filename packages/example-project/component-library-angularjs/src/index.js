import components from './components';

const moduleName = 'component-library-angularjs';

angular.module(moduleName, [...Object.keys(components)]);

export default moduleName;
