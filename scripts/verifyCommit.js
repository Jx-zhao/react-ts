const fs =require('fs')
const msg = fs.readFileSync('.git/COMMIT_EDITMSG','utf-8').trim()
const mergeRe = /^(Merge pull request|Merge branch)/
const commitRE =
  /^(revert: )?(feat|fix|docs|dx|refactor|perf|test|workflow|build|ci|chore|types|wip|release|deps)(\(.+\))?: .{1,50}/

  if(commitRE.test(msg)){
    if(!mergeRe.test(msg)){
        console.log("git commit信息格式有问题");
        console.log(`需要使用以下格式 type(module):message
        具体逻辑请看scripts/verifyCommit.js
        `)
        // eslint-disable-next-line no-undef
        process.exit(1)
    }
  }else{
    console.log("git commit校验通过");
  }
// feat(hooks):message
// feat:message
// revert: feat:message //撤回