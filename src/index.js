import defaults from './const';
//helpers:
function dasherize(inStr) {
  return inStr.replace(/::/g, '/')
    .replace(/([A-Z]+)([A-Z][a-z])/g, '$1_$2')
    .replace(/([a-z\d])([A-Z])/g, '$1_$2')
    .replace(/_/g, '-')
    .toLowerCase()
}

export default class LifecycleWebpackPlugin{
  constructor(inOptions){
    this.options = Object.assign(defaults, {
      debug: false
    },inOptions);
  }

  apply(compiler){
    const keys = Object.keys( this.options );
    const debug = this.options.debug;
    keys.forEach(item=>{
      if(debug){
        console.log(dasherize(item), this.options[item]);
      }else{
        const callback = this.options[item];
        if(typeof callback === 'function'){
          compiler.plugin(dasherize(item), callback);
        }
      }
    });
  }
}
