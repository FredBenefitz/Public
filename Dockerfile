FROM httpd:latest

RUN rm /usr/local/apache2/htdocs/*

COPY index.html /usr/local/apache2/htdocs/
COPY style.css  /usr/local/apache2/htdocs/
COPY zegar.js   /usr/local/apache2/htdocs/
COPY zeg.html   /usr/local/apache2/htdocs/
