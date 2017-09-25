##### 配置nginx代理多个服务器
1./nginx/conf/nginx.conf内复制server服务。<br />
2.修改服务配置(listen:端口号，转换字段：location，接口地址：proxy_pass)。<br />
![img](https://github.com/summer326717/writing_note/blob/master/6.%E9%85%8D%E7%BD%AE/%E9%85%8D%E7%BD%AEnginx%E4%BB%A3%E7%90%86%E5%A4%9A%E4%B8%AA%E6%9C%8D%E5%8A%A1%E5%99%A8/s_01.png);<br />
3.完整的接口为：http://192.169.17.25:8080/backstage/web/login <br />
>访问地址为：http://localhost:8090/index.html。<br />
