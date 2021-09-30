/**
 * Swiper 7.0.7
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * https://swiperjs.com
 *
 * Copyright 2014-2021 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: September 30, 2021
 */

import Swiper from './core/core.js';
export { default as Swiper, default } from './core/core.js';
import Navigation from './modules/navigation/navigation.js';
import Pagination from './modules/pagination/pagination.js';
import Scrollbar from './modules/scrollbar/scrollbar.js';

// Swiper Class
const modules = [Navigation, Pagination, Scrollbar];
Swiper.use(modules);
