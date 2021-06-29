FROM nginx
COPY out/ /usr/share/nginx/html/
# COPY out/_next /usr/share/nginx/html/ui/_next
# COPY src/images /usr/share/nginx/html/images
# RUN rm /etc/nginx/conf.d/default.conf
# COPY nginx/nginx.conf /etc/nginx/conf.d