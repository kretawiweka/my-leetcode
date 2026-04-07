// Last updated: 4/8/2026, 2:05:19 AM
type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Obj = Record<string, JSONValue> | Array<JSONValue>

/**
if val1 === val2 => {}

if type of val1 !== obj || val2 !== obj => return [val1, val2]
*/

function objDiff(obj1: Obj, obj2: Obj): Obj {
	const getObjDiff = (val1, val2) => {
	    if (val1 === val2) return {}
	    if (val1 === null || val2 === null) return [val1, val2]
	    if (typeof val1 !== 'object' || typeof val2 !== 'object') return [val1, val2]
	    if (Array.isArray(val1) !== Array.isArray(val2)) return [val1, val2]

	    const returnObj = {}

	    for (const key in val1) {
	        if (key in val2) {
	            const diffObj = getObjDiff(val1[key], val2[key])
	            if (!!Object.keys(diffObj).length) {
	                returnObj[key] = diffObj
	            }
	        }
	    }

        return returnObj
	}

	return getObjDiff(obj1, obj2)
};
