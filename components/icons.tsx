import * as React from "react";

import { IconSvgProps } from "@/types";

type IconImgProps = {
  width?: number;
  height?: number;
  alt?: string;
};

export const Logo: React.FC<IconSvgProps> = ({
  size = 36,
  width,
  height,
  ...props
}) => (
  <svg
    fill="none"
    height={size || height}
    viewBox="0 0 32 32"
    width={size || width}
    {...props}
  >
    <path
      clipRule="evenodd"
      d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </svg>
);

export function LinkedInIcon(props: any) {
  return (
    <svg
      className="h-full w-full"
      viewBox="0 0 512 512"
      {...props}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        fill="transparent"
        height="512"
        paintOrder="stroke"
        rx="0"
        stroke="transparent"
        strokeOpacity="100%"
        strokeWidth="0"
        width="512"
        x="0"
        y="0"
      />
      <svg
        fill="currentColor"
        height="512px"
        role="img"
        viewBox="0 0 1024 1024"
        width="512px"
        x="0"
        xmlns="http://www.w3.org/2000/svg"
        y="0"
      >
        <g fill="currentColor">
          <path
            d="M196.064.25C88.347.25.187 88.408.187 196.127v607.841c0 107.717 88.158 195.845 195.877 195.845h607.841c107.718 0 195.845-88.127 195.845-195.845V196.127C999.75 88.41 911.623.25 803.905.25H196.064zm49.266 164.948c51.648 0 83.461 33.906 84.443 78.475c0 43.585-32.797 78.444-85.442 78.444h-.969c-50.665 0-83.412-34.857-83.412-78.444c0-44.568 33.738-78.475 85.379-78.475zm445.08 208.31c99.329 0 173.79 64.922 173.79 204.436v260.449H713.247V595.406c0-61.06-21.847-102.718-76.476-102.718c-41.704 0-66.562 28.078-77.476 55.202c-3.987 9.704-4.967 23.257-4.967 36.832v253.671H403.375s1.981-411.613 0-454.233h150.984v64.324c20.06-30.95 55.942-74.977 136.051-74.977zm-521.556 10.685h150.953v454.202H168.854V384.193z"
            fill="currentColor"
          />
        </g>
      </svg>
    </svg>
  );
}
export function InstagramIcon(props: any) {
  return (
    <svg
      className="h-full w-full"
      {...props}
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        fill="transparent"
        height="512"
        paintOrder="stroke"
        rx="30"
        stroke="transparent"
        strokeOpacity="100%"
        strokeWidth="0"
        width="512"
        x="0"
        y="0"
      />
      <svg
        fill="currentColor"
        height="512px"
        role="img"
        viewBox="0 0 1024 1024"
        width="512px"
        x="0"
        xmlns="http://www.w3.org/2000/svg"
        y="0"
      >
        <g fill="currentColor">
          <path
            d="M603.575 510.854c0-54.044-44.172-98.02-98.463-98.02c-54.285 0-98.455 43.977-98.455 98.02c0 54.058 44.17 98.026 98.455 98.026c54.291 0 98.463-43.968 98.463-98.026zM749.855.602H250.142C112.465.602.456 112.124.456 249.199v69.266h367.413c38.769-27.496 86.118-43.739 137.243-43.739c51.124 0 98.48 16.243 137.251 43.739H999.54v-69.266C999.54 112.123 887.531.602 749.855.602zm101.12 236.435c0 15.191-12.48 27.622-27.743 27.622h-85.72c-15.261 0-27.743-12.431-27.743-27.622v-85.352c0-15.19 12.481-27.622 27.743-27.622h85.72c15.262 0 27.743 12.43 27.743 27.622v85.352zM742.287 510.854c0 130.215-106.402 236.133-237.176 236.133c-130.778 0-237.17-105.918-237.17-236.133c0-35.848 8.11-69.845 22.532-100.318H.456v340.263c0 137.085 112.009 248.597 249.686 248.597h499.714c137.676 0 249.685-111.513 249.685-248.597V410.536H719.755c14.422 30.473 22.532 64.47 22.532 100.318z"
            fill="currentColor"
          />
        </g>
      </svg>
    </svg>
  );
}

