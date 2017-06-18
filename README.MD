# lifecycle-webpack-plugin
> Hook every compile steps by customize hooker.



## support hookers:
| api | 对应webpack的事件 | 描述 |
| ---- | ----------------| ---- |
| compile | compile | 开始编译 |
| make | make | 从入口点分析模块及其依赖的模块，创建这些模块对象 |
| emit | emit | 把各个chunk输出到结果文件 |
| buildModule | build-module | 构建模块 |
| afterCompile | after-compile | 完成构建 |
| seal | seal | 封装构建结果 |
| afterEmit | after-emit | 完成输出 |
| optimize | optimize | 开始压缩阶段 |
| optimizeChunkAssets | optimize-chunk-assets | 为分块压缩 |
| normalModuleLoader | normal-module-loader | 一个一个的加载模块 |
| optimizeModules | optimize-modules | 压缩模块 |
| optimizeTree | optimize-tree | 异步压缩模块树 |
| done | done | 所有的步骤都完成 |



## resouces:
+ [webpack整体流程图]-(taobaofed)(https://img.alicdn.com/tps/TB1GVGFNXXXXXaTapXXXXXXXXXX-4436-4244.jpg)

![webpack整体流程图](https://img.alicdn.com/tps/TB1GVGFNXXXXXaTapXXXXXXXXXX-4436-4244.jpg)

+ https://github.com/fanjunzhi/lifecycle-webpack-plugin
