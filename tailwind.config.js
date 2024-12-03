/*
 * @Author: Alkaid(AlkaidMegrez@outlook.com)
 * @Date: 2023-07-07 18:00:15
 * @LastEditors: Alkaid(AlkaidMegrez@outlook.com)
 * @LastEditTime: 2023-07-16 04:35:52
 * @FilePath: /theme-crux/tailwind.config.js
 * @Description: 
 * 
 * Copyright (c) 2023 by Crux, All Rights Reserved. 
 */
/** @type {import('tailwindcss').Config} */

const { all } = require('axios');
const { Icons } = require("tailwindcss-plugin-icons");
module.exports = {
  content: ["./templates/**/*.html", "./src/main.ts"],
  darkMode: ['class'],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            code:{
              fontSize: "14px !important",
              borderRadius: "4px !important",
              background: "skyblue !important",
              color: "blue !important",
              padding: "2px 6px !important",
              fontFamily: "'PingFang SC','Consolas','Courier New','monospace'",
            }
          },
        },
      },
    },
    fontFamily: {
      sans: [
        'ui-sans-serif',
        'system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        '"Noto Sans"',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ],
      serif: ['ui-serif', 'Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
      mono: [
        'ui-monospace',
        'SFMono-Regular',
        'Menlo',
        'Monaco',
        'Consolas',
        '"Liberation Mono"',
        '"Courier New"',
        'monospace',
      ],
      noto_serif: ["Noto Serif SC"],
    }
  },
  plugins: [
    require("@tailwindcss/typography"),
    Icons(() => ({
      tabler: {
        includeAll: true,
      },
      heroicons: {
        includeAll: true,
      },
      uim: {

        includeAll: true,
      }
    })),
  ],
  safelist: [
    "prose-sm",
    "prose-base",
    "prose-lg",
    "prose-xl",
    "prose-2xl",
    "prose-gray",
    "prose-slate",
    "prose-zinc",
    "prose-neutral",
    "prose-stone",
  ],
};
