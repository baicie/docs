## Oracle jdk8 安装

```shell
mkdir /usr/java
cp jdk /usr/java
trr -zxvf jdk

vim /etc/profile

source /etc/profile
```

配置

```shell
export JAVA_HOME=/usr/java/jdk1.8.0_321
export JRE_HOME=${JAVA_HOME}/jre
export CLASSPATH=.:${JAVA_HOME}/lib:${JRE_HOME}/lib:$CLASSPATH
export JAVA_PATH=${JAVA_HOME}/bin:${JRE_HOME}/bin
export PATH=$PATH:${JAVA_PATH}

```

