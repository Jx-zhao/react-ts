
### 项目的目的，项目的功能
1. 数据量大，数据结构复杂
2. 研发效率
3. 性能
4. 用户体验
5. 项目的质量和稳定性

### 项目的规范
1. eslint 代码规范
    npx eslint init
2. husky 控制git的规范，git commit代码之前，我们的代码必须要跑一遍eslint
    npx husky install
3. git 管理代码
4. 文件夹规范
    src
      pages:页面组件
      components: 通用组件
      api: 数据请求相关的文件(axios)
      utils:  工具含数据
      assets: 静态资源
5. git log规范 husky来校验
    type:message
    type(module):message
    perf(reactvity):addxx

    refactor:代码重写 不影响功能
    chore：不知道是啥，就写这个
    feat:新功能
    fix:改bug
    docs：文档
    perf：性能
    test：测试
    style：样式
    ci：打包集成相关
    buidl：部署
    wip：写了一半没完成
    release：发版
    deps：依赖更改