## 安装

```shell
wget -i -c http://dev.mysql.com/get/mysql57-community-release-el7-10.noarch.rpm

yum -y install mysql57-community-release-el7-10.noarch.rpm
 
yum -y install mysql-community-server 

systemctl start mariadb.service

mysql_secure_installation

```

## Failed to start mysqld.service: Unit not found

```shell
yum install -y mariadb-server

systemctl start mariadb.service

systemctl enable mariadb.service
```

## 基础命令

```shell
mysql -uroot -p

grant all privileges on *.* to 'usrname'@'ip' identified by 'password' with grant option;

firewall-cmd --zone=public --add-port=3306/tcp --permanent

firewall-cmd --reload
```

## 卸载mysql

```shell
rpm -qa | grep -i mysql

rpm -ev
```

## mysql5.6

```shell
wget https://dev.mysql.com/get/Downloads/MySQL-5.6/MySQL-5.6.45-1.el7.x86_64.rpm-bundle.tar

tar -xvf MySQL-5.6.45-1.el7.x86_64.rpm-bundle.tar
```

