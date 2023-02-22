export const colors = {
	// core
	corePrimary: 'rgba(0,0,0,0.75)',
	coreSecondary: 'rgba(0,0,0,0.5)',
	coreTertiary: 'rgba(0,0,0,0.2)',
	coreBorder: 'rgba(0,0,0,0.1)',
	coreBackground: '#F6F6F6',
	napoBlue: '#0061FF',
	white: '#FFFFFF',
	white2: 'rgba(255,255,255, 0.7)',

	blackTint075: 'rgba(0,0,0,0.075)',
	blackTint025: 'rgba(0,0,0,0.025)',
	blackTint05: 'rgba(0,0,0,0.05)',

	// blues
	blueLight: '#EBF3FF',
	blueMedium: '#4C90FF',
	blueDark: '#001D4C',
	blueNavy: '#222533',
	blueFaint: 'rgb(76, 144, 255, 0.3)',

	// yellows
	yellowLight: '#FEF9EC',

	// pinks
	pinkLight: '#FFF0F1',
	pinkMedium: '#F3ACAD',

	// purples
	purpleLight: '#F4F3FD',

	// reds
	red1: '#E62514',
	red2: 'rgba(253, 208, 203, 0.25)',

	// oranges
	orangeLight: '#FCECD9',

	// greens
	greenLight: '#E9F6EB',
	greenMedium: '#18A957',
	greenDark: '#007B80',

	// StoryBlok theme section colors
	highlightPrimary: '#0061FF',
	highlightSecondary: '#CCE0FF',
	highlightTertiary: '#EBF3FF',
} as const;

export const borderWidths = {
	large: '3px',
	medium: '2.4px',
	small: '1px',
} as const;

export const borders = {
	divider: `${borderWidths.small} solid ${colors.coreBorder}`,
	dividerHighlight: `${borderWidths.small} solid ${colors.blueMedium}`,
};

export const fonts = {
	primary: `Apercu, sans-serif`,
} as const;

export const fontWeights = {
	bold: 700,
	regular: 400,
} as const;

export const fontSizes = {
	'hero@Initial': 40,
	'hero@Large': 64,

	'level1@Initial': 32,
	'level1@Large': 48,

	'level2@Initial': 26,
	'level2@Large': 32,

	'level3@Initial': 22,
	'level3@Large': 24,

	large: 18,
	body: 16,
	small: 14,
	micro: 13,
} as const;

export const lineHeights = {
	'hero@Initial': 46 / fontSizes['hero@Initial'],
	'hero@Large': 72 / fontSizes['hero@Large'],

	'level1@Initial': 40 / fontSizes['level1@Initial'],
	'level1@Large': 56 / fontSizes['level1@Large'],

	'level2@Initial': 32 / fontSizes['level2@Initial'],
	'level2@Large': 40 / fontSizes['level2@Large'],

	'level3@Initial': 28 / fontSizes['level3@Initial'],
	'level3@Large': 30 / fontSizes['level3@Large'],

	large: 26 / fontSizes.large,
	body: 22 / fontSizes.body,
	small: 18 / fontSizes.small,
	micro: 17 / fontSizes.micro,
} as const;

export const letterSpacings = {
	'hero@Initial': '-1px',
	'hero@Large': '-1px',

	'level1@Large': '-0.5px',
	'level1@Initial': '-0.25px',

	'level2@Large': '-0.25px',
	'level2@Initial': 0,

	'level3@Initial': 0,
	'level3@Large': 0,

	large: 0,
	body: 0,
	small: 0,
	micro: 0,
} as const;

export const radii = {
	full: '9999px',
	xlarge: '1.5rem', // 16px
	large: '1rem', // 16px
	medium: '0.75rem', // 12px
	base: '0.375rem', // 6px
	small: '0.25rem', // 4px
} as const;

export const shadows = {
	selectable: `0 0 0 1px ${colors.napoBlue}`,
	'100': '0 1rem 1.5rem rgba(33, 33, 33, 0.1)', // 0 16px 24px
	'80': '0 0.5rem 1rem rgba(33, 33, 33, 0.1)', // 0 8px 16px
	'60': '0 0.25rem 0.5rem rgba(33, 33, 33, 0.1)', // 0 4px 8px
	'40': '0 0.125rem 0.25rem rgba(33, 33, 33, 0.1)', // 0 2px 4px
	'20': '0 0.0625rem 0.1875rem rgba(33, 33, 33, 0.1)', // 0 1px 3px
} as const;

export const sizes = {
	container: '81.25rem', // 1300px
	containerMedium: '63.75rem', // 1020px
	containerSmall: '50rem', // 800px
	containNarrow: '39rem', // 624px
	containerTiny: '23.75rem', // 380px
	itemLarge: '16rem', // 256px
	itemMedium: '12rem', //192px
	itemSmall: '8rem', //128px
	itemBase: '6rem', // 96px
	iconLarge: '3rem', // 48px
	iconMedium: '2.25rem', // 36px
	iconBase: '1.25rem', // 20px
	iconSmall: '1rem', // 16px
} as const;

export const space = {
	xxlarge: '8rem', // 128px
	xlarge: '4rem', // 64px
	large: '3rem', // 48px
	medium: '2rem', // 32px
	base: '1.5rem', // 24px
	small: '1rem', // 16px
	tiny: '0.5rem', // 8px
	minute: '0.25rem', // 4px
	none: '0px', // px suffix used so calc works, don't remove
	auto: 'auto',
} as const;

export const duration = {
	fast: 0.2,
	medium: 0.3,
	slow: 0.4,
};

function negateSpaces() {
	type NegativeSpaces = {
		[key in keyof typeof space as `-${key & string}`]: typeof space[key];
	};

	const negatedSpaces: Partial<NegativeSpaces> = {};

	for (const [key, value] of Object.entries(space)) {
		// @ts-expect-error canne work out how to type this :lol:
		negatedSpaces[`-${key}`] = `-${value}`;
	}

	return negatedSpaces as NegativeSpaces;
}

export const negativeSpace = negateSpaces();

export const zIndices = {
	'0': 0,
	'1': 1,
	hero: 1,
	header: 5,
	heroContent: 1,
	stickyFooter: 5,
	fauxAction: 1,
	fauxActionElevation: 2,
	tabHighlight: 1,
	// I'm sorry, we need to do this to be HIGHER than intercom
	// else intercom obstructs bottom sheet - it's fine on desktop
	dialog: 2147483001,
	dialogOverlay: 10,
} as const;
