const px2vw = (size, modifier = 1, width = 1440) =>
  `${(size / width) * 100 * modifier}vw`;

export default px2vw;
