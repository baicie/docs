## Supervisord

### 简介：这玩意就是守护进程因为后端进程总是莫名中断

Node的进程守护有pm2

```ini
#基础命令 启动 状态 开机启动
systemctl status supervisord.service
systemctl enable supervisord.service
#这个方式启动
supervisord -c /etc/supervisord.conf

systemctl start supervisord 
```

### 添加新守护

```ini
[program:dev-service-question]
directory=/root/services/questionnaire/dev
command=java -jar questionaire-front-1.0-SNAPSHOT.jar
autostart=true
autorestart=true 
startsecs=5       
startretries=3 
user=root
stdout_logfile=/root/services/questionnaire/dev/logs/out.log
stderr_logfile=/root/services/questionnaire/dev/logs/err.log

```

```shell
#重载
supervisorctl update
#重启
supervisorctl reload
#开启某个
supervisorctl start dev-service-question
#重启某个
supervisorctl restart dev-service-questmanage
```

## 安装

```shell
yum install supervisor
```

## Error: Invalid sockchown value nobody:nogroup For help, use /usr/bin/supervisord -h

不知道然后把那一行注释了；是命令行输入时需要账号密码

## Error: Cannot open an HTTP server: socket.error reported errno.ENOENT (2)

```shell
mkdir /run/supervisor
```

## unix:///var/run/supervisor.sock no such file

```shell
touch /var/run/supervisor.sock
chmod 777 /var/run/supervisor.sock
```

## Unlinking stale socket /run/supervisor.sock

```shell
unlink /run/supervisor.sock
```

# supervisor error: class 'FileNotFoundError' , [Errno 2] No such file or directory:....xmlrpc.py

```shell
systemctl start supervisord 
```

