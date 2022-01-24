import React from 'react';
import { Container } from '../layouts/Container';

const skills = [
  {
    name: 'HTML5',
    icon: () => (
      <svg viewBox="0 0 128 128">
        <path fill="#E44D26" d="M19.037 113.876L9.032 1.661h109.936l-10.016 112.198-45.019 12.48z"></path><path fill="#F16529" d="M64 116.8l36.378-10.086 8.559-95.878H64z"></path><path fill="#EBEBEB" d="M64 52.455H45.788L44.53 38.361H64V24.599H29.489l.33 3.692 3.382 37.927H64zm0 35.743l-.061.017-15.327-4.14-.979-10.975H33.816l1.928 21.609 28.193 7.826.063-.017z"></path><path fill="#fff" d="M63.952 52.455v13.763h16.947l-1.597 17.849-15.35 4.143v14.319l28.215-7.82.207-2.325 3.234-36.233.335-3.696h-3.708zm0-27.856v13.762h33.244l.276-3.092.628-6.978.329-3.692z"></path>
      </svg> 
    ),
  },
  {
    name: 'CSS3',
    icon: () => (
      <svg viewBox="0 0 128 128">
        <path fill="#1572B6" d="M18.814 114.123L8.76 1.352h110.48l-10.064 112.754-45.243 12.543-45.119-12.526z"></path><path fill="#33A9DC" d="M64.001 117.062l36.559-10.136 8.601-96.354h-45.16v106.49z"></path><path fill="#fff" d="M64.001 51.429h18.302l1.264-14.163H64.001V23.435h34.682l-.332 3.711-3.4 38.114h-30.95V51.429z"></path><path fill="#EBEBEB" d="M64.083 87.349l-.061.018-15.403-4.159-.985-11.031H33.752l1.937 21.717 28.331 7.863.063-.018v-14.39z"></path><path fill="#fff" d="M81.127 64.675l-1.666 18.522-15.426 4.164v14.39l28.354-7.858.208-2.337 2.406-26.881H81.127z"></path><path fill="#EBEBEB" d="M64.048 23.435v13.831H30.64l-.277-3.108-.63-7.012-.331-3.711h34.646zm-.047 27.996v13.831H48.792l-.277-3.108-.631-7.012-.33-3.711h16.447z"></path>
      </svg> 
    ),
  },
  {
    name: 'JavaScript',
    icon: () => (
      <svg viewBox="0 0 128 128">
        <path fill="#F0DB4F" d="M1.408 1.408h125.184v125.185H1.408z"></path><path fill="#323330" d="M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32 4.784-4.355 7.925-3.403 2.023.678 3.938 2.237 5.093 4.724 5.402-3.498 5.391-3.475 9.163-5.879-1.381-2.141-2.118-3.129-3.022-4.045-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235-5.926 6.724-4.236 18.492 2.975 23.335 7.104 5.332 17.54 6.545 18.873 11.531 1.297 6.104-4.486 8.08-10.234 7.378-4.236-.881-6.592-3.034-9.139-6.949-4.688 2.713-4.688 2.713-9.508 5.485 1.143 2.499 2.344 3.63 4.26 5.795 9.068 9.198 31.76 8.746 35.83-5.176.165-.478 1.261-3.666.38-8.581zM69.462 58.943H57.753l-.048 30.272c0 6.438.333 12.34-.714 14.149-1.713 3.558-6.152 3.117-8.175 2.427-2.059-1.012-3.106-2.451-4.319-4.485-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901 4.462 2.678 10.459 3.499 16.731 2.059 4.082-1.189 7.604-3.652 9.448-7.401 2.666-4.915 2.094-10.864 2.07-17.444.06-10.735.001-21.468.001-32.237z"></path>
      </svg> 
    ),
  },
  {
    name: 'React',
    icon: () => (
      <svg viewBox="0 0 128 128">
        <g fill="#61DAFB"><circle cx="64" cy="64" r="11.4"></circle><path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zM92.5 14.7c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zM81.3 74c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zM64 97.8c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zM64 30.2c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.2zM31.7 35c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zM7 64c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5C15.3 75.6 7 69.6 7 64zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zM96.3 93c1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.5 13.8 4 22.1 10 22.1 15.6 0 4.7-5.8 9.7-15.7 13.4z"></path></g>
      </svg> 
    ),
  },
  {
    name: 'tailwind',
    icon: () => (
      <svg viewBox="0 0 128 128">
        <path d="M64.004 25.602c-17.067 0-27.73 8.53-32 25.597 6.398-8.531 13.867-11.73 22.398-9.597 4.871 1.214 8.352 4.746 12.207 8.66C72.883 56.629 80.145 64 96.004 64c17.066 0 27.73-8.531 32-25.602-6.399 8.536-13.867 11.735-22.399 9.602-4.87-1.215-8.347-4.746-12.207-8.66-6.27-6.367-13.53-13.738-29.394-13.738zM32.004 64c-17.066 0-27.73 8.531-32 25.602C6.402 81.066 13.87 77.867 22.402 80c4.871 1.215 8.352 4.746 12.207 8.66 6.274 6.367 13.536 13.738 29.395 13.738 17.066 0 27.73-8.53 32-25.597-6.399 8.531-13.867 11.73-22.399 9.597-4.87-1.214-8.347-4.746-12.207-8.66C55.128 71.371 47.868 64 32.004 64zm0 0" fill="#38b2ac"></path>
      </svg>  
    ),
  },
  {
    name: 'Bootstrap',
    icon: () => (
      <svg viewBox="0 0 128 128">
        <g fill-rule="evenodd"><path d="M44.375 63.984v34.18l12.066-.027c12.488-.032 12.398-.028 14.227-.317 9.262-1.453 14.668-7.832 15.145-17.863.453-9.52-4.29-16.379-12.41-17.953-.293-.058-.2-.14.344-.297 5.426-1.558 9.347-7.824 9.347-14.926 0-8.324-4.433-14.543-11.664-16.367-2.437-.613-2.199-.605-15.523-.605h-11.53v34.176m22.026-25.156c5.149.871 7.665 3.785 7.825 9.07.164 5.531-2.36 9.125-7.297 10.395-1.617.414-2.653.473-8.621.473h-5.082v-9.988c0-5.493.02-10.008.039-10.035.066-.082 12.62 0 13.137.085m1.011 28.453c6.098.903 9.102 4.176 9.364 10.211.277 6.415-2.793 10.477-8.668 11.461-1.313.223-1.95.239-8.387.239l-6.496.004V67.119l6.707.023c5.914.024 6.8.04 7.48.14" fill="#f6f1fb"></path><path d="M83.707.629c-.207.316-.422.672-.484.785s-.262.414-.442.668-.328.496-.328.54c0 .042-.09.194-.2.339-.3.398-.597.871-.597.953 0 .043-.047.113-.097.16-.055.051-.372.524-.707 1.059-.333.535-.649 1.008-.7 1.058-.054.047-.097.118-.097.16 0 .083-.36.66-.461.739-.035.027-.172.258-.309.515-.137.258-.266.473-.285.473s-.148.184-.277.402c-.133.22-.41.665-.614.985-.472.738-.418.652-.695 1.11a9.791 9.791 0 01-.398.597c-.09.113-.16.238-.16.277-.004.04-.184.324-.403.637s-.398.602-.398.64c0 .044-.078.176-.176.305-.281.364-.625.907-.625.989 0 .043-.016.074-.04.074-.023 0-.218.293-.44.644-.22.356-.52.825-.665 1.043-.148.22-.375.582-.507.813a7.275 7.275 0 01-.395.613 3.53 3.53 0 00-.3.484 3.659 3.659 0 01-.282.458c-.074.09-.238.34-.367.546-.422.707-.867 1.383-.934 1.438-.039.031-.07.086-.07.121 0 .082-.317.59-.598.957-.11.148-.203.297-.203.336s-.168.312-.375.605a7.947 7.947 0 00-.437.676c-.079.172-1.309 2.106-1.399 2.2a2.13 2.13 0 00-.199.335 5.281 5.281 0 01-.402.637c-.145.2-.325.484-.399.633a4.99 4.99 0 01-.383.601c-.132.184-.246.352-.246.375 0 .02-1.941.024-4.316.008l-4.32-.031-.13.191c-.074.106-.175.258-.23.34l-.097.145-5.145.066c-3.086.043-5.273.098-5.469.14l-.797.177c-.527.117-1.39.503-1.648.742-.094.082-.25.207-.352.281-.308.21-1.175 1.492-1.175 1.734 0 .047-.055.227-.125.399-.07.176-.188.586-.262.918-.36 1.613-.356 1.562-.36 11.207v8.594l-.53.75v13.78l-.313.489c-.172.27-.352.531-.399.582-.05.05-.09.121-.09.156 0 .07-.265.48-.609.953-.105.145-.191.297-.191.336 0 .043-.086.196-.192.34-.351.48-.61.883-.61.953 0 .04-.026.098-.066.125-.07.055-.535.774-.93 1.43a5.711 5.711 0 01-.355.535 4.233 4.233 0 00-.328.535c-.11.2-.27.453-.36.563a4.024 4.024 0 00-.335.539 2.533 2.533 0 01-.266.433c-.133.137-.558.848-.558.93 0 .04-.02.07-.047.07-.024 0-.188.227-.36.504-.171.274-.332.5-.351.5-.024 0-.043.035-.043.074 0 .086-.461.82-.66 1.06-.078.089-.14.194-.14.233s-.177.329-.4.641c-.218.313-.398.602-.398.64 0 .044-.066.16-.148.27-.121.16-.281.403-.695 1.063-.024.035-.184.289-.36.558s-.355.559-.398.637c-.133.246-.504.809-.551.832-.024.016-.149.234-.281.488-.137.25-.274.48-.309.512-.082.063-.46.649-.46.711 0 .027-.138.25-.31.496-.167.246-.484.73-.703 1.082-.214.348-.421.66-.46.688-.04.027-.106.148-.153.265-.043.121-.203.383-.351.586-.149.2-.332.488-.407.633a4.734 4.734 0 01-.363.574 6.05 6.05 0 00-.379.598c-.082.16-.203.355-.262.43a28.85 28.85 0 00-.648 1.007c-.297.477-.59.926-.652.996-.059.07-.114.16-.114.204 0 .039-.18.328-.398.636-.219.313-.399.602-.399.645 0 .039-.078.176-.175.3-.29.38-.625.91-.625.989a.18.18 0 01-.07.121c-.067.055-.481.691-.934 1.437a5.86 5.86 0 01-.356.54c-.07.085-.215.32-.32.52s-.277.468-.379.597a6.758 6.758 0 00-.355.55c-.094.172-.313.516-.48.766s-.306.492-.306.54-.023.089-.046.089c-.024 0-.188.223-.36.5-.172.273-.332.5-.355.5-.02 0-.04.031-.04.07 0 .082-.515.903-.687 1.094-.062.07-.113.16-.113.203 0 .04-.18.328-.399.64s-.398.602-.398.645c-.004.04-.07.16-.156.266-.168.215-1.371 2.102-1.504 2.367-.05.09-.235.375-.414.63-.18.253-.328.491-.328.534 0 .04-.09.196-.203.34-.297.395-.598.871-.598.957 0 .04-.043.113-.098.16-.05.047-.281.387-.511.754-.485.782-.493.79-.485.442.004-.145-.012-.25-.035-.235-.09.07-.031 3.094.059 3.059.066-.027.07-.02.011.031-.074.067-.07.219.02 1.086.027.27.12.875.172 1.137.011.054.02.183.02.289 0 .101.038.203.081.226.047.02.059.055.028.078-.028.024-.04.125-.024.223.016.102.051.168.074.149.028-.02.036.007.016.058-.031.11.219 1.067.34 1.301.043.082.062.148.043.148-.016 0 .023.145.094.32.066.173.156.446.195.602.039.157.094.282.121.282.023 0 .035.023.02.05-.012.032.082.278.21.555.13.273.286.637.348.8s.207.458.32.653c.532.899.653 1.086.7 1.086.027 0 .035.027.02.059-.016.035.089.222.237.418.149.199.329.457.403.578.406.66 2.097 2.34 2.93 2.902.64.434 1.363.871 1.539.934.09.03.449.18.796.328.344.148.922.355 1.278.453l.652.18h78.348l.668-.184a14.182 14.182 0 001.535-.55c.782-.333 1.082-.505 2.14-1.204 1.009-.672 2.548-2.324 3.485-3.746.219-.336 1-1.723 1-1.777 0-.032.114-.29.254-.578.344-.72.727-1.805 1.067-3.028.168-.605.203-.777.421-2.242l.145-.937.004-5.649c.008-6.277.039-7.238.375-11.87.215-2.974.305-3.755.8-7.188.247-1.727.966-5.235 1.337-6.532.136-.472.312-1.117.398-1.433.082-.313.227-.781.316-1.035.094-.254.243-.676.332-.934.56-1.625 1.313-3.3 2.043-4.535.704-1.184.833-1.379 1.45-2.156 1.328-1.672 2.851-2.86 4.472-3.493.805-.316 1.528-.53 2.082-.625l.504-.082V59.86l-.504-.082c-.824-.136-2.273-.636-2.953-1.02a3.88 3.88 0 00-.36-.19c-.015 0-.194-.122-.401-.266-.207-.149-.399-.27-.426-.27-.051 0-.785-.633-1.38-1.195-.46-.434-1.573-1.816-1.89-2.348a9.085 9.085 0 00-.25-.402c-.07-.07-.68-1.152-.972-1.73-.434-.84-1.04-2.294-1.414-3.387a88.93 88.93 0 00-.333-.934c-.09-.254-.234-.719-.316-1.035-.086-.313-.262-.961-.398-1.434-.371-1.293-1.09-4.8-1.336-6.527-.496-3.422-.578-4.172-.801-7.191-.336-4.578-.367-5.594-.375-11.836-.004-5.52-.008-5.63-.125-6.418a67.343 67.343 0 01-.172-1.203c-.129-.973-.828-3.207-1.34-4.266-.14-.29-.254-.55-.254-.578 0-.059-.78-1.446-1-1.778-.922-1.402-2.535-3.144-3.457-3.73-.144-.09-.504-.324-.793-.52-.293-.195-.605-.375-.695-.406-.09-.027-.465-.187-.836-.351a12.087 12.087 0 00-1.336-.493l-.656-.187-9.574-.016-9.578-.02-.371.583M67.817 29.81c1.726.113 3.695.473 4.8.879 2.422.89 3.965 1.808 5.559 3.316 5.379 5.086 6.586 14.86 2.688 21.715-1.735 3.051-4.516 5.414-7.094 6.035-.64.153-.633.16.406.371 8.422 1.723 13.094 10.47 11.32 21.184-1.34 8.075-6.844 13.434-14.969 14.574-1.867.266-2.36.274-14.43.274H44.324V29.743h11.238c6.64 0 11.656.027 12.254.066M53.281 48.74v9.97l5.695-.028c6.164-.028 5.989-.02 7.785-.418 4.918-1.09 7.54-4.703 7.415-10.227-.11-4.672-2.047-7.531-5.934-8.758-1.45-.457-2.336-.504-9.293-.504l-5.668-.004v9.969m0 29.391v11.004l7-.023c7.621-.024 7.297-.012 8.906-.418 4.902-1.235 7.406-4.606 7.547-10.168.152-5.997-2.477-9.676-7.77-10.887-1.992-.457-3-.508-9.988-.508l-5.695-.004V78.13M12.859 88.435c0 .07.023.172.055.226.039.075.043.047.015-.101-.043-.246-.074-.297-.07-.125m.809 6.715c0 .129.011.18.027.117a.786.786 0 000-.235c-.016-.066-.027-.011-.027.118m.062.793c.02.125.031.343.031.484 0 .145.024.258.047.258.047 0-.023-.863-.078-.926-.02-.023-.02.059 0 .184m.281 3.933c-.02.024-.035.117-.035.211 0 .211.059.149.078-.086.016-.183.012-.195-.043-.125m.02 1.38c0 .136.02.245.047.245.023 0 .035-.094.023-.21-.027-.302-.07-.325-.07-.036m.14 2.43c-.05.066-.043.37.012.328.028-.02.047-.11.047-.203 0-.184-.004-.192-.059-.125m0 .476c-.035.082-.027.762.012.715.028-.035.05-.765.024-.765-.008 0-.02.023-.036.05m0 .864c-.02.023-.035.117-.035.21 0 .208.063.141.082-.085.016-.18.012-.196-.047-.125m-.035.703c0 .152.02.254.04.226.054-.07.058-.507.003-.507-.023 0-.043.125-.043.28m0 .532c0 .117.016.191.035.168.063-.078.075-.3.016-.344-.027-.023-.05.051-.05.176m0 1.188c0 .347.015.609.034.585.055-.07.067-1 .016-1.113-.031-.062-.047.137-.05.527m0 1.012c0 .262.077.262.085 0 .004-.113-.015-.203-.039-.203-.027 0-.047.09-.047.203m0 .477c0 .246.035.234.075-.028.015-.101.003-.183-.024-.183s-.05.097-.05.21m.027.466c.027.28.078.332.078.074 0-.113-.024-.223-.051-.246-.027-.024-.04.047-.027.172" fill="#790af6"></path><path d="M24.641.184c-1.418.304-2.848.93-3.93 1.726-.21.153-.398.281-.418.281-.039 0-1.195 1.004-1.34 1.168-.984 1.102-1.18 1.336-1.624 1.973-.305.445-1.137 1.84-1.231 2.074a22.8 22.8 0 01-.289.637c-.629 1.32-1.195 3.188-1.434 4.703-.261 1.66-.257 1.567-.265 7.668-.008 5.656-.04 6.934-.215 9.43-.016.219-.078 1.078-.14 1.906-.06.828-.118 1.684-.134 1.906-.035.645-.32 3.024-.53 4.414a56.606 56.606 0 00-.24 1.692c-.07.578-.804 4.203-1.019 5.027-.312 1.211-.875 3.121-1.109 3.781a18.65 18.65 0 00-.21.602c-.75 2.488-2.833 6.066-4.458 7.664-.855.836-2.758 2.2-3.078 2.2-.043 0-.223.062-.395.136-.546.238-1.519.527-2.062.61l-.52.081.012 4.114.016 4.113.586.113c2.617.5 5.207 2.2 6.715 4.399.09.132.18.253.199.261.05.032.781 1.168 1.039 1.621.414.723.973 1.848 1.223 2.473.14.348.296.711.343.805.188.351 1.13 3.176 1.078 3.238-.015.02-.004.035.024.035.031 0 .055.04.058.086.004.047.137.567.297 1.16.262.953.403 1.52.438 1.735l.129.601c.133.594.129.567.242 1.168.047.239.11.524.137.637.113.469.363 1.898.402 2.34.016.144.039.312.055.367.015.055.039.219.054.367s.063.477.102.735c.133.851.39 2.933.43 3.445.043.613.054.742.097 1.172.016.183.043.511.059.726s.039.414.055.446c.011.027.027.308.035.625.004.316.03.574.058.574.028 0 .035.043.02.094s0 .129.035.175c.047.067.047.075-.004.04-.082-.06-.09.117-.012.296.036.082.036.137 0 .164-.035.028-.035.09-.011.157.027.062.039.285.03.5-.007.21 0 .37.02.355.024-.016.036.18.032.434-.004.254.007.449.027.433.02-.011.04.25.043.586s.023 1.11.043 1.715c.016.61.031 1.203.031 1.324.004.121.024.203.047.184.024-.016.043.043.043.133 0 .093-.02.183-.047.203a.148.148 0 00-.047.105c0 .035.028.043.063.02.035-.031.047-.02.023.027-.054.11-.074.543-.023.504.066-.05.05.14-.016.227-.047.058-.047.101.004.175.047.075.05.137.004.239-.031.074-.035.136-.012.136.055 0 .055.403-.004.516-.023.043-.015.098.012.121.059.043.05.219-.016.352-.023.05-.011.082.028.082.047.004.05.02.015.05-.03.028-.046.125-.035.22.032.257.028 1.151-.008 1.32-.015.082-.007.148.02.148.062 0 .039.355-.027.418-.036.031-.032.05.007.05.059 0 .051.282-.011.41-.012.028 0 .067.031.09.027.024.05.141.05.258 0 .165-.011.188-.054.114-.035-.07-.047.015-.031.3.012.239-.004.438-.04.497-.046.078-.042.082.028.03.047-.03.274-.358.504-.73.227-.367.457-.707.512-.753s.097-.122.097-.16c0-.087.301-.563.598-.958.11-.144.203-.3.203-.34 0-.042.145-.28.324-.535s.368-.539.414-.629c.137-.265 1.34-2.152 1.508-2.367.086-.105.153-.226.153-.265 0-.043.18-.332.402-.645.219-.312.398-.601.398-.64 0-.044.051-.133.114-.204.172-.191.687-1.011.687-1.093 0-.04.016-.07.04-.07s.183-.227.355-.5c.172-.278.332-.5.36-.5.023 0 .042-.044.042-.09s.14-.29.309-.54c.168-.25.382-.593.48-.765.094-.172.254-.418.356-.551.101-.129.27-.399.378-.598a4.35 4.35 0 01.32-.52 8.14 8.14 0 00.356-.538c.453-.746.867-1.383.934-1.438a.18.18 0 00.07-.12c0-.08.336-.61.625-.99.094-.124.172-.26.172-.3 0-.043.18-.332.402-.645.22-.308.399-.597.399-.636 0-.043.05-.133.113-.203s.356-.52.652-.996c.297-.477.586-.93.649-1.008a3.99 3.99 0 00.262-.43c.086-.164.253-.43.378-.598s.286-.425.364-.574c.074-.144.258-.433.406-.633.148-.203.309-.464.352-.586.046-.117.113-.238.152-.265.039-.028.246-.34.46-.688.216-.351.532-.836.704-1.082.168-.246.309-.468.309-.496 0-.062.378-.648.46-.71.036-.032.172-.262.305-.512.133-.254.262-.473.285-.489.043-.023.418-.586.551-.832a67.023 67.023 0 01.758-1.195c.414-.66.574-.902.695-1.063.078-.109.149-.226.149-.27 0-.038.18-.327.398-.64s.399-.601.399-.64.062-.145.14-.235c.2-.238.66-.972.66-1.058 0-.04.02-.075.04-.075.023 0 .183-.226.355-.5.172-.277.332-.503.36-.503.023 0 .046-.032.046-.07 0-.083.426-.794.559-.93.05-.055.168-.247.265-.434a4 4 0 01.336-.54c.09-.108.25-.362.36-.562a4.23 4.23 0 01.328-.535c.07-.09.23-.332.355-.535.39-.656.86-1.375.93-1.43a.19.19 0 00.066-.125c0-.07.254-.472.606-.953.105-.144.195-.297.195-.34 0-.039.086-.191.192-.336.343-.472.605-.882.605-.953 0-.035.043-.105.09-.156.05-.05.23-.312.402-.582l.309-.488V53.27l.27-.375.265-.375v-8.594c0-9.645 0-9.594.36-11.207a7.67 7.67 0 01.261-.918c.066-.172.125-.352.125-.398 0-.243.867-1.524 1.172-1.735.105-.074.262-.199.352-.281.261-.238 1.12-.625 1.648-.742l.8-.176c.192-.043 2.383-.098 5.47-.14l5.144-.067.098-.145c.05-.082.156-.234.226-.34l.133-.19 4.316.03c2.38.016 4.32.012 4.32-.007 0-.024.11-.192.247-.375.133-.184.305-.454.379-.602a6.57 6.57 0 01.402-.633c.149-.199.328-.488.402-.636.075-.149.164-.297.2-.336.09-.094 1.316-2.028 1.394-2.2.035-.078.235-.379.442-.675.207-.293.375-.567.375-.606s.09-.187.203-.336c.28-.367.597-.875.597-.957 0-.035.032-.09.067-.12.07-.056.511-.731.937-1.438.125-.207.29-.457.364-.547.074-.094.203-.301.285-.457a3.24 3.24 0 01.3-.485c.082-.11.262-.386.395-.613.129-.23.36-.594.504-.813.148-.218.45-.687.668-1.043.219-.351.418-.644.441-.644.02 0 .04-.031.04-.074 0-.082.343-.625.624-.989.094-.128.176-.261.176-.304 0-.04.18-.328.399-.64s.398-.599.398-.638c0-.039.074-.164.16-.277.09-.113.27-.383.399-.598.28-.457.226-.37.699-1.109.203-.32.48-.766.61-.984.132-.22.257-.403.28-.403.02 0 .149-.215.286-.472.132-.258.273-.489.308-.516.098-.078.461-.656.461-.738 0-.043.043-.114.094-.16.055-.051.371-.524.703-1.059s.648-1.008.703-1.059c.055-.046.098-.117.098-.16 0-.082.297-.554.601-.953.11-.144.2-.297.2-.34 0-.043.148-.285.328-.539a7.58 7.58 0 00.41-.629c.047-.09.207-.347.355-.566.149-.223.325-.5.39-.621l.126-.215-29.434.004C26.578.063 25.172.07 24.64.184" fill="#8c0bfb"></path><path d="M44.344 63.949c0 18.797.008 26.477.016 17.066s.007-24.789 0-34.176c-.008-9.383-.016-1.684-.016 17.109m23.48-34.094c.066.016.176.016.242 0s.012-.027-.12-.027c-.134 0-.188.011-.122.027m12.016 6.129c0 .012.078.11.172.215l.176.199-.16-.219c-.145-.203-.188-.25-.188-.195m-26.578 2.77c-.023.046 4.129.046 9.672 0 1.156-.012-.54-.024-3.77-.036-3.234-.008-5.89.008-5.902.035m12.562.063c.055.02.137.02.188 0 .05-.016.011-.031-.094-.031-.102 0-.145.015-.094.03m6.442 3.067c.16.2.3.367.316.367s-.106-.167-.262-.367a3.587 3.587 0 00-.316-.37c-.016 0 .101.167.262.37m10.844 4.946c0 .222.007.304.023.183.012-.12.012-.3-.004-.402-.012-.098-.02 0-.02.219m-8.91.836c0 .168.012.234.024.152a1.291 1.291 0 000-.3c-.012-.083-.024-.017-.024.148m8.852.535c0 .129.012.183.023.117a.592.592 0 000-.234c-.011-.063-.023-.012-.023.117m-8.852.87c0 .165.012.235.024.15a1.29 1.29 0 000-.302c-.012-.082-.024-.011-.024.153m4.703 9.312l-.156.219.172-.2c.164-.183.2-.237.156-.237-.008 0-.086.097-.172.218m-13.824.23a.38.38 0 00.188 0c.05-.019.008-.03-.094-.03s-.144.011-.094.03m-.664.067a.611.611 0 00.239 0c.066-.015.011-.027-.121-.027s-.184.012-.118.027m-8.558.07c1.46.012 3.84.012 5.281 0 1.441-.007.246-.02-2.656-.02-2.906 0-4.086.013-2.625.02m26.25 8.31c.203.257.383.468.398.468.012 0-.14-.211-.344-.469-.203-.258-.382-.469-.398-.469s.14.211.344.47m-16.52.116c.097.016.242.016.32 0 .082-.015.004-.027-.172-.027-.18 0-.242.012-.148.027m.988.063c.05.02.133.02.184 0 .05-.016.011-.031-.094-.031-.102 0-.145.015-.09.03m8.04 3.669c.187.238.355.433.37.433.012 0-.129-.195-.32-.433a4.666 4.666 0 00-.367-.438c-.016 0 .125.196.316.438m2.152 7.187c0 .422.008.598.02.383a8.34 8.34 0 000-.766c-.012-.21-.02-.039-.02.383m9.063-.168c0 .223.012.305.023.184.012-.121.012-.3 0-.402-.011-.098-.023 0-.023.218m0 1.739c0 .222.012.304.023.183.012-.12.012-.3 0-.402-.011-.098-.023 0-.023.219m-11.246 5.804l-.262.348.278-.328c.156-.184.28-.344.28-.352 0-.05-.05.004-.296.332m9.668 2.09c-.05.129-.078.234-.066.234.039 0 .199-.41.175-.44-.011-.017-.062.077-.11.206m-18.21 1.617c.082.016.21.016.293 0s.015-.027-.145-.027c-.164 0-.23.012-.148.027m15.852 2.512l-.211.281.227-.261c.21-.247.25-.305.21-.305-.007 0-.113.129-.226.285m-13.133 6.383a.38.38 0 00.187 0c.051-.02.008-.031-.093-.031-.102 0-.145.011-.094.03m-1.598.071c.172.012.434.012.586 0 .156-.016.016-.027-.308-.027-.32 0-.446.011-.278.027" fill="#a86bee"></path><path d="M50.012 29.793c3.117.008 8.219.008 11.336 0 3.113-.008.566-.016-5.668-.016s-8.785.008-5.668.016m29.535 5.77c.145.183.273.332.29.332.015 0-.095-.149-.24-.332s-.273-.336-.288-.336c-.012 0 .093.152.238.336M65.188 38.82c.11.016.29.016.398 0 .11-.015.02-.027-.199-.027s-.312.012-.199.027m-11.934 9.95c0 5.48.004 7.71.012 4.96a2118.2 2118.2 0 000-9.964c-.008-2.73-.012-.477-.012 5.004m29.852-1.34c0 .148.012.199.023.117a.756.756 0 000-.266c-.011-.066-.023.004-.023.149m-8.902.937c0 .258.011.356.023.215a3.688 3.688 0 000-.465c-.015-.12-.023-.008-.023.25m-2.098 6.754c-.129.168-.223.3-.207.3.012 0 .133-.132.262-.3.129-.164.222-.3.207-.3a2.36 2.36 0 00-.262.3m-18.852 23.04v11l6.332.003h6.332l-6.32-.02-6.317-.015-.015-10.984-.012-10.984v11M65.16 67.177a.5.5 0 00.215-.004c.05-.016-.004-.027-.121-.027-.117 0-.16.011-.094.03M81.488 92.19l-.184.25.203-.23c.184-.215.223-.27.184-.27a1.8 1.8 0 00-.203.25" fill="#9c3cf4"></path></g>
      </svg> 
    ),
  },
  {
    name: 'Sass',
    icon: () => (
      <svg viewBox="0 0 128 128">
        <path fill-rule="evenodd" clip-rule="evenodd" fill="#CB6699" d="M1.219 56.156c0 .703.207 1.167.323 1.618.756 2.933 2.381 5.45 4.309 7.746 2.746 3.272 6.109 5.906 9.554 8.383 2.988 2.148 6.037 4.248 9.037 6.38.515.366 1.002.787 1.561 1.236-.481.26-.881.489-1.297.7-3.959 2.008-7.768 4.259-11.279 6.986-2.116 1.644-4.162 3.391-5.607 5.674-2.325 3.672-3.148 7.584-1.415 11.761.506 1.22 1.278 2.274 2.367 3.053.353.252.749.502 1.162.6 1.058.249 2.136.412 3.207.609l3.033-.002c3.354-.299 6.407-1.448 9.166-3.352 4.312-2.976 7.217-6.966 8.466-12.087.908-3.722.945-7.448-.125-11.153a11.696 11.696 0 00-.354-1.014c-.13-.333-.283-.657-.463-1.072l6.876-3.954.103.088c-.125.409-.258.817-.371 1.23-.817 2.984-1.36 6.02-1.165 9.117.208 3.3 1.129 6.389 3.061 9.146 1.562 2.23 5.284 2.313 6.944.075.589-.795 1.16-1.626 1.589-2.513 1.121-2.315 2.159-4.671 3.23-7.011l.187-.428c-.077 1.108-.167 2.081-.208 3.055-.064 1.521.025 3.033.545 4.48.445 1.238 1.202 2.163 2.62 2.326.97.111 1.743-.333 2.456-.896a10.384 10.384 0 002.691-3.199c1.901-3.491 3.853-6.961 5.576-10.54 1.864-3.871 3.494-7.855 5.225-11.792l.286-.698c.409 1.607.694 3.181 1.219 4.671.61 1.729 1.365 3.417 2.187 5.058.389.775.344 1.278-.195 1.928-2.256 2.72-4.473 5.473-6.692 8.223-.491.607-.98 1.225-1.389 1.888a3.701 3.701 0 00-.48 1.364 1.737 1.737 0 001.383 1.971 9.661 9.661 0 002.708.193c3.097-.228 5.909-1.315 8.395-3.157 3.221-2.386 4.255-5.642 3.475-9.501-.211-1.047-.584-2.065-.947-3.074-.163-.455-.174-.774.123-1.198 2.575-3.677 4.775-7.578 6.821-11.569.081-.157.164-.314.306-.482.663 3.45 1.661 6.775 3.449 9.792-.912.879-1.815 1.676-2.632 2.554-1.799 1.934-3.359 4.034-4.173 6.595-.35 1.104-.619 2.226-.463 3.405.242 1.831 1.742 3.021 3.543 2.604 3.854-.892 7.181-2.708 9.612-5.925 1.636-2.166 1.785-4.582 1.1-7.113-.188-.688-.411-1.365-.651-2.154.951-.295 1.878-.649 2.837-.868 4.979-1.136 9.904-.938 14.702.86 2.801 1.05 5.064 2.807 6.406 5.571 1.639 3.379.733 6.585-2.452 8.721-.297.199-.637.356-.883.605a.869.869 0 00-.205.67c.021.123.346.277.533.275 1.047-.008 1.896-.557 2.711-1.121 2.042-1.413 3.532-3.314 3.853-5.817l.063-.188-.077-1.63c-.031-.094.023-.187.016-.258-.434-3.645-2.381-6.472-5.213-8.688-3.28-2.565-7.153-3.621-11.249-3.788a25.401 25.401 0 00-9.765 1.503c-.897.325-1.786.71-2.688 1.073-.121-.219-.251-.429-.358-.646-.926-1.896-2.048-3.708-2.296-5.882-.176-1.544-.392-3.086-.025-4.613.353-1.469.813-2.913 1.246-4.362.223-.746.066-1.164-.646-1.5a2.854 2.854 0 00-.786-.258c-1.75-.254-3.476-.109-5.171.384-.6.175-1.036.511-1.169 1.175-.076.381-.231.746-.339 1.122-.443 1.563-.757 3.156-1.473 4.645-1.794 3.735-3.842 7.329-5.938 10.897-.227.385-.466.763-.752 1.23-.736-1.54-1.521-2.922-1.759-4.542-.269-1.832-.481-3.661-.025-5.479.339-1.356.782-2.687 1.19-4.025.193-.636.104-.97-.472-1.305-.291-.169-.62-.319-.948-.368a11.643 11.643 0 00-5.354.438c-.543.176-.828.527-.994 1.087-.488 1.652-.904 3.344-1.589 4.915-2.774 6.36-5.628 12.687-8.479 19.013-.595 1.321-1.292 2.596-1.963 3.882-.17.326-.418.613-.63.919-.17-.201-.236-.339-.235-.477.005-.813-.092-1.65.063-2.436a172.189 172.189 0 011.578-7.099c.47-1.946 1.017-3.874 1.538-5.807.175-.647.178-1.252-.287-1.796-.781-.911-2.413-1.111-3.381-.409l-.428.242.083-.69c.204-1.479.245-2.953-.161-4.41-.506-1.816-1.802-2.861-3.686-2.803-.878.027-1.8.177-2.613.497-3.419 1.34-6.048 3.713-8.286 6.568a2.592 2.592 0 01-.757.654c-2.893 1.604-5.795 3.188-8.696 4.778l-3.229 1.769c-.866-.826-1.653-1.683-2.546-2.41-2.727-2.224-5.498-4.393-8.244-6.592-2.434-1.949-4.792-3.979-6.596-6.56-1.342-1.92-2.207-4.021-2.29-6.395-.105-3.025.753-5.789 2.293-8.362 1.97-3.292 4.657-5.934 7.611-8.327 3.125-2.53 6.505-4.678 10.008-6.639 4.901-2.743 9.942-5.171 15.347-6.774 5.542-1.644 11.165-2.585 16.965-1.929 2.28.258 4.494.78 6.527 1.895 1.557.853 2.834 1.97 3.428 3.716.586 1.718.568 3.459.162 5.204-.825 3.534-2.76 6.447-5.195 9.05-3.994 4.267-8.866 7.172-14.351 9.091a39.478 39.478 0 01-9.765 2.083c-2.729.229-5.401-.013-7.985-.962-1.711-.629-3.201-1.591-4.399-2.987-.214-.25-.488-.521-.887-.287-.391.23-.46.602-.329.979.219.626.421 1.278.762 1.838.857 1.405 2.107 2.424 3.483 3.298 2.643 1.681 5.597 2.246 8.66 2.377 4.648.201 9.183-.493 13.654-1.74 6.383-1.78 11.933-4.924 16.384-9.884 3.706-4.13 6.353-8.791 6.92-14.419.277-2.747-.018-5.438-1.304-7.944-1.395-2.715-3.613-4.734-6.265-6.125C68.756 18.179 64.588 17 60.286 17h-4.31c-5.21 0-10.247 1.493-15.143 3.274-3.706 1.349-7.34 2.941-10.868 4.703-7.683 3.839-14.838 8.468-20.715 14.833-2.928 3.171-5.407 6.67-6.833 10.79a40.494 40.494 0 00-1.111 3.746m27.839 36.013c-.333 4.459-2.354 8.074-5.657 11.002-1.858 1.646-3.989 2.818-6.471 3.23-.9.149-1.821.185-2.694-.188-1.245-.532-1.524-1.637-1.548-2.814-.037-1.876.62-3.572 1.521-5.186 1.176-2.104 2.9-3.708 4.741-5.206 2.9-2.361 6.046-4.359 9.268-6.245l.243-.1c.498 1.84.735 3.657.597 5.507zM54.303 70.98c-.235 1.424-.529 2.849-.945 4.229-1.438 4.777-3.285 9.406-5.282 13.973-.369.845-.906 1.616-1.373 2.417a1.689 1.689 0 01-.283.334c-.578.571-1.126.541-1.418-.206-.34-.868-.549-1.797-.729-2.716-.121-.617-.092-1.265-.13-1.897.039-4.494 1.41-8.578 3.736-12.38.959-1.568 2.003-3.062 3.598-4.054a6.27 6.27 0 011.595-.706c.85-.239 1.372.154 1.231 1.006zm17.164 21.868l6.169-7.203c.257 2.675-4.29 8.015-6.169 7.203zm19.703-4.847c-.436.25-.911.43-1.358.661-.409.212-.544-.002-.556-.354a2.385 2.385 0 01.093-.721c.833-2.938 2.366-5.446 4.647-7.486l.16-.082c1.085 3.035-.169 6.368-2.986 7.982z"></path>
      </svg> 
    ),
  },
  {
    name: 'Git',
    icon: () => (
      <svg viewBox="0 0 128 128">
        <path fill="#F34F29" d="M124.737 58.378L69.621 3.264c-3.172-3.174-8.32-3.174-11.497 0L46.68 14.71l14.518 14.518c3.375-1.139 7.243-.375 9.932 2.314 2.703 2.706 3.461 6.607 2.294 9.993l13.992 13.993c3.385-1.167 7.292-.413 9.994 2.295 3.78 3.777 3.78 9.9 0 13.679a9.673 9.673 0 01-13.683 0 9.677 9.677 0 01-2.105-10.521L68.574 47.933l-.002 34.341a9.708 9.708 0 012.559 1.828c3.778 3.777 3.778 9.898 0 13.683-3.779 3.777-9.904 3.777-13.679 0-3.778-3.784-3.778-9.905 0-13.683a9.65 9.65 0 013.167-2.11V47.333a9.581 9.581 0 01-3.167-2.111c-2.862-2.86-3.551-7.06-2.083-10.576L41.056 20.333 3.264 58.123a8.133 8.133 0 000 11.5l55.117 55.114c3.174 3.174 8.32 3.174 11.499 0l54.858-54.858a8.135 8.135 0 00-.001-11.501z"></path>
      </svg> 
    ),
  },
  {
    name: 'GitHub',
    icon: () => (
      <svg viewBox="0 0 128 128">
        <g fill="#181616"><path fill-rule="evenodd" clip-rule="evenodd" d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"></path><path d="M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm2.446 2.729c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zM31.312 98.012c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm3.261 3.361c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm4.5 1.951c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237zm4.943.361c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm4.598-.782c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0"></path></g>
      </svg> 
    ),
  },
  {
    name: 'npm',
    icon: () => (
      <svg viewBox="0 0 128 128">
        <path fill="#cb3837" d="M2 38.5h124v43.71H64v7.29H36.44v-7.29H2zm6.89 36.43h13.78V53.07h6.89v21.86h6.89V45.79H8.89zm34.44-29.14v36.42h13.78v-7.28h13.78V45.79zm13.78 7.29H64v14.56h-6.89zm20.67-7.29v29.14h13.78V53.07h6.89v21.86h6.89V53.07h6.89v21.86h6.89V45.79z"></path>
      </svg>  
    ),
  },
  {
    name: 'webpack',
    icon: () => (
      <svg viewBox="0 0 128 128">
        <path fill="#8ed6fb" d="M117.29 98.1L66.24 127v-22.51L98 87l19.29 11.1zm3.5-3.16V34.55l-18.68 10.8v38.81l18.67 10.77zM10.71 98.1l51 28.88v-22.49L29.94 87zm-3.5-3.16V34.55l18.68 10.8v38.81zm2.19-64.3L61.76 1v21.76L28.21 41.21l-.27.15zm109.18 0L66.24 1v21.76L99.79 41.2l.27.15 18.54-10.71z"></path><path fill="#1c78c0" d="M61.76 99.37L30.37 82.1V47.92L61.76 66zm4.48 0l31.39-17.25v-34.2L66.24 66zM32.5 44L64 26.66 95.5 44 64 62.16 32.5 44z"></path>
      </svg>  
    ),
  },
  {
    name: 'Figma',
    icon: () => (
      <svg viewBox="0 0 128 128">
        <path fill="#0acf83" d="M45.5 129c11.9 0 21.5-9.6 21.5-21.5V86H45.5C33.6 86 24 95.6 24 107.5S33.6 129 45.5 129zm0 0"></path><path fill="#a259ff" d="M24 64.5C24 52.6 33.6 43 45.5 43H67v43H45.5C33.6 86 24 76.4 24 64.5zm0 0"></path><path fill="#f24e1e" d="M24 21.5C24 9.6 33.6 0 45.5 0H67v43H45.5C33.6 43 24 33.4 24 21.5zm0 0"></path><path fill="#ff7262" d="M67 0h21.5C100.4 0 110 9.6 110 21.5S100.4 43 88.5 43H67zm0 0"></path><path fill="#1abcfe" d="M110 64.5c0 11.9-9.6 21.5-21.5 21.5S67 76.4 67 64.5 76.6 43 88.5 43 110 52.6 110 64.5zm0 0"></path>
      </svg> 
    ),
  },
];

const Skills = () => {
  return (
    <Container>

      <div>
        <h1>Skills & Tools</h1>
        <h2>Technologies I use everyday</h2>
      </div>

      <div>
        {skills.map(skill => (
          <div key={skill.name}>
            <span>{skill.name}</span>
            <skill.icon />
          </div>
        ))}
      </div>
    </Container>
  );
};

export { Skills };