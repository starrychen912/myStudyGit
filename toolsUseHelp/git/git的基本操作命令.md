#git 的基本操作命令

1. 本地库的初始化

   1. 打开要设为本地库的文件夹
   2. 右键 git bash here
   3. 使用命令： git init
      - 会新建出一个隐藏文件夹 .git  
        ![隐藏文件](https://github.com/starrychen912/myStudyGit/raw/master/toolsUseHelp/git/studyscreen/hideFileGit.png)
   4. 设置签名

      - 用户名：starrychen912
      - email：xxx@xx.com

      1. 作用:区分不同开发人员的身份  
         **注意**：和 github 的账号和密码没有关系
      2. 命令：
         1. 项目级别/仓库级别：仅在当前本地库范围内有效  
            git config user.name xxx
            git config user,email xxx  
            写入隐藏文件.当前本地库文件的.git/config
         2. 系统用户级别：当前系统登入的用户的范围  
            git config --global
            写入系统.gitconfig 文件
         3. 优先级：项目>系统，采用就近原则

2. git 操作命令
   1. git status 查看当前工作区和暂存区的状态
   2. git add 添加工作区文件到暂存区
      - git add [file1] [file2] 添加一个或多个文件到暂存区
      - git add [dir] 添加指定目录到暂存区，包括子目录：
      - git add . 添加当前目录下的所有文件到暂存区：
   3. git commit 命令将暂存区内容添加到本地仓库中 
      - git commit -m [message] 提交暂存区到本地仓库中
      - git commit [file1] [file2] ... -m [message] 提交暂存区的指定文件到仓库区
      - git commit -a 参数设置修改文件后不需要执行 git add 命令，直接来提交  
         修改完文件 不用git add 直接执行下面这步
         git commit -am '修改文件'   
         
3. git log 查看修改的历史版本在 暂存区中看
      参数 ：
      1. --pretty=online（每一条日志只显示一行）
      2. --online （hash 值只选择一部分）
      3. git reflog 多显示一个参数   
         head@{number}表示到哪一个版本需要移动的 step   
         ![git reflog](https://github.com/starrychen912/myStudyGit/raw/master/toolsUseHelp/git/studyscreen/gitReflog.png)
         1. tips 当历史记录过多git bash就会进入多屏显示  
            - 空格翻页
            - b 向上翻页
            - q 退出 
         2. 用法
            1. 基于索引值 git reset --hard 索引值（hash值）
            2. 使用^符号 一个代表回退一步 git reset --hard HEAD^/HEAD^^
            3. 使用~符号 代表回退 git reset --hard HEAD~number number表示要回退的步数 
         3. reset 三个参数
            1. hard 在本地库移动head指针 重置暂存区 重置工作区 三者还在统一对应
            2. mixed 在本地库移动head指针 重置暂存区 暂存区和本地库是对应 工作区还在原位
            3. soft 在本地库移动head指针 本地库向前 暂存区和工作区还在统一对应
            4. 删除操作已经提交到本地库：指针位置指向历史记录
            5. 删除操作尚未提交到本地库：指针位置使用head 就是刷新当前的暂存区和本地库 这个情况就是只是add到暂存区 就删掉了 
4. 比较文件
   1. git diff filename 在暂存区比较修改前和修改后的地方 修改后的地方高亮 
   2. git diff HEAD 在本地库进行比较 也可以看和上一个版本的的比较 git diff HEAD^ filename
   3. 如果后面没有文件名 就是所有的比较
5. 分支
   1. 什么是分支：在版本控制中，使用多条线同时推进多个任务  
      ![分支的概念图](https://github.com/starrychen912/myStudyGit/raw/master/toolsUseHelp/git/studyscreen/branch.png) 
   2. 好处：同时推进多个功能的开发，并且任何一个分支的失败都不会污染主分支
   3. 查看分支 git branch -v
   4. 创建新的分支 git branch name
   5. 分支切换 git checkout name
   6. 分支合并（当前是feature_color分支）
      1. 切换到接受合并的分支上 git checkout master
      2. 执行merge命令 git merge feature_color 就会update
      3. 冲突
         1. 产生：两个分支都有修改同一个文件 且内容不一致
         2. 解决：把区分两个修改地方的标识 删掉 手动判断需要留下的代码
             ![mergeConflict](https://github.com/starrychen912/myStudyGit/raw/master/toolsUseHelp/git/studyscreen/mergeConflict.png)  
            再执行 add commit后面不能接文件名 把文件提交到本地库中 


本地创建远程库的别名
1. git remote -v 查看git 别名
2. git remote add origin https://github.com/starrychen912/myStudyGit.git 添加这个远程库别名叫origin
3. 再次remote -v 就会出来这个地址
   ![remote给远程库起别名](https://github.com/starrychen912/myStudyGit/raw/master/toolsUseHelp/git/studyscreen/remote.png)
4. 推送本地库到远程库  
    git push origin master 指定推送的库和分支
5. 把远程库克隆到本地库
   1. 首先新建一个文件夹保存clone的代码 终端进入这个文件夹
   2. 执行git clone 远程库的地址 
   3. clone命令做的事情
      1. 把代码下载到本地
      2. 创建origin远程地址别名
      3. 初始化本地库
6. 邀请成员加入git的团队
   1. settings -->collaborators-->输入要邀请的人的github账号-->复制邀请的链接给对方-->访问被邀请人访问链接并接受-->重新执行git push origin master命令
   2. tips 为什么能记住你的github密码在终端 是w10的凭据保存的 需要更改账号就删除
      ![更改终端保存的git账号](https://github.com/starrychen912/myStudyGit/raw/master/toolsUseHelp/git/studyscreen/changeGitAccount.png)
7. 把远程库拉取到本地pull
   1. pull 是fetch和merge的合并
   2. 抓取远程库 git fetch origin master 因为是抓取所以不需要验证身份
   3. 只是抓取了文件没有执行别的操作
   4. 查看抓取的文件 git checkout origin/master 再cat文件 
   5. 切换回去git checkout master
   6. 再进行合并 git merge
   7. 如果修改比较简单 不会冲突 就使用pull命令 git pull
8. 协同开发冲突
   1. 如果不是基于最新的github远程库的最新版所做的修改，不能推送，必须先拉取。接着按照分支冲突进行修改文件
9. git的config文件  
    C:\Windows\System32\drivers\etc