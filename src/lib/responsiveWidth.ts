export default function responsiveWidth(width: number) {
  if (width < 768) {
    return 300 - 4
  }
  return 500 - 4
}