export function GraduateIcon(props: any) {
  return (
    <svg
      fill="currentColor"
      {...props}
      id="lni_lni-graduation"
      version="1.1"
      viewBox="0 0 64 64"
      x="0px"
      xmlSpace="preserve"
      xmlns="http://www.w3.org/2000/svg"
      y="0px"
    >
      <path
        d="M61.5,34l-4.2-4.3v-3.8c0.6-0.7,1-1.6,1-2.6c0-1.5-0.8-2.8-2.2-3.4L31.6,8.9c-0.9-0.4-2-0.4-3,0L4,19.8
	c-1.3,0.6-2.2,1.9-2.2,3.4c0,1.5,0.9,2.8,2.2,3.4l8.4,3.8v11.8c0,7.3,5.9,13.2,13.1,13.2h9.1c7.3,0,13.1-5.9,13.1-13.2V30.6l4.8-2.2
	l0.3-0.1v1.6l-4,4.1c-1.1,1.1-1.1,2.8,0,3.9l4.3,4.5c0.5,0.5,1.2,0.8,2,0.8c0,0,0,0,0,0c0.7,0,1.5-0.3,2-0.8l4.3-4.5
	C62.5,36.8,62.5,35.1,61.5,34z M43.2,42.2c0,4.8-3.9,8.7-8.6,8.7h-9.1c-4.8,0-8.6-3.9-8.6-8.7v-9.7l11.9,5.4c0.5,0.2,1,0.3,1.5,0.3
	s1-0.1,1.5-0.3l11.4-5.1V42.2z M30.3,33.5L7.4,23.2l22.7-10l22.6,10.2L30.3,33.5z M55.1,38l-2-2l2-2l2,2L55.1,38z"
      />
    </svg>
  );
}

export const DiscordIcon: React.FC<IconSvgProps> = ({
  size = 24,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      height={size || height}
      viewBox="0 0 24 24"
      width={size || width}
      {...props}
    >
      <path
        d="M14.82 4.26a10.14 10.14 0 0 0-.53 1.1 14.66 14.66 0 0 0-4.58 0 10.14 10.14 0 0 0-.53-1.1 16 16 0 0 0-4.13 1.3 17.33 17.33 0 0 0-3 11.59 16.6 16.6 0 0 0 5.07 2.59A12.89 12.89 0 0 0 8.23 18a9.65 9.65 0 0 1-1.71-.83 3.39 3.39 0 0 0 .42-.33 11.66 11.66 0 0 0 10.12 0q.21.18.42.33a10.84 10.84 0 0 1-1.71.84 12.41 12.41 0 0 0 1.08 1.78 16.44 16.44 0 0 0 5.06-2.59 17.22 17.22 0 0 0-3-11.59 16.09 16.09 0 0 0-4.09-1.35zM8.68 14.81a1.94 1.94 0 0 1-1.8-2 1.93 1.93 0 0 1 1.8-2 1.93 1.93 0 0 1 1.8 2 1.93 1.93 0 0 1-1.8 2zm6.64 0a1.94 1.94 0 0 1-1.8-2 1.93 1.93 0 0 1 1.8-2 1.92 1.92 0 0 1 1.8 2 1.92 1.92 0 0 1-1.8 2z"
        fill="currentColor"
      />
    </svg>
  );
};

export const TwitterIcon: React.FC<IconSvgProps> = ({
  size = 24,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      height={size || height}
      viewBox="0 0 24 24"
      width={size || width}
      {...props}
    >
      <path
        d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"
        fill="currentColor"
      />
    </svg>
  );
};

