export const breakpoints = {
	initial: 0,
	small: 500,
	medium: 768,
	large: 1024,
	xlarge: 1400,
} as const;

export type Breakpoint = keyof typeof breakpoints;

export const breakpointsMedia: Omit<Record<Breakpoint, string>, 'initial'> = {
	small: `screen and (min-width: ${breakpoints.small}px)`,
	medium: `screen and (min-width: ${breakpoints.medium}px)`,
	large: `screen and (min-width: ${breakpoints.large}px)`,
	xlarge: `screen and (min-width: ${breakpoints.xlarge}px)`,
} as const;

export const breakpointNames = ['initial', 'small', 'medium', 'large', 'large'] as const;
