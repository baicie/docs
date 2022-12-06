## mvn安装

```shell
# https://maven.apache.org/download.cgi 3.8.5

cd /usr/local 

mkdir maven

tar -axvf apache-maven-3.8.5-bin.tar.gz

vim /etc/profile

MAVEN_HOME=/usr/local/maven/apache-maven-3.8.5
export PATH=${MAVEN_HOME}/bin:${PATH}

```

