# 使用 nginx 作为基础镜像
FROM nginx:latest

# 将静态 HTML 文件复制到镜像中指定的位置
COPY . /usr/share/nginx/html
