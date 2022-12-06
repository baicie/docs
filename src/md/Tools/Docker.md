## 安装

1. [官方文档](https://docs.docker.com/engine/install/centos/)

```shell
 查看系统版本
 cat /etc/redhat-release
 换源
 yum-config-manager --add-repo http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo
 
 安装稳定版本
 
yum -y install docker-ce 
安装指定版本

sudo yum install docker-ce-<VERSION_STRING>
查看版本
yum list docker-ce --showduplicates | sort -r
启动
service docker start
开机启动
systemctl enable docker
停止
systemctl stop docker

设置docker镜像加速器
sudo mkdir -p /etc/docker
sudo tee /etc/docker/daemon.json <<-'EOF'
{
  "registry-mirrors": ["https://05fq0b95.mirror.aliyuncs.com"]
}
EOF
sudo systemctl daemon-reload
sudo systemctl restart docker 
查看信息
docker info
```

## 安装jenkins

```shell
docker pull jenkins/jenkins
docker pull jenkins/jenkins:jdk11

设置jenkins目录
mkdir -p /opt/jenkens
chmod 777 /opt/jenkens

```

```
　-d 后台运行镜像

　　-p 10240:8080 将镜像的8080端口映射到服务器的10240端口。

　　-p 10241:50000 将镜像的50000端口映射到服务器的10241端口

　　-v /opt/jenkens:/var/jenkins_mount /var/jenkins_home目录为容器jenkins工作目录，我们将硬盘上的一个目录挂载到这个位置，方便后续更新镜像后继续使用原来的工作目录。这里我们设置的就是上面我们创建的 /opt/jenkens目录

　　-v /etc/localtime:/etc/localtime让容器使用和服务器同样的时间设置。

　　--name myjenkins 给容器起一个别名
```

```shell
docker run -d -p 8080:8080 -p 10240:50000 -v /opt/jenkens:/var/jenkins_home -v /etc/localtime:/etc/localtime -v /opt/maven/apache-maven-3.8.5:/usr/local/maven -e JAVA_OPTS=-Duser.timezone=Asia/Shanghai --name myjenkins jenkins/jenkins

```

ab8bb8477ea884ad5bda57c3f04baffc9878b780bdba561d4647411bcfe03df5

102f840e838356406ef906300ed8594f9befd1203678be3e5a1cd7265b0d4185

maven相关

```shell
docker run -u root  
--rm     #(可选)关闭时自动删除Docker容器
-d   #(可选)在后台运行容器（即“分离”模式）并输出容器ID。如果您不指定此选项， 则在终端窗口中输出正在运行的此容器的Docker日志。
-p 9999:8080  #容器的端口8080到主机上的端口9999。 前面是主机的端口，后面是容器的端口
-p 50000:50000  #将容器的端口50000 映射到主机上的端口50000(代理端口)
-v jenkins-data:/var/jenkins_home #映射在容器中的`/var/jenkins_home` 目录到具有名字 `jenkins-data` 的[volume]
-v /var/run/docker.sock:/var/run/docker.sock #容器与Docker守护进程通信
-v /usr/java/maven:/usr/local/maven # 将宿主机的maven环境变量/usr/java/maven映射到容器的/usr/local/maven，jenkins里配置maven时地址填写/usr/local/maven
-v /etc/localtime:/etc/localtime:ro #设置容器时间与宿主机一致
--name jenkins #设置别名
jenkinsci/blueocean 

```

docker命令

```
查看镜像
docker ps -l
日志
docker logs myjenkins
配置镜像加速
cd /opt/jenkens
vi hudson.model.UpdateCenter.xml
查看密码
vi /opt/jenkens/secrets/initialAdminPassword
docker ps
docker rm id
docker stop id
docker images
docker rmi id
```

```xml
<?xml version='1.1' encoding='UTF-8'?>
<sites>
  <site>
    <id>default</id>
    <url>https://mirrors.tuna.tsinghua.edu.cn/jenkins/updates/update-center.json</url>
  </site>
</sites>
```

