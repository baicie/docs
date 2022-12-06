## Redis安装

```shell
wget  http://download.redis.io/releases/redis-6.2.6.tar.gz

tar -zxvf redis-6.2.6.tar.gz 

cd redis-6.2.6/

make

make install PREFIX=/usr/local/redis

cp ~/tools/redis/redis-6.2.6/redis.conf ./

vim redis.conf


```

