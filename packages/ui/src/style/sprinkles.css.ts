import {
	ConditionalValue,
	RequiredConditionalValue,
	defineProperties,
	createSprinkles,
	createMapValueFn,
	createNormalizeValueFn,
} from '@vanilla-extract/sprinkles';

import { breakpoints, breakpointNames, Breakpoint } from './breakpoints';
import { colorProperties, responsiveProperties, unresponsiveProperties } from './atomicProperties';

const hover = { selector: '&:hover:where(:not(:active))' } as const;
const focus = { selector: '&:focus' } as const;
const active = { selector: '&:active' } as const;

const interaction = { hover, focus, active } as const;

const unresponsiveAtomicProperties = defineProperties({
	properties: unresponsiveProperties,
});

const responsiveAtomicProperties = defineProperties({
	defaultCondition: 'initial',
	conditions: {
		initial: {},
		small: {
			'@media': `screen and (min-width: ${breakpoints.small}px)`,
		},
		medium: {
			'@media': `screen and (min-width: ${breakpoints.medium}px)`,
		},
		large: {
			'@media': `screen and (min-width: ${breakpoints.large}px)`,
		},
		xlarge: {
			'@media': `screen and (min-width: ${breakpoints.xlarge}px)`,
		},
	},
	responsiveArray: breakpointNames,
	properties: responsiveProperties,
	shorthands: {
		padding: ['paddingTop', 'paddingRight', 'paddingBottom', 'paddingLeft'],
		paddingBlock: ['paddingTop', 'paddingBottom'],
		paddingInline: ['paddingRight', 'paddingLeft'],
		marginBlock: ['marginTop', 'marginBottom'],
		marginInline: ['marginRight', 'marginLeft'],
		radii: ['borderRadius'],
	},
});

const colorAtomicProperties = defineProperties({
	defaultCondition: 'initial',
	conditions: {
		initial: {},
		...interaction,
	},
	properties: colorProperties,
});

export const sprinkles = createSprinkles(
	unresponsiveAtomicProperties,
	responsiveAtomicProperties,
	colorAtomicProperties
);
export type Sprinkles = Parameters<typeof sprinkles>[0];

export type OptionalResponsiveValue<Value extends string | number> = ConditionalValue<
	typeof responsiveAtomicProperties,
	Value
>;
export type RequiredResponsiveValue<Value extends string | number> = RequiredConditionalValue<
	typeof responsiveAtomicProperties,
	Value
>;

export type RequiredResponsiveObject<Value> = Partial<Record<Breakpoint, Value>> &
	Record<typeof breakpointNames[0], Value>;

export const normalizeResponsiveValue = createNormalizeValueFn(responsiveAtomicProperties);
export const mapResponsiveValue = createMapValueFn(responsiveAtomicProperties);