export const GithubIcon: React.FC<IconSvgProps> = ({
  size = 24,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      height={size || height}
      viewBox="0 0 24 24"
      width={size || width}
      {...props}
    >
      <path
        clipRule="evenodd"
        d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
};

export const MoonFilledIcon = ({
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps) => (
  <svg
    aria-hidden="true"
    focusable="false"
    height={size || height}
    role="presentation"
    viewBox="0 0 24 24"
    width={size || width}
    {...props}
  >
    <path
      d="M21.53 15.93c-.16-.27-.61-.69-1.73-.49a8.46 8.46 0 01-1.88.13 8.409 8.409 0 01-5.91-2.82 8.068 8.068 0 01-1.44-8.66c.44-1.01.13-1.54-.09-1.76s-.77-.55-1.83-.11a10.318 10.318 0 00-6.32 10.21 10.475 10.475 0 007.04 8.99 10 10 0 002.89.55c.16.01.32.02.48.02a10.5 10.5 0 008.47-4.27c.67-.93.49-1.519.32-1.79z"
      fill="currentColor"
    />
  </svg>
);

export const SunFilledIcon = ({
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps) => (
  <svg
    aria-hidden="true"
    focusable="false"
    height={size || height}
    role="presentation"
    viewBox="0 0 24 24"
    width={size || width}
    {...props}
  >
    <g fill="currentColor">
      <path d="M19 12a7 7 0 11-7-7 7 7 0 017 7z" />
      <path d="M12 22.96a.969.969 0 01-1-.96v-.08a1 1 0 012 0 1.038 1.038 0 01-1 1.04zm7.14-2.82a1.024 1.024 0 01-.71-.29l-.13-.13a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.984.984 0 01-.7.29zm-14.28 0a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a1 1 0 01-.7.29zM22 13h-.08a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zM2.08 13H2a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zm16.93-7.01a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a.984.984 0 01-.7.29zm-14.02 0a1.024 1.024 0 01-.71-.29l-.13-.14a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.97.97 0 01-.7.3zM12 3.04a.969.969 0 01-1-.96V2a1 1 0 012 0 1.038 1.038 0 01-1 1.04z" />
    </g>
  </svg>
);

export const HeartFilledIcon = ({
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps) => (
  <svg
    aria-hidden="true"
    focusable="false"
    height={size || height}
    role="presentation"
    viewBox="0 0 24 24"
    width={size || width}
    {...props}
  >
    <path
      d="M12.62 20.81c-.34.12-.9.12-1.24 0C8.48 19.82 2 15.69 2 8.69 2 5.6 4.49 3.1 7.56 3.1c1.82 0 3.43.88 4.44 2.24a5.53 5.53 0 0 1 4.44-2.24C19.51 3.1 22 5.6 22 8.69c0 7-6.48 11.13-9.38 12.12Z"
      fill="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
  </svg>
);

export const SearchIcon = (props: IconSvgProps) => (
  <svg
    aria-hidden="true"
    fill="none"
    focusable="false"
    height="1em"
    role="presentation"
    viewBox="0 0 24 24"
    width="1em"
    {...props}
  >
    <path
      d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
    <path
      d="M22 22L20 20"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
  </svg>
);

export function IconPackLinkedin(props: IconSvgProps) {
  return (
    <svg {...props} viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
      <rect
        fill="transparent"
        height="512"
        paintOrder="stroke"
        rx="30"
        stroke="transparent"
        strokeOpacity="100%"
        strokeWidth="0"
        width="512"
        x="0"
        y="0"
      />
      <svg
        fill="currentColor"
        height="256px"
        role="img"
        viewBox="0 0 16 16"
        width="256px"
        x="128"
        xmlns="http://www.w3.org/2000/svg"
        y="128"
      >
        <g fill="currentColor">
          <path
            d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248c-.015-.709-.52-1.248-1.342-1.248c-.822 0-1.359.54-1.359 1.248c0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586c.173-.431.568-.878 1.232-.878c.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252c-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"
            fill="currentColor"
          />
        </g>
      </svg>
    </svg>
  );
}

export const SendIcon = (props: IconImgProps) => (
  <img
    alt="icono de enviar"
    {...props}
    src="data:image/png;base64,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"
  />
);

export const SpanishIcon = (props: any) => {
  return (
    <svg
      className="h-full w-full"
      {...props}
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        fill="transparent"
        height="512"
        paintOrder="stroke"
        rx="30"
        stroke="transparent"
        strokeOpacity="100%"
        strokeWidth="0"
        width="512"
        x="0"
        y="0"
      />
      <svg
        fill="currentColor"
        height="512px"
        role="img"
        viewBox="0 0 512 512"
        width="512px"
        x="0"
        xmlns="http://www.w3.org/2000/svg"
        y="0"
      >
        <g fill="currentColor">
          <mask id="circleFlagsEsVariant0">
            <circle cx="256" cy="256" fill="#fff" r="256" />
          </mask>
          <g mask="url(#circleFlagsEsVariant0)">
            <path
              d="M0 0h512v128l-39.8 130.3L512 384v128H0V384l37.8-124L0 128z"
              fill="#d80027"
            />
            <path d="M0 128h512v256H0z" fill="#ffda44" />
          </g>
        </g>
      </svg>
    </svg>
  );
};
export const EnglishIcon = (props: any) => {
  return (
    <svg
      className="h-full w-full"
      {...props}
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        fill="transparent"
        height="512"
        paintOrder="stroke"
        rx="30"
        stroke="transparent"
        strokeOpacity="100%"
        strokeWidth="0"
        width="512"
        x="0"
        y="0"
      />
      <svg
        fill="currentColor"
        height="512px"
        role="img"
        viewBox="0 0 512 512"
        width="512px"
        x="0"
        xmlns="http://www.w3.org/2000/svg"
        y="0"
      >
        <g fill="currentColor">
          <mask id="circleFlagsUs0">
            <circle cx="256" cy="256" fill="#fff" r="256" />
          </mask>
          <g mask="url(#circleFlagsUs0)">
            <path
              d="M256 0h256v64l-32 32l32 32v64l-32 32l32 32v64l-32 32l32 32v64l-256 32L0 448v-64l32-32l-32-32v-64z"
              fill="#eee"
            />
            <path
              d="M224 64h288v64H224Zm0 128h288v64H256ZM0 320h512v64H0Zm0 128h512v64H0Z"
              fill="#d80027"
            />
            <path d="M0 0h256v256H0Z" fill="#0052b4" />
            <path
              d="m187 243l57-41h-70l57 41l-22-67zm-81 0l57-41H93l57 41l-22-67zm-81 0l57-41H12l57 41l-22-67zm162-81l57-41h-70l57 41l-22-67zm-81 0l57-41H93l57 41l-22-67zm-81 0l57-41H12l57 41l-22-67Zm162-82l57-41h-70l57 41l-22-67Zm-81 0l57-41H93l57 41l-22-67zm-81 0l57-41H12l57 41l-22-67Z"
              fill="#eee"
            />
          </g>
        </g>
      </svg>
    </svg>
  );
};

export const NextUILogo: React.FC<IconSvgProps> = (props) => {
  const { width, height = 40 } = props;

  return (
    <svg
      fill="none"
      height={height}
      viewBox="0 0 161 32"
      width={width}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        className="fill-black dark:fill-white"
        d="M55.6827 5V26.6275H53.7794L41.1235 8.51665H40.9563V26.6275H39V5H40.89L53.5911 23.1323H53.7555V5H55.6827ZM67.4831 26.9663C66.1109 27.0019 64.7581 26.6329 63.5903 25.9044C62.4852 25.185 61.6054 24.1633 61.0537 22.9582C60.4354 21.5961 60.1298 20.1106 60.1598 18.6126C60.132 17.1113 60.4375 15.6228 61.0537 14.2563C61.5954 13.0511 62.4525 12.0179 63.5326 11.268C64.6166 10.5379 65.8958 10.16 67.1986 10.1852C68.0611 10.1837 68.9162 10.3468 69.7187 10.666C70.5398 10.9946 71.2829 11.4948 71.8992 12.1337C72.5764 12.8435 73.0985 13.6889 73.4318 14.6152C73.8311 15.7483 74.0226 16.9455 73.9968 18.1479V19.0773H63.2262V17.4194H72.0935C72.1083 16.4456 71.8952 15.4821 71.4714 14.6072C71.083 13.803 70.4874 13.1191 69.7472 12.6272C68.9887 12.1348 68.1022 11.8812 67.2006 11.8987C66.2411 11.8807 65.3005 12.1689 64.5128 12.7223C63.7332 13.2783 63.1083 14.0275 62.6984 14.8978C62.2582 15.8199 62.0314 16.831 62.0352 17.8546V18.8476C62.009 20.0078 62.2354 21.1595 62.6984 22.2217C63.1005 23.1349 63.7564 23.9108 64.5864 24.4554C65.4554 24.9973 66.4621 25.2717 67.4831 25.2448C68.1676 25.2588 68.848 25.1368 69.4859 24.8859C70.0301 24.6666 70.5242 24.3376 70.9382 23.919C71.3183 23.5345 71.6217 23.0799 71.8322 22.5799L73.5995 23.1604C73.3388 23.8697 72.9304 24.5143 72.4019 25.0506C71.8132 25.6529 71.1086 26.1269 70.3314 26.4434C69.4258 26.8068 68.4575 26.9846 67.4831 26.9663V26.9663ZM78.8233 10.4075L82.9655 17.325L87.1076 10.4075H89.2683L84.1008 18.5175L89.2683 26.6275H87.103L82.9608 19.9317L78.8193 26.6275H76.6647L81.7711 18.5169L76.6647 10.4062L78.8233 10.4075ZM99.5142 10.4075V12.0447H91.8413V10.4075H99.5142ZM94.2427 6.52397H96.1148V22.3931C96.086 22.9446 96.2051 23.4938 96.4597 23.9827C96.6652 24.344 96.9805 24.629 97.3589 24.7955C97.7328 24.9548 98.1349 25.0357 98.5407 25.0332C98.7508 25.0359 98.9607 25.02 99.168 24.9857C99.3422 24.954 99.4956 24.9205 99.6283 24.8853L100.026 26.5853C99.8062 26.6672 99.5805 26.7327 99.3511 26.7815C99.0274 26.847 98.6977 26.8771 98.3676 26.8712C97.6854 26.871 97.0119 26.7156 96.3973 26.4166C95.7683 26.1156 95.2317 25.6485 94.8442 25.0647C94.4214 24.4018 94.2097 23.6242 94.2374 22.8363L94.2427 6.52397ZM118.398 5H120.354V19.3204C120.376 20.7052 120.022 22.0697 119.328 23.2649C118.644 24.4235 117.658 25.3698 116.477 26.0001C115.168 26.6879 113.708 27.0311 112.232 26.9978C110.759 27.029 109.302 26.6835 107.996 25.9934C106.815 25.362 105.827 24.4161 105.141 23.2582C104.447 22.0651 104.092 20.7022 104.115 19.319V5H106.08V19.1831C106.061 20.2559 106.324 21.3147 106.843 22.2511C107.349 23.1459 108.094 23.8795 108.992 24.3683C109.993 24.9011 111.111 25.1664 112.242 25.139C113.373 25.1656 114.493 24.9003 115.495 24.3683C116.395 23.8815 117.14 23.1475 117.644 22.2511C118.16 21.3136 118.421 20.2553 118.402 19.1831L118.398 5ZM128 5V26.6275H126.041V5H128Z"
      />
      <path
        className="fill-black dark:fill-white"
        d="M23.5294 0H8.47059C3.79241 0 0 3.79241 0 8.47059V23.5294C0 28.2076 3.79241 32 8.47059 32H23.5294C28.2076 32 32 28.2076 32 23.5294V8.47059C32 3.79241 28.2076 0 23.5294 0Z"
      />
      <path
        className="fill-white dark:fill-black"
        d="M17.5667 9.21729H18.8111V18.2403C18.8255 19.1128 18.6 19.9726 18.159 20.7256C17.7241 21.4555 17.0968 22.0518 16.3458 22.4491C15.5717 22.8683 14.6722 23.0779 13.6473 23.0779C12.627 23.0779 11.7286 22.8672 10.9521 22.4457C10.2007 22.0478 9.5727 21.4518 9.13602 20.7223C8.6948 19.9705 8.4692 19.1118 8.48396 18.2403V9.21729H9.72854V18.1538C9.71656 18.8298 9.88417 19.4968 10.2143 20.0868C10.5362 20.6506 11.0099 21.1129 11.5814 21.421C12.1689 21.7448 12.8576 21.9067 13.6475 21.9067C14.4374 21.9067 15.1272 21.7448 15.7169 21.421C16.2895 21.1142 16.7635 20.6516 17.0844 20.0868C17.4124 19.4961 17.5788 18.8293 17.5667 18.1538V9.21729ZM23.6753 9.21729V22.845H22.4309V9.21729H23.6753Z"
      />
    </svg>
  );
};
