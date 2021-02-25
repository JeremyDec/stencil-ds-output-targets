import { Config } from '@stencil/core/internal';
import { OutputTargetAngularJS } from '../src/types';
import { normalizeOutputTarget } from '../src/plugin';

describe('normalizeOutputTarget', () => {
  const config: Config = {
    rootDir: '/dev/',
    outputTargets: [{ type: 'dist' }],
  };

  it('should return fail if proxiesFile is not set', () => {
    expect(() => {
      normalizeOutputTarget({}, {});
    }).toThrow(new Error('rootDir is not set and it should be set by stencil itself'));
  });

  it('should return fail if proxiesFile is not set', () => {
    expect(() => {
      normalizeOutputTarget(config, {});
    }).toThrow(new Error('proxiesFile is required'));
  });

  it('should return fail if includePolyfills is truthy and includeDefineCustomElements is falsy', () => {
    expect(() => {
      normalizeOutputTarget(config, {
        proxiesFile: '/component-library-angularjs/src/components.js',
        includePolyfills: true,
        includeDefineCustomElements: false,
      });
    }).toThrow(new Error('includePolyfills requires includeDefineCustomElements set to true'));
  });

  it('should return fail if loaderDir is not defined while includePolyfills and includeDefineCustomElements are truhty', () => {
    expect(() => {
      normalizeOutputTarget(config, {
        proxiesFile: '/component-library-angularjs/src/components.js',
        includePolyfills: true,
        includeDefineCustomElements: true,
        loaderDir: null,
      });
    }).toThrow(
      new Error(
        'Loader path is required to generate includePolyfills and/or includeDefineCustomElements methods',
      ),
    );
  });

  it('should return fail if proxiesFile target dist folder', () => {
    expect(() => {
      normalizeOutputTarget(config, {
        proxiesFile: '/dist/components.js',
        includePolyfills: true,
        includeDefineCustomElements: true,
      });
    }).toThrow(
      new Error('proxiesFile path should target other location than /dist or /docs folders'),
    );
  });

  it('should return fail if proxiesFile target docs folder', () => {
    expect(() => {
      normalizeOutputTarget(config, {
        proxiesFile: '/docs/components.js',
        includePolyfills: true,
        includeDefineCustomElements: true,
      });
    }).toThrow(
      new Error('proxiesFile path should target other location than /dist or /docs folders'),
    );
  });

  it('should return defaults for excludeComponents', () => {
    const results: OutputTargetAngularJS = normalizeOutputTarget(config, {
      proxiesFile: '/component-library-angularjs/src/components.js',
    });

    expect(results).toEqual({
      proxiesFile: '/component-library-angularjs/src/components.js',
      includePolyfills: true,
      includeDefineCustomElements: true,
      excludeComponents: [],
    } as OutputTargetAngularJS);
  });
});
