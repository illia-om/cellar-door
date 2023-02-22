import { globalFontFace, globalStyle } from '@vanilla-extract/css';

import { breakpointsMedia } from './breakpoints';
import * as vars from './vars.css';

globalStyle('*, *::before, *::after', {
	boxSizing: 'border-box',
});

globalStyle('*', {
	margin: 0,
	fontFamily: vars.fonts.primary,
});

globalFontFace('Apercu', {
	fontWeight: vars.fontWeights.regular,
	src: 'url("/fonts/Apercu-Pro-Regular.woff2"), url("/fonts/Apercu-Pro-Regular.woff")',
	fontDisplay: 'swap',
});

globalFontFace('Apercu', {
	fontWeight: vars.fontWeights.bold,
	src: 'url("/fonts/Apercu-Pro-Bold.woff2"), url("/fonts/Apercu-Pro-Bold.woff")',
	fontDisplay: 'swap',
});

globalStyle(':focus:not(.focus-visible)', {
	outline: 'none',
});

globalStyle(':root', {
	WebkitFontSmoothing: 'antialiased',
	MozOsxFontSmoothing: 'grayscale',
});

globalStyle('html', {
	backgroundColor: vars.colors.white,
});

globalStyle('body', {
	overflowX: 'hidden',
	overflowY: 'scroll',
	height: '100vh',
	color: vars.colors.corePrimary,

	'@supports': {
		'(-webkit-touch-callout: none)': {
			height: '-webkit-fill-available',
		},
	},
});

globalStyle('a', {
	textDecoration: 'none',
	color: 'inherit',
});

globalStyle('img', {
	maxWidth: '100%',
	border: 0,
});

globalStyle('button', {
	width: 'auto',
	padding: 0,
	background: 'none',
	border: 'none',
	textAlign: 'left',
	color: 'inherit',
	font: 'inherit',
	cursor: 'pointer',
});

globalStyle('button:disabled', {
	cursor: 'not-allowed',
});

globalStyle('#__next', {
	display: 'flex',
	flexDirection: 'column',
	minHeight: '100%',
});

globalStyle('main', {
	flexGrow: 1,
	display: 'flex',
	flexDirection: 'column',
});

globalStyle('th', {
	textAlign: 'start',
});

globalStyle('ul, ol', {
	listStyle: 'none',
	padding: 0,
});

globalStyle('li', {
	padding: 0,
});

globalStyle('abbr', {
	textDecoration: 'none',
});

globalStyle(':first-child', {
	marginBlockStart: 0,
});

globalStyle(':last-child', {
	marginBlockEnd: 0,
});

globalStyle('.typeform-slider', {
	// I'm sorry, we need to do this to be HIGHER than intercom
	zIndex: `2147483001 !important`,

	// I'm sorry, we need to do this to be LOWER than intercom
	'@media': {
		[breakpointsMedia.medium]: {
			zIndex: '10001 !important',
		},
	},
});

globalStyle('[hidden]', {
	display: 'none !important',
});
