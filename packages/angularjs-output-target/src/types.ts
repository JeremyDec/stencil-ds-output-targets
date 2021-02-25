export interface OutputTargetAngularJS {
  componentCorePackage: string;
  proxiesFile: string;
  excludeComponents?: string[];
  loaderDir?: string;
  includePolyfills?: boolean;
  includeDefineCustomElements?: boolean;
  wrappedComponentsPrefix?: string;
}
