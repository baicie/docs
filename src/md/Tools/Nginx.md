## 文件下载配置

```nginx
	location /download {
       		#需要下载的文件存放的目录
        	alias  /root/download/;
        	sendfile on;
        	autoindex on;  # 开启目录文件列表
        	autoindex_exact_size on;  # 显示出文件的确切大小，单位是bytes
        	autoindex_localtime on;  # 显示的文件时间为文件的服务器时间
        	charset utf-8,gbk;  # 避免中文乱码
        }

```

## 安装nginx

```shell
wget http://nginx.org/download/nginx-1.21.6.tar.gz

yum -y install gcc pcre pcre-devel zlib zlib-devel openssl openssl-devel

tar -zxvf nginx-1.21.6.tar.gz

./configure --prefix=/software/nginx

make

make install
```

## Nginx守护脚本

```shell
[program:nginx] 
command=/software/nginx/sbin/nginx -c /software/nginx/conf/nginx.conf -g 'daemon off;'
autostart=true
autorestart=true 
startsecs=5       
startretries=3 
user=root
stdout_logfile=/software/nginx/logs/out.log
stderr_logfile=/software/nginx/logs/err.log

```

## 代理端口

```nginx
 proxy_pass  http://127.0.0.1:9002;
```

## Nginx配置HTTPS

