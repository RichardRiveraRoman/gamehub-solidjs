import { typewindTransforms } from 'typewind/transform';

/** @type {import('tailwindcss').Config} */
export const content = ['./src/**/*.tsx'];
export const transform = typewindTransforms;
export const darkMode = 'selector';
