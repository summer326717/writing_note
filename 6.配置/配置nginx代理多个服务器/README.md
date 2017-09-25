###### 配置nginx代理多个服务器
1./nginx/conf/nginx.conf内复制server服务。<br />
2.修改服务配置(listen:端口号，转换字段：location，接口地址：proxy_pass)。<br />
![img](https://github.com/summer326717/Blog/writing_note/6.配置/配置nginx代理多个服务器/master/s_01.png);<br />
3.完整的接口为：http://192.169.17.25:8080/backstage/web/login，访问地址为：http://localhost:8090/index.html。<br />
