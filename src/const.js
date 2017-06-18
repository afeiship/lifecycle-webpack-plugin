import noop from 'noop';

export default {
  compile:noop,
  make:noop,
  emit:noop,
  buildModule:noop,
  afterCompile:noop,
  seal:noop,
  afterEmit:noop,
  optimize:noop,
  optimizeChunkAssets:noop,
  normalModuleLoader:noop,
  optimizeModules:noop,
  optimizeTree:noop,
  done: noop
};
