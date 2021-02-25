import type { Config, OutputTargetCustom, OutputTargetDist } from '@stencil/core/internal';

import { angularJSProxyOutput } from './output-angularjs';
import { OutputTargetAngularJS } from './types';
import { UNAUTHORIZED_PROXY_FOLDERS } from './constants';

/**
 * Function to validate output target configuration
 * @param  config       Stencil configuration of the source project
 * @param  outputTarget Output target configuration
 */
export function normalizeOutputTarget(config: Config, outputTarget: OutputTargetAngularJS) {
  const results: OutputTargetAngularJS = {
    ...outputTarget,
    excludeComponents: outputTarget.excludeComponents || [],
    includePolyfills: outputTarget.includePolyfills ?? true,
    includeDefineCustomElements: outputTarget.includeDefineCustomElements ?? true,
  };

  if (config.rootDir == null) {
    throw new Error('rootDir is not set and it should be set by stencil itself');
  }
  if (outputTarget.proxiesFile == null) {
    throw new Error('proxiesFile is required');
  }

  if (
    UNAUTHORIZED_PROXY_FOLDERS.some((folder) =>
      outputTarget.proxiesFile.match(new RegExp(folder, 'gi')),
    )
  ) {
    throw new Error('proxiesFile path should target other location than /dist or /docs folders');
  }

  if (outputTarget.includePolyfills) {
    if (!outputTarget.includeDefineCustomElements) {
      throw new Error('includePolyfills requires includeDefineCustomElements set to true');
    }

    const distOutputTarget = config.outputTargets?.find(
      (o) => o.type === 'dist',
    ) as OutputTargetDist;
    if (
      distOutputTarget &&
      distOutputTarget.esmLoaderPath == null &&
      outputTarget.loaderDir == null
    ) {
      throw new Error(
        'Loader path is required to generate includePolyfills and/or includeDefineCustomElements methods',
      );
    }
  }

  return results;
}

/**
 * Main plugin function.
 * Will be called by stencil config, through output targets
 * @param  outputTarget Output target configuration
 * @returns Custom output target object with generator method
 */
export function angularJSOutputTarget(outputTarget: OutputTargetAngularJS): OutputTargetCustom {
  return {
    type: 'custom',
    name: outputTarget.componentCorePackage,
    validate(config) {
      return normalizeOutputTarget(config, outputTarget);
    },
    async generator(config: Config, compilerCtx: any, buildCtx: any) {
      await angularJSProxyOutput(config, compilerCtx, outputTarget, buildCtx.components);
    },
  };
}

export default {
  angularJSOutputTarget,
};
