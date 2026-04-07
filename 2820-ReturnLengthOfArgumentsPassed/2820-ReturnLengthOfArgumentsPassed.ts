// Last updated: 4/8/2026, 2:05:17 AM
type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };

function argumentsLength(...args: JSONValue[]): number {
	return args.length
};

/**
 * argumentsLength(1, 2, 3); // 3
 */