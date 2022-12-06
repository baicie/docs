## jenkins 配置节点 java  command 

配置节点属性 工具位置 选择JDK 目录/usr/java/jdk1.8.0_321 跟java目录

## 安装

前置java略过

[清华大学镜像](https://mirrors.tuna.tsinghua.edu.cn/jenkins/redhat-stable/)

```shell
 yum -y localinstall jenkins-*
```

```shell
// jenkins 安装目录，WAR 包会放在这里
/usr/lib/jenkins/

// jenkins 配置文件，端口，JENKINS_HOME 等都可以在这里配置
/etc/sysconfig/jenkins

// 默认的 JENKINS_HOME
/Nar/lib/jenkins/

// Jenkins 日志文件
/var/log/jenkins/jenkins.log

```

```
git选择分支打包：Git Parameter

推送远程服务器后执行：Publish Over SSH
gitee
```

```shell
生成公钥
ssh-keygen -t rsa 
cat /root/.ssh/id_rsa.pub
```

```shell
#!/bin/bash -i
node -v
npm i
npm run build
rm -rf /root/font/weixin/*
cp -rf ./dist/* /root/font/weixin
```

