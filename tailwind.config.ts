import { nextui } from "@nextui-org/theme";
import type { Config } from "tailwindcss";

const config: Config = {
  // content: [
  //   "./src/pages/**/*.{js,ts,jsx,tsx,mdx},\r\n    ./src/components/**/*.{js,ts,jsx,tsx,mdx},\r\n    ./src/app/**/*.{js,ts,jsx,tsx,mdx},",
  //   "./node_modules/@nextui-org/theme/dist/components/[object Object].js"
  // ],
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        "deep-blue": "#1f1a4f",
        "fade-purple": "#82303d",
        "bright-red": "#ec4723",
        "cancel-bl": "#BA3D3D",
        "cancel-tr": "#DD6150",
        "approve-bl": "#4FA0AB",
        "approve-tr": "#52BA94",
        "waiting-bl": "#E5A56A",
        "waiting-tr": "#F3C95F",
        "light-orange": "#F6EAE7",
        "space-black": "#231F20",
        "dark-gray": "#9F9F9F",
        "light-gray1": "#D9D9D9",
        "light-gray2": "#FAFAFA",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {},
    },
  },
  plugins: [nextui()],
};
export default config;
