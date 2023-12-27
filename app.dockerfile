FROM ubuntu:18.04
FROM php:8.1-fpm

SHELL ["/bin/bash", "-c"]
COPY --from=composer /usr/bin/composer /usr/bin/composer

# Copy composer.lock and composer.json
COPY composer.json /var/www/

# Set working directory
WORKDIR /var/www

# Install dependencies
RUN apt-get update && apt-get install -y \
	build-essential \
	libfreetype6-dev \
	locales \
	libzip-dev \
	zip \
	jpegoptim optipng pngquant gifsicle \
	vim \
	unzip \
	git \
	curl \
	libcurl4-openssl-dev \
	pkg-config \
	libssl-dev \
	iputils-ping \
	openssl \
	software-properties-common \
	libfreetype6-dev \
	libjpeg62-turbo-dev \
	zip \
	libcurl4-openssl-dev \
	pkg-config libssl-dev \
	libicu-dev

RUN docker-php-ext-install zip

RUN apt-get clean && rm -rf /var/lib/apt/lists/*

RUN docker-php-ext-configure exif \
	&& docker-php-ext-configure gd \
	&& docker-php-ext-install pcntl \
	&& docker-php-ext-install exif \
	&& docker-php-ext-install gd \
	&& docker-php-ext-enable pcntl \
	&& docker-php-ext-enable exif \
	&& docker-php-ext-enable gd \
	&& docker-php-ext-install mysqli pdo pdo_mysql \
	&& docker-php-ext-configure intl \
	&& docker-php-ext-install intl \
  && docker-php-ext-install sockets && docker-php-ext-enable sockets

# Copy existing application directory contents
COPY . /var/www

# Copy existing application directory permissions
RUN chown -R www-data:www-data /var/www
RUN chmod -R 755 storage/

# Expose port 9000 and start php-fpm server
EXPOSE 9000
CMD ["php-fpm"]
