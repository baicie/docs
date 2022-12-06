## mongodb安装

```shell
vim /etc/yum.repos.d/mongodb-3.4.repo

[mongodb-org-3.4]
name=MongoDB Repository
baseurl=https://repo.mongodb.org/yum/redhat/$releasever/mongodb-org/3.4/x86_64/
gpgcheck= 0
enabled=1
```

```shell
yum install -y mongodb-org
#安装与启动
systemctl start mongod.service
#重启
systemctl restart mongod.service
#查看状态
systemctl status mongod.service

```

## 禁用selinux

```shell
vim /etc/selinux/config

SELINUX=disabled
```

## 修改默认端口：因为数据库认证没搞懂配置有问题

```shell
vi /etc/mongod.conf

net:
  port: 27080
  bindIp: 0.0.0.0  # Listen to local interface only, comment to listen on all interfaces.

```

