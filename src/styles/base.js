import css from 'styled-jsx/css'
export default css`
  input[type=number]::-webkit-outer-spin-button,
  input[type=number]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type=number] {
    -moz-appearance: textfield;
  }

  @font-face{
    font-family:rupee;
    src:url('../static/fonts/RupeeForadian.eot')});
    src:url('../static/fonts/RupeeForadian.eot?#iefix')}) format('embedded-opentype'),
        url('../static/fonts/RupeeForadian.woff')}) format('woff'),
        url('../static/fonts/RupeeForadian.ttf')}) format('truetype'),
        url('../static/fonts/RupeeForadian.svg#rupee')}) format('svg');
    font-weight:400;
    font-style:normal;
  }
`
